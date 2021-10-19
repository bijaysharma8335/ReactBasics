import React, {useState} from 'react';

const Myhook3=()=>{
    const [booklist,updateBook]=useState(["python","Java","Node","Data Mining"]);
    const[newbook,processBook]=useState();
    const save=()=>{
    
        updateBook(booklist=>[...booklist,newbook]);
        processBook("");//to empty the textbox
    }
    const deleteBook=(bookindex)=>{
        booklist.splice(bookindex,1);
        updateBook(booklist=>[...booklist]);
    }

    return<div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-success text-center">Array  Manipulation Using Hook</h3>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <h4>Add New Book</h4>
                            <div className="border p-4">
                                <label> Enter Book Name</label>
                                <input type="text" className="form-control"
                                 value={newbook}
                                onChange={obj=>processBook(obj.target.value)}/>
                                <button className="btn btn-info btn-block mt-3" onClick={save}>Save</button>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <h4 className="text-center text-info">Available Items</h4>
                            <table className="table table-bordered">
                                <tr>
                                    <th>Book Index</th>
                                    <th>Book Name</th>
                                    <th>Action</th>
                                </tr>
                                
                               {
                                   booklist.map((xbook,index)=>{
                                       return <tr key={index}>
                                           <td>{index}</td>
                                           <td>{xbook}</td>
                                           <td><button className="btn btn-danger  btn-sm"
                                           onClick={deleteBook.bind(this,index)} >Delete Book</button></td>
                                           </tr>
                                           
                                   })
                               }
                            </table>

                        </div>

                    </div>
                </div>
            

}
export default Myhook3;