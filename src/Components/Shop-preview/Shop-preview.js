import React from 'react';
import Collection from '../../Components/Collection/Collection.js';
import {connect} from 'react-redux';
import {shopCollectionsSelector} from '../../Redux/Shop/Shop-selector.js';

const ShopPreview = ({collection})=>{
    return(
        <div>
            <Collection allCollection = {collection} />
      </div>
    )
}

const mapStateToProps = (state) =>({
    collection : shopCollectionsSelector(state)
})

export default connect(mapStateToProps)(ShopPreview);