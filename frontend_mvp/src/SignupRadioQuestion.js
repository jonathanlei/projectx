import { useState } from "react";
function SignupQuestion({ question, handleQuestionSubmission }) {
  /* 
  How do you feel about travel planning?

  hate it - We’ve got you! Your travel curator will tailor travel plans for you, so you can focus on other things.

  it's okay - Gotcha. Having your own travel curator to tailor your travel plans and make your itinerary planning effortless.  

  love it - Great! So do we. Think of us as your new travel planning buddy.

  {
  tag: "travelplanningfeeling"
  question: "",
  options: [ 
    ("hate it", We’ve got you! Your travel curator will tailor travel plans for you, so you can focus on other things.),

  ]}
  */

  const [prefFormData, setPrefFormData] = useState({ selectedOption: "" });
  const [answerFeedback, setAnswerFeedback] = useState(null);

  // Example question passed from props
  // question = {
  //   tag: "travelplanningfeeling",
  //   question: "How do you feel about travel planning?",
  //   options: [
  //     ["hate it",
  //     "We’ve got you! Your travel curator will tailor travel plans for you, so you can focus on other things."],
  //     ["it's okay",
  //     "Gotcha. Having your own travel curator to tailor your travel plans and make your itinerary planning effortless. "],
  //     ["love it",
  //     "Great! So do we. Think of us as your new travel planning buddy."],
  //   ],
  // };

  /** Updates value of selected radio field */
  function handleValueChange(evt) {
    evt.preventDefault();
    const { value } = evt.target;

    setPrefFormData({
      selectedOption: value,
    });

    // display the feedback for newly selected choice
    const feedback = question.options.find((option) => option[0] === value);
    setAnswerFeedback(feedback[1]);
  }

  /** Handles submit of current question in questionnaire*/
  function handleSubmit(evt) {
    evt.preventDefault();

    // parent function to call to manage the data submitted
    handleQuestionSubmission(prefFormData);

    setAnswerFeedback(null);
  }
  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <img
        src={question.img}
        alt="question images"
        classname="content-center"
      />
      <h4 className="mb-5 font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl sm:leading-none">
        {question.question}
      </h4>
      {question.options.map((o) => {
        return (
          <>
            <input
              type="radio"
              id={o[0]}
              name={question.tag}
              value={o[0]}
              checked={prefFormData.selectedOption === o[0]}
              onChange={handleValueChange}
            />
            <label for={o[0]}>{o[0]}</label>
            <br />
          </>
        );
      })}
      <div className="RadioAnswerFeedback bg-gray-200 m-4 w-15 text-center bg-auto">
        {answerFeedback}
      </div>
      <button className="inline-flex items-center justify-center h-10 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-500 hover:bg-indigo-500 focus:shadow-outline focus:outline-none">
        Next
      </button>
    </form>
  );
}
export default SignupQuestion;
