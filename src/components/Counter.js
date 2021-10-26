import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css'
import Button from "react-bootstrap/Button"

const countStyle = {
    marginbottom: 20,
    fontSize: 68,
    textAlign: "center"
}

class Counter extends React.Component {

    render() {
        return ( 
        <div className="row justify-content-center my-3">
            <Button variant="outline-danger" className="col-2 rounded-circle" onClick={() => this.props.substract(this.props.choice)}>-</Button>
            <h2 style={countStyle} className="col-3 mx-4">{this.props.count}</h2>
            <Button variant="outline-success" className="col-2 rounded-circle" onClick={() => this.props.increment(this.props.choice)}>+</Button>
        </div>
    
        )
    }

}

export default Counter