import React from 'react';

class ClassApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            num: props.num
        }
    }

    handleIncrement = ()=>{
        this.setState((state)=>({
            num: state.num + 1
        }))
    }

    handleDecrement = ()=>{
        this.setState((state)=>({
            num: state.num - 1
        }))
    }

    render(){
        return (
        <>
            <h1>Hello from ClassApp</h1>
            <button onClick={this.handleDecrement}> - </button>
            <p>{this.state.num}</p>
            <button onClick={this.handleIncrement}> + </button>
        </>
        )
    }
}

export default ClassApp;