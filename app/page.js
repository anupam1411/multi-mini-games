"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const [passwordValue, setPasswordValue] = useState("");
  const router = useRouter();
  const [route, setRoute] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredPassword = event.target.password.value;

    if (enteredPassword === "BAAPUJI") {
      setPasswordValue(enteredPassword);
      router.push("bapujiPage");
    } else if (enteredPassword === "GUESSGAME") {
      setPasswordValue(enteredPassword);
      router.push("guessTheSymbolPage");
    } else if (enteredPassword === "USELESS") {
      setPasswordValue(enteredPassword);
      router.push("uselessmachinePage");
    } else {
      setPasswordValue("");
      router.push("entryDenied");
    }
  };

  useEffect(() => {
    const handleDownload = () => {
      fetch("/PASSWORDS.txt")
        .then((res) => res.blob())
        .then((data) => {
          const a = document.createElement("a");
          a.href = window.URL.createObjectURL(data);
          a.download = "PASSWORDS.txt";
          a.click();
        });
    };

    const downloader = document.getElementById("downloader");
    downloader.addEventListener("click", handleDownload);

    return () => {
      downloader.removeEventListener("click", handleDownload);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-cover bg-[url('/dog-spinner.gif')] sm:bg-[url('/meeting-everyone-looking-at-me.gif')]">
      {" "}
      {/* Change justify-center to justify-start */}
      <div className="text-3xl lg:text-6xl text-center text-green-400 mt-8">
        HELLO EVERYNINYANN
      </div>
      <form onSubmit={handleSubmit} className="my-8">
        <div className="pt-40 text-2xl text-blue-500">
          [
          <input
            placeholder="😁PASSWORD😁"
            maxLength={10}
            className="text-center w-[70vw] sm:w-fit border-none outline-none placeholder-yellow-500 text-yellow-900 bg-transparent "
            name="password"
            onChange={(e) => {
              setRoute(e.target.value);
            }}
          />
          ]
        </div>
      </form>
      <div className="text-center ">
        <div className="bg-white">Click here to download passwords</div>
        <button id="downloader" className="bg-white ">
          {"=>"}PASSWORDS{"<="}
        </button>
      </div>
      {/* <p>{passwordValue}</p> */}
    </div>
  );
}
