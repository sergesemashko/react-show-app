/** @jsx React.DOM */
var React = require('react');
var ShowBox = require('./ShowList.js');

var App = React.createClass({
	render: function() {
		return (
			<ShowBox url="http://52.11.28.2:3000/show" pollInterval={60000} />
		);
	}
	
});
	
module.exports = App;
