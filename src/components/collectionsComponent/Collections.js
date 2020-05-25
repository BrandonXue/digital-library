import React from 'react';
import './Collections.css';
import CollectionsItem from './CollectionsItem.js';

class Collections extends React.Component {
    render() {
        return(
            <div className = "collections">  
                <div className="collectionsColumn">
                    <CollectionsItem bgColor = '#464866' height = '22vw'/>
                    <CollectionsItem bgColor = '#AAABB8' height = '16vw' marginTop = '5vw'/>
                    <CollectionsItem bgColor = '#464866' height = '22vw' marginTop = '5vw'/>
                </div>
                <div className = "collectionsColumn"> 
                    <CollectionsItem bgColor = '#2E9CCA' height = '22vw' marginTop = '10vw'/>
                    <CollectionsItem bgColor = '#29648A' height = '22vw' marginTop = '5vw'/>
                </div>
                <div className = "collectionsColumn"> 
                    <CollectionsItem bgColor = '#AAABB8' height = '22vw'/>
                    <CollectionsItem bgColor = '#464866' height = '16vw' marginTop = '5vw'/>
                    <CollectionsItem bgColor = '#2E9CCA' height = '22vw' marginTop = '5vw'/>
                </div>          
            </div> 
        );
    }
}

export default Collections;