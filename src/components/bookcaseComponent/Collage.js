import React from 'react';
import Book from './CollageItem.js';
import './Collage.css';
import CollageItem from './CollageItem.js';

class Collage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            media: props.media,
            music: props.music,
            written: props.written,
            startIndex: 0,
        };
    }

    renderTile(tileNum, width, height, tileColor, mediaItem, mediaType) {
        return (
            <CollageItem 
                tileNum={tileNum}
                width={width}
                height={height}
                tileColor={tileColor}
                mediaItem={mediaItem}
                mediaType={mediaType}
            />
        );
    }
    
    render() {
        let testItem = this.state.music[0];
        let testItem2 = this.state.music[1];
        let testType = "music";

        // 258 294
        return (
            <div className="collage">
                {this.renderTile(1, "5.85em", "6.67em", "#464866", testItem, testType)}
                {this.renderTile(2, "5.85em", "6.67em", "#AAABB8", testItem2, testType)}
                {this.renderTile(3, "5.85em", "6.67em", "#29648A", testItem2, testType)}
                {this.renderTile(4, "5.85em", "6.67em", "#2E9CCA", testItem2, testType)}
                {this.renderTile(5, "5.85em", "6.67em", "#AAABB8", testItem2, testType)}
                {this.renderTile(6, "5.85em", "6.67em", "#29648A", testItem2, testType)}
                {this.renderTile(7, "5.85em", "6.67em", "#464866", testItem2, testType)}
            </div>
        );
    }
}

export default Collage;