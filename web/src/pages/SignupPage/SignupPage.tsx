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
      <div className="flex min-h-screen flex-col justify-center bg-gray-50 py-12 sm:px-6 lg:px-8">
        <Head>
          + <title>SignUp</title>+{' '}
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
            Create a new account
          </h1>
        </div>
        {/* <turbo-frame id="sign_up_form" target="_top"> */}
        <form
          className="new_user"
          id="new_user"
          action="/users"
          accept-charset="UTF-8"
          method="post"
        >
          <input
            type="hidden"
            name="authenticity_token"
            //value="ZjEHjyHOguC2WWhBcSvJAWn8ezVpffKEyl0DsQCZXuTyuoWX-2ny-l1_qNoUpRLzTla5ZB3HwWbgGc3rq32sLg"
            autoComplete="off"
          />
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="space-y-6 bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
              <div className="flex">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <div className="mt-1">
                    <input
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      type="text"
                      name="user[first_name]"
                      id="user_first_name"
                      required
                    />
                  </div>
                </div>
                <div className="ml-2">
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <div className="mt-1">
                    <input
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      type="text"
                      name="user[last_name]"
                      id="user_last_name"
                      required
                    />
                  </div>
                </div>
              </div>
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
                    name="user[email]"
                    id="user_email"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Name
                </label>
                <div className="mt-1">
                  <input
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    type="text"
                    name="user[company]"
                    id="user_company"
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
                  <em>(6 characters minimum)</em>
                  <input
                    autoComplete="new_password"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    type="password"
                    name="user[new_password]"
                    id="user_new_password"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password_confirmation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password Confirmation
                </label>
                <div className="mt-1">
                  <input
                    autoComplete="new_password_confirmation"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    type="password"
                    name="user[new_password_confirmation]"
                    id="user_new_password_confirmation"
                    required
                  />
                </div>
              </div>
              <div className="actions">
                <input
                  type="submit"
                  name="commit"
                  value="Sign up"
                  className="flex w-full cursor-pointer justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  data-disable-with="Sign up"
                />
              </div>
              <div className="text-center text-sm">
                <a
                  href="/"
                  className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline"
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </form>
        {/* </turbo-frame> */}
      </div>
    </>
  )
}
