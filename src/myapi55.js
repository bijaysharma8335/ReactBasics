import React,{Component} from 'react';
import axios from 'axios';
class Myapi5 extends Component{
    constructor(){
        super();
        this.state={
            city:[],
            mycity:[]
        }

    }
    getMycity = () => {
        axios.get("city.json").then(response => {
            this.setState({
                city:response.data,
                mycity:response.data[0].city
            })
        })
    }
    componentDidMount() {
        this.getMycity();
    }
    getcity=(index)=>{
        this.setState({
           mycity:this.state.city[index].city
        })
        
    }
    render(){
        return<div className="container">
            <div className="col-md-12 text-center text-success">
                <h1>Available Cities are:{this.state.city.length}</h1>

            </div>
            <div className="col-md-3">
           
                    {
                            this.state.city.map((xcity,index)=>{
                                return<button
                                         key={index} className="btn btn-danger m-3"
                                          onClick={this.getcity.bind(this,index)}>
                                    {xcity.city} has {xcity.client.length} clients

                                </button>
                            })
                    }
                        </div>
            <div className="col-md-9">
                { this.state.mycity.map((x, index)=>{
                                return <p className ="border p-3" key={index}>{x}</p>
                            })
                }
                    
            
            </div>
        </div>
    }
}
export default Myapi5;