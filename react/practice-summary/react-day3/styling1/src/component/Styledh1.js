import React from "react"

// we have to give our modules a name:
import Styles from "./Styledh1.module.scss"
// benefits of using CSS modules:
// SCOPE! (no more global styles)
// no more naming conflicts
// no more specificity issues
// no more diffuculties maintaining CSS

// destructuring props in function declaration
// otherwise, it's props.content
// const Styledh1 = (props.content, props.condition))
const Styledh1 = ({content, condition}) => {
    console.log(Styles)

    // create a variable called primary. if condition is true, primary = "primary", otherwise, primary = ""
    let primary = condition ? "primary" : ""

    return(
        <div>
            {/* using a class with modules: */}
            <h1 className={Styles.primary}>{content}</h1>
            {/* using an id wwith modules: */}
            <p id={Styles['id']}> This is a paragraph</p>
        </div>
    )
}

export default Styledh1;