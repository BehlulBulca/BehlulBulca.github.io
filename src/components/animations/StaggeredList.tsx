"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";

interface StaggeredListProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export function StaggeredList({ children, className = "", delay = 0 }: StaggeredListProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Select immediate children
        const elements = containerRef.current.children;

        anime({
            targets: elements,
            opacity: [0, 1],
            translateY: [20, 0],
            delay: anime.stagger(100, { start: delay }),
            easing: "easeOutQuad",
            duration: 800,
        });
    }, [delay]);

    return (
        <div ref={containerRef} className={className}>
            {children}
        </div>
    );
}
