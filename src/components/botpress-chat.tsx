"use client";

import { useEffect } from 'react';
import { Button } from './ui/button';
import { MessageSquare } from 'lucide-react';

export function BotpressChat() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
       if (window.botpressWebChat) {
            window.botpressWebChat.init({
              // --- Required ---
              "composerPlaceholder": "Chat with OptiAssist", // Placeholder text in the chat input
              "botConversationDescription": "Your AI assistant for Optitech services", // Description shown in the header
              "botId": "YOUR_BOTPRESS_BOT_ID", // Replace with your Botpress Bot ID
              "hostUrl": "https://cdn.botpress.cloud/webchat/v1", // Botpress hosting URL
              "messagingUrl": "https://messaging.botpress.cloud", // Botpress messaging URL

              // --- Optional ---
              "clientId": "YOUR_BOTPRESS_CLIENT_ID", // Replace with your Botpress Client ID (often same as Bot ID)
              "botName": "OptiAssist", // Name displayed in the chat header
              // "avatarUrl": "URL_TO_YOUR_BOT_AVATAR", // Optional: URL for the bot's avatar
              // "phoneNumber": "+15551234567", // Optional: Phone number displayed
              "stylesheet": "https://webchat-styler-widgets.botpress.app/prod/7b1f1c5f-0c0a-4a0e-8a32-0c5a832d5b2d/v40338/style.css", // Optional: Link to custom CSS (if any)
              // Styling adjustments (match theme)
              "frontendVersion": "v1",
              "useSessionStorage": true, // Persist chat across page refreshes
              "enableConversationDeletion": true, // Allow users to delete conversation history

              // Theme Colors (Adjust based on globals.css)
              "brandColor": "hsl(221, 83%, 53%)", // Primary blue
              "conversationColor": "hsl(173, 58%, 39%)", // Secondary teal
              "buttonBackgroundColor": "hsl(221, 83%, 53%)",
              "buttonTextColor": "hsl(0, 0%, 98%)",
              "headerBackgroundColor": "hsl(221, 83%, 53%)",
              "headerTextColor": "hsl(0, 0%, 98%)",

              // Customization
              "hideWidget": true, // Hide the default launcher, we use our own
              "disableAnimations": false,
              "closeOnEscape": true,
              "showConversationsButton": false, // Hide the default conversations button if not needed
              "enableTranscriptDownload": true, // Allow users to download chat transcript
            });

            // Ensure the chat stays hidden initially until our button is clicked
             window.botpressWebChat.onEvent(
                () => {
                  window.botpressWebChat.sendEvent({ type: 'hide' })
                },
                ['LIFECYCLE.LOADED']
             )

       } else {
           console.error("Botpress WebChat not loaded");
       }
    };

    return () => {
      // Clean up the script when the component unmounts
       const existingScript = document.querySelector(
         'script[src="https://cdn.botpress.cloud/webchat/v1/inject.js"]'
       );
       if (existingScript) {
         document.body.removeChild(existingScript);
       }
       // Also remove the webchat container if it exists
       const webchatContainer = document.getElementById('botpress-webchat-container');
        if (webchatContainer) {
            webchatContainer.remove();
        }
    };
  }, []);

  const toggleChat = () => {
    if (window.botpressWebChat) {
      window.botpressWebChat.sendEvent({ type: 'toggle' });
    } else {
        console.error("Botpress WebChat not available to toggle.")
    }
  };

  return (
     <Button
        aria-label="Open Chat"
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full p-0 shadow-lg bg-gradient-to-br from-primary to-secondary text-primary-foreground hover:opacity-90 transition-opacity"
        >
        <MessageSquare className="h-7 w-7" />
     </Button>
  );
}

// Add Botpress types to the global window interface
declare global {
  interface Window {
    botpressWebChat?: {
      init: (config: BotpressConfig) => void;
      sendEvent: (event: { type: string, payload?: any }) => void;
      onEvent: (callback: (event: any) => void, eventTypes?: string[]) => void;
    };
  }
}

// Define a basic type for the Botpress config
interface BotpressConfig {
  composerPlaceholder?: string;
  botConversationDescription?: string;
  botId: string;
  hostUrl: string;
  messagingUrl: string;
  clientId: string;
  botName?: string;
  avatarUrl?: string;
  phoneNumber?: string;
  stylesheet?: string;
  brandColor?: string;
  conversationColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  headerBackgroundColor?: string;
  headerTextColor?: string;
  // Add other relevant config options based on Botpress documentation
   frontendVersion?: string;
   useSessionStorage?: boolean;
   enableConversationDeletion?: boolean;
   hideWidget?: boolean;
   disableAnimations?: boolean;
   closeOnEscape?: boolean;
   showConversationsButton?: boolean;
   enableTranscriptDownload?: boolean;
}

