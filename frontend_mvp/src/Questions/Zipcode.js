import { useState, useContext } from "react";

import { Field, Label, TextInput } from "tailwind-react-ui";
import Tag from "./Tag";
function Zipcode() {
  let [answers, setAnswers] = useState({});

  return (
    <div className="min-h-screen items-center justify-center bg-gray-50">
      <form className="flex items-center 
      justify-center">
        <Field>
          <Label>What's your zipcode?</Label>
          <TextInput></TextInput>
        </Field>
      </form>
      <div>
        <button className="inline-flex items-center justify-center h-10 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-500 hover:bg-indigo-600 focus:shadow-outline focus:outline-none">
          Next
        </button>
        <Tag text="hello"/>
      </div>
    </div>
  );
}

export default Zipcode;
