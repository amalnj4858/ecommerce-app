import React from 'react';
import ShopPreview from '../../Components/Shop-preview/Shop-preview.js';
import {Route} from 'react-router-dom';
import ShopCategory from '../../Components/ShopCategory/ShopCategory.js';


const Shoppage = ({match})=>{
  
    return (
        <div className='shoppage'>
           <Route exact path = {`${match.path}`} component = {ShopPreview} />
           <Route  path = {`${match.path}/:categoryName`} component = {ShopCategory} />
        </div>
    )
}


export default Shoppage;



