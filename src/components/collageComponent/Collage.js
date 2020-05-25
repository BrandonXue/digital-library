import React from 'react';
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

    renderTile(tileNum, tileColor, mediaItem, mediaType) {
        return (
            <CollageItem 
                tileNum={tileNum}
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

        return ( 
            <div className="collage">
                {this.renderTile(1, "#464866", testItem, testType)}
                {this.renderTile(2, "#AAABB8", testItem2, testType)}
                {this.renderTile(3, "#29648A", testItem2, testType)}
                {this.renderTile(4, "#2E9CCA", testItem2, testType)}
                {this.renderTile(5, "#AAABB8", testItem2, testType)}
                {this.renderTile(6, "#29648A", testItem2, testType)}
                {this.renderTile(7, "#464866", testItem2, testType)}
            </div>
            
        );
    }
}

export default Collage;