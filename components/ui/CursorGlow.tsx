"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener(
            "mousemove",
            move
        );

        return () =>
            window.removeEventListener(
                "mousemove",
                move
            );
    }, []);

    return (
        <div
            className="
      pointer-events-none
      fixed
      z-0
      h-[400px]
      w-[400px]
      rounded-full
      bg-cyan-500/10
      blur-[120px]
      transition-all
      duration-200
      "
            style={{
                left: position.x - 200,
                top: position.y - 200,
            }}
        />
    );
}