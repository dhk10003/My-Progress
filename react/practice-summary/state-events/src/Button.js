// UI component, aka presentational component, aka dumb component
const Button = ({ text, handleClick }) => {
    return (
        <div style={{ backgroundColor: "blue" }}>
            <button style={{ opacity: ".9", margin: "5px" }} onClick={() => { handleClick(text) }}>{text}</button>
        </div>
    )
}

export default Button;