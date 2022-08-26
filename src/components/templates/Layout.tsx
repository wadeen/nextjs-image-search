import Header from '@/components/organisms/Header'

import { ReactNode } from 'react'
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main id="wrapper">{children}</main>
    </>
  )
}

export default Layout
