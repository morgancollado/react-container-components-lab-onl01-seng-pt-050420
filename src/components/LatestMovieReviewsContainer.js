import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'



const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=a6TTqoEXZ219siAF5ghHxbxdGstxrvUJ'

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {
   
    state = {
        reviews : []
    }

    fetchData = () =>{
        fetch(URL)
        .then(r=> console.log(r.json()))
        .then(reviews => {
            this.setState({
                reviews: reviews.results
            })
        })
    }

    componentDidMount() {
        this.fetchData
    }
   
    render() {
        return (
            <div className="latest-movie-reviews">
                <h1>Latest Reviews</h1>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

