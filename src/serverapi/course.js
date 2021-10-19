import React, { Component } from 'react';
import axios from 'axios';
class Course extends Component {
    constructor() {
        super();
        this.state = {
            id:[]
        }
    }
    getArr = () => {
        axios.get("https://www.firstenquiry.com/api/react/live/alledu.php").then(response =>{
            this.setState({
                id:response.data
            })
        })

    }

    componentDidMount() {
        this.getArr();
    }
   
    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>ParentId</th>
                                <th>course Name</th>
                                <th>Page Url</th>
                                <th>Active</th>
                                <th>Leftnav</th>
                                <th>Home</th>
                            </tr>
                        </thead>
                       <tbody>
                           {
                               this.state.id.map((y,index)=>{
                                   return<tr key={index}>
                                       <td>{y.id}</td>
                                       <td>{y.parentid}</td>
                                       <td>{y.course_name}</td>
                                       <td>{y.pageurl}</td>
                                       <td>{y.active}</td>
                                       <td>{y.leftnav}</td>
                                       <td>{y.home}</td>
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
export default Course;