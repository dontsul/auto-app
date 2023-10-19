import { useToast } from '@apideck/components';
import { ChatCompletionRequestMessage } from 'openai';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import stringSimilarity from 'string-similarity';
import sendMessage from './sendMessage';
import {FAQDatabase} from "@/data/chatEdid/messagesData";

interface ContextProps {
  messages: ChatCompletionRequestMessage[];
  addMessage: (content: string) => Promise<void>;
  isLoadingAnswer: boolean;
}

const ChatsContext = createContext<ContextProps | undefined>(undefined);

const generateFreeTextResponse = async (content: string) => {
  try {
    // Пошук в базі даних питань і відповідей
    const userQuestion = content.toLowerCase();
    const matchingFAQ = FAQDatabase.find(entry => entry.question.toLowerCase() === userQuestion);

    if (matchingFAQ) {
      // Якщо є точний відповідник в базі даних, повернути його
      return matchingFAQ.answer;
    } else {
      // Якщо немає точного відповідника, використовуйте AI для генерації відповіді
      const response = await sendMessage([{ role: 'user', content }]);

      // Отримання відповіді від AI
      const botResponse = response.data?.choices[0]?.message;

      if (botResponse) {
        return botResponse;
      } else {
        // Забезпечення загальної відповіді в разі відсутності інших варіантів
        return "Sorry, I couldn't provide an answer at the moment.";
      }
    }
  } catch (error) {
    // Обробка помилки та надання загальної відповіді
    return "Sorry, I couldn't provide an answer at the moment.";
  }
};



export function MessagesProvider({ children }: { children: ReactNode }) {
  const { addToast } = useToast();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false);

  useEffect(() => {
    const initializeChat = () => {
      const systemMessage: ChatCompletionRequestMessage = {
        role: 'system',
        content: 'You are ChatGPT, a large language model trained by OpenAI.'
      };
      const welcomeMessage: ChatCompletionRequestMessage = {
        role: 'assistant',
        content: 'Hi, How can I help you today?'
      };
      setMessages([systemMessage, welcomeMessage]);
    }

    // When no messages are present, we initialize the chat with the system message and the welcome message
    // We hide the system message from the user in the UI
    if (!messages.length) {
      initializeChat();
    }
  }, [messages, setMessages]);

  const addMessage = async (content: string) => {
    setIsLoadingAnswer(true);
    try {
      const newMessage: ChatCompletionRequestMessage = {
        role: 'user',
        content
      };
      const newMessages = [...messages, newMessage];

      // Add the user message to the state so we can see it immediately
      setMessages(newMessages);

      // Search for the best answer in the database
      const userQuestion = content.toLowerCase();

      // Create an array to store potential answers
      const potentialAnswers: ChatCompletionRequestMessage[] = [];

      for (const faqEntry of FAQDatabase) {
        const question = faqEntry.question.toLowerCase();
        const similarity = stringSimilarity.compareTwoStrings(userQuestion, question);

        if (similarity > 0.4) {
          // Create a ChatCompletionRequestMessage from FAQ data
          const faqMessage: ChatCompletionRequestMessage = {
            role: 'assistant',
            content: faqEntry.answer
          };
          potentialAnswers.push(faqMessage);
        }
      }

      if (potentialAnswers.length > 0) {
        // If there are potential answers, send one of them
        const replyMessage = potentialAnswers[Math.floor(Math.random() * potentialAnswers.length)];
        setMessages([...newMessages, replyMessage]);
      } else {
        // If no answer is found in the database, send a request to generate a free-text response
        const freeTextResponse = await generateFreeTextResponse(content);
        setMessages([...newMessages, freeTextResponse]);
      }
    } catch (error) {
      // Show an error in case of issues
      addToast({ title: 'An error occurred', type: 'error' });
    } finally {
      setIsLoadingAnswer(false);
    }
  }

  return (
      <ChatsContext.Provider value={{ messages, addMessage, isLoadingAnswer }}>
        {children}
      </ChatsContext.Provider>
  )
}

export const useMessages = () => {
  const context = useContext(ChatsContext);
  if (context === undefined) {
    throw new Error('useMessages must be used within a MessagesProvider');
  }
  return context;
}
