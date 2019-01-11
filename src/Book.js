import React from 'react'
import ShelfChanger from './ShelfChanger'


function Book(props) {
    const placeholder = "https://imgplaceholder.com/128x198?text=NO+COVER&font-size=24&font-family=impact";
    //require('./icons/placeholder') 
    
   
    return (           
        <div className="book">
            <div className="book-top">
                <div className="book-cover"></div>
                <img src={props.singleBook.imageLinks? props.singleBook.imageLinks.smallThumbnail : `${placeholder}`} alt={props.singleBook.title} />
                <ShelfChanger
                    changeShelf = {props.changeShelf}
                    book = {props.singleBook}
                    shelf = {props.currentShelf}
                />
            </div>
            <div className="book-title">{props.singleBook.title}</div>
            <div className="book-authors">{props.singleBook.authors}</div>
            <div className="book-authors">{props.singleBook.publishedDate}</div>
            <a
                className="book-link"
                href={props.singleBook.infoLink}
                target="_blank"
                rel="noopener noreferrer"
            >More information
            </a>
        </div>
    )
}

export default Book;


//style={{ width: 128, height: 193, backgroundImage: `url(${props.singleBook.imageLinks.smallThumbnail})` }}