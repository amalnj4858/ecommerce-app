import React from 'react';
import {shopCollectionCategorySelector} from '../../Redux/Shop/Shop-selector.js';
import ShopCategoryCollection from '../ShopCategoryCollection/ShopCategoryCollection.js';
import {connect} from 'react-redux';
import './ShopCategory.css';

const ShopCategory = ({match,categoryItems})=>{
    return(
        <div className='category'>
            <h1 className='categoryName'>{match.params.categoryName.toUpperCase()}</h1>
            <ShopCategoryCollection items = {categoryItems.items} />
        </div>
    )
}

const matchStateToProps = (state,ownProps) =>{
   return {
        categoryItems : shopCollectionCategorySelector(ownProps.match.params.categoryName.toLowerCase())(state)
    }
}

export default connect(matchStateToProps)(ShopCategory);