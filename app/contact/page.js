"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const contact = () => {
  return (
    <div className="mx-auto flex justify-center items-center min-h-[85vh] bg-gray-900">
  <div className="card w-80 h-96 my-6 px-6 py-8 border-2 border-gray-700 rounded-3xl flex flex-col justify-center items-center gap-y-6 font-semibold text-white bg-gray-800 shadow-xl transition-transform duration-300 hover:scale-105">
    <Image
      src="/github.svg"
      width={80}
      height={80}
      alt="GitHub Logo"
      className="invert-100 animate-pulse"
    />
    <p className="text-center text-gray-300 text-sm">
      &quot;I&apos;m a beginner in web development eager to learn and grow. My GitHub profile is a work in progress, and I&apos;m excited to connect with the web dev community. Feel free to reach out and collaborate!&quot;
    </p>
    <Link target="_blank" href="https://github.com/VarunSaxena07">
      <button className="bg-amber-500 text-gray-900 px-6 py-2 rounded-lg shadow-lg transition-all duration-300 transform hover:bg-amber-400 hover:scale-110 active:scale-95">
        GitHub
      </button>
    </Link>
  </div>
</div>

  );
};

export default contact;
