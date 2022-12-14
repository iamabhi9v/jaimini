// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgotpassword" page={ForgotpasswordPage} name="forgotpassword" />
      <Route path="/settings" page={SettingsPage} name="settings" />
      <Route path="/" page={SigninPage} name="signin" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
