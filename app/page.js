"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <main className="w-full h-[100vh]  bg-[url('https://img.freepik.com/free-vector/hand-drawn-wildlife-background_52683-85493.jpg?w=1800&t=st=1701734747~exp=1701735347~hmac=778e82d2a324318f023c8782df8096625c698e14dcc034212c7bcf5c1251fce6')] bg-cover">
        <div className="border border-blue-300 w-full h-full  items-center">
         
          <div className="header shadow-lg w-full backdrop-blur-md  p-12 md:p-6 flex items-center justify-center text-center text-4xl md:text-5xl font-bold  text-black">
        THE ANIMAL QUIZ
      </div>
      <div className="flex flex-col p-12 items-center h-[70vh] justify-center">
        <Link href="/game">
          <button className="text-3xl md:text-5xl text-white bg-green-500 border border-white p-6 md:p-12 rounded-[40px] shadow-2xl">Start a New Game</button>
        </Link>
      </div>
      </div>
     
    </main>
  );
}
