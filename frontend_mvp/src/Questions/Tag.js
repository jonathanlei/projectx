import { useState } from "react";
function Tag({ text }) {
  let [selected, setSelected] = useState(true);

  function handleChange(evt) {
    evt.preventDefault();
    setSelected(s => !s);
  }


  const selectedClass = "inline-flex items-center justify-center h-8 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-indigo-500 focus:shadow-outline focus:outline-none"

  const unselectedClass = "inline-flex items-center justify-center h-8 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-gray-50 focus:shadow-outline focus:outline-none"
  return (
    <>
      <button
        className={selected ? selectedClass : unselectedClass}
        onClick={handleChange}
      >
        {text}
      </button>
    </>
  );
}

export default Tag; 