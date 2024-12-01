"use client";

import { WhatsAppChatDemo } from "./WhatsAppChatDemo ";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center mt-[100px] gap-5 mb-5">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl px-4 gap-8">
        <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Your Personal WhatsApp File Vault
          </h1>
          <p className="text-xl text-gray-600">
            Save, share, and convert any file type directly through WhatsApp.
            Access your content anytime, anywhere with our intelligent bot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full mx-auto lg:mx-0">
            <Input
              type="tel"
              placeholder="Enter your WhatsApp number"
              className="h-12"
            />
            <Button
              className="bg-black h-12 px-8 text-white text-md font-semibold"
              onClick={() =>
                window.open(`https://wa.me/+14155238886`, "_blank")
              }
            >
              Chat with our bot
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <WhatsAppChatDemo />
        </div>
      </div>
    </div>
  );
}
