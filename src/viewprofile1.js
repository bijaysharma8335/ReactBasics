import React,{Component} from 'react';
import axios from 'axios';
class ViewProfile1 extends Component{
constructor(){
    
    super();
    this.state={
        name:[],
        myname:[]
    }
}
getMyarray = () => {
    axios.get("user.json").then(response => {
        this.setState({
            name:response.data,
            myname:response.data[0]
        })
    })
}
componentDidMount() {
    this.getMyarray();
}
getArray=(index)=>{
    this.setState({
       myname:this.state.name[index]
    })
    
}
render(){
    return<div className="container">
        <div className="row">
            <div className="col-md-12">
           

{
    this.state.name.map((xname,index)=>{
        return<button
                 key={index} className="btn btn-danger m-3"
                  onClick={this.getArray.bind(this,index)}>
            {xname.name}
        </button>
    })
}
    </div>
        </div>
        <div className="row">
            <div className="col-md-3"> 
            
                    <img src={this.state.myname.pic}
                    className="img-fluid rounded-circle"/>
                
                
                </div>
            
            <div className="col-md-6">
            <div className="col-md-12 text-center">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <td>{this.state.myname.name}</td>
                                </tr>
                                <tr>
                                    <th>Mobile</th>
                                    <td>{this.state.myname.mobile}</td>
                                </tr>
                                <tr>
                                    <th>City</th>
                                    <td>{this.state.myname.city}</td>
                                </tr>
                                <tr>
                                    <th>Age</th>
                                    <td>{this.state.myname.age}</td>
                                </tr>
                            </thead>
                        </table>
                
            </div>
            </div>
            <div className="col-md-3"></div>

        </div></div>
    

}
}
export  default ViewProfile1;