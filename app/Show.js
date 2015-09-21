/** @jsx React.DOM */
var React = require('react');

var Show = React.createClass({
	render: function() {
		return (
			<article className="show">
				<figure className="show__figure col-md-4 col-md-offset-1">
					<img src={this.props.image} alt="Show image alternative text for the alt tag" className="show__figure__image show__image img-thumbnail"/>
					<figcaption className="show__figure__caption">Caption text for the show image which is a caption</figcaption>
				</figure>
				<div className="col-md-6">
					<h1 className="show__title">{this.props.title}</h1>
					<section className="show__body">
						<p>
							{this.props.desc}
						</p>
					</section>
				</div>
				<div className="clearfix" />
			</article>
		);
	}
});

module.exports = Show;