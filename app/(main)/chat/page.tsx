'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
    id: number
    text: string
    sender: 'user' | 'bot'
}

const ChatView = () => {
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Hello! How can I help you today?", sender: 'bot' }
    ])
    const [inputValue, setInputValue] = useState('')

    const handleSendMessage = () => {
        if (inputValue.trim() !== '') {
            const newMessage: Message = {
                id: messages.length + 1,
                text: inputValue,
                sender: 'user'
            }
            setMessages([...messages, newMessage])
            setInputValue('')

            // Simulate bot response
            setTimeout(() => {
                const botResponse: Message = {
                    id: messages.length + 2,
                    text: "Thanks for your message. I'm a demo bot.",
                    sender: 'bot'
                }
                setMessages(prevMessages => [...prevMessages, botResponse])
            }, 1000)
        }
    }

    return (
        <div className="flex flex-col h-[600px] max-w-md mx-auto border rounded-lg overflow-hidden">
            <ScrollArea className="flex-grow p-4">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'
                            }`}
                    >
                        <span
                            className={`inline-block p-2 rounded-lg ${message.sender === 'user'
                                    ? 'bg-sky-500 text-white'
                                    : 'bg-gray-200 text-gray-800'
                                }`}
                        >
                            {message.text}
                        </span>
                    </div>
                ))}
            </ScrollArea>
            <div className="border-t p-4 flex">
                <Input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-grow mr-2"
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleSendMessage()
                        }
                    }}
                />
                <Button onClick={handleSendMessage}>Send</Button>
            </div>
        </div>
    )
};

export default  ChatView;