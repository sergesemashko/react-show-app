/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router');
var routes = (
	<Route handler={App} path="/">
		<DefaultRoute handler={Show} />
		<Route name="show/:showId"/>
	</Route>
);

module.exports = routes;