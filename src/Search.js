import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Link} from 'react-router-dom'
import Book from './Book'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          query: '', 
          searchedBookList: []  
        
        }
      }
    
    updateQuery = (query) => {
        this.setState({ query: query })
        this.searchBooks(query)
    }  
    /*
    clearQuery = () => {
        this.setState({searchedBookList: ''})
    }
    */
    searchBooks = (query) => {
        //If there is a list returned by the expression the user loooking for
        //filter by book title or author
        //When there is not any list, return nothing
        
        query? BooksAPI.search(query)
                .then((searchedBookList)=> {
                     ((searchedBookList.length)&&(query === this.state.query)) ? 
                            (this.state.searchedBookList.filter(book => {
                                const match = new RegExp(escapeRegExp(this.state.query), 'i');
                               return match.test(book.title) || match.test(book.authors)
                            }) 
                            && this.setState({searchedBookList:searchedBookList})
                            )
                        : this.setState({searchedBookList: []})
                    })
                .catch(error => {
                    console.log('An error occured during fetching data for your search: ' + error);
                  })
               
            : this.setState({searchedBookList: []})
    }
  
    render(){
        //The list of the books that match sort by title
        this.state.searchedBookList.sort(sortBy('title'));
        //console.log('book.id: ' +this.props.books.map(book => book.id));
        //console.log('searchedBookList.id: ' +this.state.searchedBookList.map(searchedBook => searchedBook.id));

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
            {this.state.searchedBookList.length !== 0 && (
                     <div className="search-book-results-number">
                        <p>Your search revealed {this.state.searchedBookList.length} books.</p>
                    </div>
                )}
              <ol className="books-grid">
              {/*Checks whether the books returned by the search appear in MyBooks component.
                If yes, their bookshelf will be taken over.*/}
              {this.state.searchedBookList.map(singleBook => {
                    this.props.books.map(book=> (book.id === singleBook.id)? (singleBook.shelf = book.shelf) : ('none'))
                  return (<li  key={singleBook.id}>
                        <Book 
                            key={singleBook.id}
                            singleBook = {singleBook}
                            shelf = {singleBook.shelf}
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

