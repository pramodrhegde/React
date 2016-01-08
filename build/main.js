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
			'div',
			null,
			React.createElement(
				'h1',
				null,
				'Countries'
			),
			this.props.children
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
var Germany = React.createClass({
	displayName: 'Germany',

	render: function () {
		return React.createElement(
			'h1',
			null,
			'Germany'
		);
	}
});
var France = React.createClass({
	displayName: 'France',

	render: function () {
		return React.createElement(
			'h1',
			null,
			'France'
		);
	}
});

var Asia = React.createClass({
	displayName: 'Asia',

	render: function () {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h1',
				null,
				'Asia'
			),
			this.props.children
		);
	}
});

var Austria = React.createClass({
	displayName: 'Austria',

	render: function () {
		return React.createElement(
			'h1',
			null,
			'Austria'
		);
	}
});

var Tajmahal = React.createClass({
	displayName: 'Tajmahal',

	render: function () {
		return React.createElement(
			'h1',
			null,
			'Tajmahal'
		);
	}
});

var Monuments = React.createClass({
	displayName: 'Monuments',

	render: function () {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h1',
				null,
				'Monuments'
			),
			this.props.children
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
						),
						React.createElement(
							'ul',
							null,
							React.createElement(
								'li',
								null,
								React.createElement(
									Link,
									{ to: '/country/india' },
									'India'
								)
							),
							React.createElement(
								'li',
								null,
								React.createElement(
									Link,
									{ to: '/country/germany' },
									'Germany'
								)
							),
							React.createElement(
								'li',
								null,
								React.createElement(
									Link,
									{ to: '/country/france' },
									'France'
								)
							)
						)
					),
					React.createElement(
						'li',
						null,
						React.createElement(
							Link,
							{ to: '/monuments' },
							'Monuments'
						),
						React.createElement(
							'ul',
							null,
							React.createElement(
								'li',
								null,
								React.createElement(
									Link,
									{ to: '/monuments/asia' },
									'Asia'
								),
								React.createElement(
									'ul',
									null,
									React.createElement(
										'li',
										null,
										React.createElement(
											Link,
											{ to: '/monuments/asia/tajmahal' },
											'Tajmahal'
										)
									)
								)
							),
							React.createElement(
								'li',
								null,
								React.createElement(
									Link,
									{ to: '/monuments/austria' },
									'Austria'
								)
							)
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
		React.createElement(
			Route,
			{ path: 'country', component: Countries },
			React.createElement(Route, { path: 'india', component: India }),
			React.createElement(Route, { path: 'germany', component: Germany }),
			React.createElement(Route, { path: 'france', component: France })
		),
		React.createElement(
			Route,
			{ path: 'monuments', component: Monuments },
			React.createElement(
				Route,
				{ path: 'asia', component: Asia },
				React.createElement(Route, { path: 'tajmahal', component: Tajmahal })
			),
			React.createElement(Route, { path: 'austria', component: Austria })
		)
	)
), document.getElementById('main'));