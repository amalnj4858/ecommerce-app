import React from 'react';
import Collectionitem from '../Collectionitem/Collectionitem.js'
import './SubCollection.css'

const Subcollection = ({items})=>{
    
    return(
      <div className = 'collectionSection'>
            {
                items
                .slice(0,4)
                .map(item=>{
                  return (  
                  <Collectionitem   item = {item} />
                  )
                })
            }
        </div>
    )
}

export default Subcollection;