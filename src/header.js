import React from 'react';
import {Link} from 'react-router-dom';

const Header=()=>
{
	return(<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  <Link className="navbar-brand" to="#">Fixed navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div ClassName="collapse navbar-collapse" id="navbarCollapse">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home </Link>
      </li>
     
	  <li className="nav-item">
	  <Link className="nav-link" to="/viewprofile"> Profile</Link>
	  </li>
    <li className="nav-item">
	  <Link className="nav-link" to="/book-list"> Book</Link>
	  </li>
  
   
    <li className="nav-item">
	  <Link className="nav-link" to="/state1">S1</Link>
	  </li>
    <li className="nav-item">
	  <Link className="nav-link" to="/bio">Info</Link>
	  </li>
    <li className="nav-item">
	  <Link className="nav-link" to="/state11">S11</Link>
	  </li>
    <li className="nav-item">
	  <Link className="nav-link" to="/state12">S12</Link>
	  </li>
    <li className="nav-item">
	  <Link className="nav-link" to="/state13">S13</Link>
	  </li>
    <li className="nav-item">
	  <Link className="nav-link" to="/state14">S14</Link>
	  </li>
    <li className="nav-item">
	  <Link className="nav-link" to="/myapi1">Myapi1</Link>
	  </li>
    <li className="nav-item">
	  <Link className="nav-link" to="/myapi2">Myapi2</Link>
	  </li>
    <li className="nav-item">
	  <Link className="nav-link" to="/myapi3">Myapi3</Link>
	  </li>
    <li className="nav-item">
	  <Link className="nav-link" to="/myapi4">Myapi4</Link>
	  </li>
    <li className="nav-item">
	  <Link className="nav-link" to="/myapi5">Myapi5</Link>
	  </li>
    <li className="nav-item">
	  <Link className="nav-link" to="/myapi6">Car List</Link>
	  </li>
	  <li className="nav-item">
	  <Link className="nav-link" to="/crud">CRUD</Link>
	  </li>
	  <li className="nav-item">
	  <Link className="nav-link" to="/category">Cat</Link>
	  </li>
	  <li className="nav-item">
	  <Link className="nav-link" to="/hook1">H1</Link>
	  </li>
	  <li className="nav-item">
	  <Link className="nav-link" to="/hook2">H2</Link>
	  </li>
	  <li className="nav-item">
	  <Link className="nav-link" to="/hook3">H3</Link>
	  </li>
	  <li className="nav-item">
	  <Link className="nav-link" to="/1/hook4">H4</Link>
	  </li>
	  <li className="nav-item">
	  <Link className="nav-link" to="/0/hook5">H5</Link>
	  </li>
	  <li className="nav-item">
	  <Link className="nav-link" to="/0/hook6">h6</Link>
	  </li>
	  <li className="nav-item">
	  <Link className="nav-link" to="/viewprofile1">View</Link>
	  </li>
	  
	  <li className="nav-item">
	  <Link className="nav-link" to="/compunmount">Removecomp</Link>
	  </li>
	  <li className="nav-item">
	  <Link className="nav-link" to="/props">Property</Link>
	  </li>
    <li className="nav-item">
	  <a className="nav-link" onClick={logout}>{localStorage.getItem("fullname")}</a>
	  </li>
   
    </ul>
  
    
  </div>
</nav>
);
}

const logout=()=>{
  localStorage.clear();
  window.location.reload();
}
export default Header;