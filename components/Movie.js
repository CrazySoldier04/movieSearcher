import React, { Component } from "react"

export default class Movie extends Component {
    render() {
        var { poster, title, year } = this.props

        return (
            <div>
                <div className="MovieList card">
                    <div className="card-image">
                        <img src={poster} />
                    </div>
                    <div id="content" className="card-content">
                        <span className="title">{title}</span><br/><br/>
                        <span className="year">{year}</span>
                    </div>
                </div>
                <style JSX>
                    {`
    #content
    {
        max-width: 250px;
        height: 145px;
    }
    .title
    {
        font-size: 1rem;
    }
    .year
    {
        font-weight: bold
    }
    `}
                </style>
            </div>
        )
    }
}