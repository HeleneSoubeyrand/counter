import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css'
import Counter from './components/Counter';

const titleStyle = {
  backgroundColor: "black",
  color: "white",
  textAlign: "center"
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0 
    }
  }

  handleMinusClick = () => {
    if (this.state.count > 0) {
    this.setState({ count: this.state.count - 1 })
    }
  }

  handlePlusClick = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <>
      <h1 style={titleStyle}>COUNTER</h1>
      <Counter count={this.state.count} substract={this.handleMinusClick} increment={this.handlePlusClick}/>
      </> 
    )
  }

}


export default App
