import React, { Component } from 'react'
import Movie from './Movie'
import styles from './MovieList.module.css'

export default class MovieList extends Component {
    render() {
        var { movies } = this.props
        return (
            <div className={styles.MovieList}>
                {
                    movies.map(movie => {
                        return (
                            <div key={movie.imdbID} className={styles.List}>
                                <Movie
                                    title={movie.Title}
                                    year={movie.Year}
                                    poster={movie.Poster}
                                />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}