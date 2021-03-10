import React from 'react';
import SHOP_DATA from './Shopdata.js';
import Collection from '../../Components/Collection/Collection.js'

class Shoppage extends React.Component{
    constructor(){
        super();
        this.state = {
            totalCollection : SHOP_DATA
        }
    }

    render(){
        return(
            <div>
                <Collection allCollection = {this.state.totalCollection} />
            </div>
        )
    }

}
export default Shoppage;