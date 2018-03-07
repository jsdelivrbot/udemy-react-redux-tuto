import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchPostDetail,deletePost} from "../actions";
import {Link} from 'react-router-dom';

class PostsShow extends Component {
    componentDidMount() {
        if (! this.props.post) {
            this.props.fetchPostDetail(this.props.match.params.id);
        }
    }

    onDeleteClick() {
        this.props.deletePost(
            this.props.match.params.id,
            () => this.props.history.push('/')
        );
    }

    render() {
        const {post} = this.props;
        console.log (post);
        if (post) {
            return (
                <div>
                    <Link to="/">Back to index</Link>
                    <button
                        className="btn btn-danger pull-xs-right"
                        onClick={this.onDeleteClick.bind(this)}
                    >
                        Delete post
                    </button>
                    <h3>{post.title}</h3>
                    <h6>{post.categories}</h6>
                    <p>{post.content}</p>
                </div>
            );
        }
        return (
            <div>
                Loading...
            </div>
        );
    }
}
/*
function mapStateToProps(state) {
    return { posts: state.posts };
}
*/
function mapStateToProps({posts}, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(
    mapStateToProps,
    {
        fetchPostDetail: fetchPostDetail,
        deletePost: deletePost
    }
)(PostsShow);
