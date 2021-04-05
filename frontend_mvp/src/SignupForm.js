import { useState, useEffect } from "react";
import SignupRadioQuestion from "./SignupRadioQuestion";
import signupQuestions from "./signupQuestions";
import SignupPage from "./SignupPage";
import { QUESTION_ARRAY } from "./Questions/ProfileQuestion";

/* SignupForm Component
Props: signup function from Routes, App

State: 
  formData
  errorMessages
  isSigningUp: T/F

  App -> Routes -> SignupForm
*/
const initialFormData = {
  username: "test",
  password: "password",
  firstName: "testf",
  lastName: "testl",
  email: "test@test.com",
};

function SignupForm({ signup }) {
  // TODO: DUMMY DATA FOR TESTING, CHANGE LATER
  const [formData, setFormData] = useState(initialFormData);
  const [errorMessages, setErrorMessages] = useState([]);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);

  const [surveyAnswers, setSurveyAnswers] = useState({});

  /* Handles form submission */
  function handleSubmit(evt) {
    evt.preventDefault();
    setIsSigningUp(true);
  }

  function goToNextQuestion() {
    setQuestionNumber((n) => n + 1);
  }

  useEffect(
    function signupUser() {
      async function signupAPICall() {
        const resSignup = await signup(formData);

        if (resSignup[0] === "Signup successful") {
          setFormData(initialFormData);
        } else {
          setErrorMessages(resSignup);
        }
      }

      if (isSigningUp) {
        signupAPICall();
        setIsSigningUp(false);
      }
    },
    [formData, isSigningUp, signup]
  );

  /**
   * Handles SignupRadioQuestion answer selection
   * accepts selected radio option data from child
   **/
  function handleQuestionSubmission(answerData) {
    const { selectedOption } = answerData;

    setSurveyAnswers((prevAnswers) => ({
      ...prevAnswers,
      questionNumber: selectedOption,
    }));
    goToNextQuestion();
  }

  function handleEmail(email) {
    setSurveyAnswers((prevAnswers) => ({
      ...prevAnswers,
      email,
    }));
    goToNextQuestion();
  }

  function chooseForm() {
    if (questionNumber <= 2) {
      return (
        <div className="bg-gray-50 min-h-screen">
          <SignupRadioQuestion
            question={signupQuestions[questionNumber]}
            handleQuestionSubmission={handleQuestionSubmission}
          />
        </div>
      );
    } else if (questionNumber === 3) {
      return <SignupPage handleEmail={handleEmail}></SignupPage>;
    } else {
      return (<div>{QUESTION_ARRAY[questionNumber - 4]}</div>);
    }
  }

  return <div className="SignupForm">{chooseForm()}</div>;
}

export default SignupForm;
