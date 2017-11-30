import React, { Component } from 'react';
import axios from 'axios'
import Menu from './Components/Menu'
import Description from './Components/Description'
import './App.css';

class App extends Component {
    
    constructor(props){
        super(props)
        this.state = { 
          menuList: [],
          selectedMenu: {}
        }
        this.handleSelected = this.handleSelected.bind(this)
    }

    componentDidMount() {
        this.RequestMenu();
    }

    RequestMenu() {
      axios.get('https://davids-restaurant.herokuapp.com/categories.json')
                    .then((response) => {
                      if(response.data){
                        var results = response.data
                        this.setState({menuList: results})
                      }
                    })
    }

    handleSelected(value) {
      axios.get(`https://davids-restaurant.herokuapp.com/menu_items.json?category=${value}`)
            .then((response) => {
                if(response.data){
              var categoryDescription = response.data
              this.setState({selectedMenu: categoryDescription})
                }
            })
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
            <h2>Restaurant</h2>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-3'>
                    <Menu menuList={this.state.menuList} onSelected={this.handleSelected} />
                  </div>
                  <div className='col-md-9'>
                    <Description categoryDescription={this.state.selectedMenu} />
                  </div>
                </div>
              </div>
        </div>
      </div>
    );
  }
}

export default App;
