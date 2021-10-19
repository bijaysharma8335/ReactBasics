import React from 'react';
import Header from './header';
import {HashRouter,Route} from 'react-router-dom';
//import User from './view/user';
//import Product from './view/product';
import Home from'./view/home';
import Viewprofile from'./view/viewprofile';
import  Book from './view/book';
//import Emplist from './view/employ';
//import Invoice from './view/invoice';
import StateOne from './view/state1';
import Info from './view/bio';
import State11 from './state11';
import State12 from './state12';
import State13 from './state13';
import State14 from './state14';
import Myapi1 from './myapi1';
import Myapi2 from './myapi2';
import Myapi3 from './myapi3';	
import Myapi4 from './myapi4';			
import Myapi5 from './myapi5';
import UserLogin from './login';
import Myapi6 from './myapi6';
import Crud from './crud';
import Category from'./view/category';
import Myhook1 from './hook1';
import Myhook2 from './hook2';
import Myhook3 from './hook3';
import Myhook4 from './hook4';
import Myhook5 from './hook5';
import Myhook6 from './hook6';
import ViewProfile1 from'./viewprofile1';
//import Course from './serverapi/course';
//import Service from './serverapi/coursfun';
import Removecomp from './compunmount';
import Property from './props';




//const Home=()=>{ return <h1>Welcome Home</h1>}
//const User=()=>{ return <h1>User Management</h1>}
//const Product=()=>{ return <h1>Product List</h1>}

 
function App() {
	if(localStorage.getItem("fullname")==null){
		return<UserLogin/>
	}
	else{
		
	
  return <HashRouter>
			<Header/>
			<Route exact path="/" component={Home}/>
			
			<Route path="/viewprofile" component={Viewprofile}/>
			<Route path="/book-list"component={Book}/>
		
			<Route path="/state1"component={StateOne}/>
			<Route path="/bio"component={Info}/>
			<Route path="/state11"component={State11}/>
			<Route path="/state12"component={State12}/>
			<Route path="/state13"component={State13}/>
			<Route path="/state14"component={State14}/>
			<Route path="/myapi1"component={Myapi1}/>
			<Route path="/myapi2"component={Myapi2}/>
			<Route path="/myapi3"component={Myapi3}/>
			<Route path="/myapi4"component={Myapi4}/>
			<Route path="/myapi5"component={Myapi5}/>
			<Route path="/myapi6"component={Myapi6}/>
			<Route path="/crud"component={Crud}/>
			<Route path="/category"component={Category}/>
			<Route path="/hook1"component={Myhook1}/>
			<Route path="/hook2"component={Myhook2}/>
			<Route path="/hook3"component={Myhook3}/>
			<Route path="/:userid/hook4"component={Myhook4}/>
			<Route path="/:customerid/hook5"component={Myhook5}/>
			<Route path="/:id/hook6"component={Myhook6}/>
			<Route path="/compunmount"component={Removecomp}/>
			<Route path="/viewprofile1"component={ViewProfile1}/>
			{/* <Route path="/serverapi/course"component={Course}/>
			<Route path="/serverapi/coursfun"component={Service}/> */}
			<Route path="/props"component={Property}/>



			</HashRouter>
		}
}

export default App;
