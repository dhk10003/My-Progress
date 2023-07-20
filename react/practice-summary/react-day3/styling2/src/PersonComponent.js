import PersonStyle from './PersonComponent.module.scss'
// toggle this to see what happens if you import CSS:
// this will add these rules to the global CSS 
// import './Pcomponent.css'

const PersonComponent = ({person})=>{
    // destructuring person object:
    let {name, age, location, imgUrl} = person
    return(
        // if the person is older than 21, using inline styling and a ternary operator, make the background green:
        <div className={PersonStyle.personCard} style={{backgroundColor: age>=21 ? 'green' : 'red'}}>
        {/* // <div className={PersonStyle.personCard} style={age>=30?{backgroundColor:"green"}:{backgroundColor:"red"}}> */}
            <img src={imgUrl} alt={name} />
            <div className={PersonStyle.personCardText}>
                <h2>{name}</h2>
                <p>Age: {age}</p>
                <p>Location: {location}</p>
            </div>
        </div>
    )
}

export default PersonComponent