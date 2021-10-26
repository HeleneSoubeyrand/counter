import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css'
import Button from "react-bootstrap/Button"

const countStyle = {
    marginbottom: 20,
    fontSize: 100,
    textAlign: "center"
}


class Counter extends React.Component {
    render() {
        return (
  
        <div className="row justify-content-center mt-5">
            <Button variant="outline-success" className="col-3 mx-4" onClick={this.props.substract}>-</Button>
            <h2 style={countStyle} className="col-3 mx-4">{this.props.count}</h2>
            <Button variant="outline-danger" className=" col-3 mx-4" onClick={this.props.increment}>+</Button>
        </div>
    
        )
    }

}

export default Counter