import React,{Component} from 'react';
class StateOne extends Component{
    constructor(){
        super();
        this.state={
            counter:5
        }
    }
    one=()=>
    {
        this.setState({
           counter:this.state.counter + 5
        })
    }
    two=()=>
    {
        this.setState({
            counter:this.state.counter-5
        })
    }
    three=()=>
    {
        this.setState({
            counter:this.state.counter * this.state.counter
        })
    }
    four=()=>
    {
        this.setState({
            counter:this.state.counter + this.state.counter
        })
    }
    render(){
       
        return<div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>State Management in ReactJs</h1>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-md-2">
                    <button className="btn btn-primary" onClick={this.one}>+ By 5</button>
                </div>
                <div className="col-md-8">
                    <h1 className="text-success">
                        The counter is: {this.state.counter}</h1>
                        <br/>
                        <br/>
                        <button className="btn btn-warning" onClick={this.three}>Get Square of:{this.state.counter}</button>
                        <br/><br/>
                        <button className="btn btn-secondary" onClick={this.four}>Get Sum of:{this.state.counter}</button>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-danger" onClick={this.two}>- By 5</button>
                </div>
            </div>
        </div>
    }
}
export default StateOne;
