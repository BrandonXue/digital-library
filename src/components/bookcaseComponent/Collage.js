import React from 'react';
import Book from './CollageItem.js';
import './Collage.css';

class Collage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            media: props.media,
            startIndex: 0,
        };
    }

    renderBook(i) {
        let title = "", author = "";
        const media = this.state.media;
        if (media.length > i) {
            const mediaItem = media[i];
            title = mediaItem.title;
            author = mediaItem.author;
        }
        return (
            <Book title={title} author={author}/>
        );
    }
    
    render() {
        let start = this.state.startIndex;

        return (
            <div className="mosaic">
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

export default Collage;