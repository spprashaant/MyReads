import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BooksAPI from './BooksAPI'
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
      BooksAPI.update(book, shelf);
      BooksAPI.getAll().then((books) => {
        //this.setState({books});
        let newState = Object.assign({}, this.state);
        if(newState.books.filter((b) => b.id === book.id).length === 0){
          newState.books.push(book);
        }
        newState.books.filter((b) => b.id === book.id)[0].shelf = shelf;
        this.setState(newState);
      });
      
    }
  render() {
    return (
      <div className="app">
      <Route path="/search" render={() => (
          <SearchBooks addedBooks={this.state.books} handleSelectedChange={this.handleChange} />
           )} />
      <Route exact path="/" render={() => (
          <ListBooks handleSelectedChange={this.handleChange} books={this.state.books} />
          )} />
      </div> 
      )}
}

export default BooksApp;
