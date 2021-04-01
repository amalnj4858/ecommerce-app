import React from 'react';
import Menuitem from '../Menu-item/Menu-item.js';
import {connect} from 'react-redux';
import {sectionsSelector} from '../../Redux/Sections/Sections-selector';
import './Menu.css';


const Menu = ({sections})=>{
        return(
            <div className="menu">
                {
                        sections.map(section=>{
                        return <Menuitem title = {section.title} imgUrl = {section.imageUrl} type = {section.size} url = {section.linkUrl} />
                    })
                }
            </div>
        )
    }

const mapStateToProps = (state)=>({
  sections : sectionsSelector(state)
})
export default connect(mapStateToProps)(Menu);