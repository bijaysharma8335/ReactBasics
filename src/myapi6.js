import React, { Component } from 'react';


import axios from 'axios';
//import Myapi5 from './myapi5';
class Myapi6 extends Component {
    constructor() {
        super();
        this.state = {
            carlist:[],
            carinfo:[]
        }
    }
    getCar=()=>
    {
        axios.get("https://www.firstenquiry.com/backup/jsonapi").then(response=>{
            this.setState({
                carlist:response.data,
                carinfo:response.data[0]
            })
        })
    }
    componentDidMount(){
        this.getCar();
    }
    getInfo=(carindex)=>{
        this.setState({
            carinfo:this.state.carlist[carindex]
        })
    }
    render(){
        return<div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-danger text-center">External JSON using Axios-{this.state.carlist.length}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 border p-2" class="myscroll">
                    {
                        this.state.carlist.map((car,index)=>{
                            return<p 
                            onClick={this.getInfo.bind(this,index)}
                             className="p-2 text-primary text-link"  
                             key={index}>
                                 {car.model}
                             </p>
                        })
                    }
                </div>
                <div className="col-md-9">
                    <div className="row">
                <div className="col-md-12">
                    <img src={`https://www.firstenquiry.com/api/img/${this.state.carinfo.image}`}
                    className="img-fluid"/>
                </div>
                    <div className="col-md-12">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Car Model</th>
                                    <td>{this.state.carinfo.model}</td>
                                </tr>
                                <tr>
                                    <th>Car Price</th>
                                    <td>{this.state.carinfo.price}</td>
                                </tr>
                                <tr>
                                    <th>Fuel Type</th>
                                    <td>{this.state.carinfo.fuelType}</td>
                                </tr>
                                <tr>
                                    <th>Car Version</th>
                                    <td>{this.state.carinfo.version}</td>
                                </tr>
                            </thead>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    </div>
    }

}
export default Myapi6;