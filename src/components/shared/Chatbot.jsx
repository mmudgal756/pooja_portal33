"use client";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MessageSquare } from "lucide-react";
import PujaQuestion from "./PujaQuestion";

export default function Chatbot() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="default"
                    size="icon"
                    className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg"
                >
                    <MessageSquare className="h-6 w-6" />
                    <span className="sr-only">Open Chat</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 sm:w-96 mr-4 mb-2" side="top" align="end">
                <PujaQuestion />
            </PopoverContent>
        </Popover>
    )
}
