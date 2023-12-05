"use client";
import {useEffect,  useState } from "react";
import Flash from "../components/flash";
import toast, { Toaster } from "react-hot-toast";

export default function game() {
  const [flip, setFlip] = useState(false);
  const [score, setScore] = useState(0);

  function CheckAnswer(option) {
    setFlip(true);
    if (option !== "" && option === flash[count].answer) {
      toast.success("Hurrah! Correct Answer");
      setScore(score + 1);
    } else {
      toast.error("Oops! Wrong Answer");
    }
  }
  const [count, setCounter] = useState(0);
  const FLASH_CARDS = [
    {
      id: 1,
      question: "Which is the largest land animal in the world?",
      answer: "African Bush Elephant",
      options: [
        "African Bush Elephant",
        "Asian Elephant",
        "African Forest Elephant",
        "Indian Elephant",
      ],
      answer_description:
        "The African Bush Elephant is the largest land animal in the world. It is also the largest proboscid. The African Bush Elephant is the largest of the three elephant species and weigh up to 6000 kg and stand up to 3.3 m tall.",
      answer_image:
        "https://plus.unsplash.com/premium_photo-1661831251016-903397d3fe4f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      question: "Which is the largest living bird on Earth?",
      answer: "Ostrich",
      options: ["Ostrich", "Emu", "Cassowary", "Kiwi"],
      answer_description:
        "The Ostrich is the largest living bird on Earth. It is also the fastest bird on land. The Ostrich is a flightless bird native to Africa. It is the largest living bird on Earth and can run at speeds of up to 70 km/h.",
      answer_image:
        "https://images.unsplash.com/photo-1569979227661-459bbb0ebe84?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      question: "Which is the largest living reptile?",
      answer: "Saltwater Crocodile",
      options: [
        "Saltwater Crocodile",
        "Leatherback Sea Turtle",
        "Nile Crocodile",
        "Komodo Dragon",
      ],
      answer_description:
        "The Saltwater Crocodile is the largest living reptile. It is also the largest terrestrial and riparian predator in the world. The Saltwater Crocodile is the largest living reptile in the world. It is also the largest terrestrial and riparian predator in the world.",
      answer_image:
        "https://images.unsplash.com/photo-1501808723803-f10b401a67a1?q=80&w=2733&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      question: "Which is the largest living fish?",
      answer: "Whale Shark",
      options: ["Whale Shark", "Basking Shark", "Great White Shark", "Tiger Shark"],
      answer_description:
        "The Whale Shark is the largest living fish. It is also the largest non-mammalian vertebrate. The Whale Shark is the largest living fish in the world. It is also the largest non-mammalian vertebrate.",
      answer_image: "https://images.unsplash.com/photo-1563974514898-7aea295e12fa?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      question: "Which is the largest living land carnivore?",
      answer: "Polar Bear",
      options: ["Polar Bear", "Brown Bear", "Tiger", "Lion"],
      answer_description:
        "The Polar Bear is the largest living land carnivore. It is also the largest bear species. The Polar Bear is the largest living land carnivore. It is also the largest bear species.",
      answer_image:"https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 6,
      question: "Which is the largest living marsupial?",
      answer: "Red Kangaroo",
      options: ["Red Kangaroo", "Eastern Grey Kangaroo", "Tasmanian Devil", "Koala"],
      answer_description:
        "The Red Kangaroo is the largest living marsupial. It is also the largest living macropod. The Red Kangaroo is the largest living marsupial. It is also the largest living macropod.",
      answer_image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRWiQkbgujGpvtTklM7Kf_8CTaCkIn6JMP2R81oY6E9rNykEwWQ"
    }
    ,{
      id: 7,
      question: "Which is the largest living rodent?",
      answer: "Capybara",
      options: ["Capybara", "Beaver", "North American Porcupine", "Cane Rat"],
      answer_description:
        "The Capybara is the largest living rodent. It is also the largest living member of the order Rodentia. The Capybara is the largest living rodent. It is also the largest living member of the order Rodentia.",
      answer_image:"https://cdn.britannica.com/79/191679-050-C7114D2B/Adult-capybara.jpg"
    },{
      id: 8,
      question: "Which is the largest living primate?",
      answer: "Eastern Gorilla",
      options: ["Eastern Gorilla", "Western Gorilla", "Orangutan", "Chimpanzee"],
      answer_description:
        "The Eastern Gorilla is the largest living primate. It is also the largest living member of the order Primates. The Eastern Gorilla is the largest living primate. It is also the largest living member of the order Primates.",
      answer_image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfdFmqLOuhz5sQVZT6yU77OgDoutbI4md4YMMWe1-mhNzLboJM"
    },{
      id: 9,
      question: "Which is the largest living amphibian?",
      answer: "Chinese Giant Salamander",
      options: ["Chinese Giant Salamander", "Japanese Giant Salamander", "Hellbender", "Giant Barred Frog"],
      answer_description:
        "The Chinese Giant Salamander is the largest living amphibian. It is also the largest salamander in the world. The Chinese Giant Salamander is the largest living amphibian. It is also the largest salamander in the world.",
      answer_image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRRCMn1MFN5E743YI1WZt2sagIOoDJBnqK7cLN6hgPCRXwsex2z"
    },{
      id: 10,
      question: "What is the smallest species of monkey?",
      answer: "Pygmy Marmoset",
      options: ["Pygmy Marmoset", "Silvery Marmoset", "Golden Lion Tamarin", "Cotton-top Tamarin"],
      answer_description: "The Pygmy Marmoset is the smallest species of monkey. It is also the smallest species of primate. The Pygmy Marmoset is the smallest species of monkey. It is also the smallest species of primate.",
      answer_image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPh4lvRmoGwmIanpjO6qjc4iEYa2dy-mYeSxx0KWD0g0c64cJdH08QCPVAiH7GN8tx5w0&usqp=CAU"
    }
  ];
  const [flash, setFlash] = useState(FLASH_CARDS);

  const [seconds, setSeconds] = useState(30);
  const [complete, setComplete] = useState(false);

  function NextCounter() {
    if (count == FLASH_CARDS.length - 1) {
      setComplete(true);
      setCounter(0);
      setSeconds(0)
      setFlip(false);

    } else {
      setSeconds(30);
      setFlip(false);
      setCounter(count + 1);
    }
  }

  
// const getTime = (s) => {
//   setSeconds(s - 1);
//   console.log(s)

// };

useEffect(() => {
    const timer = seconds>0 && setTimeout(() => setSeconds(seconds-1), 1000);

    if(seconds == 0){
      setFlip(true);
    }

    return () => clearInterval(timer);

}, [seconds]);
  return (
    <>
      <div className="w-full h-[100vh]  bg-[url('https://img.freepik.com/free-vector/hand-drawn-wildlife-background_52683-85493.jpg?w=1800&t=st=1701734747~exp=1701735347~hmac=778e82d2a324318f023c8782df8096625c698e14dcc034212c7bcf5c1251fce6')] bg-cover">
        <div className=" w-full h-full  items-center">
         
          <div className="header shadow-lg w-full backdrop-blur-md  p-12 md:p-6 flex items-center justify-center text-3xl md:text-5xl font-bold drop-shadow-lg text-black">
        THE ANIMAL QUIZ
      </div>
      <h1 className="absolute p-4 shadow-lg bg-gray-600 backdrop-blur-md top-[150px] md:top-36 left-6 md:left-12 text-white text-2xl font-bold">Score: {score}</h1>
      <h1 className="absolute p-4 shadow-lg bg-gray-600 backdrop-blur-md  md:top-36 top-[150px] right-6 md:right-12  text-white text-2xl font-bold">Time: {seconds}s</h1>
  <div className="relative w-full   h-[80vh] grid place-items-center ">
          {!complete && <div
            className={`card bordergrid w-full shadow-xl relative  place-items-center  justify-center cursor-pointer ${
              flip ? "flip" : ""
            } `}

        
          >

            <div className="front absolute flex flex-col gap-6 w-full h-full rounded-[20px] items-center p-6 md:p-12">
            <h1 className="text-white font-bold text-2xl">Question {count+1}/10</h1>

              <h1 className="font-bold text-black text-3xl md:text-3xl">

                {flash[count].question}
              </h1>
              <div className="grid grid-rows-2 grid-cols-2 p-6  w-full absolute bottom-12 md:grid-rows-2 md:grid-cols-2 gap-6">
                {flash[count].options.map((options) => {
                  return (
                    <button
                      key={options}
                      className={`border-2 shadow-xl border-black p-1 md:p-4 w-full bg-white text-black  cursor-pointer rounded-[40px] hover:bg-white hover:text-blue-400 focus:text-black ${
                        options === flash[count].answer
                          ? "active:bg-green-500"
                          : "focus:bg-red-500"
                      }}`}
                      onClick={() => CheckAnswer(options)}
                    >
                      {options}
                    </button>
                  );
                })}
                {/* <Toaster /> */}
              </div>
            </div>
            <div className="back absolute p-6 h-full flex gap-4 flex-col rounded-xl">
              <div className="w-full  md:p-4 grid place-items-center  text-gray-800 font-bold text-3xl">
                <h1>{flash[count].answer}</h1>
              </div>
              <div className="w-full  place-items-center h-full md:p-4 ">
                <img
                  className="answer_image float-left m-5 w-[150px] md:w-[200px] object-cover"
                  src={flash[count].answer_image}
                />
                <p className="text-black align-justify font-semibold text-xl">
                  {flash[count].answer_description}
                </p>
              </div>
            </div>
          </div>
}
</div>
          

          {
            complete && 
            
            <div className="w-full h-full border top-12 left-0 absolute flex flex-col justify-center items-center">

  
              <h1 className="text-3xl font-bold text-black">Congratulations! You have completed the quiz.</h1>
              <h1 className="text-2xl font-bold text-black">Your score is {score}</h1>
              <button className="p-4 rounded-xl border border-black   bg-white text-2xl mt-12" onClick={() => location.reload()}>Play Again</button>
            </div>
          }
        </div>
      </div>
      {flip && !complete && <button
        className="p-4 absolute left-10 bottom-12  font-bold rounded-[40px] border-5 border-black shadow-2xl  bg-white text-2xl"
        onClick={() => NextCounter()}
      >
        Next
      </button>}
      <Toaster />
    </>
  );
}
