import {useDispatch, useSelector} from 'react-redux'
import { inc, dec, res } from '../redux/actions/counterActions'
import {useState} from 'react'

const Counter = ()=>{

    const dispatch = useDispatch()
    const {counter} = useSelector((state)=>state.counterReducer)

    const [amount, setAmount] = useState(0)

    console.log(counter)

    return(
        <div>
            <h1>Counter: {counter}</h1>
            
            <br></br>
            <input type="number" onChange={(e)=>setAmount(parseInt(e.target.value))} value={amount}/>
            <br></br>

            <button onClick={()=>dispatch(inc(amount))}>+</button>
            <button onClick={()=>dispatch(dec(amount))}>-</button>
            <button onClick={()=>dispatch(res(amount))}>Reset</button>
        </div>
    )
}

export default Counter