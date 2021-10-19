import React from 'react';

const Myprofile =()=>{
	return (<>
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
		</>
	);	
}

export default Myprofile;