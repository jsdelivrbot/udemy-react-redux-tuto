import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        if (!this.props.activeBook) {
            return (
                <div>no book selected</div>
            );
        }
        return (
            <div>
                Book detail : {this.props.activeBook.title}
            </div>
        );
    }
}

function mapStateToProps(state) {
    // whatever is returned will show up as props inside of BookDetail
    return {
        activeBook: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);

