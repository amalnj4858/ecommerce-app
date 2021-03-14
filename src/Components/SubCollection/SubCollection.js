import React from 'react';
import Collectionitem from '../Collectionitem/Collectionitem.js'
import './SubCollection.css'

const Subcollection = ({items})=>{
    
    return(
      <div className = 'collectionSection'>
            {
                items
                .filter(item=>item.id<5)
                .map(item=>{
                  return (  
                  <Collectionitem id = {item.id} title = {item.name} imgUrl = {item.imageUrl} price = {item.price}   />
                  )
                })
            }
        </div>
    )
}

export default Subcollection;