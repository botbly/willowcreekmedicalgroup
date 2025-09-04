import { useEffect, useState } from "react";
import { sendToBot } from "../lib/botbly";

type Props = {
    initialDelay?: number;
    desktopMessage?: string;
    mobileMessage?: string;
    ctaDesktop?: string;
    ctaMobile?: string;
    storageKey?: string;
};

export default function BotblyNudge({
    initialDelay = 1400,
    desktopMessage = "The chat is open. Ask about hours, services, or booking.",
    mobileMessage = "Tap the chat button to start. Ask about hours, services, or appointments.",
    ctaDesktop = "Try it now",
    ctaMobile = "Got it",
    storageKey = "bb_center_nudge_dismissed"
}: Props) {
    const [show, setShow] = useState(false);
    const isMobile = typeof navigator !== "undefined" && /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);

    useEffect(() => {
        if (sessionStorage.getItem(storageKey)) return;
        const id = window.setTimeout(() => setShow(true), initialDelay);
        return () => clearTimeout(id);
    }, [initialDelay, storageKey]);

    if (!show) return null;

    const dismiss = () => {
        sessionStorage.setItem(storageKey, "1");
        setShow(false);
    };

    const onPrimary = () => {
        dismiss();
        if (!isMobile) sendToBot("Hi, can I schedule an appointment for next Monday morning?");
    };

    return (
        <div className="fixed inset-0 z-[2147483647] flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative bg-white rounded-2xl shadow-2xl w-[92%] max-w-md sm:max-w-lg p-5 sm:p-6 text-center">
                <h3 className="text-lg sm:text-2xl font-semibold text-gray-900">The assistant is ready to test</h3>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600">
                    {isMobile ? mobileMessage : desktopMessage}
                </p>
                <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2 sm:gap-3">
                    <button
                        className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-teal-600 text-white text-sm sm:text-base font-medium hover:bg-teal-700"
                        onClick={onPrimary}
                    >
                        {isMobile ? ctaMobile : ctaDesktop}
                    </button>
                    <button
                        className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg border text-sm sm:text-base hover:bg-gray-50"
                        onClick={dismiss}
                    >
                        Later
                    </button>
                </div>
            </div>
        </div>
    );
}
