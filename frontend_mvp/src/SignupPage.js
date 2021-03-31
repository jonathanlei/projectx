import { Flex, Box, List, Text } from "tailwind-react-ui";
import signup from "./static/assets/signup.jpg";
const introTexts = [
  "Get tailormade travel plans in your price range - based on your profile",
  "Work with a Wander@ease curator and customize your plan - craft your dream vacation",
  "No subscription or hidden fees required",
];
function SignupPage() {
  return (
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-1 px-1 sm:px-6 lg:px-8">
      <div class="min-w-md w-full space-y-5">
        <div>
          <h2 class="mb-5 font-sans text-3xl font-bold tracking-tight text-indigo-500 sm:text-4xl sm:leading-nones">
            kickstart your travel dreams
          </h2>
        </div>

        <Flex>
          <Box flex={1} className="mx-5">
            <img src={signup} className="rounded-md"></img>
          </Box>
          <Box flex={1}>
            <div className="h-2/4">
              {introTexts.map((i) => {
                let sentences = i.split("-");
                return (
                  <div className="h-1/3 w-4/5 m-auto mt-4">
                    <strong className="pr-5 mb-5 text-base text-gray-700 md:text-lg break-normal">
                      {sentences[0]}
                    </strong>
                    <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg break-normal">
                      {sentences[1] ? "-" + sentences[1] : ""}
                    </p>
                  </div>
                );
              })}
            </div>
            <h2 class="mt-4 text-center text-2xl font-extrabold text-indigo-500">
              Complete your travel profile
            </h2>
            <form class="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" value="true" />
              <div class="rounded-md shadow-sm -space-y-px">
                <div>
                  <label for="email-address" class="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Continue with email
                </button>
              </div>
            </form>
          </Box>
        </Flex>
        <div className="signin bg-gray-200 h-10 w-2/4 m-auto">
          <p className="pr-5 m-auto text-base text-gray-700 md:text-lg break-normal">
            already have an account?
            <a href="/login" className="text-indigo-400"> sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
