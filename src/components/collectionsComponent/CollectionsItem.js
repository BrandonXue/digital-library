import React from 'react';
import './CollectionsItem.css';

class CollectionsItem extends React.Component {
    render() {
        return(
            <div className= "collectionsItem"
                style = {{
                    backgroundColor: this.props.bgColor, 
                    height: this.props.height,
                    marginTop: this.props.marginTop,
                }}
            >
                  oi
            </div>
        );
    }
}

export default CollectionsItem;  