//  This is Router.js and it stores all the routes for the application

import {Routes , Route} from 'react-router-dom'
import Main from '../pages/Main'
import Login from '../pages/Login'
import Register from '../pages/Register'
import MovieDetail from '../pages/MovieDetail'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/details/:id" element={<MovieDetail />} />
        </Routes>
    )
}

export default Router