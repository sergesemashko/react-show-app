/** @jsx React.DOM */
var React = require('react');
var Show = require('./Show.js');

var ShowList = React.createClass({
	render: function() {
		var showNodes = this.props.data.map(function (show) {
			return (
				<Show image={show.image} desc={show.desc} title={show.title} >
				</Show>
			);
		});
		return (
			<div className="show-list">
        {showNodes}
			</div>
		);
	}
});

var ShowBox = React.createClass({
	loadShowsFromServer: function() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	getInitialState: function() {
		return {data: []};
	},
	componentDidMount: function() {
		this.loadShowsFromServer();
		setInterval(this.loadShowsFromServer, this.props.pollInterval);
	},
	render: function() {
		return (
			<div className="ShowBox container-fluid">
				<h1 className="col-md-offset-1">Shows</h1>
				<ShowList data={this.state.data} />
			</div>
		);
	}
});


module.exports = ShowBox;