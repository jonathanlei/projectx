import { useState, useEffect } from "react";
import SignupRadioQuestion from "./SignupRadioQuestion";
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
  const [questionNumber, setQuestionNumber] = useState(1);

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

  return (
    <div className="SignupForm col-6 container">
      <SignupRadioQuestion />
      <form></form>
      <button onClick={goToNextQuestion}>Next</button>
    </div>
  );
}

export default SignupForm;
