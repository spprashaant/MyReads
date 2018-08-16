# MyReads Project

This project helps to manage list of books to read by providing 3 book shelves 'Currently Reading', 'Want to Read' and 'Read'. You can move the books between shelves using the green drop down. You can search for new books using the green books. In the search results page, you can change the shelf of the book so that it appears in the right shelf on the main page.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Installation
Clone the github repository and 
* cd MyReads
* install all project dependencies with `npm install`
* start the server with `npm start`

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. The correct state is updated in the component code.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

