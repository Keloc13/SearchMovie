import React, { Component } from 'react';
import logo from './logo.svg';
import MovieRow from './MovieRow'
import './App.css';
import $ from 'jquery'

class App extends Component {
    constructor(props) {
        super(props)
        console.log("This is my initializer")

        const movies = [
            {id: 0, poster_src: "https://image.tmdb.org/t/p/w185/D6e8RJf2qUstnfkTslTXNTUAlT.jpg", title: "Avengers: Infinity War", overview: "BANANA"},
            {id: 1, poster_src: "https://image.tmdb.org/t/p/w185/rv1AWImgx386ULjcf62VYaW8zSt.jpg", title: "The Avengers", overview: "BANANA"},
            {id: 2, poster_src: "https://image.tmdb.org/t/p/w185/tTTF5Uf20NFk5EaZUycIpSy3ONn.jpg", title: "Avengers: Dawn of the Poop", overview: "BANANA"}
            ]

        //this.state = {rows: <p>This is my row</p>}

        var movieRows = []

        movies.forEach((movie) => {
            console.log(movie.title)

            const movieRow = <MovieRow movie={movie}/>
            movieRows.push(<p>{movieRow}</p>)
        })

        this.state = {rows: movieRows}

        this.performSearch()
    }

    performSearch() {
        console.log("performing search")
        const urlString = ''
        $.ajax({
            url: urlString,
            success: (searchResults) =>{
                console.log("Fetch data successfully")
            },
            error: (xhr, status, err) => {
                console.error("failed to fetch data")
        }

        })
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
                  <td><h3>MovieDB Search</h3></td>
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
          }} placeholder={"Enter search term"}/>

          {this.state.rows}
      </div>
    );
  }
}

export default App;
