import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import PageLoader from './PageLoader'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <PageLoader />
      <Header />
      <main className="flex-1 pt-[88px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
