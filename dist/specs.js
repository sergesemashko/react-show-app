(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/siarheisemashka/Sites/react-show-demo-app/node_modules/react-app-boilerplate/app/App.js":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react');
var ShowBox = require('./ShowList.js');

var App = React.createClass({displayName: "App",
	render: function() {
		return (
			React.createElement(ShowBox, {url: "http://52.11.28.2:3000/show", pollInterval: 60000})
		);
	}
	
});
	
module.exports = App;

},{"./ShowList.js":"/Users/siarheisemashka/Sites/react-show-demo-app/node_modules/react-app-boilerplate/app/ShowList.js","react":"react"}],"/Users/siarheisemashka/Sites/react-show-demo-app/node_modules/react-app-boilerplate/app/Show.js":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react');

var Show = React.createClass({displayName: "Show",
	render: function() {
		return (
			React.createElement("article", {className: "show"}, 
				React.createElement("figure", {className: "show__figure col-md-4 col-md-offset-1"}, 
					React.createElement("img", {src: this.props.image, alt: "Show image alternative text for the alt tag", className: "show__figure__image show__image img-thumbnail"}), 
					React.createElement("figcaption", {className: "show__figure__caption"}, "Caption text for the show image which is a caption")
				), 
				React.createElement("div", {className: "col-md-6"}, 
					React.createElement("h1", {className: "show__title"}, this.props.title), 
					React.createElement("section", {className: "show__body"}, 
						React.createElement("p", null, 
							this.props.desc
						)
					)
				), 
				React.createElement("div", {className: "clearfix"})
			)
		);
	}
});

module.exports = Show;
},{"react":"react"}],"/Users/siarheisemashka/Sites/react-show-demo-app/node_modules/react-app-boilerplate/app/ShowList.js":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react');
var Show = require('./Show.js');

var ShowList = React.createClass({displayName: "ShowList",
	render: function() {
		var showNodes = this.props.data.map(function (show) {
			return (
				React.createElement(Show, {image: show.image, desc: show.desc, title: show.title}
				)
			);
		});
		return (
			React.createElement("div", {className: "show-list"}, 
        showNodes
			)
		);
	}
});

var ShowBox = React.createClass({displayName: "ShowBox",
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
			React.createElement("div", {className: "ShowBox container-fluid"}, 
				React.createElement("h1", {className: "col-md-offset-1"}, "Shows"), 
				React.createElement(ShowList, {data: this.state.data})
			)
		);
	}
});


