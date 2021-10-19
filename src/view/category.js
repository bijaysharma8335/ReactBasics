import React,{Component} from 'react';
import axios from 'axios';
class Category extends Component{
    constructor(){
        super();
        this.state={
            datalist:[],
            datalist1:[]
            
        }
    }
   getCategory=()=>{
       axios.get("https://www.firstenquiry.com/api/react/sale/catlist.php").then(response=> {
           this.setState({
               datalist:response.data
           })
       })
   }
   getProduct=()=>{
    axios.get("https://www.firstenquiry.com/api/react/sale/allproduct.php").then(response=>{
        this.setState({
            datalist1:response.data
        })
    })
}
   componentDidMount(){
       this.getCategory();
       this.getProduct();
   }
  

    render(){
        return<div className="container">
                <div className="row">
                   
                        <div className="col-md-4">
                            <h1 className="text-center text-danger">Category</h1>
                            <table className="table table-bordered">
                                <thead className="text-success bg-warning">
                                    <tr>
                                        <th>CatId</th>
                                        <th>CatName</th>
                                        <th>Shop Id</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-light" >
                                    {
                                        this.state.datalist.map((y,index)=>{
                                            return <tr key={index}>
                                                <td>{y.catid}</td>
                                                <td>{y.catname}</td>
                                                <td>{y.shopid}</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        
                        <div className="col-md-8">
                        <h1 className="text-center text-danger">Product List</h1>
                            <table className="table table-bordered">
                                <thead className="text-danger bg-warning">
                                <tr>
                                    <th>PId</th>
                                    <th>Cat</th>
                                    <th>Name</th>
                                    <th>Qty</th>
                                    <th>Price</th>
                                    <th>Total Price</th>
                                </tr>
                                </thead>
                                <tbody className="bg-light">
                                    {
                                        this.state.datalist1.map((x,index)=>{
                                            return <tr key={index}>
                                                <td>{x.pid}</td>
                                                <td>{x.cat}</td>
                                                <td>{x.name}</td>
                                                <td>{x.qty}</td>
                                                <td>{x.price}</td>
                                                <td>{x.totalprice}</td>
                                                
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
export default Category;