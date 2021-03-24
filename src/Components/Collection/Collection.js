import React from 'react';
import Subcollection from '../SubCollection/SubCollection.js';

const Collection = ({allCollection})=>{
    return (
        <div>
            {
                allCollection.map(section=>{
                console.log(section)
                return (
                    <div key = {section.id} >
                        <h1 style = {{margin : '15px' }} >{section.title}</h1>
                        <Subcollection items = {section.items} />
                    </div>
                );
                })
            }
        </div>
    )
}

export default Collection;