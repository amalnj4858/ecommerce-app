import React from 'react';
import Subcollection from '../SubCollection/SubCollection.js';
import {Link} from 'react-router-dom';
import './Collection.css';

const Collection = ({allCollection})=>{
    return (
        <div>
            {
                allCollection.map(section=>{
                return (
                    <div key = {section.id} >
                        <Link className ='link' style = {{}} to = {`shop/${section.title}`} ><h1 style = {{margin : '15px' }} >{section.title}</h1></Link>
                        <Subcollection items = {section.items} />
                    </div>
                );
                })
            }
        </div>
    )
}

export default Collection;