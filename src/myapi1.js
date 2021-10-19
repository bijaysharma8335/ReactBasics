import React,{Component} from 'react';
import axios from 'axios';
class Myapi1 extends Component{
    constructor()
    {
        super();
        this.state={
            Customer:[],
            product:[]
        }
    }
    getCustomer =()=>{
        axios.get("Customer.json").then(response=>{
            this.setState({
                Customer:response.data
            })
        })

    }
    getProduct=()=>
    {
        axios.get("product.json").then(response=>{
            this.setState({
                product:response.data
            })
        })

    }
    componentDidMount(){
        this.getProduct();
    }
    render(){
        return <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <button className="btn btn-primary m-3"
                             onClick={this.getCustomer}>Show Customer</button>

                             <h2>Available Customer:{this.state.Customer.length}</h2>

                             <h2>Available Product:{this.state.product.length}</h2>


                    </div>
                        <div className="col-md-6">
                            <h1 className="text-danger">Customer</h1>
                            {this.state.Customer.map((xcustomer,index)=>{
                                return<p key={index}>{xcustomer}</p>
                            }
                            )}
                        </div>
                        <div className="col-md-6"><h1
                        className="text-danger">Product</h1>
                        {this.state.product.map((xproduct,index)=>{
                                return<p key={index}>{xproduct}</p>
                            }
                            )}
                            </div>
                    </div>
                </div>
    }
}
export default Myapi1;