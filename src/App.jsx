import Nav from './components/navigation'
import TopSection from './components/topSection'
import Middle from './components/middleSection'
import Search from './components/search'

function App() {

  return (
    <>
    <div className='h-screen'>
    <Nav/>
    <TopSection/>
    </div>
    <Search/>
    <Middle/>

    </>
  )
}

export default App
