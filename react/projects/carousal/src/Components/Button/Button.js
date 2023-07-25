import "./Button.css"

const Button = ({direction, size, color, position, icon}) => {
    return(
        <i
            className = {icon} 
            onClick={direction}
            style={{
                fontSize: size,
                color: color,
                top: position.top,
                left: position.left,
                right: position.right,
                bottom: position.bottom
            }}
            
        />
    )
}

export default Button;