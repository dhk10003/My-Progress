const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    console.log(state)
    switch(action.type){
        case 'INCREASE':
            return { counter: state.counter + action.payload}
        case 'DECREASE':
            return { counter: state.counter - action.payload}
        case 'RESET':
            return {counter: action.payload}
        default: return { ...state }
    }
}

export default counterReducer;