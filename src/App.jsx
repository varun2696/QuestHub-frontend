import './App.css'
import Navbar from './components/Navbar'
import AskQuestion from './pages/AskQuestion'
import HomePage from './pages/HomePage'
import SinglePageQnA from './pages/SinglePageQnA'


function App() {
  return (
    <div className='main-content'>
      <Navbar />
      {/* <AskQuestion /> */}
      {/* <HomePage/> */}
      <SinglePageQnA />
    </div>

  )
}

export default App
