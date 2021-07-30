import React, { Component } from "react"
import styles from './SearchForm.module.css'

const API_KEY = '1523d9e2'

export default class SearchForm extends Component {
    state = {
        inputMovie: ''
    }
    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }
    SearchMovie = (e) => {
        e.preventDefault()
        var { inputMovie } = this.state
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then(results => {
                var { Search, totalResults } = results
                console.log({ Search, totalResults })
                this.props.onResults(Search)
            })
    }
    render() {
        return (
            <div className={styles.Form}>
                <form id="frmMovie" method="post" onSubmit={this.SearchMovie} >
                    <input className={styles.input} id="txtMovie" name="txtMovie" type="text" placeholder="Movie to search..." onChange={this._handleChange} required />
                    <button id="btnSearch" name="btnSearch" form="frmMovie" type="submit">Search</button>
                </form>
            </div>
        )
    }
}