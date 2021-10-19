import React, { Component } from 'react';
import axios from 'axios';
class Myapi5 extends Component {
    constructor() {
        super();
        this.state = {
            client: [],
            myclient: []
        }
    }
    getMyarray = () => {
        axios.get("city.json").then(response => {
            this.setState({
                client:response.data,
                myclient:response.data[0].client
            })
        })
    }
    componentDidMount() {
        this.getMyarray();
    }
    getArray=(index)=>{
        this.setState({
           myclient:this.state.client[index].client 
        })
        
    }
    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>Available Cities:{this.state.client.length}</h1>
                    </div>
                    <div className="col-md-3">
                        {
                            this.state.client.map((xclient,index)=>{
                                return<button
                                         key = {index} className="btn btn-danger m-3"
                                          onClick={this.getArray.bind(this,index)}>
                                    {xclient.city} has {xclient.client.length} items

                                </button>
                            })
                        }
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                        <div className="col-md-6">
                        <h4>Available Products:</h4>
                         { this.state.myclient.map((x, index)=>{
                                return<p className ="border p-3" key={index}>{x}</p>
                            })
                        }
                    </div>
                    <div className="col-md-6">
                        
                    </div>
                    </div>
                    </div>
            </div>
 
        </div>


    }
}
export default Myapi5; 