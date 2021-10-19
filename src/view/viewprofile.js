import React,{Component} from 'react';
import {Link,Switch,Route} from 'react-router-dom';
import Myprofile from './myprofile';

const Editprofile=()=>{return <h1>Edit My Profile</h1>}
const Updatemobile=()=>{return <h1>Edit Mobile No</h1>}
const Changepassword=()=>{return <h1>Change My Password</h1>}


class  Viewprofile extends Component{
	constructor(props){
		super(props);
	}render(){
	  const {path}=this.props.match;
   
    return <div className="container mt-5">
			<div className="row mt-3">
				<div className="col-md-3">
	<ul className="list-group">
		<li className="list-group-item"> Profile Navigation </li>
		
		<li className="list-group-item"> 
			<Link to="/viewprofile">
				<i className="fa fa-eye text-success"></i> View Profile 
				
			</Link>
		</li>
		<li className="list-group-item">
			<Link to="/viewprofile/editprofile">		
				<i className="fa fa-edit text-warning"></i> 
				<i className="fa fa-user text-warning"></i> Edit Profile 
			</Link>
		</li>
		<li className="list-group-item"> 
		<Link to="/viewprofile/mobile">
			<i className="fa fa-phone text-info"></i> Change Mobile No 
		</Link>
		</li>
		<li className="list-group-item"> 
		<Link to="/viewprofile/password">
			<i className="fa fa-lock text-danger"></i> Change Password 
		</Link>
		</li>
	</ul>
				</div>
		<div className="col-md-9">
		<Switch>
                                <Route path={`${path}`} exact component={Myprofile} />
                                <Route path={`${path}/editprofile`} component={Editprofile} />
                                <Route path={`${path}/mobile`} component={Updatemobile} />
                                <Route path={`${path}/password`} component={Changepassword} />
                               
                            </Switch>

			
		   </div>
		</div>
	</div>
	}
}

export default Viewprofile;

