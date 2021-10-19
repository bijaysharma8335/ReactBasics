import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const Myhook6 = () => {
    const [userlist, updateUser] = useState([{name:'Abc',mobile:'8888',city:'Pune',age:'10 Years',pic:'1.jpg'}]);
    const { id } = useParams();

    useEffect(() => {
        axios.get("user.json").then(response => {
            updateUser(response.data);
        })
    }, [true]);
    return <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mt-3">
                        <h2 className="text-danger">{userlist.length}-useState ,useParams,useEffect</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <ul className="list-group">
                            <li className="list-group-item active">Navigation</li>
                            {
                                userlist.map((row, index) => {
                                    return <li className="list-group-item " key={index}>
                                        <Link to={`/${index}/hook6`}> {row.name} </Link>
                                    </li>
                                })
                            }
                        </ul>

                    </div>
                 
                    <div className="col-md-5">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Full Name</th>
                                    <td>{userlist[id].name}</td>
                                </tr>
                                <tr>
                                    <th>Mobile No</th>
                                    <td>{userlist[id].mobile}</td>
                                </tr>
                                <tr>
                                    <th>Age</th>
                                    <td>{userlist[id].age}</td>
                                </tr>
                                <tr>
                                    <th>City</th>
                                    <td>{userlist[id].city}</td>
                                </tr>
                            
                            </thead>
                        </table>
                    </div>

                    <div className="col-md-4">
                        <img className="img-fluid rounded" src={userlist[id].pic}/>
                    </div>
                </div>
            </div>
}
export default Myhook6;