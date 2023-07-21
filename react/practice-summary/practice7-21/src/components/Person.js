const Person = ({person})=>{
    return(
        <li>
            {/* person info */}
            <h2>{person.name}</h2>
            <h3>{person.age}</h3>
            <p>{person.bio}</p>
        </li>
    )
}

export default Person