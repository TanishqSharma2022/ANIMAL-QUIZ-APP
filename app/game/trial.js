"use client";
import {useEffect,  useState } from "react";
import Flash from "../components/flash";
import toast, { Toaster } from "react-hot-toast";
// import flash from "../../public/flash.json"

export default function game() {
  const [flip, setFlip] = useState(false);
  // const [score, setScore] = useState(0);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState('easy');
  const [species, setSpecies] = useState('Birds');
  const FLASH_CARDS = [
    
    {
      id: 1,
      type: "Carnivore",
      difficulty: "Easy",
      question: "What is the primary diet of a lion?",
      options: ["Grass", "Insects", "Meat", "Leaves"],
      answer: "Meat",
      answer_description: "Lions are carnivores and primarily eat meat.",
      answer_image: "link_to_lion_image.jpg"
    },
    {
      id: 2,
      type: "Carnivore",
      difficulty: "Medium",
      question: "Which of the following animals is a carnivore?",
      options: ["Elephant", "Tiger", "Giraffe", "Koala"],
      answer: "Tiger",
      answer_description: "Tigers are carnivores.",
      answer_image: "link_to_tiger_image.jpg"
    },
    {
      id: 3,
      type: "Carnivore",
      difficulty: "Hard",
      question: "What is the main food source for a polar bear?",
      options: ["Fish", "Bamboo", "Ants", "Seals"],
      answer: "Seals",
      answer_description: "Polar bears primarily hunt seals for food.",
      answer_image: "link_to_polar_bear_image.jpg"
    },
    {
      id: 4,
      type: "Herbivore",
      difficulty: "Easy",
      question: "What do cows primarily eat?",
      options: ["Meat", "Plants", "Insects", "Fish"],
      answer: "Plants",
      answer_description: "Cows are herbivores and mainly eat plants.",
      answer_image: "link_to_cow_image.jpg"
    },
    {
      id: 5,
      type: "Herbivore",
      difficulty: "Medium",
      question: "Which of the following animals is a herbivore?",
      options: ["Lion", "Giraffe", "Penguin", "Eagle"],
      answer: "Giraffe",
      answer_description: "Giraffes are herbivores and eat leaves from trees.",
      answer_image: "link_to_giraffe_image.jpg"
    },
    {
      id: 6,
      type: "Herbivore",
      difficulty: "Hard",
      question: "What is the primary food source for a rabbit?",
      options: ["Carrots", "Fish", "Insects", "Meat"],
      answer: "Carrots",
      answer_description: "Rabbits enjoy eating carrots as their primary food.",
      answer_image: "link_to_rabbit_image.jpg"
    },
    {
      id: 7,
      type: "Butterflies",
      difficulty: "Easy",
      question: "What is the adult form of a butterfly called?",
      options: ["Larva", "Pupa", "Caterpillar", "Imago"],
      answer: "Imago",
      answer_description: "The adult form of a butterfly is called Imago.",
      answer_image: "link_to_butterfly_image.jpg"
    },
    {
      id: 8,
      type: "Butterflies",
      difficulty: "Medium",
      question: "What do butterflies use to taste food?",
      options: ["Mouth", "Antennae", "Feet", "Wings"],
      answer: "Feet",
      answer_description: "Butterflies taste food with their feet.",
      answer_image: "link_to_butterfly_tasting_image.jpg"
    },
    {
      id: 9,
      type: "Butterflies",
      difficulty: "Hard",
      question: "How long is the average lifespan of a butterfly?",
      options: ["1 day", "1 week", "1 month", "1 year"],
      answer: "1 month",
      answer_description: "The average lifespan of a butterfly is around 1 month.",
      answer_image: "link_to_butterfly_lifespan_image.jpg"
    },
    {
      id: 10,
      type: "Trees",
      difficulty: "Easy",
      question: "Which tree is known as the 'Tree of Life'?",
      options: ["Oak", "Baobab", "Pine", "Maple"],
      answer: "Baobab",
      answer_description: "The Baobab tree is often referred to as the 'Tree of Life.'",
      answer_image: "link_to_baobab_tree_image.jpg"
    },
    {
      id: 11,
      type: "Trees",
      difficulty: "Medium",
      question: "Which tree produces acorns?",
      options: ["Birch", "Cedar", "Oak", "Willow"],
      answer: "Oak",
      answer_description: "Oak trees produce acorns as part of their reproductive cycle.",
      answer_image: "link_to_oak_tree_image.jpg"
    },
    {
      id: 12,
      type: "Trees",
      difficulty: "Hard",
      question: "In which season do evergreen trees retain their leaves?",
      options: ["Spring", "Summer", "Autumn", "Winter"],
      answer: "Winter",
      answer_description: "Evergreen trees retain their leaves throughout the winter season.",
      answer_image: "link_to_evergreen_tree_image.jpg"
    },
    {
      id: 13,
      type: "Reptiles",
      difficulty: "Easy",
      question: "What is the largest living species of lizard?",
      options: ["Gecko", "Monitor Lizard", "Iguana", "Komodo Dragon"],
      answer: "Komodo Dragon",
      answer_description: "The Komodo Dragon is the largest living species of lizard.",
      answer_image: "link_to_komodo_dragon_image.jpg"
    },
    {
      id: 14,
      type: "Reptiles",
      difficulty: "Medium",
      question: "Which snake is known for its hood?",
      options: ["Python", "Cobra", "Viper", "Rattlesnake"],
      answer: "Cobra",
      answer_description: "Cobras are known for their distinctive hood, which they can expand.",
      answer_image: "link_to_cobra_image.jpg"
    },
    {
      id: 15,
      type: "Reptiles",
      difficulty: "Hard",
      question: "What is the largest species of tortoise?",
      options: ["Leopard Tortoise", "Red-Footed Tortoise", "Aldabra Giant Tortoise", "Galapagos Tortoise"],
      answer: "Galapagos Tortoise",
      answer_description: "",
      answer_image: "link_to_galapagos_tortoise_image.jpg"
    }


];
  const [flash, setFlash] = useState(FLASH_CARDS);
  // const handleAnswer = (selectedAnswer) => {
  //   const currentQuestionData = questions[currentQuestion];

  //   if (selectedAnswer === currentQuestionData.correctAnswer) {
  //     // Correct answer
  //     setScore(score + 1);

  //     // Move to the next difficulty level
  //     if (difficulty === 'easy') {
  //       setDifficulty('medium');
  //     } else if (difficulty === 'medium') {
  //       setDifficulty('hard');
  //     }

  //     // Move to the next species if it was the hard question
  //     if (difficulty === 'hard') {
  //       const nextSpecies = getNextSpecies();
  //       setSpecies(nextSpecies);
  //     }
  //   } else {
  //     // Incorrect answer
  //     // Reset difficulty to easy and move to the next species
  //     setDifficulty('easy');
  //     const nextSpecies = getNextSpecies();
  //     setSpecies(nextSpecies);
  //   }

  //   // Move to the next question
  //   setCurrentQuestion(currentQuestion + 1);
  // };

  // const getNextSpecies = () => {
  //   // Logic to determine the next species (Birds, Mammals, Reptiles)
  //   // ...

  //   // For simplicity, let's assume a cyclic order
  //   const speciesOrder = ['Birds', 'Mammals', 'Reptiles'];
  //   const currentIndex = speciesOrder.indexOf(species);
  //   const nextIndex = (currentIndex + 1) % speciesOrder.length;
  //   return speciesOrder[nextIndex];
  // };








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
            <h1 className="text-white font-bold text-2xl">{flash[count].type} - {flash[count].difficulty}</h1>

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
