import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AskQuestion from '../pages/AskQuestion'
import SinglePageQnA from '../pages/SinglePageQnA'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import PrivateRoute from './PrivateRoute'
import AllQuestions from '../pages/AllQuestions'


const AllRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={
                <HomePage />
            } />

            <Route path='/all-questions' element={
                <AllQuestions />
            } />

            <Route path='/ask-question' element={
                <PrivateRoute>
                    <AskQuestion />
                </PrivateRoute>
            } />

            <Route path='/question/:id' element={
                <PrivateRoute>
                    <SinglePageQnA />
                </PrivateRoute>
            } />

            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />

            <Route path='*' element={
                <h1 style={{ textAlign: 'center' }}>
                    404 Page Not Found
                </h1>} />
        </Routes>
    )
}

export default AllRoutes