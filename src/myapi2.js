import React,{Component} from 'react';
import axios from'axios';
class Myapi2 extends Component{
    constructor()
    {
        super();
        this.state={
            Book:[]
        }
    }
    getBook=()=>{
        axios.get("book.json").then(response=>{
            this.setState({
                Book:response.data
                        })
            })
    }

         render(){
            return <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <button className="btn btn-primary m-3"
                                 onClick={this.getBook}>Show Book</button>
    
                                 <h2>Available Books:{this.state.Book.length}</h2>
                                 </div>
                           <div className="col-md-12 text-center">
                                <h1 className="text-danger ">Book</h1>
                                {this.state.Book.map((xBook,index)=>{
                                    return<p key={index}>{xBook}</p>
                                }
                                )}
                            </div>
                            </div>
                            
                        </div>
                    
                
        }
    }
    export default Myapi2;