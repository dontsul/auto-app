import { useToast } from '@apideck/components';
import { ChatCompletionRequestMessage } from 'openai';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import stringSimilarity from 'string-similarity';
import sendMessage from './sendMessage';
import {FAQDatabase, MessageCategory} from "@/data/chatEdid/messagesData";


interface ContextProps {
  messages: ChatCompletionRequestMessage[];
  addMessage: (content: string) => Promise<void>;
  isLoadingAnswer: boolean;
}

const ChatsContext = createContext<ContextProps | undefined>(undefined);

export function MessagesProvider({ children }: { children: ReactNode }) {
  const { addToast } = useToast();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false);

  useEffect(() => {
    // Ініціалізація чату
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

      setMessages(newMessages);

      const userQuestion = content.toLowerCase();

      const potentialAnswers: ChatCompletionRequestMessage[] = [];

      for (const faqEntry of FAQDatabase) {
        const question = faqEntry.question.toLowerCase();
        const similarity = stringSimilarity.compareTwoStrings(userQuestion, question);

        if (similarity > 0.4) {
          const faqMessage: ChatCompletionRequestMessage = {
            role: 'assistant',
            content: faqEntry.answer
          };
          potentialAnswers.push(faqMessage);
        }
      }

      if (potentialAnswers.length > 0) {
        // Виберіть випадкову відповідь зі списку
        const replyMessage = potentialAnswers[Math.floor(Math.random() * potentialAnswers.length)];
        setMessages([...newMessages, replyMessage]);
      } else {
        // Перевірте, до якої категорії відноситься питання користувача
        const userCategory = determineCategory(userQuestion);

        if (userCategory) {
          // Відповідь відповідно до категорії
          const categoryAnswer = getCategoryAnswer(userCategory);
          if (categoryAnswer) {
            setMessages([...newMessages, categoryAnswer]);
          } else {
            // Отримайте відповідь від AI в контексті, якщо немає визначеної категорії
            const botResponse = await sendMessage([{ role: 'user', content }]);
            const botMessage = botResponse.data?.choices[0]?.message;

            if (botMessage) {
              setMessages([...newMessages, botMessage]);
            } else {
              const defaultResponse: ChatCompletionRequestMessage = {
                role: 'assistant',
                content: "Sorry, I couldn't provide an answer at the moment. Please fill out the form below, and an operator will contact you shortly."
              };
              setMessages([...newMessages, defaultResponse]);
            }
          }
        } else {
          // Отримайте відповідь від AI в контексті, якщо не вдалося визначити категорію
          const botResponse = await sendMessage([{ role: 'user', content }]);
          const botMessage = botResponse.data?.choices[0]?.message;

          if (botMessage) {
            setMessages([...newMessages, botMessage]);
          } else {
            const defaultResponse: ChatCompletionRequestMessage = {
              role: 'assistant',
              content: "Sorry, I couldn't provide an answer at the moment. Please fill out the form below, and an operator will contact you shortly."
            };
            setMessages([...newMessages, defaultResponse]);
          }
        }
      }
    } catch (error) {
      // Показати помилку в разі проблем
      addToast({ title: 'An error occurred', type: 'error' });
    } finally {
      setIsLoadingAnswer(false);
    }
  }

  function determineCategory(userQuestion: string): string | null {
    userQuestion = userQuestion.toLowerCase();
    for (const category of messageCategories) {
      for (const variation of category.variations) {
        if (userQuestion.includes(variation)) {
          return category.category;
        }
      }
    }
    return null;
  }


  function getCategoryAnswer(category: string): ChatCompletionRequestMessage | null {
    for (const faqEntry of FAQDatabase) {
      if (faqEntry.question.toLowerCase().includes(category.toLowerCase())) {
        const categoryAnswer: ChatCompletionRequestMessage = {
          role: 'assistant',
          content: faqEntry.answer
        };
        return categoryAnswer;
      }
    }
    return null;
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
const messageCategories: MessageCategory[] = [
  {
    category: "ppf",
    variations: ["ppf", "paint protection film", "clear bra"]
  },
  {
    category: "hitches",
    variations: ["hitches", "towing"]
  },
  {
    category: "rust prevention",
    variations: ["rust prevention", "eco clear coating", "waxoyl hardwax"]
  },
];
