import { useState, useContext } from "react";
import { Field, Label, TextInput } from "tailwind-react-ui";
function Birthday() {
  return (
    <div className="min-h-screen items-center justify-center bg-gray-50">
      <form
        className="flex items-center 
      justify-center p-10"
      >
        <Field>
          <Label className="mb-5 text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl sm:leading-none Cambria">
            When's your Birthday?
          </Label>
          <input type="date"/>
        </Field>
      </form>
      <div>
        <button className="inline-flex items-center justify-center h-10 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-500 hover:bg-indigo-600 focus:shadow-outline focus:outline-none">
          Next
        </button>
      </div>
    </div>
  );
}
export default Birthday;
