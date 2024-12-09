'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useChat } from 'ai/react';
import { Loader } from "lucide-react";
import Image from "next/image";



const ChatView = () => {
    const {
        messages, input,
        handleInputChange,
        handleSubmit,
        isLoading, stop } = useChat({});

    return (
        <div className="flex flex-col h-[600px] max-w-md mx-auto border rounded-lg overflow-hidden">

            <div className="space-y-2.5 flex items-center w-full  bg-gray-500 p-5 text-white ">
                <Image
                    className="mr-3"
                    src="/cyberbot.svg"
                    alt="cyberbot"
                    height={32}
                    width={32} />
                CyberBuddy
            </div>

            <ScrollArea className="flex-grow p-4">

                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'
                            }`}
                    >
                        <span
                            className={`inline-block p-2 rounded-lg ${message.role === 'user'
                                ? 'bg-sky-500 text-white'
                                : 'bg-gray-200 text-gray-800'
                                }`}
                        >
                            {message.content}
                        </span>
                    </div>
                ))}
                {isLoading && (
                    <div>
                        <Loader className="h-6 w-6 text-muted-foreground animate-spin" />
                        <Button type="button" onClick={() => stop()}>
                            Stop
                        </Button>
                    </div>
                )}

            </ScrollArea>
            <form onSubmit={handleSubmit} className="border-t p-4 flex">
                <Input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type a message..."
                    className="flex-grow mr-2"
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleInputChange
                        }
                    }}
                />
                <Button type="submit">Send</Button>
            </form>
        </div>
    )
};

export default ChatView;