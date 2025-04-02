import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[85vh] flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white p-4">
      <section className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl shadow-lg rounded-xl overflow-hidden">
        <div className="flex flex-col justify-center items-center p-10 text-center">
          <h1 className="text-4xl font-bold text-gray-200 mb-4">
            Best URL Shortner
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            "Shorten, manage, and track your URLs effortlessly with our fast,
            secure, and user-friendly short URL service. Optimize sharing
            today!"
          </p>
        </div>
        <div className=" flex justify-center items-center relative h-[50vh] md:h-[80vh]">
          <Image
            src="/url.svg"
            fill={true}
            alt="Illustration"
            className="object-cover"
          />
        <Link href="/shorten"> <button className="bg-gray-900 text-white px-6 py-2 rounded-lg shadow-lg transition-all duration-300 transform hover:bg-gray-700 hover:scale-105 active:scale-95">
            Try Now
          </button></Link>

          <Link target="_blank" href="https://github.com/VarunSaxena07"><button className="bg-gray-800 text-white px-6 py-2 mx-2 rounded-lg shadow-lg transition-all duration-300 transform hover:bg-gray-600 hover:scale-105 active:scale-95">
            GitHub
          </button></Link>
        </div>
      </section>
    </main>
  );
}
