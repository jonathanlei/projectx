import React from "react";
import { Link, useHistory } from "react-router-dom";
import homePageBackground from "./static/assets/homePageBackground.jpg";
import { FillButton, Checkbox, TailwindThemeProvider } from "tailwind-react-ui";
import { render } from "@testing-library/react";
// import { useContext } from "react";
// import UserContext from "./userContext";

/* 
Homepage with signup and login option 
Props: none 
App -> Routes -> Homepage
*/
class Homepage extends React.Component {
  // const currentUser = useContext(UserContext);

  // if (currentUser) history.push("/companies");
  render() {
    return (
      <>
        <div className=" min-h-screen relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 w-full bg-gray-200 h-auto">
          <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
            <svg
              viewBox="0 0 100 100"
              fill="currentColor"
              preserveAspectRatio="none slice"
              className="absolute left-0 hidden h-full text-gray-200 transform -translate-x-1/2 lg:block"
            >
              <path d="M50 0H100L50 100H0L50 0Z"></path>
            </svg>
            <img
              src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
              draggable="false"
            />
          </div>
          <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
            <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
              <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-indigo-500 sm:text-4xl sm:leading-none">
                Wander@ease
              </h2>
              <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Put your travel dreams on a fast track.
              </h2>
              <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                Personal traveler planner for you and friends. Cross items off
                your dream destination bucket list.
              </p>
              <div className="flex items-center">
                <a
                  href="/signup"
                  className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-500 hover:bg-indigo-500 focus:shadow-outline focus:outline-none"
                  draggable="false"
                >
                  Take your travel style quiz
                </a>
                <a
                  href="/quiz"
                  aria-label=""
                  className="inline-flex items-center font-semibold text-gray-900 transition-colors duration-200 hover:text-gray-700"
                  draggable="false"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Homepage;
