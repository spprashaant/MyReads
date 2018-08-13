import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

// import update from 'immutability-helper'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
     books: []
   }

   componentDidMount() {
      BooksAPI.getAll().then((books) => {
        this.setState({books});
      })
    }
    handleChange = (book, shelf) => {
      let newState = Object.assign({}, this.state);
      newState.books.filter((b) => b.id === book.id)[0].shelf = shelf;
      this.setState(newState);
      // this.setState((state) => {
      //   state.books.filter((b) => b.id === book.id).shelf = shelf;
      //   books: state.books;
      //   // let currentBooks = state.books;
      //   // books: update(currentBooks, {currentBooks: {$set: currentBooks.filter((b) => b.id === book.id).shelf = shelf}})
      // });
      BooksAPI.update(book, shelf);
    }
  render() {
    return (
      <div className="app">
      <Route path="/search" render={() => (
          <SearchBooks books={this.state.books} />
           )} />
      <Route exact path="/" render={() => (
          <ListBooks handleSelectedChange={this.handleChange} books={this.state.books} />
          )} />
      </div> 
      )}
}

export default BooksApp;
