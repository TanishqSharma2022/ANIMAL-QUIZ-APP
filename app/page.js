"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <main className="w-full h-[100vh]  bg-[url('https://vanviharnationalpark.org/public/storage/gallery/36150570c315c58e50a4481e71d738d5d44fa4a6.jpg')] bg-cover">
        <div className="border border-blue-300 w-full h-full  items-center">
         
          <div className="header shadow-lg w-full backdrop-blur-md  p-12 md:p-6 flex items-center justify-center text-center text-4xl md:text-5xl font-bold  text-black">
       VAN VIHAR QUIZ
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
