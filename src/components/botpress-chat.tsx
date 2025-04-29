"use client"; // Ensure this is a client component

import { useState, useEffect, useRef } from 'react';
import {
  type Configuration,
  Webchat,
  WebchatProvider,
  getClient,
} from '@botpress/webchat';
import { Button } from '@/components/ui/button'; // Use shadcn Button
import { MessageSquare } from 'lucide-react'; // Use lucide icon

// Define Botpress integration details
const clientId = 'ae9d16b8-77e5-4d77-b5d3-9f8ba18ae3a6'; // Replace with your actual Botpress Client ID
const botId = 'YOUR_BOT_ID'; // Replace with your Botpress Bot ID if needed for specific config

const configuration: Configuration = {
  // Customize Botpress webchat appearance and behavior here
  // Example: Change colors to match the theme
  // primaryColor: '#2563eb', // Example: Blue (adjust HSL if using theme vars)
  // backgroundColor: '#ffffff', // Example: White
  // textColorOnBackground: '#000000', // Example: Black
  // You can map theme variables here if needed, but ensure they are accessible client-side
  // For simplicity, hardcoding or using basic colors might be easier initially.
  botName: 'OptiAssist',
  avatarUrl: '', // Optional: URL to the bot's avatar
  botConversationDescription: 'Your AI-powered virtual assistant for Optitech Solutions.',
  // Add other configuration options as needed: https://botpress.com/docs/cloud/webchat/customization
};

// Ensure the component is exported as default if it's the main export
export function BotpressChat() {
  const [isClient, setIsClient] = useState(false);
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);
  const clientRef = useRef<any>(null); // Use useRef to hold the client instance

  useEffect(() => {
    // Ensure client-side execution
    setIsClient(true);
    // Initialize the client only once
    if (!clientRef.current) {
       try {
         clientRef.current = getClient({
           clientId: clientId,
           // botId: botId, // Uncomment if needed
         });
       } catch (error) {
         console.error("Failed to initialize Botpress client:", error);
         // Handle initialization error (e.g., show a message)
       }
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };

  // Render null or a placeholder during server-side rendering or before client is ready
  if (!isClient || !clientRef.current) {
    return null; // Or a loading indicator
  }

  return (
    // Use WebchatProvider to provide the client and configuration
    <WebchatProvider client={clientRef.current} configuration={configuration}>
      {/* Chat Toggle Button (Fab) */}
      <Button
        variant="default" // Or choose another variant like 'secondary', 'outline'
        size="icon"
        onClick={toggleWebchat}
        className="fixed bottom-4 right-4 rounded-full shadow-lg z-50 w-14 h-14 bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90"
        aria-label={isWebchatOpen ? 'Close Chat' : 'Open Chat'}
      >
        {isWebchatOpen ? (
          // Optional: Change icon when open, e.g., X icon
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
          <MessageSquare className="w-6 h-6" />
        )}
      </Button>

      {/* Webchat Window */}
      {isWebchatOpen && (
        <div
          className="fixed bottom-[calc(4rem+1rem)] right-4 z-50 rounded-lg shadow-xl overflow-hidden border border-border"
          style={{ width: '370px', height: 'min(70vh, 550px)' }} // Adjust size as needed
        >
           {/* Render Webchat component only when client is available */}
           <Webchat />
        </div>
      )}
    </WebchatProvider>
  );
}

// Make it the default export if necessary for dynamic loading or other use cases
export default BotpressChat;
