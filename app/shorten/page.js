"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";

const Shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setgenerated] = useState("");
  const [error, setError] = useState(""); // New state for error messages

  const generate = () => {
    // Check if URL or Short URL is empty
    if (!url || !shorturl) {
      setError("Both fields are required!"); // Show error if any field is empty
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        seturl("");
        setshorturl("");
        setError(""); // Clear error if successful
        console.log(result);
        toast("URL Generated Successfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((error) => {
        console.error(error);
        setError("Something went wrong. Please try again!"); // Handle errors
      });
  };

  return (
    <div className="flex flex-col md:mx-auto items-center max-w-lg bg-gradient-to-r from-purple-600 to-indigo-600 p-8 rounded-2xl shadow-2xl text-white mx-10 my-4">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <h1 className="text-3xl font-bold mb-6">Generate Your Short URLs</h1>

      <div className="flex flex-col w-full">
        <input
          type="text"
          value={url}
          className="p-4 bg-white bg-opacity-20 text-black rounded-lg backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-purple-300 w-full my-2 shadow-md placeholder-gray/80"
          placeholder="Enter your long URL"
          onChange={(e) => {
            seturl(e.target.value);
          }}
        />

        <input
          type="text"
          value={shorturl}
          className="p-4 bg-white bg-opacity-20 text-black rounded-lg backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 w-full my-2 shadow-md placeholder-gary/80"
          placeholder="Enter your preferred short URL"
          onChange={(e) => {
            setshorturl(e.target.value);
          }}
        />

        {error && (
          <div className="mt-2 text-red-500 text-sm">{error}</div> // Error message display
        )}

        <button
          onClick={generate}
          disabled={!url || !shorturl} // Disable button if fields are empty
          className="p-3 bg-black text-white rounded-full mt-3 hover:bg-gray-900 transition-all duration-300 shadow-lg disabled:opacity-50"
        >
          Generate
        </button>

        {generated && (
          <div className="mt-4 p-3 bg-white bg-opacity-20 rounded-lg backdrop-blur-lg shadow-md animate-fade-in">
            <span className="block text-sm font-medium text-gray-600">
              Your Short URL:
            </span>
            <code className="text-lg font-bold">
              <Link
                target="_blank"
                href={generated}
                className="text-blue-300 hover:underline"
              >
                {generated}
              </Link>
            </code>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shorten;
