import { useState, useEffect } from "react";
import SignupRadioQuestion from "./SignupRadioQuestion";
import signupQuestions from "./signupQuestions";

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

  /* Handles form data changes */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({ ...fData, [name]: value }));
  }

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

  return (
    <div className="SignupForm">
      <SignupRadioQuestion
        question={signupQuestions[questionNumber]}
        handleQuestionSubmission={handleQuestionSubmission}
      />
    </div>
  );
}

export default SignupForm;
