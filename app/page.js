"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <main className="w-full h-[100vh]  bg-[url('https://img.freepik.com/free-photo/3d-landscape-africa_1048-4855.jpg?w=2000&t=st=1702348637~exp=1702349237~hmac=3005308932526c67f6a70c84bb785e5181281cbbc43baf227e7f175819ed85a7')] bg-cover">
        <div className="border border-blue-300 w-full h-full  items-center">
         
          <div className="header shadow-lg w-full backdrop-blur-md  p-12 md:p-6 flex items-center justify-center text-center text-4xl md:text-5xl font-bold  text-white">
       VAN VIHAR ANIMAL QUIZ
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
