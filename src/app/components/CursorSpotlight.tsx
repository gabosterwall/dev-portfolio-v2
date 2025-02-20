"use client";

import { useEffect, useState } from "react";

export default function CursorSpotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  return (
    <div
      className="hidden md:flex fixed pointer-events-none inset-0"
      style={{
        background: `radial-gradient(300px at ${position.x}px ${position.y}px, rgba(8, 32, 75, 0.8), transparent 200%)`,
      }}
    />
  );
}