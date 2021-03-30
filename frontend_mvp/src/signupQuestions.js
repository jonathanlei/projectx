import { signupQuestionImgs } from "./static/assets/index";
const signupQuestions = [
  {
    tag: "travelplanningfeeling",
    question: "How do you feel about travel planning?",
    img: signupQuestionImgs[0],
    options: [
      [
        "hate it",
        "We’ve got you! Your travel curator will tailor travel plans for you, so you can focus on other things.",
      ],
      [
        "it's okay",
        "Gotcha. Have your own trip curator to tailor your plans and make your itinerary booking effortless. ",
      ],
      [
        "love it",
        "Great! So do we. Think of us as your new travel planning buddy.",
      ],
    ],
  },
  {
    tag: "time",
    question: "How much time & effort do you put into travel planning? ",
    img: signupQuestionImgs[1],
    options: [
      ["not much", "got it, we know that it can be tedious and time-consuming"],
      ["some", "nice, we hear you. "],
      ["a ton", "Sweet! We love it too"],
    ],
  },
  {
    tag: "frequency",
    question: "How often do you plan on traveling after the pandemic?",
    img: signupQuestionImgs[2],
    options: [
      ["once a month or more", "we love an avid traveler!"],
      [
        "couple times a year",
        "we get it, everyone needs to get away once in a while ",
      ],
      ["once a year", "let's help you plan for the big yearly vacation!"],
    ],
  },
];

export default signupQuestions;
