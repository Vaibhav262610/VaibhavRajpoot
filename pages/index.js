import About from '../components/About'
import Footer from '../components/Footer'
import Header from '../components/header'
import Navbar from '../components/Navbar'
import SideIcons from '../components/SideIcons'
import WhyMe from '../components/WhyMe'

export default function Home() {
  return (
    <>
      <Navbar/>
      <SideIcons/>
      <Header/>
      <About/>
      <WhyMe/>
      <Footer/>
    </>
  )
}
