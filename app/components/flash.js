"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {Toaster} from 'react-hot-toast';


export default function Flash({ flashcard }) {
  const [flip, setFlip] = useState(false);
  // const [score, setScore] = useState(0);

function CheckAnswer(option){
  setFlip(true);
  if (option !== "" && option === flashcard.answer) {
    toast.success('Hurrah! Correct Answer');
    // setScore(score + 1);
  } else {
    toast.error('Oops! Wrong Answer');
  }
}

  return (
    <>
      <div
        className={`card grid w-full place-items-center top-12 justify-center cursor-pointer ${
          flip ? "flip" : ""
        } `}
        
      >
        <div className="front absolute flex flex-col gap-12 w-full h-full rounded-[20px] items-center p-6 md:p-12">
          <h1 className="font-bold text-black text-3xl">
            {flashcard.question}
          </h1>
          <div className="grid grid-rows-2 grid-cols-2 p-6  w-full absolute bottom-12 md:grid-rows-2 md:grid-cols-2 gap-6">
            {flashcard.options.map((options) => {
              return (
                <button
                  key={options}
                  className={`border-2 border-black p-4 w-full text-black  cursor-pointer rounded-[40px] hover:bg-white hover:text-blue-400 focus:text-black ${options === flashcard.answer ? "active:bg-green-500" : "focus:bg-red-500"}}`}
                  onClick={() => CheckAnswer(options)}
                  
                >
                  {options}
                </button>

              );
            })}
          </div>
        </div>
        <div className="back absolute p-6 h-full flex gap-4 flex-col rounded-xl">
          <div className="w-full  md:p-4 grid place-items-center  text-green-400 font-bold text-3xl">
            <h1>{flashcard.answer}</h1>
          </div>
          <div className="w-full  place-items-center h-full md:p-4 ">

              <img className="answer_image float-left m-5 w-[150px] md:w-[200px] object-cover" src={flashcard.answer_image} />
            <p className="text-black align-justify font-semibold text-xl">{flashcard.answer_description}</p>
          </div>
        </div>

      </div>

    </>
  );
}