module.exports = ShowBox;
},{"./Show.js":"/Users/siarheisemashka/Sites/react-show-demo-app/node_modules/react-app-boilerplate/app/Show.js","react":"react"}],"/Users/siarheisemashka/Sites/react-show-demo-app/node_modules/react-app-boilerplate/specs/App-spec.js":[function(require,module,exports){
var App = require('./../app/App.js');
var TestUtils = require('react-addons').TestUtils;

describe("App", function() {

  it("should render text: Hello world!", function() {
    var app = TestUtils.renderIntoDocument(App());
    expect(app.getDOMNode().textContent).toEqual('Hello world!');
  });

});
},{"./../app/App.js":"/Users/siarheisemashka/Sites/react-show-demo-app/node_modules/react-app-boilerplate/app/App.js","react-addons":"react-addons"}]},{},["/Users/siarheisemashka/Sites/react-show-demo-app/node_modules/react-app-boilerplate/specs/App-spec.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvQXBwLmpzIiwiYXBwL1Nob3cuanMiLCJhcHAvU2hvd0xpc3QuanMiLCJzcGVjcy9BcHAtc3BlYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKiBAanN4IFJlYWN0LkRPTSAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBTaG93Qm94ID0gcmVxdWlyZSgnLi9TaG93TGlzdC5qcycpO1xuXG52YXIgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkFwcFwiLFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFNob3dCb3gsIHt1cmw6IFwiaHR0cDovLzUyLjExLjI4LjI6MzAwMC9zaG93XCIsIHBvbGxJbnRlcnZhbDogNjAwMDB9KVxuXHRcdCk7XG5cdH1cblx0XG59KTtcblx0XG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcbiIsIi8qKiBAanN4IFJlYWN0LkRPTSAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFNob3cgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiU2hvd1wiLFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiLCB7Y2xhc3NOYW1lOiBcInNob3dcIn0sIFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiZmlndXJlXCIsIHtjbGFzc05hbWU6IFwic2hvd19fZmlndXJlIGNvbC1tZC00IGNvbC1tZC1vZmZzZXQtMVwifSwgXG5cdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7c3JjOiB0aGlzLnByb3BzLmltYWdlLCBhbHQ6IFwiU2hvdyBpbWFnZSBhbHRlcm5hdGl2ZSB0ZXh0IGZvciB0aGUgYWx0IHRhZ1wiLCBjbGFzc05hbWU6IFwic2hvd19fZmlndXJlX19pbWFnZSBzaG93X19pbWFnZSBpbWctdGh1bWJuYWlsXCJ9KSwgXG5cdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImZpZ2NhcHRpb25cIiwge2NsYXNzTmFtZTogXCJzaG93X19maWd1cmVfX2NhcHRpb25cIn0sIFwiQ2FwdGlvbiB0ZXh0IGZvciB0aGUgc2hvdyBpbWFnZSB3aGljaCBpcyBhIGNhcHRpb25cIilcblx0XHRcdFx0KSwgXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjb2wtbWQtNlwifSwgXG5cdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIHtjbGFzc05hbWU6IFwic2hvd19fdGl0bGVcIn0sIHRoaXMucHJvcHMudGl0bGUpLCBcblx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiLCB7Y2xhc3NOYW1lOiBcInNob3dfX2JvZHlcIn0sIFxuXHRcdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXG5cdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuZGVzY1xuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KSwgXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjbGVhcmZpeFwifSlcblx0XHRcdClcblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaG93OyIsIi8qKiBAanN4IFJlYWN0LkRPTSAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBTaG93ID0gcmVxdWlyZSgnLi9TaG93LmpzJyk7XG5cbnZhciBTaG93TGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJTaG93TGlzdFwiLFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBzaG93Tm9kZXMgPSB0aGlzLnByb3BzLmRhdGEubWFwKGZ1bmN0aW9uIChzaG93KSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFNob3csIHtpbWFnZTogc2hvdy5pbWFnZSwgZGVzYzogc2hvdy5kZXNjLCB0aXRsZTogc2hvdy50aXRsZX1cblx0XHRcdFx0KVxuXHRcdFx0KTtcblx0XHR9KTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInNob3ctbGlzdFwifSwgXG4gICAgICAgIHNob3dOb2Rlc1xuXHRcdFx0KVxuXHRcdCk7XG5cdH1cbn0pO1xuXG52YXIgU2hvd0JveCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJTaG93Qm94XCIsXG5cdGxvYWRTaG93c0Zyb21TZXJ2ZXI6IGZ1bmN0aW9uKCkge1xuXHRcdCQuYWpheCh7XG5cdFx0XHR1cmw6IHRoaXMucHJvcHMudXJsLFxuXHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcblx0XHRcdGNhY2hlOiBmYWxzZSxcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7ZGF0YTogZGF0YX0pO1xuXHRcdFx0fS5iaW5kKHRoaXMpLFxuXHRcdFx0ZXJyb3I6IGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnIpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcih0aGlzLnByb3BzLnVybCwgc3RhdHVzLCBlcnIudG9TdHJpbmcoKSk7XG5cdFx0XHR9LmJpbmQodGhpcylcblx0XHR9KTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge2RhdGE6IFtdfTtcblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMubG9hZFNob3dzRnJvbVNlcnZlcigpO1xuXHRcdHNldEludGVydmFsKHRoaXMubG9hZFNob3dzRnJvbVNlcnZlciwgdGhpcy5wcm9wcy5wb2xsSW50ZXJ2YWwpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiU2hvd0JveCBjb250YWluZXItZmx1aWRcIn0sIFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwge2NsYXNzTmFtZTogXCJjb2wtbWQtb2Zmc2V0LTFcIn0sIFwiU2hvd3NcIiksIFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFNob3dMaXN0LCB7ZGF0YTogdGhpcy5zdGF0ZS5kYXRhfSlcblx0XHRcdClcblx0XHQpO1xuXHR9XG59KTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFNob3dCb3g7IiwidmFyIEFwcCA9IHJlcXVpcmUoJy4vLi4vYXBwL0FwcC5qcycpO1xudmFyIFRlc3RVdGlscyA9IHJlcXVpcmUoJ3JlYWN0LWFkZG9ucycpLlRlc3RVdGlscztcblxuZGVzY3JpYmUoXCJBcHBcIiwgZnVuY3Rpb24oKSB7XG5cbiAgaXQoXCJzaG91bGQgcmVuZGVyIHRleHQ6IEhlbGxvIHdvcmxkIVwiLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXBwID0gVGVzdFV0aWxzLnJlbmRlckludG9Eb2N1bWVudChBcHAoKSk7XG4gICAgZXhwZWN0KGFwcC5nZXRET01Ob2RlKCkudGV4dENvbnRlbnQpLnRvRXF1YWwoJ0hlbGxvIHdvcmxkIScpO1xuICB9KTtcblxufSk7Il19
