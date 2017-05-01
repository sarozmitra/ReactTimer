var React = require('react');
var Navigation = require('Navigation');


//Stateless Functional components
var Main = (props) =>{
	return(
		<div>
        <Navigation/>
			<div className="row">
				<div className="columns medium-6 large4 small-centered">
					{props.children}					
				</div>
			</div>	
      	</div>
	);
}

module.exports = Main;