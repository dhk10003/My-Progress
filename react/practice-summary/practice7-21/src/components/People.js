import PeopleForm from "./PeopleForm"
import Person from "./Person"
import {useState} from "react"

const People=({title})=>{

    // state for people (array of people objects):
    const [people, setPeople] = useState([])

    function addPerson(name, age, bio){
        setPeople([...people, {name, age, bio}])
    }

    return(
        <div>
            {/* this is us rendering our list of people */}
            <ol>{
                people.map((person, index)=>{
                    return <Person key={index} person={person} />
                })
            }</ol>

            <PeopleForm addPerson = {addPerson} title={title} />
        </div>
    )
}

export default People