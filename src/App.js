import React, { Component } from 'react';
import logo from './logo.svg';
import MovieRow from './MovieRow'
import './App.css';
import $ from 'jquery'

class App extends Component {
    constructor(props) {
        super(props)
        console.log("This is my initializer")

        this.state = {}
        this.performSearch("Avenger")
    }

    performSearch(searchTerm) {
        console.log("performing search")
        const urlString = 'https://api.themoviedb.org/3/search/movie?api_key=2d615ff42ada67c5b3ef98d1a28dbb40&query=' + searchTerm
        $.ajax({
            url: urlString,
            success: (searchResults) =>{
                console.log("Fetch data successfully")
                //console.log(searchResults)
                const results = searchResults.results

                var movieRows = []

                results.forEach((movie) =>{
                    console.log(movie.title)
                    movie.poster_src = "http://image.tmdb.org/t/p/w185/" + movie.poster_path
                    console.log(movie.poster_src)
                    const movieRow = <MovieRow movie={movie}/>
                    movieRows.push(movieRow)
                })

                this.setState({rows: movieRows})
            },
            error: (xhr, status, err) => {
                console.error("failed to fetch data")
             }

        })
    }

    searchChangeHandler(event) {
        const searchTerm = event.target.value
        this.performSearch(searchTerm)
    }
  render() {
    return (
      <div className="App">
          <table alt="app icon" className={"titleBar"}>
              <tbody>
              <tr>
                  <td width="8">
                      <img width="50" src={"BlackBackground.jpg"}/>
                  </td>
                  <td><h2>MovieDB Search</h2></td>
              </tr>
              </tbody>
          </table>

          <input style={{
              fontSize: 24,
              display: 'block',
              width: '99%',
              paddingTop: 8,
              paddingBottom: 8,
              paddingLeft: 16
          }} onChange={this.searchChangeHandler.bind(this)} placeholder={"Enter search term"}/>

          {this.state.rows}
      </div>
    );
  }
}

export default App;
