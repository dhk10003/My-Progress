// This is the NavBar component using Tailwind-Css. It is the navigation bar at the top of the page.
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {auth} from "../auth/firebase"
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { userName, login, setLogin } = useContext(AuthContext);
    const navigate = useNavigate()

    const logOut = async () => {
        try {
            await signOut(auth)
            setLogin(false)
            navigate("/login")

        }
        catch(err) {
            console.log(err)
        }
    }

  return (
    <div className="bg-black p-[15px] flex flex-row justify-between text-white">
      <h1 className="text-2xl text-red-500 ml-4 cursor-pointer">
        <Link to="/">David's Movie App</Link>
      </h1>
      <div className="flex flex-row space-x-4 mr-4">
        {login ? (
          <>
            <p className="text-xl">Welcome, <span className="text-yellow-500">{userName}</span></p>
            <Link
              to="/"
              className="transition ease-in-out delay-100 border-solid border-2 border-white p-1.5 px-3 rounded-md hover:text-black hover:bg-white"
                onClick={logOut}
            >
              LogOut
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="transition ease-in-out delay-100 border-solid border-2 border-white p-1.5 px-3 rounded-md hover:text-black hover:bg-white"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="transition ease-in-out delay-100 border-solid border-2 border-white p-1.5 px-3 rounded-md hover:text-black hover:bg-white"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
