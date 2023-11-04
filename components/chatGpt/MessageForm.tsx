"use client";

import { TextArea } from '@apideck/components'
import { useState } from 'react'
import {useMessages} from "@/utils/useMessages";
import {ChatButton} from "@/components/chatGpt/ChatButton";


const MessageForm = () => {
  const [content, setContent] = useState('')
  const { addMessage } = useMessages()
  const [text, setText] = useState('');

  const handleButtonClick = () => {
    setText('');
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    await addMessage(content)
    setContent('')
  }

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
      <form className="relative mx-auto max-w-3xl rounded-t-xl" onSubmit={handleSubmit}>
        <div className=" bg-slate-50  border-gray-200 h-[130px] rounded-t-xl backdrop-blur border-t border-l border-r border-gray-500/10 dark:border-gray-50/[0.06]  supports-backdrop-blur:bg-white/95 p-5">

          <label htmlFor="content" className="sr-only">
            Your message
          </label>
          <TextArea
              name="content"
              placeholder="Enter your message here..."
              rows={3}
              value={content}
              autoFocus
              className="!p-3 text-gray-900 border-0 ring-1 dark:ring-0 ring-gray-300/40 focus:ring-gray-300/80 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800/80 backdrop-blur shadow-none"
              onChange={(e: any) => setContent(e.target.value)}
              onKeyDown={handleKeyDown}
          />
          <div className=" bg-slate-50  absolute right-8 bottom-10">
            <div className="flex space-x-3">
              <ChatButton type="submit" outline={false} >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className=" w-4 h-4 ml-1"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </ChatButton>
            </div>
          </div>
        </div>
      </form>
  )
}

export default MessageForm;
