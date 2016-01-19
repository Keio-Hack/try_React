console.log("self");

 var CommentBox = React.createClass({displayName:"CommentBox",
    render:function(){
        return (
            React.createElement("div",{className:"commentBox"},
                "Hello, world! I am CommentBox."
            )
        );
    }
});

ReactDOM.render(
    <CommentBox />,
    document.getElementById("content")
);

// tutorial2

var CommentList = React.createClass({
    render:function(){
        return(
            <div className="commentList">
                Hello, world! I am a CommentList.
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render:function(){
        return (
            <div className="commentForm">
                Hello, world! I am a commentForm.
            </div>
        );
    }
});

// tutorial3
var CommentBox = React.createClass({
    render:function(){
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList />
                <CommentForm />
            </div>
        );
    }
});

// tutorial4

var Comment = React.createClass({
    render: function(){
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
            {this.props.children}
            </div>
        );
    }
});

