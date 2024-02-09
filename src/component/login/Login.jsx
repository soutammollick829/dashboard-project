import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow overflow-hidden">
      <div className="w-full p-8">
        <form method="post" action="#" onSubmit="return false">
          <h1 className=" text-2xl font-bold mt-10">Sign in to your account</h1>
          <div>
            <span className="text-gray-600 text-sm">
              Do not have an account?
            </span>
            <Link to="/register">
            <span className="text-gray-700 text-sm font-semibold">Sign up</span>
            </Link>
          </div>
          <div className="mb-4 mt-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
              id="email"
              type="text"
              placeholder="Your email address"
            />
          </div>
          <div className="mb-6 mt-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
              id="password"
              type="password"
              placeholder="Your password"
            />
            <a
              className="inline-block align-baseline text-sm text-gray-600 hover:text-gray-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="flex w-full mt-8">
            <button
              className="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
              type="button"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
