# MyReads: A Book Lending App
Google [Front-End Web Developer Nanodegree] Scholarship at Udacity(https://eu.udacity.com/course/front-end-web-developer-nanodegree--nd001) - Project 7

## Table of Contents
  
* Project
* Prerequisites
* Run the Project
* Functionality
* File Sructure
* Backend Server
* Contribution
* License

## Project

This project was bootstrapped with[Create React App](https://github.com/facebookincubator/create-react-app) and using the [starter template](https://github.com/udacity/reactnd-project-myreads-starter) provided by Udacity.

This one-page-application is a book organising app. The user can organise his books via a book-switch on three shelves:
-Presently Reading
-Have in mind
-Already read

New books can be added on the search page. There the user can search by the book's title or author(s) in a large database.

## Prerequisites

+npm
+sort-by
+escape-string-regexp
+react-router-dom
 

## Run the Project

 1.  Clone or download this repository
 2.  `cd p7-myreads-react` folder
 3.  Install all dependencies with `npm install` (in the root of this repository of your terminal)
 4.  Start the server with  `npm start`
 5.  Navigate to **localhost:3000** in your favorite browser
 
## Functionality
This one-page-application is a bookshelf app. The user can select & categorize his books.
The main page (MyBooks.js) displays three "bookshelves" (categories):
-Presently Reading
-Have in mind
-Already read

Each category contains a number of books.
Each book contains a switch to select a shelf (or delete the book by selecting the bookshelf named 'None').
New books can be added on the search page (Search.js). 
There the user can search by the book's title or author(s) in a large database.

## File Structure
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md 
├── package.json 
├── public
│   ├── favicon.ico 
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css 
    ├── App.js 
    ├── App.test.js
    ├── Book.js 
    ├── BooksAPI.js
    ├── MyBooks.js
    ├── Search.js
    ├── ShelfChanger.js 
    ├── icons 
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css 
    └── index.js 
```

## Backend Server

The project comes with a provided backend server to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains these methods:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.


## Contribution

BooksAPI.js provided by [Udacity](https://eu.udacity.com/)

## License

MIT License
