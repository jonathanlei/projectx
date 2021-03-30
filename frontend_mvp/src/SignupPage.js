import { Flex, Box, Image } from "tailwind-react-ui";
import signup from "./static/assets/signup.jpg";
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
            <h2 class="mt-4 text-center text-2xl font-extrabold text-gray-900">
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
      </div>
    </div>
  );
}

export default SignupPage;
