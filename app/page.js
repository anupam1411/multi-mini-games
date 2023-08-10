"use client";
import React, { useState } from "react";
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

  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-cover bg-[url('/meeting-everyone-looking-at-me.gif')]">
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
            className="text-center w-fit border-none outline-none placeholder-yellow-500 text-yellow-900 bg-transparent "
            name="password"
            onChange={(e) => {
              setRoute(e.target.value);
            }}
          />
          ]
        </div>
      </form>
      {/* <p>{passwordValue}</p> */}
    </div>
  );
}
