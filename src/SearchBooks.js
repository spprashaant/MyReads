import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
	state = {
		query: '',
		bookResults: []
	}

	updateQuery = (query) => {
		//const match = new RegExp(escapeRegExp(query), 'i')
		BooksAPI.search(query).then((books) => {
			if(books){
        		this.setState({
	        	bookResults: books,
	        	query: query.trim()
	        	});
	    	}
		    else{
		    	this.setState({
		        	bookResults: [],
		        	query: ''
		      	});
		    }
		}
		)
	}
	render(){
		//const {books} = this.props;
		const {query, bookResults} = this.state;

		// let bookResults
		// if(query){
		// 	const match = new RegExp(escapeRegExp(query), 'i')
		// 	bookResults = books.filter((book) => (match.test(book.title)|| match.test(book.authors)))
		// } else {
		// 	bookResults = []
		// }

		return(
		<div className="search-books">
           <div className="search-books-bar">
            <Link to="/">Close</Link>
            <div className="search-books-input-wrapper">
                 <input onChange={(event) => this.updateQuery(event.target.value)} 
                  type="text" placeholder="Search by title or author"/>
            </div>
           </div>
           <div className="search-books-results">
            <ol className="books-grid">
						{bookResults.map((book) => (
				        <li key={book.id}>
	                                         <div className="book">
	                                              <div className="book-top">
	                                                   <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks? book.imageLinks.smallThumbnail: ''})` }}></div>
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
			);
	}
}

export default SearchBooks;