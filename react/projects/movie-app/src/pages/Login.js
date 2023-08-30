import { useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import {auth} from "../auth/firebase"
import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"

const Login = () => {

    const navigate = useNavigate()
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const {setUserName} = useContext(AuthContext)

    const login = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            const user = userCredential.user
            const displayName = user.displayName
            setUserName(displayName)
            navigate("/")
        }
        catch(err) {
            console.log(err)
            alert("Invalid email or password")
        }
    }

    return (
        <div>
           <div className="container w-[400px] mx-auto p-5 flex flex-col gap-[20px] bg-black opacity-80 text-white mt-[50px] rounded-2xl">
            <h1 className="mx-auto text-[2rem]">Login</h1>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your email" className="p-3 bg-black border-solid border-2 border-white" onChange={(e)=>setLoginEmail(e.target.value)} value={loginEmail}/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Enter your password" className="p-3 bg-black border-solid border-2 border-white" onChange={(e)=>setLoginPassword(e.target.value)} value={loginPassword}/>
            <button className="p-3 bg-blue-600 rounded-xl" onClick={login}>Log In</button>
            <div className="mx-auto ">
                <p>Doesn't have an account? <span className="text-yellow-500 cursor-pointer" onClick={()=>navigate("/register")}>Sign Up</span></p>
            </div>

        </div>
        </div>
    )
}

export default Login