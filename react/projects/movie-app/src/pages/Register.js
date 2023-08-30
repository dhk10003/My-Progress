import { useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import {auth} from "../auth/firebase"
import { AuthContext } from "../context/AuthContext"

const Register = () => {

    const {setUserName} = useContext(AuthContext)

    const navigate = useNavigate()
    const [registerName, setRegisterName] = useState("")
    const [registerEmail, setRegisterEmail] = useState("") 
    const [registerPassword, setRegisterPassword] = useState("")



    const signUp = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            await updateProfile(auth.currentUser, { displayName: registerName })
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
        <div className="container w-[400px] mx-auto p-5 flex flex-col gap-[20px] bg-black opacity-80 text-white mt-[50px] rounded-2xl">
            <h1 className="mx-auto text-[2rem]">Register</h1>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Enter your name" className="p-3 bg-black border-solid border-2 border-white" onChange={(e)=>setRegisterName(e.target.value)} value={registerName}/>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your email" className="p-3 bg-black border-solid border-2 border-white" onChange={(e)=>setRegisterEmail(e.target.value)} value={registerEmail}/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Enter your password" className="p-3 bg-black border-solid border-2 border-white" onChange={(e)=>setRegisterPassword(e.target.value)} value={registerPassword}/>
            <button className="p-3 bg-blue-600 rounded-xl" onClick={signUp}>Sign Up</button>
            <div className="mx-auto ">
                <p>Has an account? <span className="text-yellow-500 cursor-pointer" onClick={()=>navigate("/login")}>Login</span></p>
            </div>

        </div>
    )
}

export default Register