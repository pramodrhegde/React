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
	displayName: 'Home',

	render: function () {
		return React.createElement(
			'h1',
			null,
			'Home'
		);
	}
});

var Countries = React.createClass({
	displayName: 'Countries',

	render: function () {
		return React.createElement(
			'h1',
			null,
			'Countries'
		);
	}
});

var India = React.createClass({
	displayName: 'India',

	render: function () {
		return React.createElement(
			'h1',
			null,
			'India'
		);
	}
});

var Monuments = React.createClass({
	displayName: 'Monuments',

	render: function () {
		return React.createElement(
			'h1',
			null,
			'Monuments'
		);
	}
});

var App = React.createClass({
	displayName: 'App',

	render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'div',
				{ className: 'sidebar' },
				React.createElement(
					'ul',
					null,
					React.createElement(
						'li',
						null,
						React.createElement(
							Link,
							{ to: '/' },
							'Home'
						)
					),
					React.createElement(
						'li',
						null,
						React.createElement(
							Link,
							{ to: '/country' },
							'Countries'
						)
					),
					React.createElement(
						'li',
						null,
						React.createElement(
							Link,
							{ to: '/monuments' },
							'Monuments'
						)
					)
				)
			),
			React.createElement(
				'div',
				{ className: 'content' },
				this.props.children
			)
		);
	}
});

ReactDOM.render(React.createElement(
	Router,
	{ history: browserHistory },
	React.createElement(
		Route,
		{ path: '/', component: App },
		React.createElement(IndexRoute, { component: Home }),
		React.createElement(Route, { path: 'country', component: Countries }),
		React.createElement(Route, { path: 'monuments', component: Monuments })
	)
), document.getElementById('main'));