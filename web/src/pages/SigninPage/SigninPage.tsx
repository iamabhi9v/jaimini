import { Head } from '@redwoodjs/web'

export default function Signin() {
  return (
    <>
      <nav className="bg-slate-800 py-3 px-4">
        <div className="flex flex-row">
          <img
            className=" h-8 w-auto object-left-top"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <p className="ml-4 text-2xl font-bold text-slate-50">
            Crownstack ATS
          </p>
        </div>
      </nav>
      <div className="flex min-h-screen flex-col justify-center bg-gray-50 py-6 sm:px-6 lg:px-8">
        <Head>
          + <title>SignIn</title>+{' '}
        </Head>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <a>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
          </a>
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h1>
          {/* <p className="max-w mt-2 text-center text-sm text-gray-600">
           Or
            <a
              href="/users/sign_up"
              className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline"
            >
              start your 14-day free trial
            </a>
           Please enter credentials to login into your account
          </p> */}
          <p className="max-w mt-2 text-center text-sm text-gray-600">
            Or
            <a
              href="/signup"
              className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline"
            >
              {' '}
              start your 14-day free trial
            </a>
          </p>
        </div>
        <form
          className="new_user"
          id="new_user"
          action="/users/sign_in"
          accept-charset="UTF-8"
          method="post"
        >
          <input
            type="hidden"
            name="authenticity_token"
            value="cS8PC96o-HwZRf9w6mYNmSMr8CyzjL8wR9-8b4-TTs4GmbG-Hhqy60RxY0he9eT0lL0M1p8XSR2NiwlBusRdvg"
            autoComplete="off"
          />
          <input
            type="hidden"
            name="redirect_to"
            id="redirect_to"
            autoComplete="off"
          />

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="space-y-6 bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <div className="mt-1">
                  <input
                    autoComplete="email"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    type="email"
                    //value=""
                    name="user[email]"
                    id="user_email"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    autoComplete="current-password"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    type="password"
                    name="user[password]"
                    id="user_password"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    name="user[remember_me]"
                    type="hidden"
                    value="0"
                    autoComplete="off"
                  />
                  <input
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    type="checkbox"
                    value="1"
                    name="user[remember_me]"
                    id="user_remember_me"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="/forgotpassword"
                    className="font-medium text-indigo-500 hover:text-indigo-600 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              {/* <div> */}
              {/* <input
                  type="submit"
                  name="commit"
                  value="Sign In"
                  className="flex w-full cursor-pointer justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  data-disable-with="Sign In"
                /> */}
              <button
                type="submit"
                className="flex w-full cursor-pointer justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign In
              </button>
              {/* </div> */}
              {/* <div className="text-center text-xs ">
                <a
                  href="/users/confirmation/new"
                  className="font-medium text-indigo-500 hover:text-indigo-600 hover:underline"
                >
                  Didn't receive email confirmation instructions?
                </a>
              </div> */}
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
