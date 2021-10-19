import  React , {useState} from 'react';
const Myhook1=()=>{
    const[counter,updateCounter]=useState(5);
    const[message,updateMessage]=useState();
    //variablename,function name=starting value
    //curent value,updated value=initial value
    const one=()=>{
        
    updateCounter(counter + 5);
    updateMessage("");
    }
    const two=()=>{
        if(counter>5){
        updateCounter(counter-5);
        }
        else{
            updateMessage("Sorry ! Minimum limit is 5.")
        }
    }
return <div className="container">
            <div className="row m-3">
                <div className="col-md-12 text-center">
                    <h2 className="text-danger">Hooks Simple Example</h2>
                    <br/>
                    <h1 className="text-success">The counter is:{counter}</h1>
                    <br/>
                    <button className="btn btn-warning m-2" onClick={one}>No Increase By 5</button>
                    
                    <button className="btn btn-danger m-2" onClick={two}>No Decrease By 5</button>
                    <br/>
                    <p className="text-danger">{message}</p>
                </div>
            </div>        
        </div>
}
export default Myhook1;