import React,{useState} from 'react';
import {useParams,Link} from 'react-router-dom';
const Myhook5=()=>{
    const [customer ,updateCustomer]=useState([
        {name:"Ganesh",mobile:"99999999",city:"Bangalore",age:"20 Years",pic:"1.jpg"},
        {name:"Anand",mobile:"88888888",city:"Mangalore",age:"21 Years",pic:"2.jpg"},
        {name:"Manu",mobile:"77777777",city:"Pune",age:"23 Years",pic:"3.jpg"},
        {name:"Sabin",mobile:"666666666",city:"Delhi",age:"25 Years",pic:"4.jpg"},
        {name:"Bijay",mobile:"55555555",city:"Chennai",age:"23 Years",pic:"2.jpg"},
        {name:"Bikram",mobile:"444444444",city:"Kolkata",age:"23 Years",pic:"3.jpg"},
        {name:"Priyanka",mobile:"7892618561",city:"Surat",age:"27 Years",pic:"1.jpg"}
    ]);
    const {customerid}=useParams();
    return <div className="container">
        <div className="row">
            <div className="col-md-12 mt-3 text-success text-center">
                <h2 >ReactJs useParams Example</h2>
                <h3>The Parameter Value is: {customerid}</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3">
                <ul className="list-group">
                    <li className="list-group-item active">Navigation</li>
                    {
                        customer.map((row,index)=>{
                            return <li className="list-group-item " key={index}>
                            <Link to={`/${index}/hook5`}> {row.name} </Link>
                        </li>
                        })
                    }
                   
                
                </ul>

            </div>
            <div className="col-md-9">
                <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <td>{customer[customerid].name}</td>
                    </tr>
                    <tr>
                        <th>Mobile No</th>
                        <td>{customer[customerid].mobile}</td>
                    </tr>
                    <tr>
                        <th>Age</th>
                        <td>{customer[customerid].age}</td>
                    </tr>
                    <tr>
                        <th>City</th>
                        <td>{customer[customerid].city}</td>
                    </tr>
                  
                </thead>
                </table>
                <br/>
                <img src={customer[customerid].pic} height="300" width="100%"/>
            </div>
        </div>
    </div>
}
export default Myhook5;