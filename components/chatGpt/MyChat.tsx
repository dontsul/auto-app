"use client";
import { useState } from 'react';
import MessagesList from './MessageList';
import MessageForm from './MessageForm';
import { MessagesProvider } from "@/utils/useMessages";
import { Button } from "../button/Button";

const MyChat = () => {
    const [isChatOpen, setChatOpen] = useState(false);

    const toggleChat = () => {
        setChatOpen(!isChatOpen);
    };

    return (
        <div className="fixed mb-16 bottom-4 right-4">
            <Button type="submit"
                    outline={false}
                    handleClick={toggleChat} >
                Toggle Chat
            </Button>

            {isChatOpen && (
                <div className="mb-20 fixed bottom-4 right-4 w-80  bg-white shadow-md p-4 rounded">
                    <MessagesProvider>
                        <div className="max-h-80 overflow-y-auto">
                            <MessagesList />
                        </div>
                        <MessageForm />
                    </MessagesProvider>
                </div>
            )}
        </div>
    );
};

export default MyChat;
