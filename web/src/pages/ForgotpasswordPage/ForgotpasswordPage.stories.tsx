import type { ComponentMeta } from '@storybook/react'

import ForgotpasswordPage from './ForgotpasswordPage'

export const generated = () => {
  return <ForgotpasswordPage />
}

export default {
  title: 'Pages/ForgotpasswordPage',
  component: ForgotpasswordPage,
} as ComponentMeta<typeof ForgotpasswordPage>
