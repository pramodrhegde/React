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
		return (<h1>Countries</h1>);
	}
});

var India = React.createClass({
	render:function(){
		return (<h1>India</h1>);
	}
});

var Monuments = React.createClass({
	render:function(){
		return (<h1>Monuments</h1>);
	}
});

var App = React.createClass({
  render() {
    return (
      <div>
      	<div className="sidebar">
      		<ul>
      		  <li><Link to="/">Home</Link></li>
	          <li><Link to="/country">Countries</Link></li>
	          <li><Link to="/monuments">Monuments</Link></li>
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
      </Route>
      <Route path="monuments" component={Monuments}>
      </Route>
    </Route>
  </Router>
), document.getElementById('main'));