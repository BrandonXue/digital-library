import React from 'react';
import './CollageItem.css';

class CollageItem extends React.Component {

    render() {
        let mediaItem = this.props.mediaItem;
        let type = this.props.mediaType;
        let title = "Unknown title", creator = "Unknown creator";
        if (type === "music") {
            title = mediaItem.title;
            creator = mediaItem.artist;
        } else if (type === "written") {
            title = mediaItem.title;
            creator = mediaItem.author;
        }

        let colStart = 1, colEnd = 1, rowStart = 1, rowEnd = 1;
        switch (this.props.tileNum) {
            case 1:
                colStart = 1; colEnd = 2; rowStart = 1; rowEnd = 2;
                break;
            case 2:
                colStart = 2; colEnd = 3; rowStart = 1; rowEnd = 2;
                break;
            case 3:
                colStart = 2; colEnd = 2; rowStart = 2; rowEnd = 3;
                break;
            case 4:
                colStart = 3; colEnd = 5; rowStart = 1; rowEnd = 3;
                break;
            case 5:
                colStart = 1; colEnd = 4; rowStart = 3; rowEnd = 6;
                break;
            case 6:
                colStart = 4; colEnd = 5; rowStart = 3; rowEnd = 4;
                break;
            case 7:
                colStart = 4; colEnd = 5; rowStart = 4; rowEnd = 5;
                break;
            default:
                break;
        }
        
        return (
            <div className="collageItem" style={{
                backgroundColor: this.props.tileColor,
                gridColumnStart: colStart,
                gridColumnEnd: colEnd,
                gridRowStart: rowStart,
                gridRowEnd: rowEnd,}}
            >
                <div className="image">placeholder</div>
                <div className="title">{title}</div>
                <div className="author">{creator}</div>
            </div>
        );
    }
}

export default CollageItem;