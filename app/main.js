/** @jsx React.DOM */
var React = require('react');
var App = require('./App.js');
var routes = require('./routes.js');
var Router = require('react-router');

Router.run(routes, Router.HistoryLocation, function (Handler) {
	React.render(<Handler/>, document.body);
});
