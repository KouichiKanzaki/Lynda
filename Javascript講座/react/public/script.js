/*
var data = [
	{id: 1, kk:"AA",text: "## aaaaCCCCCC"},
	{id: 2, kk:"BB",text: "### bb*bbbbbbbbb*"}
];
*/
var CommentBox = React.createClass({
	getInitialState: function(){
		return {data: [{id: 1, kk:"AA",text: "## aaaaCCCCCC"},
				{id: 2, kk:"BB",text: "### bb*bbbbbbbbb*"}]};
	},
	render: function(){
		return (
			<div className = "test">
			<h1>神崎</h1>
			<Name1 data={this.state.data}/>
			<Name2/>
			</div>
		);
	}
});
var Name1 = React.createClass({
	render: function(){
		var CommentNodes = this.props.data.map(function(comment){
			return (
				<Comment kk={comment.kk} key={comment.id}>
				{comment.text}
				</Comment>
			);
		});
		return (
			<div className = "test">
				<h1>kanzaki</h1>
				{CommentNodes}
			</div>
		);
	}
});
var Comment = React.createClass({
	rowMarkup: function(){
		var markDown = new Remarkable();
		var rowMarkup = markDown.render(this.props.children);
		return {__html: rowMarkup};
	},
	render: function(){
		
		return (
			<div className = "ABC">
			{this.props.kk}
			<span dangerouslySetInnerHTML={this.rowMarkup()} />
			</div>
		);
	}
});
var Name2 = React.createClass({
	render: function(){
		return (
			<div className = "test">
			<h1>kouichi</h1>
			</div>
		);
	}
});
ReactDOM.render(
	<CommentBox url="/api/comments" />,
	document.getElementById("content")
);