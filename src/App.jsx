import Nav from './components/navigation'
import TopSection from './components/topSection'
import Middle from './components/middleSection'
import Search from './components/search'
import Footer from './components/footer'

function App() {

  return (
    <>
    <div className='md:h-screen'>
    <Nav/>
    <TopSection/>
    </div>
    <Search/>
    <Middle/>
    <Footer/>
    </>
  )
}

export default App
