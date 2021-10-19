import React, { Component } from 'react';
import axios from 'axios';
class Myapi4 extends Component {
    constructor() {
        super();
        this.state = {
            product: [],
            myproduct: []
        }
    }
    getMyarray = () => {
        axios.get("myarray.json").then(response => {
            this.setState({
                product:response.data,
                myproduct:response.data[0].product
            })
        })
    }
    componentDidMount() {
        this.getMyarray();
    }
    getArray=(index)=>{
        this.setState({
           myproduct:this.state.product[index].product 
        })
        
    }
    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>Available Items:{this.state.product.length}</h1>

                        {
                            this.state.product.map((xproduct,index)=>{
                                return<button
                                         key={index} className="btn btn-primary m-3"
                                          onClick={this.getArray.bind(this,index)}>
                                    {xproduct.category} has {xproduct.product.length} items

                                </button>
                            })
                        }

                        <h4>Available Products:</h4>
                         { this.state.myproduct.map((x, index)=>{
                                return<p className ="border p-3" key={index}>{x}</p>
                            })
                        }
                    
                </div>
            </div>
 
        </div>
    }
}
export default Myapi4; 