import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MyBooks from './MyBooks'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books:[]
  }

  //Fetch data by the provided BooksAPI
  /*/ in componentDidMount
  BooksAPI.getAll()
  .then((response) => {
    // update state
    // i.e. this.state.books
  })
  .catch((error) => {
  console.log(error);
  })
  // in the render method
  this.state.books.map((book) => {
  return (
  // return JSX here
  )
  })
  */

  componentDidMount() {
    BooksAPI.getAll()
        .then(data => {
          this.setState({books : data});
          console.log('fetched data:' + JSON.stringify(data))
        })
        .catch(error => {
          console.log('An error occured during fetching data: ' + error);
        })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <MyBooks/>
        )}
      </div>
    )
  }
}




export default BooksApp
