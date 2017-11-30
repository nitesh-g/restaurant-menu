import React, { Component } from 'react'
// import $ from 'jquery'
export default class Menu extends Component {

    didClick (event, shortName, id){
        this.props.onSelected(shortName)
    }

    render(){
        return(
            <div className='MenuList-Wrapper'>
                {
                    this.props.menuList.map((menuName, index) => {
                        return (
                            <div key={index} onClick={(e) => this.didClick(e, menuName.short_name, menuName.id) } >
                                <ul>
                                    <li>{`${menuName.name} (${menuName.short_name})`} </li>
                                </ul>
                            </div>
                        )
                    }) 
                }
            </div>
        );
    }
}
