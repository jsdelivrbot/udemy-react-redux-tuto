import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from "../actions/index";
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    className="list-group-item"
                    onClick={() => this.props.selectBook(book)}
                >
                    {book.title} ({book.pages})
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    // whatever is returned will show up as props inside of BookList
    return {
        books: state.books,
        activeBook: state.activeBook
    };
}

// anything returned from this function will end up as props on the BookList
// Container.
// so selectBook action creator is accessible through this.props.selectBook
function mapDispatchToProps(dispatch) {
    // whenever selectBook is called, the result should be passed to all of
    // our reducers. (flow to the reducers)
    return bindActionCreators( { selectBook: selectBook }, dispatch);
}

// take a function and a component and produces a container.
// the second parameter means :
// - Promote BookList from a component to a container
// - it needs to know about this new dispatch method, selectBook.
// make it available as prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

