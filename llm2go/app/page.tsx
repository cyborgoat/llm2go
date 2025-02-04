'use client'
import {Textarea} from "@/components/ui/textarea"
import {useState} from "react";
import {Button} from "@/components/ui/button";

export default function Home() {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState<string>('');

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, input]);
            setInput('');
        }
    };
    return (
        <div className="items-center justify-items-center px-4 my-4">
            <main className="h-screen flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <div className="h-[70vh]">
                    {messages.map((msg, index) => (
                        <div key={index}>{msg}</div>
                    ))}
                </div>
                <div className="flex flex-col h-[30vh] w-full gap-y-4">
                    <Textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder={"Enter your text here"}>
                    </Textarea>
                    <Button onClick={handleSend}>Send message</Button>
                </div>


            </main>
        </div>
    );
}
