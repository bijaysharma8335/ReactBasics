import React,{Component} from 'react';
import axios from 'axios';
class Myapi3 extends Component{
    constructor(){
        super();
        this.state={
            Customer:[],
            product:[],
            invoice:[],
            vendors:[],
            clients:[]
        }
    }
    getCustomer =()=>{
        axios.get("Customer.json").then(response=>{
            this.setState({
                Customer:response.data
                 })
            })
    }
    getProduct =()=>{
            axios.get("product.json").then(response=>{
                this.setState({
                    product:response.data
                })
            })
        }
     getInvoice =()=>{
                axios.get("invoice.json").then(response=>{
                    this.setState({
                        invoice:response.data
                    })
                })
            }
    getVendors =()=>{
                    axios.get("vendors.json").then(response=>{
                        this.setState({
                            vendors:response.data
                        })
                    })
                }
    getClient =()=>{
                        axios.get("clients.json").then(response=>{
                            this.setState({
                                clients:response.data
                            })
                        })
                    }
    componentDidMount(){
        this.getCustomer();
        this.getProduct();
        this.getInvoice();
        this.getVendors();
        this.getClient();
    }
    render(){
        return <div className="container" >
            <h1 className="text-center text-success">Dashboard</h1>
                    <div className="row mt-5">
                        
                        <div className="col-md-4 " >
                            <div className="bg-danger p-4"  id="corner">
                                <h1 className="text-center"> Customer<br/>{this.state.Customer.length}</h1>
                            </div>
                        </div>
                        
                        
                        <div className="col-md-4">
                            <div className="bg-warning p-4"  id="corner">
                                <h1 className="text-center">Product<br/>{this.state.product.length}</h1>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="bg-success p-4" id="corner">
                                <h1 className="text-center">Invoice<br/>{this.state.Customer.length}</h1>
                            </div>
                        </div>    
                    </div>    <br/>
                    <br/>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="bg-info p-4" id="corner">
                                <h1 className="text-center">Available vendors<br/>{this.state.vendors.length}</h1>
                            </div>
                        </div>    

                        <div className="col-md-6">
                            <div className="bg-secondary p-4" id="corner">
                                <h1 className="text-center">Available Clients<br/>{this.state.clients.length}</h1>
                            </div>
                        </div>    
                        
                    </div>    

                </div>
                    
                
    }
}

export default Myapi3;