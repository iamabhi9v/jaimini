import { Head } from '@redwoodjs/web'

export default function Forgotpassword() {
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
          + <title>Forgot Password</title>+{' '}
        </Head>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Send Reset Password Link
          </h2>
          <p className="max-w mt-2 text-center text-sm text-gray-600">
            Please provide your registered email address to get reset password
            link
          </p>
        </div>
        <form
          className="new_user"
          id="new_user"
          action="/users/password"
          accept-charset="UTF-8"
          method="post"
        >
          <input
            type="hidden"
            name="authenticity_token"
            value="8pdeQrdHNUhVoqlOb7oVw029WWIfG0-Ro30ZqnB3Xr3WCArxU05PHsT5BTrxgo5ZO_4C1HdxZJMNI6JZJ71VYA"
            autoComplete="off"
          />
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="mt-4 space-y-6 bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
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
                <input
                  type="submit"
                  name="commit"
                  value="Send me reset password instructions"
                  className="flex w-full cursor-pointer justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  data-disable-with="Send me reset password instructions"
                />
              </div>
              <div>
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
          </div>
        </form>{' '}
      </div>
    </>
  )
}
