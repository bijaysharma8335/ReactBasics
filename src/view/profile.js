import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class  Viewprofile  extends Component{
    constructor(){
       super();
    }


    render(){
    return <div className="container mt-5">
			<div className="row mt-3">
				<div className="col-md-3">
	<ul className="list-group">
		<li className="list-group-item"> Profile Navigation </li>
		<li className="list-group-item"> 
			<i className="fa fa-eye text-success"></i> View Profile 
		</li>
		<li className="list-group-item"> 
			<i className="fa fa-edit text-warning"></i> 
			<i className="fa fa-user text-warning"></i> Edit Profile 
		</li>
		<li className="list-group-item"> 
			<i className="fa fa-phone text-info"></i> Change Mobile No 
		</li>
		<li className="list-group-item"> 
			<i className="fa fa-lock text-danger"></i> Change Password 
		</li>
	</ul>
				</div>
		<div className="col-md-9">
			<div className="row">
				<div className="col-md-7 form-group">
					<h4 className="text-center text-primary">My Profile</h4>
					<div className="border p-3 bg-light rounded">
						<table className="table table-sm">
							<thead>
								<tr>
									<th>Full Name</th>
									<td> Ramesh Kumar </td>
								</tr>
								<tr>
									<th>Gender</th>
									<td> Male </td>
								</tr>
								<tr>
									<th>E-Mail</th>
									<td> ramesh@gmail.com </td>
								</tr>
								<tr>
									<th>Mobile</th>
									<td> +91-8888888884 </td>
								</tr>
								<tr>
									<th>Address</th>
									<td> Marathahalli Bangalore </td>
								</tr>
								<tr className="bg-light">
									<th>Certification</th>
									<td> Web Design </td>
								</tr>
								<tr>
									<td colspan="2" className="text-center">
										<a href="editprofile.html">
											<i className="fa fa-edit"></i> 
											Edit Now
										</a>
									</td>
								</tr>
							</thead>
						</table>
					</div>
				</div>
				<div className="col-md-5 form-group">
					<h4 className="text-center text-primary">My Education</h4>
					<div className="border p-3 bg-light rounded">
						<table className="table table-sm">
							<thead>
								<tr>
									<th>10th</th>
									<td> 2004 - 56% </td>
								</tr>
								<tr>
									<th>12th</th>
									<td> 2006 - 70% </td>
								</tr>
								<tr>
									<th>B.Tech</th>
									<td> 2010 - 65% </td>
								</tr>
								<tr>
									<th>M.Tech</th>
									<td> In-Progress </td>
								</tr>
								
								<tr>
									<td colspan="2" className="text-center">
										<a href="editprofile.html">
											<i className="fa fa-edit"></i> 
											Edit Now
										</a>
									</td>
								</tr>
							</thead>
						</table>
					</div>
				</div>
			</div>
		   </div>
		</div>
	</div>
        }
}

export default Viewprofile;

