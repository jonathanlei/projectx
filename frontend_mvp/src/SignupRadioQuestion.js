

function SignupQuestion({ question }) {
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

  question = {
    tag: "travelplanningfeeling",
    question: "How do you feel about travel planning?",
    options: [
      ["hate it",
      "We’ve got you! Your travel curator will tailor travel plans for you, so you can focus on other things."],
      ["it's okay",
      "Gotcha. Having your own travel curator to tailor your travel plans and make your itinerary planning effortless. "],
      ["love it",
      "Great! So do we. Think of us as your new travel planning buddy."],
    ],
  };
  return (
    <form>
      <h2>{question.question}</h2>
      {question.options.map((o) => {
        return (
          <>
            <input type="radio" id={o[0]} name={question.tag} value={o[0]} />
            <label for={o[0]}>{o[0]}</label>
            <br />
          </>
        );
      })}
    </form>
  );
}
export default SignupQuestion;
