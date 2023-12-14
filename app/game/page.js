"use client";

import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function game() {


  const router = useRouter();
  const [username, setUsername] = useState("");
  const [usersubmit, setUsersubmit] = useState(false);
  const [flip, setFlip] = useState(false);
  const [score, setScore] = useState(0);

  const FLASH_CARDS = [
    {
      option_images:[],
      question_image:"",id: 1,
      type: "Carnivore",
      difficulty: "Easy",
      question: "What is the primary diet of a lion?",
      options: ["Grass", "Insects", "Meat", "Leaves"],
      answer: "Meat",
      answer_description: "Lions are carnivores and primarily eat meat.",
      answer_image:
        "https://images.unsplash.com/photo-1607274134639-043342705e6f?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      question_image:"",id: 2,
      type: "Carnivore",
      difficulty: "Medium",
      question: "Which of the following animals is a carnivore?",
      options: ["Elephant", "Tiger", "Giraffe", "Koala"],
      answer: "Tiger",
      answer_description: "Tigers are carnivores. They primarily eat meat.",
      answer_image:
        "https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      option_images: ['https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://plus.unsplash.com/premium_photo-1664303475496-43a4ec29196e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1603483080228-04f2313d9f10?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1579972383667-4894c883d674?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']
      },
    {
      option_images:[],
      question_image:"",id: 3,
      type: "Carnivore",
      difficulty: "Hard",
      question: "What is the main food source for a polar bear?",
      options: ["Fish", "Bamboo", "Ants", "Seals"],
      answer: "Seals",
      answer_description: "Polar bears primarily hunt seals for food.",
      answer_image:
        "https://plus.unsplash.com/premium_photo-1664303475496-43a4ec29196e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      option_images:["https://www.floridamuseum.ufl.edu/wp-content/uploads/sites/8/2022/04/DSC02564-male-open-Great-Eggfly.jpg", "https://lh4.ggpht.com/E8_YDRcAKV9QRbpOISDpnsIix0K0svjMVaa-Im87DvN15kg-jzS0fjT2eWqpi7pqr_lac-giVUCUOJYw55Ugqw=s1200", "http://1.bp.blogspot.com/-PbAEpYbo4CM/Tbkl13zqwtI/AAAAAAAAKxo/8VBhBXddPVw/s1600/BP_adult_Khew_01.jpg", "https://upload.wikimedia.org/wikipedia/commons/f/f7/Yellow_pansy_%28Junonia_hierta_cebrene%29_male.jpg"],question_image:"",id: 4,
      type: "Butterfly",
      difficulty: "Easy",
      question: "Which one of these is the Danaid Eggfly?",
      options: ["1", "2", "3", "4"],
      answer: "Yes, This is the Danaid Butterfly",
      answer_description: "Hypolimnas misippus, the Danaid eggfly,  mimic, or diadem, is a widespread species of nymphalid butterfly. It is well known for polymorphism and mimicry. Males are blackish with distinctive white spots that are fringed in blue.",
      answer_image:
        "https://lh4.ggpht.com/E8_YDRcAKV9QRbpOISDpnsIix0K0svjMVaa-Im87DvN15kg-jzS0fjT2eWqpi7pqr_lac-giVUCUOJYw55Ugqw=s1200",
    },
    {
      option_images:[],question_image:"",id: 5,
      type: "Herbivore",
      difficulty: "Medium",
      question: "Which of the following animals is a herbivore?",
      options: ["Lion", "Giraffe", "Penguin", "Eagle"],
      answer: "Giraffe",
      answer_description: "Giraffes are herbivores and eat leaves from trees.",
      answer_image:
        "https://images.unsplash.com/photo-1547721064-da6cfb341d50?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      option_images:[],question_image:"",id: 6,
      type: "Herbivore",
      difficulty: "Hard",
      question: "What is the primary food source for a rabbit?",
      options: ["Carrots", "Fish", "Insects", "Meat"],
      answer: "Carrots",
      answer_description: "Rabbits enjoy eating carrots as their primary food.",
      answer_image:
        "https://images.unsplash.com/photo-1658285176084-b97d6a0cffda?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      option_images:[],question_image:"",id: 7,
      type: "Butterflies",
      difficulty: "Easy",
      question: "What is the adult form of a butterfly called?",
      options: ["Larva", "Pupa", "Caterpillar", "Imago"],
      answer: "Imago",
      answer_description: "The adult form of a butterfly is called Imago.",
      answer_image:
        "https://images.unsplash.com/photo-1500350347612-85b7eff2f759?q=80&w=2626&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      option_images:[],question_image:"",id: 8,
      type: "Butterflies",
      difficulty: "Medium",
      question: "What do butterflies use to taste food?",
      options: ["Mouth", "Antennae", "Feet", "Wings"],
      answer: "Feet",
      answer_description: "Butterflies taste food with their feet.",
      answer_image:
        "https://images.unsplash.com/photo-1535068484622-7a077e5aa558?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      option_images:[],question_image:"",id: 9,
      type: "Butterflies",
      difficulty: "Hard",
      question: "How long is the average lifespan of a butterfly?",
      options: ["1 day", "1 week", "1 month", "1 year"],
      answer: "1 month",
      answer_description:
        "The average lifespan of a butterfly is around 1 month.",
      answer_image:
        "https://images.unsplash.com/photo-1533048324814-79b0a31982f1?q=80&w=2178&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      option_images:[],question_image:"",id: 10,
      type: "Trees",
      difficulty: "Easy",
      question: "Which tree is known as the 'Tree of Life'?",
      options: ["Oak", "Baobab", "Pine", "Maple"],
      answer: "Baobab",
      answer_description:
        "The Baobab tree is often referred to as the 'Tree of Life.'",
      answer_image:
        "https://images.unsplash.com/photo-1564198729838-cb82ee0c733c?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      option_images:[],question_image:"",id: 11,
      type: "Trees",
      difficulty: "Medium",
      question: "Which tree produces acorns?",
      options: ["Birch", "Cedar", "Oak", "Willow"],
      answer: "Oak",
      answer_description:
        "Oak trees produce acorns as part of their reproductive cycle.",
      answer_image:
        "https://images.unsplash.com/photo-1568654792529-d6f9f8a1c231?q=80&w=2855&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      option_images:[],question_image:"",id: 12,
      type: "Trees",
      difficulty: "Hard",
      question: "In which season do evergreen trees retain their leaves?",
      options: ["Spring", "Summer", "Autumn", "Winter"],
      answer: "Winter",
      answer_description:
        "Evergreen trees retain their leaves throughout the winter season.",
      answer_image:
        "https://images.unsplash.com/photo-1490008446666-6c0841b7c060?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      option_images:[],question_image:"",id: 13,
      type: "Reptiles",
      difficulty: "Easy",
      question: "What is the largest living species of lizard?",
      options: ["Gecko", "Monitor Lizard", "Iguana", "Komodo Dragon"],
      answer: "Komodo Dragon",
      answer_description:
        "The Komodo Dragon is the largest living species of lizard.",
      answer_image:
        "https://images.unsplash.com/photo-1580844946486-f08607088f08?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      option_images:[],question_image:"",id: 14,
      type: "Reptiles",
      difficulty: "Medium",
      question: "Which snake is known for its hood?",
      options: ["Python", "Cobra", "Viper", "Rattlesnake"],
      answer: "Cobra",
      answer_description:
        "Cobras are known for their distinctive hood, which they can expand.",
      answer_image:
        "https://images.unsplash.com/photo-1531386151447-fd76ad50012f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      option_images:[],question_image:"",id: 15,
      type: "Reptiles",
      difficulty: "Hard",
      question: "What is the largest species of tortoise?",
      options: [
        "Leopard Tortoise",
        "Red-Footed Tortoise",
        "Aldabra Giant Tortoise",
        "Galapagos Tortoise",
      ],
      answer: "Galapagos Tortoise",
      answer_description:
        "Galapagos Tortoises are the largest species of tortoise.",
      answer_image:
        "https://images.unsplash.com/photo-1521217155737-0d5632e9813f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [flash, setFlash] = useState(FLASH_CARDS);
  // Function to shuffle an array
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  // to select question based on difficulty
  const selectQuestions = (questions, numEasy, numMedium, numHard) => {
    // Shuffle the questions array
    const shuffledQuestions = shuffleArray(questions);

    // Filter questions based on difficulty
    const easyQuestions = shuffledQuestions
      .filter((q) => q.difficulty === "Easy")
      .slice(0, numEasy);

    const mediumQuestions = shuffledQuestions
      .filter((q) => q.difficulty === "Medium")
      .slice(0, numMedium);
    const hardQuestions = shuffledQuestions
      .filter((q) => q.difficulty === "Hard")
      .slice(0, numHard);

    // Concatenate the selected questions
    const selectedQuestions = [
      ...easyQuestions,
      ...mediumQuestions,
      ...hardQuestions,
    ];

    return selectedQuestions;
  };
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  useEffect(() => {
    const questions = selectQuestions(FLASH_CARDS, 4, 3, 3);
    setSelectedQuestions(questions);
  }, []);

  // Function to check answer and update score and flip the card
  function CheckAnswer(option) {
    setFlip(true);

    if (option !== "" && option === selectedQuestions[count].answer || option === selectedQuestions[count].answer_image) {
      toast.success("Hurrah! Correct Answer");
      console.log(selectedQuestions[count].difficulty);
      if (selectedQuestions[count].difficulty == "Easy") {
        setScore(score + 1);
      } else if (selectedQuestions[count].difficulty == "Medium") {
        setScore(score + 2);
      } else if (selectedQuestions[count].difficulty == "Hard") {
        setScore(score + 5);
      }
    } else {
      toast.error("Oops! Wrong Answer");
    }
  }

  const [count, setCounter] = useState(0);
  const [seconds, setSeconds] = useState(100);
  const [complete, setComplete] = useState(false);

  // Function to move to next question
  function NextCounter() {
    if (count == selectedQuestions.length - 1) {
      setComplete(true);
      setCounter(0);
      setFlip(false);
    } else {
      setFlip(false);
      setCounter(count + 1);
    }
  }

if(complete){
  const userData = { username, score };
  console.log(userData)
}



  // Logic to start timer
useEffect(() => {
    if(usersubmit){
      const timer =
      seconds > 0 && setTimeout(() => setSeconds(seconds - 1), 1000);

    if (seconds == 0) {
      setFlip(true);
      setComplete(true);
    }

    return () => clearInterval(timer);
  }
  }, [seconds, usersubmit]);

  return (
    <>
      <div className="w-full h-[100vh]  bg-[url('https://vanviharnationalpark.org/public/storage/gallery/36150570c315c58e50a4481e71d738d5d44fa4a6.jpg')] bg-cover">
        {!complete && !usersubmit && 
        <div className="w-full flex flex-col absolute items-center justify-center gap-12 h-full">
          <input className="p-4 rounded-2xl text-xl md:text-3xl shadow-xl" type="text" placeholder="Enter your username here." onChange={(event) => setUsername(event.target.value)} />
          <button className="bg-white text-black shadow-lg p-4 px-6 text-2xl font-bold rounded-2xl border border-white" type="submit" onClick={() => setUsersubmit(true)}>Submit</button>
          </div>
        }   
        
         <div className=" w-full h-full  items-center">
          <div className="header shadow-lg w-full backdrop-blur-md  p-12 md:p-6 flex items-center justify-center text-3xl md:text-5xl font-bold drop-shadow-lg text-black">
            THE VAN VIHAR ANIMAL QUIZ
          </div>
          <h1 className="absolute p-4 shadow-lg bg-gray-600 backdrop-blur-md top-[150px] md:top-36 left-6 md:left-12 text-white text-2xl font-bold">
            Score: {score}
          </h1>
          <h1 className="absolute p-4 shadow-lg bg-gray-600 backdrop-blur-md  md:top-36 top-[150px] right-6 md:right-12  text-white text-2xl font-bold">
            Time: {seconds}s
          </h1>
          {usersubmit && <div className="relative w-full   h-[80vh] grid place-items-center ">
            {!complete && selectedQuestions.length > 0 && (
              <div
                className={`card bordergrid w-full shadow-xl relative  place-items-center mt-12  justify-center cursor-pointer ${
                  flip ? "flip" : ""
                } `}
              >
                <div className="front absolute flex flex-col gap-6 w-full h-full rounded-[20px] items-center p-6 md:p-10">
                  <h1 className="text-white font-bold text-2xl">
                    Question {count + 1}/{selectedQuestions.length}
                  </h1>
                  <div className="flex items-center justify-between w-full">
                    <h1 className="text-black font-bold text-xl">
                      {selectedQuestions[count].type}
                    </h1>
                    <h1 className="text-black font-bold text-xl">
                      {" "}
                      {selectedQuestions[count].difficulty}
                    </h1>
                  </div>
                  <h1 className="font-bold text-black text-3xl md:text-3xl  py-2">
                    {selectedQuestions[count].question}
                  </h1>
                  <div className="grid grid-rows-2 grid-cols-2 p-6   w-full absolute bottom-4 md:grid-rows-1 md:grid-cols-4 gap-6">
                    {selectedQuestions[count].option_images.length == 0 &&  selectedQuestions[count].options.map((options) => {
                      return (

                        <button
                          key={options}
                          className={`border-2 shadow-xl border-black p-1 py-4 md:p-4 w-full bg-white text-black  cursor-pointer rounded-[40px] hover:bg-white hover:text-blue-400 focus:text-black ${
                            options === selectedQuestions[count].answer
                          }}`}
                          onClick={() => CheckAnswer(options)}
                        >
                          {
                          
                            options
                          
                          }
                        </button>
                      );
                    })}
                    {selectedQuestions[count].option_images.length != 0 &&  selectedQuestions[count].option_images.map((options) => {
                      return (

                        <button
                          key={options}
                          className={`border-2 shadow-xl border-black w-full h-[100px]  text-black  cursor-pointer  hover:border-white focus:text-black ${
                            options === selectedQuestions[count].answer
                          }}`}
                          onClick={() => CheckAnswer(options)}
                        >
                          <img src={options} className="w-full h-auto object-fill" />
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className="back absolute p-6 h-full flex gap-4 flex-col rounded-xl">
                  <div className="w-full md:p-4 grid place-items-center text-gray-800 font-bold text-3xl">
                    <h1>{selectedQuestions[count].answer}</h1>
                  </div>
                  <div className="w-full  place-items-center h-full md:p-4 ">
                    <img
                      className="answer_image float-left mr-4 shadow-lg w-[150px] md:w-[200px] object-cover"
                      src={selectedQuestions[count].answer_image}
                    />
                    <p className="text-black align-justify font-semibold text-xl">
                      {selectedQuestions[count].answer_description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>}

          {complete && (
            <div className="w-full h-full  top-12 left-0 absolute grid place-items-center">
              <div className="bg-white/80 shadow-lg drop-blur-lg p-12 rounded-2xl flex flex-col justify-center items-center ">
                <h1 className="text-3xl font-bold text-black">
                  Congratulations! You have completed the quiz.
                </h1>
                <h1 className="text-2xl font-bold text-black">
                  Your score is {score} / 25
                </h1>
                <button
                  className="p-4 rounded-xl border border-black   bg-white text-2xl mt-12"
                  onClick={() => router.push("/")}
                >
                  Play Again
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* {selectedQuestions.map((ques) => {
        return(ques.question)
      })} */}
      {flip && !complete && (
        
        <button
          className="p-4 absolute left-10 bottom-12  font-bold rounded-[40px] border-5 border-black shadow-2xl  bg-white text-2xl"
          onClick={() => NextCounter()}
        >
          Next
        </button>
      )}

      

      <Toaster />
    </>
  );
}
