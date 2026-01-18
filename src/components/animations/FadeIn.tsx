"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "none";
}

export function FadeIn({ children, className = "", delay = 0, direction = "up" }: FadeInProps) {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!elementRef.current) return;

        const translateY = direction === "up" ? [20, 0] : direction === "down" ? [-20, 0] : 0;

        anime({
            targets: elementRef.current,
            opacity: [0, 1],
            translateY: translateY,
            delay: delay,
            easing: "easeOutQuad",
            duration: 800,
        });
    }, [delay, direction]);

    // Initial opacity 0 to prevent flash
    return (
        <div ref={elementRef} className={className} style={{ opacity: 0 }}>
            {children}
        </div>
    );
}
