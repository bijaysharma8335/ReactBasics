import React,{Component} from 'react';
class StateOne extends Component{
    constructor(){
        super();
        this.state={
           name:"",
           age:"",
           city:"",
           education:"",
           year:""
        }
    }

    one=()=>
    {
        this.setState({
           name:this.state.name="BIJAY"
        })
    }

    two=()=>
    {
        this.setState({
            age:this.state.age="20 Years"
        })
    }
    
    three=()=>
    {
        this.setState({
            city:this.state.city="Bangalore"
        })
    }

    four=()=>
    {
        this.setState({
            education:this.state.education="MCA"
        })
    }

    five=()=>
    {
        this.setState({
            year:this.state.year="2010"
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
                <div className="col-md-3">
                    <button className="btn btn-primary" onClick={this.one}>Show name</button>
                    <br/>
                    <br/>
                </div>
                <div className="col-md-9">
                    <h1 className="text-secondary">
                         {this.state.name}</h1>
                </div>
            </div>

            <div className="row text-center">
                <div className="col-md-3">
                    <button className="btn btn-info" onClick={this.two}>Age</button><br/><br/>
                </div>
                <div className="col-md-9">
                    <h1 className="text-success">
                    {this.state.age}</h1>
                </div>
            </div>

            <div className="row text-center">
                <div className="col-md-3">
                    <button className="btn btn-warning" onClick={this.three}>City</button><br/><br/>
                </div>
                <div className="col-md-9">
                    <h1 className="text-info">
                        {this.state.city}</h1>
                </div>
            </div>

            <div className="row text-center">
                <div className="col-md-3">
                    <button className="btn btn-danger" onClick={this.four}>Education</button><br/><br/>
                </div>
                <div className="col-md-9">
                    <h1 className="text-warning">
                        {this.state.education}</h1>
                </div>
            </div>

            <div className="row text-center">
                <div className="col-md-3">
                    <button className="btn btn-success" onClick={this.five}>Year</button><br/><br/>
                </div>
                <div className="col-md-9">
                    <h1 className="text-danger">
                        {this.state.year}</h1>
                 </div>
             </div>
        </div>
    }
}
export default StateOne;
