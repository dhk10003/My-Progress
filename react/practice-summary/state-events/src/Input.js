const Input = ({val, handleChange})=>{
    return(
        <input type="text" value={val} onChange={(e)=>handleChange(e)}/>
    )
}

export default Input

// const handleChange = (e)=>{
//     setInput(e.target.value)
//     console.log(e.target.value)
// }

// const input = document.querySelector("#input")

// input.onchange = (e)=>{
//     handleChange(e)
// }

// input.addEventListener("change", e=>{
//     handleChange(e)
// })

// <input type="text" onchange="handleChange(e)"></input>