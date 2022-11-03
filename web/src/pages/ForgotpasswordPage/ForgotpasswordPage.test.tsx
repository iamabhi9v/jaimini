import { render } from '@redwoodjs/testing/web'

import ForgotpasswordPage from './ForgotpasswordPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ForgotpasswordPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ForgotpasswordPage />)
    }).not.toThrow()
  })
})
