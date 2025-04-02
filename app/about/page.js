"use client";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-400">About Me</h1>
        <p className="text-lg text-gray-300 mt-2">
          A passionate web developer eager to learn and grow.
        </p>
      </header>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:max-w-4xl mx-auto">
        {/* Left Section: Profile Image */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/github.svg"
            alt="Profile Picture"
            className="w-40 h-40 rounded-full border-4 border-yellow-400 mb-4"
          />
          <p className="text-xl font-semibold text-yellow-400">Varun</p>
        </div>

        {/* Right Section: Description */}
        <div className="max-w-xl text-center md:text-left">
          <p className="text-xl text-gray-200 mb-4">
            Hi, I&apos;m a beginner web developer with a passion for creating dynamic and responsive websites. My journey in web development started recently, and I am constantly learning new technologies to improve my skills.
          </p>

          <p className="text-lg text-gray-400 mb-4">
            I love working with HTML, CSS, JavaScript, and React. I&apos;m also excited to explore other web development tools and frameworks as I grow in my career.
          </p>

          <p className="text-lg text-gray-400 mb-4">
            If you want to collaborate or just chat about web development, feel free to reach out. I am always open to learning from others and sharing my experiences.
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-16 text-center">
        <p className="text-gray-500">© 2025 Varun. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
