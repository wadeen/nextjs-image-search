import Header from '@/components/organisms/Header'
const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main id="wrapper">{children}</main>
    </>
  )
}

export default Layout
