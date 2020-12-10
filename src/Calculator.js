import React, { Component } from "react";

class Calculator extends Component {
    constructor() {
        super()
        this.state = {
            result: 0,
            num1: 0,
            num2: 0,
            operator: "+",
        }
    }

    setNum = (e, num) => {
        this.setState({[num]: parseInt(e.target.value)});
    }

    operator = (e) => {
        let type = e.target.value;
        this.setState({operator: type});
    }

    getSum = (e) => {
        if(this.state.operator === "+") {
            let sum = this.state.num1 + this.state.num2;
            this.setState({ result: sum })
        } else if (this.state.operator === "-") {
            let sum = this.state.num1 - this.state.num2;
            this.setState({ result: sum })
        } else if (this.state.operator === "/") {
            let sum = this.state.num1 / this.state.num2;
            this.setState({ result: sum })
        } else if (this.state.operator === "*") {
            let sum = this.state.num1 * this.state.num2;
            this.setState({ result: sum })
        }
        e.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <h1>React Calculator!</h1>

                <div className="add">
                    <input type="number" placeholder="EnterYour first number" value={this.state.num1} onChange={(e) => this.setNum(e, 'num1')}/>
                    <select onChange={this.operator}>
                        <option>+</option>
                        <option>-</option>
                        <option>/</option>
                        <option>*</option>
                    </select>
                    <input type="number" placeholder="Enter your second number" value={this.setState.num2} onChange={(e) => this.setNum(e, 'num2')}/>
                    <button onClick={this.getSum}>=</button>
                    <h3>{this.state.result}</h3>
                </div>
            </div>
        );
    }
}

export default Calculator;