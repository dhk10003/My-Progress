import { Component } from 'react'

class ClassComp extends Component {
  constructor(props) {
    super(props)
    console.log('Constructor method executed')
    this.state = { count: 0 }
  }

  componentDidMount() {
    console.log('Class component mounted')
  }

  componentDidUpdate(preProps, prevState, snapshot) {
    console.log(preProps)
    console.log(prevState)
    console.log(snapshot)
    console.log('Class will be unmounted')
  }

  componentWillUnmount() {
    console.log('Component will unmount')
  }

  clickHandler = () => {
    this.setState((prev) => ({ count: prev.count + 1 }))
  }
  render() {
    console.log('Render method executed')
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.clickHandler}>Increase by 1</button>
      </div>
    )
  }
}

export default ClassComp
