
import './App.css'
import React from 'react';
import CardList from '../src/components/card-list/CardList.component'
import SearchBox from '../src/components/search-box/Search-Box.components'


const url = 'https://jsonplaceholder.typicode.com/users'

class App extends React.Component {
  constructor(){
    super();
    this.state =  {
      superHeroes : [],
      searchField : '',
    }
  }

  componentDidMount () {
    fetch(url).then(response => response.json()).then(superHero => this.setState({superHeroes : superHero}))
  }
  render() {
    const {superHeroes, searchField} = this.state;
    const filteredSuperHeroes = superHeroes.filter(superHero => 
      superHero.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return(
      <div className = 'App'>
        <h1>Your Fav. Super Heroes</h1>
        <SearchBox placeholder = 'search superhero' handleChange = {e => this.setState({searchField : e.target.value})} />
        <CardList superHeroes = {filteredSuperHeroes} />
      </div>
    )
  }
}

export default App;
