import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ListBooks extends Component{
	render(){
		const books = this.props.books;
		const currentlyReadingBooks = books.filter((book) => (book.shelf === 'currentlyReading'));
		const wantToRead = books.filter((book) => (book.shelf === "wantToRead"));
		const read = books.filter((book) => (book.shelf === "read"));
		return(

<div className="list-books">
           <div className="list-books-title">
                <h1>MyReads</h1>
           </div>
           <div className="list-books-content">
                <div>
                     <div className="bookshelf">
                          <h2 className="bookshelf-title">Currently Reading</h2>
                          <div className="bookshelf-books">

                               <ol className="books-grid">
                               		{currentlyReadingBooks.map((book) => 
                               			(
	                                    <li key={book.id}>
	                                         <div className="book">
	                                              <div className="book-top">
	                                                   <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
	                                                   <div className="book-shelf-changer">
	                                                        <select value={book.shelf} onChange={(e) => this.props.handleSelectedChange(book, e.target.value)}>
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
                     <div className="bookshelf">
                          <h2 className="bookshelf-title">Want to Read</h2>
                          <div className="bookshelf-books">
                               <ol className="books-grid">
                               {wantToRead.map((book) => 
                               			(
                                    <li key={book.id}>
                                         <div className="book">
                                              <div className="book-top">
                                                   <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                                                   <div className="book-shelf-changer">
                                                        <select value={book.shelf} onChange={(e) => this.props.handleSelectedChange(book, e.target.value)}>
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
                     <div className="bookshelf">
                          <h2 className="bookshelf-title">Read</h2>
                          <div className="bookshelf-books">
                               <ol className="books-grid">
                               {read.map((book) => 
                               			(
                                    <li key={book.id}>
                                         <div className="book">
                                              <div className="book-top">
                                                   <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                                                   <div className="book-shelf-changer">
                                                        <select value={book.shelf} onChange={(e) => this.props.handleSelectedChange(book, e.target.value)}>
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
                </div>
           </div>
           <div className="open-search">
                <Link to="/search">Add a book</Link>
           </div>
          </div>
			);
	}
}

export default ListBooks;