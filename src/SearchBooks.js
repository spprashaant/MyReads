import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
	state = {
		bookResults: [],
		addedBooks: this.props.addedBooks
	}

	clearState = () => {
		this.setState({
		        	bookResults: [],
		      	});
	}

	updateShelf = (book, e) => {
		this.props.handleSelectedChange(book, e.target.value);
		let newState = Object.assign({}, this.state);
        if(newState.addedBooks.filter((b) => b.id === book.id).length === 0){
          newState.addedBooks.push(book);
        }
        newState.addedBooks.filter((b) => b.id === book.id)[0].shelf = e.target.value;
        newState.bookResults.filter((b) => b.id === book.id)[0].shelf = e.target.value;
        this.setState(newState);
	}
	updateQuery = (query) => {
		if(!query.trim()){
			this.clearState();
		} else {
			BooksAPI.search(query.trim()).then((books) => {
				//Handle invalid query
				if(books && books.error){
					this.clearState();
				}
				else if(books){
					const {addedBooks} = this.state;
					books.map((book) => {
						let addedBook = addedBooks.filter(b => (b.id === book.id));
						if(addedBook.length>0){
							book.shelf = addedBook[0].shelf;
							//BooksAPI.update(book, book.shelf);
						}
						else{
							book.shelf = "none";
							//BooksAPI.update(book, "none");
						}
					});
	        		this.setState({
			        	bookResults: books,
		        	});
		    	}
			    else{
			    	this.clearState();
			    }
			}
			).catch((e) => {
				//Reset results in case of error
				this.setState({
			        	bookResults: [],
			      	});
			})
		}
	}
	render(){
		const {bookResults} = this.state;
		
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
	                                                        <select value={book.shelf} onChange={(e) => this.updateShelf(book, e)}>
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