import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css'
import Counter from './components/Counter';



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count1: 0,
      count2: 0,
    }
  }

  handleMinusClick = (counter) => {
    if (counter === "count1") { 
      if (this.state.count1 > 0) 
      this.setState({ count1: this.state.count1 - 1 })
    } else if (counter === "count2") 
      if (this.state.count2 > 0) {
      this.setState({ count2: this.state.count2 - 1 })
      }
    }
    
  handlePlusClick = (counter) => {
    if (counter === "count1") { 
      if (this.state.count1 < 100) 
      this.setState({ count1: this.state.count1 + 1 })
    } else if (counter === "count2") {
      if (this.state.count2 < 100) 
      this.setState({ count2: this.state.count2 + 1 })
    }
  }
  

  render() {
    return (
      <>
      <div className="container border mt-5 pb-4 justify-content-center">
        <div className="row">
          <h1 className="text-center bg-dark text-white py-2">Counter</h1>
        </div>
        <div className="row">
          <Counter choice="count1" count={this.state.count1} substract={this.handleMinusClick} increment={this.handlePlusClick}/>
          <Counter choice="count2" count={this.state.count2} substract={this.handleMinusClick} increment={this.handlePlusClick}/>
        </div>
      </div>
      </> 
    )
  }

}


export default App
