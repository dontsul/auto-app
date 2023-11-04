"use client";
import {MouseEventHandler, useState} from 'react';
import MessagesList from './MessageList';
import MessageForm from './MessageForm';
import { Button } from "../button/Button";
import { MessagesProvider } from "@/utils/useMessages";
import { ButtonUpScroll } from "@/components/buttonUpScroll/ButtonUpScroll";

const MyChat = () => {
    const [isChatOpen, setChatOpen] = useState(false);

    const toggleChat = () => {
        setChatOpen(!isChatOpen);
    };

    const closeIconClick: MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation();
        setChatOpen(false);
    };

    return (
        <div className="z-20 fixed justify-between mb-20 bottom-10 right-4">
            <div className="flex items-center justify-between">
                <Button type="submit" outline={false} handleClick={toggleChat}>
                    Toggle Chat
                </Button>
                <ButtonUpScroll />
            </div>
            {isChatOpen && (
                <div className="bg-slate-50  mb-40 fixed bottom-4 right-4 w-90   p-4  rounded-md shadow-lg hover:shadow-2xl transition duration-200">
                    {/*<div className="p-10  lg:p-14 border-[#111827] rounded-md shadow-lg hover:shadow-2xl transition duration-200  ">*/}

                    <div className="text-right cursor-pointer" onClick={closeIconClick}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </div>
                    <MessagesProvider>
                        <div className="max-h-80  overflow-y-auto">
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
