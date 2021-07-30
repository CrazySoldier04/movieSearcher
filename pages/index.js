import React, { Component } from 'react'
import Head from 'next/head'
import SearchForm from '../components/SearchForm'
import MovieList from '../components/MovieList'

export default class Home extends Component {
  state = {
    results: []
  }

  _handleResults = (results) => {
    this.setState({ results })
  }

  render() {
    return (
      <div>
        <Head>
          <title>Buscador de películas</title> />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
        </Head>
        <h3>Buscador de peliculas</h3>
        <SearchForm onResults={this._handleResults} />
        <div>{this.state.results.length === 0
          ? <p>Sin resultados</p>
          : <MovieList movies={this.state.results}/>}
        </div>
      </div>
    )
  }
}