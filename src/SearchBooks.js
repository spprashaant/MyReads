import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'

class SearchBooks extends Component {
	state = {
		query: ''
	}

	updateQuery = (query) => {
		this.setState({ query: query.trim() }) 
	}

	render(){
		const {books} = this.props;
		const {query} = this.state;

		let bookResults
		if(query){
			const match = new RegExp(escapeRegExp(query), 'i')
			bookResults = books.filter((book) => (match.test(book.title)|| match.test(book.authors)))
		} else {
			bookResults = []
		}

		return(
		<div className="search-books">
           <div className="search-books-bar">
            <Link to="/">Close</Link>
            <div className="search-books-input-wrapper">
                 <input value={query} onChange={(event) => this.updateQuery(event.target.value)} 
                  type="text" placeholder="Search by title or author"/>
            </div>
           </div>
           <div className="search-books-results">
            <ol className="books-grid">
						{bookResults.map((book) => (
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
			);
	}
}

export default SearchBooks;