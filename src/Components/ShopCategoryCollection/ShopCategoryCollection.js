import React from 'react';
import Collectionitem from '../Collectionitem/Collectionitem.js'
import './ShopCategoryCollection.css'

const ShopCategoryCollection = ({items})=>{
    
    return(
      <div className = 'collectionSection'>
            {
                items
                .map(item=>{
                  return (  
                  <Collectionitem   item = {item} />
                  )
                })
            }
        </div>
    )
}

export default ShopCategoryCollection;