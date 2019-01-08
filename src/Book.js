import React from 'react';

function Book(props) {
    const placeholder = "https://imgplaceholder.com/128x198?text=NO+COVER&font-size=24&font-family=impact";

    return (
        
                        
        <div className="book">
            <div className="book-top">
                <div className="book-cover"></div>
                
                <img src={props.singleBook.imageLinks.smallThumbnail ? props.singleBook.imageLinks.smallThumbnail : `${placeholder}`} alt={props.singleBook.title} />
                <div className="book-shelf-changer">
                <select>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
                </div>
            </div>
            <div className="book-title">{props.singleBook.title}</div>
            <div className="book-authors">{props.singleBook.authors}</div>
            <div className="book-authors">{props.singleBook.publishedDate}</div>
            <a
                className="book-authors"
                href={props.singleBook.infoLink}
                target="_blank"
                rel="noopener noreferrer"
            >More information
            </a>

            <div className="book-authors">currentShelf = {props.singleBook.shelf}</div>
        </div>
    )
}

export default Book;


//style={{ width: 128, height: 193, backgroundImage: `url("${props.singleBook.imageLinks.smallThumbnail}")` }}