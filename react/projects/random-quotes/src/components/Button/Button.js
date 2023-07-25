import './Button.css';

const Button = ({onClick}) => {
    return <button className='Button' onClick={onClick} >Generate</button>
}


export default Button