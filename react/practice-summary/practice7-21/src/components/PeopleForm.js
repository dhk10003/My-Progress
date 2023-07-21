import {useState} from "react"

const PeopleForm = ({addPerson, title})=>{
    // set up state for form:
    // we need to set up state for name, age, and bio

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [bio, setBio] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        // we need to get the values from the form
        addPerson(name, age, bio)
        // clear form:
        setName("")
        setAge("")
        setBio("")
    }

    return (
        <form onSubmit={(e)=>{handleSubmit(e)}}>
            <h1>{title}</h1>
            {/* 
                below is an example of a controlled form. This simply means that the value of the input is controlled by state.
                if we want to change the value of the input, we need to change the state.
                if we want to change the state, we need to change the value of the input.
                if we don't do this, then the input will not change, and the user will not be able to type in the input.
             */}
             
            <input type="text" placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)}} />
            <input type="text" placeholder="age" value={age} onChange={(e)=>setAge(e.target.value)} />
            <input type="text" placeholder="bio" value={bio} onChange={(e)=>setBio(e.target.value)}/>
            <input type="submit" value="add person"/>
        </form>
        )
}

export default PeopleForm