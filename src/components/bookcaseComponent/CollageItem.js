import React from 'react';
import './CollageItem.css';

class CollageItem extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        let title = this.props.title ? this.props.title : "[Book not found]";
        let author = this.props.author ? this.props.author : "[Author not found]";
        let color = this.props.color? this.props.color : "#999999";
        
        return (
            <div className="collageItem" style={{backgroundColor: color}}>
                <div className="image">placeholder</div>
                <div className="bookTitle">{title}</div>
                <div className="bookAuthor">{author}</div>
            </div>
        );
    }
}

export default CollageItem;