var React = require('react');
var ReactDOM = require('react-dom');


var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;
var IndexRoute = require('react-router').IndexRoute;

/*var data = [
	
	{
		name:'Home',
		description:'Selected Home',
	},
	{
		name:'Countries',
		description:'Selected Countries',
		items:[
			{name:'India',message:'Selected India'},
			{name:'Spain',message:'Selected Spain'},
			{name:'Canada',message:'Selected Canada'}
		]
	},
	{
		name:'Monuments',
		description:'Selected Monuments',
	}

]*/

var Home = React.createClass({
	render:function(){
		return (<h1>Home</h1>);
	}
});

var Countries = React.createClass({
	render:function(){
		return (
		<div>
			<h1>Countries</h1>

			{this.props.children}
		</div>
		);
	}
});

var India = React.createClass({
	render:function(){
		return (<h1>India</h1>);
	}
});
var Germany = React.createClass({
	render:function(){
		return (<h1>Germany</h1>);
	}
});
var France = React.createClass({
	render:function(){
		return (<h1>France</h1>);
	}
});

var Asia = React.createClass({
	render:function(){
		return (
		<div>
			<h1>Asia</h1>

			{this.props.children}
		</div>
		);
	}
});


var Austria = React.createClass({
	render:function(){
		return (<h1>Austria</h1>);
	}
});


var Tajmahal = React.createClass({
	render:function(){
		return (<h1>Tajmahal</h1>);
	}
});


var Monuments = React.createClass({
	render:function(){
		return (
		<div>
			<h1>Monuments</h1>
			{this.props.children}
		</div>
		);
	}
});

var App = React.createClass({
  render() {
    return (
      <div>
      	<div className="sidebar">
      		<ul>
      		  <li><Link to="/">Home</Link></li>
	          <li>
	          	<Link to="/country">Countries</Link>
	          	<ul>
	          		<li><Link to="/country/india">India</Link></li>
	          		<li><Link to="/country/germany">Germany</Link></li>
	          		<li><Link to="/country/france">France</Link></li>
	          	</ul>
	          </li>
	          <li>
	          	<Link to="/monuments">Monuments</Link>
	          	<ul>
	          		<li>
	          			<Link to="/monuments/asia">Asia</Link>
	          			<ul>
	          				<li><Link to="/monuments/asia/tajmahal">Tajmahal</Link></li>
	          			</ul>
	          		</li>
	          		<li><Link to="/monuments/austria">Austria</Link></li>
	          	</ul>
	          </li>
	        </ul>
      	</div>

      	<div className="content">
      		{this.props.children}
      	</div>
      </div>
    )
  }
});

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="country" component={Countries}>
      	<Route path="india" component={India} />
      	<Route path="germany" component={Germany} />
      	<Route path="france" component={France} />
      </Route>
      <Route path="monuments" component={Monuments}>
      	<Route path="asia" component={Asia}>
      		<Route path="tajmahal" component={Tajmahal} />
      	</Route>
      	<Route path="austria" component={Austria} />
      </Route>
    </Route>
  </Router>
), document.getElementById('main'));