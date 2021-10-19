import React,{Component} from 'react';
class UserLogin extends Component{
    constructor(){
        super();
        this.state={
            email:'',
            pass:'',
            message:''
        }
    }

    Login=()=>{
        if((this.state.email=="")||(this.state.pass=="")){
            this.setState({
                message:"Enter Email & Password !"
            })

        }
        else{
            this.setState({
                message:"Success:Please wait Processing..........."
            })
           localStorage.setItem("fullname","Ramesh");
            window.location.reload();
        }
    }

    processEmail=(obj)=>{
        this.setState({
            email:obj.target.value
        })
    }

    processPassword=(obj)=>{
        this.setState({
            pass:obj.target.value
        })
    }
    render(){
        return<div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <h3 className="text-center">Login</h3>
                    <p className="text-danger text-center" >
                        {this.state.message}
                    </p>
                    <div className="row-form-group">
                        <label>E-mail Id</label>
                        <input type="text" className="form-control"
                        onChange={this.processEmail}/>
                    </div>
                    <div className="form-group">
                        <label>Pasword</label>
                        <input type="password"className="form-control"
                        onChange={this.processPassword}/>
                    </div>
                    <button className="btn btn-primary btn-block"onClick={this.Login}>Login</button>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    }
}
export default UserLogin;