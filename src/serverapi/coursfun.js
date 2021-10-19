import React,{Component} from 'react';
import axios from 'axios';
class Service extends Component{
    constructor(){
    super();
    this.state={
        id:[]
}
    }
    getInfo=()=>{
        axios.get("https://www.firstenquiry.com/api/react/live/allservice.php").then(response=>{
            this.setState({
                id:response.data
            })
        })
    }
    componentDidMount(){
        this.getInfo();
    }

render(){
    return<div className="container">
        <div className="row">
            <div className="col-md-12">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Parent Id</th>
                            <th>Name</th>
                            <th>Files</th>
                            <th>SEO Name</th>
                            <th>Active</th>
                            <th>Display Home</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.id.map((x,index)=>{
                                return <tr key={index}>
                                    <td>{x.id}</td>
                                    <td>{x.parentid}</td>
                                    <td>{x.name}</td>
                                    <td>{x.files}</td>
                                    <td>{x.seoname}</td>
                                    <td>{x.active}</td>
                                    <td>{x.displayhome}</td>
                                

                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}
}
export default Service;
