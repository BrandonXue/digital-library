import React from 'react';
import './Collections.css';
import CollectionsItem from './CollectionsItem.js';

class Collections extends React.Component {
    render() {
        return(
            <div className = "collections">  
                <div className="collectionsColumn"  style ={{width: '30%' }}>
                    <CollectionsItem bc = '#464866' tc = 'white' h = '22vw' j = 'space-evenly' 
                    pt = '3vw' pr = '' pl = '' pb = '' mt = '' mr = '' ml = '' mb = '5vw'/>
                    <CollectionsItem bc = '#AAABB8' tc = 'white' h = '16vw' j = 'space-evenly' 
                    pt = '' pr = '' pl = '' pb = '' mt = '' mr = '' ml = '' mb = '5vw'/>
                    <CollectionsItem bc = '#464866' tc = 'white' h = '22vw' j = 'space-evenly' 
                    pt = '3vw' pr = '' pl = '' pb = '' mt = '' mr = '' ml = '' mb = ''/>
                </div>
                <div className="collectionsColumn"  style ={{width: '5%' }}>
                </div>
                <div className = "collectionsColumn" style ={{width: '30%'}}> 
                    <CollectionsItem bc = '#2E9CCA' tc = 'white' h = '22vw' j = 'space-evenly' 
                    pt = '5vw' pr = '' pl = '' pb = '' mt = '10vw' mr = '' ml = '' mb = '5vw'/>
                    <CollectionsItem bc = '#29648A' tc = 'white' h = '22vw' j = 'space-evenly' 
                    pt = '5vw' pr = '' pl = '' pb = '' mt = '' mr = '' ml = '' mb = ''/>
                </div>
                <div className="collectionsColumn"  style ={{width: '5%' }}>
                </div>
                <div className = "collectionsColumn" style ={{width: '30%'}}> 
                    <CollectionsItem bc = '#AAABB8' tc = 'white' h = '22vw' j = 'space-evenly' 
                    pt = '3vw' pr = '' pl = '' pb = '' mt = '' mr = '' ml = '' mb = '5vw'/>
                    <CollectionsItem bc = '#464866' tc = 'white' h = '16vw' j = 'space-evenly' 
                    pt = '' pr = '' pl = '' pb = '' mt = '' mr = '' ml = '' mb = '5vw'/>
                    <CollectionsItem bc = '#2E9CCA' tc = 'white' h = '22vw' j = 'space-evenly' 
                    pt = '3vw' pr = '' pl = '' pb = '' mt = '' mr = '' ml = '' mb = ''/>
                </div>          
            </div> 
        );
    }
}

export default Collections;

// <div className="collectionsColumn" style={{
//    backgroundColor: "#FFFFFF",