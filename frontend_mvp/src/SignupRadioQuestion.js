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
    const feedback = question.options.find(option => (option[0] === value));
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
    <form onSubmit={handleSubmit}>
      <h2>{question.question}</h2>
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
      <div className="RadioAnswerFeedback">{answerFeedback}</div>
      <button>Next</button>
    </form>
  );
}
export default SignupQuestion;
