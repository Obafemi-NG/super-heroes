
import './App.css'
import React from 'react';
import CardList from '../src/components/card-list/CardList.component'


const url = 'https://jsonplaceholder.typicode.com/users'

class App extends React.Component {
  constructor(){
    super();
    this.state =  {
      name : [],
    }
  }

  componentDidMount () {
    fetch(url).then(response => response.json()).then(superHero => this.setState({name : superHero}))
  }
  render() {
    return(
      <div className = 'App'>
        <CardList superHeroes = {this.state.name} />
      </div>
    )
  }
}

export default App;
