import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AskQuestion from '../pages/AskQuestion'
import SinglePageQnA from '../pages/SinglePageQnA'


const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/ask-question' element={<AskQuestion />} />
            <Route path='/question/:id' element={<SinglePageQnA />} />
        </Routes>
    )
}

export default AllRoutes