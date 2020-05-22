import React from 'react';
import './Book.css';

class Book extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        let title = this.props.title ? this.props.title : "[Book not found]";
        let author = this.props.author ? this.props.author : "[Author not found]";
        return (
            <div className="bookPanel">
                <div className="image">placeholder</div>
                <div className="bookTitle">{title}</div>
                <div className="bookAuthor">{author}</div>
            </div>
        );
    }
}

export default Book;