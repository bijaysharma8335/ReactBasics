import React,{Component} from 'react';
class Book extends Component{
    constructor(){
        super();
        this.state={
            booklist:["Java","PHP","HTML","CSS","Node"],
            city:["bangalore","Pune","Chennai","Kolkata"]
        }
    }
        render(){//used to print output in browser
            return <div className="conatiner">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="text-center">
                                    Available Books-:{this.state.booklist.length}
                                    </h1>
                                  
                                    {
                                        this.state.booklist.map((xbook,bookindex)=>{
                                            return <p key={bookindex}> {xbook} </p>
                                        })
                                    }
                                    <h1 className="text-center">
                                    Available City-:{this.state.city.length}
                                    </h1>
                                  
                                    {
                                        this.state.city.map((xcity,cityindex)=>{
                                            return <p key={cityindex}> {xcity} </p>
                                        })
                                    }
                            
                            </div>
                        </div>
                    </div>
        
    }
}
export default Book;