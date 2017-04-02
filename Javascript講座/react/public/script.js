/*
var data = [
	{id: 1, kk:"AA",text: "## aaaaCCCCCC"},
	{id: 2, kk:"BB",text: "### bb*bbbbbbbbb*"}
];
*/
var CommentBox = React.createClass({
	getInitialState: function(){
		return {data: []};
	},
	componentDidMount: function(){
		$.ajax({
			url: this.props.url,
			dataType: "json",
			cache: false,
			success: function(data){
				this.setState({data: data});
			}.bind(this),
			error: function(){
				console.log(this.props.url);
			}.bind(this)
		});

	},
	handleCommentSubmit: function(comment){
		$.ajax({
			url: this.props.url,
			dataType: "json",
			type: "POST",
			data: comment,
			success: function(data){
				this.setState({data: data});
			}.bind(this),
			error: function(){
				console.log(this.props.url);
			}.bind(this)
		});
	},
	render: function(){
		return (
			<div className = "test">
			<h1>神崎</h1>
			<Name1 data={this.state.data} />
			<Name2 onCommentSubmit={this.handleCommentSubmit}/>
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
			{this.props.author}
			<span dangerouslySetInnerHTML={this.rowMarkup()} />
			</div>
		);
	}
});
var Name1 = React.createClass({
	render: function(){
		var CommentNodes = this.props.data.map(function(comment){
			return (
				<Comment author={comment.author} key={comment.id}>
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
var Name2 = React.createClass({
	getInitialState: function(){
		return {
			author: "", text: ""
		};
	},
	handleAuthorChange: function(eventObject){
		this.setState({author: eventObject.target.value})
	},
	handleTextChange: function(eventObject){
		this.setState({text: eventObject.target.value})
	},
	handleSubmit: function(eventObject){
		eventObject.preventDefault();
		var author = this.state.author.trim();
		var text = this.state.text.trim();
		if(!author || !text){
			return;
		}
		this.props.onCommentSubmit({author: author, text: text});
		this.setState({author: "", text: ""});
	},
	render: function(){
		return (
			<form className = "test" onSubmit={this.handleSubmit}>
				<input
					type="text"
					placeholder="名前"
					value={this.state.author}
					onChange={this.handleAuthorChange}
				/>
				<input
					type="text"
					placeholder="コメント入力"
					value={this.state.text}
					onChange={this.handleTextChange}
				/>
				<input type="submit" value="送信" />
			</form>
		);
	}
});
ReactDOM.render(
	<CommentBox url="/api/comments" />,
	document.getElementById("content")
);