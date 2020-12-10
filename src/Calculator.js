import React, { Component } from "react";

class Calculator extends Component {
    constructor() {
        super()
        this.state = {
            result: 0,
            num1: 0,
            num2: 0,
        }
    }

    setNum = (e, num) => {
        this.setState({[num]: parseInt(e.target.value)});
    }

    getSum = (e) => {
        e.preventDefault();
        let sum = this.state.num1 + this.state.num2
        this.setState({ result: sum })
    }

    render() {
        return (
            <div className="container">
                <h1>Add with React!</h1>

                <div className="add">
                    <input type="number" placeholder="EnterYour first number" value={this.state.num1} onChange={(e) => this.setNum(e, 'num1')}/>
                    <span>+</span>
                    <input type="number" placeholder="Enter your second number" value={this.setState.num2} onChange={(e) => this.setNum(e, 'num2')}/>
                    <button onClick={this.getSum}>=</button>
                    <h3>{this.state.result}</h3>
                </div>
            </div>
        );
    }
}

export default Calculator;