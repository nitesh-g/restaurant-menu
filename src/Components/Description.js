import React, { Component} from 'react'

export default class Description extends Component {
    render () {
        let menuItems = this.props.categoryDescription.menu_items
        let category = this.props.categoryDescription.category

        return (
            <div className='description-wrapper'>
               {
                   category && 
                   <h4> Items in Category: ({category.short_name})</h4>
               } 
               <div>
                   {
                    menuItems && 
                       <table className='table table-bordered table-striped'>
                           <thead>
                               <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                               </tr>                               
                           </thead>
                        { 
                        menuItems.map((itemName, index) => {   
                           return ( 
                          <tbody key={itemName.id} >
                             <tr>
                                 <td>{itemName.name}</td>
                                 <td>{itemName.description}</td>                                 
                             </tr>
                           </tbody>
                           )
                        })
                    }
                       </table>
                   }
               </div>
            </div>
        )
    }
}