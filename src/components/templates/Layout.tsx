import Header from '@/components/organisms/Header'
const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
