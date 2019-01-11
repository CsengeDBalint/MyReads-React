import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Link} from 'react-router-dom'
import Book from './Book'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          query: '',
          searchedBookList: [] 
        
        }
      }
    
    updateQuery = (query) => {
        this.setState({ query: query.trim() })
        this.searchBooks(query)
    }  

    searchBooks = (query) => {
        query? (BooksAPI.search(query)
                .then((searchedBookList)=> {
                    this.setState({searchedBookList:searchedBookList}) 
                })
            ) 
            : this.setState({searchedBookList: []})
    }
    render(){
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link to='/'>
                <button className="close-search">Close</button>
              </Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The BooksAPI.search method DOES search by title or author. The search from BooksAPI is limited to a particular set of search terms.
                  Find search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                */}
                <input 
                    type="text" 
                    placeholder="Search by title or author" 
                    value={this.state.query} 
                    onChange = {(event)=> this.updateQuery(event.target.value)} />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {this.state.searchedBookList.map(singleBook => {
                  return (<li  key={singleBook.id}>
                    <Book 
                        key={singleBook.id}
                        singleBook = {singleBook}
                        currentShelf = {singleBook.shelf}
                        changeShelf = {this.props.changeShelf}/>
                  </li>)
              })
            }
                
              </ol>
            </div>
          </div>
        )
    }
}
    
export default Search

/* TODO:
1. in state : BooksApi.search() books
2. get books with BooksApi.search()
3. solve when search input is empty
4. add controlled component
5. shelfChanger should work
6. default currentShelf:'none' EXCEPT MyBooks books
*/