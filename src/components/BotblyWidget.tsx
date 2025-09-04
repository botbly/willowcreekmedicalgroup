import { useEffect } from "react";

const WIDGET_ID = "botbly-widget-script";

export function BotblyWidget() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (document.getElementById(WIDGET_ID)) return;
    if ((window as any).__botblyLoaded) return;

    (window as any).botblySettings = {
        botId: import.meta.env.VITE_BOTBLY_BOT_ID,
        botName: import.meta.env.VITE_BOTBLY_BOT_NAME,
        primaryColor: '#115E59',
        accentColor: '#115E59',
        initialGreeting: 'Hi! Nice to have you here! How can I help you?',
        enableSounds: true,
        enableSuggestions: true,
        launcherIcon: 'message-circle',
        launcherIconSize: 32
    };

    const s = document.createElement("script");
    s.id = WIDGET_ID;
    s.src = import.meta.env.VITE_BOTBLY_WIDGET_URL ||
      "https://cdn.jsdelivr.net/gh/botbly/widget-public@main/botbly-widget.js";
    s.async = true;
    s.onload = () => {
      (window as any).__botblyLoaded = true;
      (window as any).botblyWidget?.create?.();
    };
    document.body.appendChild(s);
  }, []);

  return null;
}