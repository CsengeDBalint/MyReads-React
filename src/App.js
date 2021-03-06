import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MyBooks from './MyBooks'
import Search from './Search'
import {Switch, Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     
    showSearchPage: false,*/
    books:[]
  }

  //Fetch books from backend server
  componentDidMount() {
    BooksAPI.getAll()
        .then(data => {
          this.setState({books : data});
          //console.log('fetched data:' + JSON.stringify(data))
        })
        .catch(error => {
          console.log('An error occured during fetching data: ' + error);
        })
  }

  //Update state when the user select a different shelf
  changeShelf =(book,shelf)=> {
    BooksAPI.update(book, shelf)
      .then(response =>{
        BooksAPI.getAll()
          .then(data => {
            this.setState({books : data});
          })
          .catch(error => {
            console.log('An error occured during updating data: ' + error);
          })
      
      })
      .catch(error => {
        console.log('An error occured during update shelf data: ' + error);
      })
    }
  


  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path='/Search' render={()=> (
            <Search
              books = {this.state.books}
              changeShelf = {this.changeShelf}
              />
          )}/>
          <Route exact path='/' render={()=> (
            <MyBooks
              books = {this.state.books}
              changeShelf = {this.changeShelf}
              />
          )}/>
        </Switch>
      </div>
    )
  }
}




export default BooksApp
