import React,{Component} from 'react';
class Datalist extends Component{
    constructor(){
        super();
        this.state={
            msg:"I am came Here !"
        }

    }
    componentWillUnmount(){
    this.setState({
        msg:"Really sorry Bye I am going........."
    })
    }
  
    render (){
        return <div>
            <p className="text-center text-danger">{this.state.msg}</p><table className="table">
            <tr>
                <th>Full Name </th>
                <th>Mobile No</th>
                <th>City</th>
                <th>Pincode</th>
            </tr>
            <tr>
                <td>Ramesh</td>
                <td>9999999999</td>
                <td>Bangalore</td>
                <td>560035</td>
            </tr>

        </table>
        </div>
    }
}
export default Datalist;