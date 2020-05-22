import React from 'react';
import Book from './Book.js';
import './Bookcase.css';

class Bookcase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookList: props.bookList,
            startIndex: 0,
        };
        
    }

    renderBook(i) {
        let title = "", author = "";
        const books = this.state.bookList;
        if (books.length > i) {
            const book = books[i];
            title = book.title;
            author = book.author;
        }
        return (
            <Book title={title} author={author}/>
        );
    }
    
    render() {
        let start = this.state.startIndex;

        return (
            <div className="bookShelf">
                <div className="shelfRow">
                    {this.renderBook(start)}
                    {this.renderBook(start+1)}
                    {this.renderBook(start+2)}
                    {this.renderBook(start+3)}
                </div>
                <div className="shelfRow">
                    {this.renderBook(start+4)}
                    {this.renderBook(start+5)}
                    {this.renderBook(start+6)}
                    {this.renderBook(start+7)}
                </div>
                <div className="buttons">
                    <button>Previous</button>
                    <button>Next</button>
                </div>
            </div>
        );
    }
}

export default Bookcase;