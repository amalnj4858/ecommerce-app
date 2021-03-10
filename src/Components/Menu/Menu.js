import React from 'react';
import Menuitem from '../Menu-item/Menu-item.js';
import './Menu.css';

class Menu extends React.Component{
    constructor(){
        super();
        this.state = {
            sections :  [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  size: '',
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  size: '',
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  size: '',
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]   
        }
    }

    render(){
        return(
            <div className="menu">
                {
                    this.state.sections.map(section=>{
                        return <Menuitem title = {section.title} imgUrl = {section.imageUrl} type = {section.size} url = {section.linkUrl} />
                    })
                }
            </div>
        )
    }
}

export default Menu;