import { SafeHtml } from "@angular/platform-browser";

export interface Message {
    sender: 'user' | 'bot';
    text: string | SafeHtml;
    time?: string; // Optional field for the message timedfsd
  }
