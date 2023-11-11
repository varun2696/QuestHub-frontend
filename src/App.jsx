import './App.css'
import Navbar from './components/Navbar'
import AskQuestion from './pages/AskQuestion'
import HomePage from './pages/HomePage'


function App() {
  return (
    <div className='main-content'>
      <Navbar />
      {/* <AskQuestion /> */}
      <HomePage/>
    </div>

  )
}

export default App
