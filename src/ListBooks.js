import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

function ListBooks(props){
	const books = props.books;
	const currentlyReadingBooks = books.filter((book) => (book.shelf === 'currentlyReading'));
	const wantToRead = books.filter((book) => (book.shelf === "wantToRead"));
	const read = books.filter((book) => (book.shelf === "read"));
	return(
		<div className="list-books">
	       <div className="list-books-title">
	            <h1>MyReads</h1>
	       </div>
	       <div className="list-books-content">
	                 <BookShelf handleSelectedChange={props.handleSelectedChange} title="Currently Reading" bookList = {currentlyReadingBooks} />
	                 <BookShelf handleSelectedChange={props.handleSelectedChange} title="Want to Read" bookList = {wantToRead} />
	                 <BookShelf handleSelectedChange={props.handleSelectedChange} title="Read" bookList = {read} />
	       </div>
	       <div className="open-search">
	            <Link to="/search">Add a book</Link>
	       </div>
      	</div>
	);
}

export default ListBooks;