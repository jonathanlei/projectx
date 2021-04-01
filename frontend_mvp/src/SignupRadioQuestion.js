import { useState, useEffect } from "react";
import SigninBox from "./SigninBox";
function SignupQuestion({ question, handleQuestionSubmission }) {
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
    const { value } = evt.target;

    setPrefFormData({
      selectedOption: value,
    });
  }

  useEffect(
    function setFeedback() {
      const feedback = question.options.find(
        (option) => option[0] === prefFormData.selectedOption
      );
      setAnswerFeedback(feedback ? feedback[1] : null);
    },
    [prefFormData]
  );

  /** Handles submit of current question in questionnaire*/
  function handleSubmit(evt) {
    evt.preventDefault();

    // parent function to call to manage the data submitted
    handleQuestionSubmission(prefFormData);

    setAnswerFeedback(null);
  }
  return (
    <form onSubmit={handleSubmit} className="bg-gray-50">
      <img src={question.img} alt="question images" className="p-4 m-auto mb-5" />
      <h4 className="mb-5 text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl sm:leading-none Cambria">
        {question.question}
      </h4>
      {question.options.map((o) => (
        <>
          <input
            type="radio"
            id={o[0]}
            name={question.tag}
            value={o[0]}
            checked={prefFormData.selectedOption === o[0]}
            onChange={handleValueChange}
            className="ml-4 form-radio h-3 w-3 text-red-600"
          />
          <label htmlFor={o[0]} className="mx-1">
            {o[0]}
          </label>
        </>
      ))}
      {answerFeedback ? (
        <div>
          <button
            className="RadioAnswerFeedback bg-gray-100 bg-clip-content h-20 w-auto mx-10 my-4 Cambria p-2 items-center justify-center text-sm font-sans "
            disabled="true"
          >
            {answerFeedback}
          </button>
        </div>
      ) : null}
      <div className="my-4">
        <button className="inline-flex items-center justify-center h-10 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-500 hover:bg-indigo-600 focus:shadow-outline focus:outline-none">
          Next
        </button>
      </div>
      <SigninBox />
    </form>
  );
}
export default SignupQuestion;
