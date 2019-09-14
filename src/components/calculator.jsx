import React from 'react';
import ReactDOM from 'react-dom';
import './calculator.css';

export default class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            result: "0",
            array: [1,2,3,4,5,6,7,8,9,0],
            arr: ["+","-","*","/","."]
        }
    }
    
    handleClick(result){
        if (this.state.result == "0") {
            this.setState({
                result: String(result)
            })
        } else {
            this.setState({ 
                result: this.state.result.concat(result)
            })
        }
           
    }
    addOperator(result){
            this.setState({
                result: this.state.result.concat(result) 
            })    
    }
    clearAll(){
        this.setState({
            result : ""
        })  
    }
    equalTo(){
        try{
        this.setState({
            result: (eval(this.state.result) || "" ) + ""
        })
    }
    catch{
        this.setState({
            result: "error"
        })
    }
    }
    backSpace(){
        this.setState({
            result: this.state.result.slice(0, -1)
                })
    }



    render(){
        return(
            <div className = "calculator">

                    <div className = "result-display">
                        {this.state.result}
                    </div>

                
                    <div className = "calculator-keys">
                        {
                            this.state.array.map((key, index) =>
                              <button className = "calculator-keys" onClick={this.handleClick.bind(this, key)}>{key}</button>    
                            )
                        }
                        {

                            this.state.arr.map((key, index) => {
                                return <button type="button" onClick = {this.addOperator.bind(this, key)} class="operator">{key}</button>
                            })
                        }
                        <button onClick = {this.clearAll.bind(this)} type="button" class="all-clear" value="all-clear">AC</button>
                        <button onClick = {this.equalTo.bind(this)} className = "calculator-keys" >=</button>
                        <button onClick = {this.backSpace.bind(this)} className = "calculator-keys" >C</button>

                    </div>
                
            </div>
        )
    }
}
