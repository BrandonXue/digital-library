import React from 'react';
import './CollectionsItem.css';


class CollectionsItem extends React.Component {
    render() {
        return(
            <div className= "collectionsItem" style = 
                {{backgroundColor: this.props.bc, 
                  color: this.props.tc,
                  width: this.props.w,
                  height: this.props.h,
                  justifyContent: this.props.j,

                  paddingTop: this.props.pt,
                  paddingRight: this.props.pr,
                  paddingLeft: this.props.pl,
                  paddingBottom: this.props.pb,

                  marginTop: this.props.mt,
                  marginRight: this.props.mr,
                  marginLeft: this.props.ml,
                  marginBottom: this.props.mb,}}>
                  oi
            </div>
        );
    }
}

export default CollectionsItem;

// <div className= "collectionsColumn">  