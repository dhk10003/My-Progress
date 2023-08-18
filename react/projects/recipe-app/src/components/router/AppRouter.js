import {Routes, Route} from "react-router-dom";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Login from "../../pages/login/Login";
import Details from "../../pages/details/Details";

const AppRouter = () => {

    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} />
        </Routes>
    )
};

export default AppRouter;