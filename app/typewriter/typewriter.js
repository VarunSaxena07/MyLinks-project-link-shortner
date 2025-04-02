"use client";
import React, { useState, useEffect } from "react";

const Typewriter = () => {
  const texts = [
    "Privacy First",
    "Secure & Encrypted",
    "No Login Required",
    "No Tracking",
    "Full Control",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 150; // Adjust speed
    const delay = isDeleting ? 300 : 1000; // Delay before deleting

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < texts[index].length) {
        setText((prev) => prev + texts[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          setTimeout(() => setIsDeleting(true), delay);
        } else {
          setIndex((prev) => (prev + 1) % texts.length);
          setCharIndex(0);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index, texts]);

  return (
    <div className="flex justify-center items-center  text-white text-2xl font-bold">
      <span>{text}</span>
      <span className="animate-blink">|</span>
    </div>
  );
};

export default Typewriter;
