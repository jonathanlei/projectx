import Tag from "./Tag";
import { useState } from "react";
import { Label, Flex, Box } from "tailwind-react-ui";
const priorities_tags = [
  "value",
  "food",
  "culture",
  "novel experiences",
  "comfort",
  "beach",
  "nature",
  "foreign language learning",
  "luxury",
  "photography",
  "spa",
];
function Priorities() {
  let [tags, setTags] = [];
  return (
    <div className="min-h-screen items-center justify-center bg-gray-50">
      <div className= "p-10 bg-gray-50">
        <Label className="mb-5 text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl sm:leading-none Cambria">What are your priorities in booking a trip? </Label>
        <Flex
          wrap
          m={{ b: 4 }}
          className="w-1/2 justify-center items-center m-auto"
        >
          {priorities_tags.map((t) => (
            <Box>
              <Tag text={t} />
            </Box>
          ))}
        </Flex>
      </div>
      <div>
        <button className="inline-flex items-center justify-center h-10 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-500 hover:bg-indigo-600 focus:shadow-outline focus:outline-none">
          Next
        </button>
      </div>
    </div>
  );
}

export default Priorities;
