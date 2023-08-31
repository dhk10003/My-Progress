export const inc = (payload)=>({type: 'INCREASE', payload})
export const dec = (payload)=>({type: 'DECREASE', payload})
export const res = (payload)=>({type: 'RESET', payload})

function something(value){
    return {
        type: 'SOMETHING',
        payload: value
    }
}