import React,{Component} from 'react';

class State14 extends Component{
    constructor()
    {
        super();
        this.state={
                     user:[{name:"Ramesh",mobile:999999999,age:"30 Years"},
                        {name:"Suresh",mobile:999999999,age:"20 Years"}]  
                    }           
    }
    render()
    { 
        return<div className="container">
            <div className="row">
                <div className="col-md-12"><h1 className="text-danger text-center">The Length of array is :{this.state.user.length}</h1></div>
            </div>
            <table className="table table-bordered ">
                <thead className="text-danger">
                    <th>Sl No</th>
                    <th>Name</th>
                    <th>mobile</th>
                    <th>Age</th>

                    </thead>
                <tbody className="text-success">
                    {
                        this.state.user.map((xuser,index)=>{
                            return <tr key={index}>
                                <td>{index}</td>
                                <td>{xuser.name}</td>
                                <td>{xuser.mobile}</td>
                                <td>{xuser.age}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

        </div>
    }

}
export default State14;