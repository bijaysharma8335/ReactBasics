import React from 'react';
const Home =()=>{
	return (
			<div className="container">
				<div className="row">
					
						<div className="col-md-4">
							<div className="p-4 bg-light"> 
								<h1 className="text-primary">Total Users  are<br/>100<br/></h1>
							</div>
						</div>
					<div className="col-md-4">
						<div className="p-4 bg-light">
							<h1 className="text-danger" >Total Users  are<br/>200<br/></h1>
						</div>
					</div>
					<div className="col-md-4">
						<div className="p-4 bg-light"> 
							<h1 className="text-warning">Total Users  are<br/>300<br/></h1>
						</div>
					</div>
						

			</div>
			</div>
			)
}
export default Home;