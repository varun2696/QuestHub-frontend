import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const location = useLocation()
    // const {auth} = useSelector(store => store.authReducer)
    const authToken = sessionStorage.getItem('authToken');

    return authToken ? children : <Navigate to='/signin' state={location.pathname} replace />
}

export default PrivateRoute
