import React from 'react'
import Book from './Book'
import {Link} from 'react-router-dom'
import './App.css'

class MyBooks extends React.Component {

    render (){
        const bookShelves = [
            'currentlyReading',
            'wantToRead',
            'read',
            'none'
        ]
        return (
            <div className="list-books">
                        <div className="list-books-title">
                        <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                        <div>
                            <div className="bookshelf">
                            <h2 className="bookshelf-title">Presently reading </h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                {this.props.books.map(singleBook =>(
                                    (singleBook.shelf === bookShelves[0]) &&(
                                    <li key={singleBook.id}>
                                    <Book 
                                        key={singleBook.id}
                                        singleBook = {singleBook}
                                        shelf = {bookShelves[0]}
                                        changeShelf = {this.props.changeShelf}
                                    />
                                    </li>
                                    )
                                ))}
                                </ol>
                            </div>
                            </div>
                            <div className="bookshelf">
                            <h2 className="bookshelf-title">Have in mind</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                {this.props.books.map(singleBook =>(
                                    (singleBook.shelf === bookShelves[1]) &&(
                                    <li key={singleBook.id}>
                                    <Book 
                                        key={singleBook.id}
                                        singleBook = {singleBook}
                                        shelf = {bookShelves[1]}
                                        changeShelf = {this.props.changeShelf}
                                    />
                                    </li>
                                    )
                                ))}
                                </ol>
                            </div>
                            </div>
                            <div className="bookshelf">
                            <h2 className="bookshelf-title">Already read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                {this.props.books.map(singleBook =>(
                                    (singleBook.shelf === bookShelves[2]) &&(
                                    <li  key={singleBook.id}>
                                    <Book 
                                        key={singleBook.id}
                                        singleBook = {singleBook}
                                        shelf = {bookShelves[2]}
                                        changeShelf = {this.props.changeShelf}
                                    />
                                    </li>
                                    )
                                ))}
                                </ol>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="open-search">
                        <Link to="/Search">
                            <button>Add a book</button>
                        </Link>
                        </div>
                    </div>
        )
    }
}
export default MyBooks
