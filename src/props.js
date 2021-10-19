import React, { Component } from 'react';
import Userlist from './userlist';
class Property extends Component {
    constructor() {
        super();
        this.state = {
            user: [
                { "name": "Hira", "mobile": "7545414245", "city": "Bangalore", "age": "23 years", "pic": "1.jpg" },
                { "name": "Sita", "mobile": "7550014245", "city": "Delhi", "age": "25 years", "pic": "2.jpg" },
                { "name": "Rita", "mobile": "75454455", "city": "Kolkatta", "age": "20 years", "pic": "3.jpg" },
                { "name": "Ama", "mobile": "7545498245", "city": "Falkle", "age": "12 years", "pic": "4.jpg" },
                { "name": "Rajesh", "mobile": "7545414245", "city": "Mumbai", "age": "83 years", "pic": "2.jpg" },
                { "name": "Bijay", "mobile": "7545124545", "city": "pune", "age": "53 years", "pic": "3.jpg" },
                { "name": "badoo", "mobile": "75450045", "city": "Chenai", "age": "33 years", "pic": "4.jpg" }
            ]
        }
    }
    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-12 text-center text-success">
                    <h2>Props Example-{this.state.user.length}</h2>
                </div>
            </div>
            <div className="row">
                {
                    this.state.user.map((xuser,index)=>{
                        return <Userlist
                        key={index}
                        fullname={xuser.name}
                        mobileno={xuser.mobile}
                        cityname={xuser.city}
                        age={xuser.age}
                        photo={xuser.pic}
                        />
                    })
                }
               
            </div>
        </div>
    }
}
export default Property;