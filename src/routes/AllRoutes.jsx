import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AskQuestion from '../pages/AskQuestion'
import SinglePageQnA from '../pages/SinglePageQnA'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'


const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/ask-question' element={<AskQuestion />} />
            <Route path='/question/:id' element={<SinglePageQnA />} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/signin' element={<SignIn/>} />
        </Routes>
    )
}

export default AllRoutes