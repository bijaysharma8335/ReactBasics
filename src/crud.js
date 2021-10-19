import  React ,{Component} from 'react';
import axios from 'axios';
class Crud extends Component{
    constructor(){
        super();
        this.state={
            datalist:[],
            myname:'',
            mymobile:'',
            myemail:'',
            msg:''
        }

    }
    processName=(obj)=>
    {
        this.setState({
            myname:obj.target.value
        })
    }
    processMobile=(obj)=>
    {
        this.setState({
            mymobile:obj.target.value
        })
    }
    processEmail=(obj)=>
    {
        this.setState({
            myemail:obj.target.value
        })
    }
    save=()=>
    {
        let url="https://www.firstenquiry.com/api/react/crud/save.php";   
        let input=new FormData();//to encrypt the data sending to server
        input.append("name",this.state.myname) ;
        input.append("mobile",this.state.mymobile) ;
        input.append("email",this.state.myemail); 
        axios.post(url,input).then(response=>{
            alert(response.data);
            this.getRecord();//to reload the list
            this.setState({
                myname:'',
                mymobile:'',
                myemail:''
            })
        })
    }
    getRecord=()=>
    {
        let url="https://www.firstenquiry.com/api/react/crud/list.php";
        axios.get(url).then(response=>{
            if(response.data.length>0){
                this.setState({
                    datalist:response.data
                })
                }
            
        })
    }
    deleteRecord=(recordId)=>{
        let url="https://www.firstenquiry.com/api/react/crud/delete.php";
        let input=new FormData();
        input.append("id",recordId);
        axios.post(url,input).then(response=>{
            this.setState({
                msg:response.data.status
            })
            this.getRecord();
        })

    }
    componentDidMount(){
        this.getRecord();
    }
    
    render(){
        return<div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h3>Create, Read,Update,Delete-CRUD</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <label>Name</label>
                    <input type="text" className="form-control"
                    onChange={this.processName}
                    value={this.state.myname}/>
                    
                </div>
                <div className="col-md-3">
                <label>Mobile</label>
                    <input type="number"  className="form-control"
                     onChange={this.processMobile}
                     value={this.state.mymobile}/>
                </div>
                <div className="col-md-3">
                <label>Email Id</label>
                    <input type="email" className="form-control"
                     onChange={this.processEmail}
                     value={this.state.myemail}/>
                </div>
                <div className="col-md-3">
                    <br/>
                    <button className="btn btn-primary mt-2"onClick={this.save}>Save record</button>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-12">
                    <p className="text-center text-info">{this.state.msg}</p>
                    <h2 className="text-center text-danger">Available Data are:{this.state.datalist.length}</h2>
                    <table className="table table-bordered table-sm">
                        <thead className="bg-warning text-success">
                            <tr>
                                <th>Id</th>
                                <th>Full Name</th>
                                <th>Mobile No</th>
                                <th>Email Id</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-light text-center">
                        
                             {
                                this.state.datalist.map((xrecord,index)=>{
                                    return <tr key={index}>
                                        <td>{xrecord.id}</td>
                                        <td>{xrecord.name}</td>
                                        <td>{xrecord.mobile}</td>
                                        <td>{xrecord.email}</td>
                                        <td><button className="btn btn-danger" onClick={this.deleteRecord.bind(this,xrecord.id)}>
                                            Delete </button></td>
                                        
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
export default Crud;