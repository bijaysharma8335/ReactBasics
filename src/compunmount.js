import React,{Component} from 'react';
import Datalist from'./datalist';
class Removecomp extends Component{
    constructor(){
        super();
        this.state={
            removeBlock:false
        }
    }
        hideMe=(value)=>{
            this.setState({
                removeBlock:value
            })
    }
    render(){
        let mydata="";
        if(this.state.removeBlock==false){
            mydata=<Datalist/>;
        }
        else{
            mydata="Component Went !";

        }
        return <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                <button className="btn btn-primary m-2" onClick={this.hideMe.bind(this,true)}>Delete Component</button>
                    <button className="btn btn-warning m-2" onClick={this.hideMe.bind(this,false)}>Load Component</button>
                    <h2 className="text-center">{JSON.stringify(this.state.removeBlock)}</h2>
                    {mydata}
                </div>
            </div>
        </div>
    }
    

}
export default Removecomp;