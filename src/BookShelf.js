import React, { Component } from 'react'
import { Link } from 'react-router-dom'

function BookShelf(props){
	const {bookList, title} = props;
	return(
			<div className="bookshelf">
                      <h2 className="bookshelf-title">{title}</h2>
                      <div className="bookshelf-books">
                           <ol className="books-grid">
                           		{bookList.map((book) => 
                           			(
                                    <li key={book.id}>
                                         <div className="book">
                                              <div className="book-top">
                                                   <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                                                   <div className="book-shelf-changer">
                                                        <select value={book.shelf} onChange={(e) => props.handleSelectedChange(book, e.target.value)}>
                                                             <option value="move" disabled>Move to...</option>
                                                             <option value="currentlyReading">Currently Reading</option>
                                                             <option value="wantToRead">Want to Read</option>
                                                             <option value="read">Read</option>
                                                             <option value="none">None</option>
                                                        </select>
                                                   </div>
                                              </div>
                                              <div className="book-title">{book.title}</div>
                                              <div className="book-authors">{book.authors}</div>
                                         </div>
                                    </li>
                                    ))}
                           </ol>
                      </div>
            </div>
    );
}

export default BookShelf;