import {Component} from 'react'
import './index.css'

class SingleMovie extends Component {
  state = {
    movieDetails: {},
    castDetails: {},
    isTrue: true,
  }

  componentDidMount() {
    this.getResponse()
    this.getCast()
  }

  getResponse = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiKey = '63b96bbc81217f2e35fb4a9acca608f9'
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2I5NmJiYzgxMjE3ZjJlMzVmYjRhOWFjY2E2MDhmOSIsInN1YiI6IjY1NDEyYjk4MzNhNTMzMDEwYjJlZjJlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3bUAYmhsynW7yc_IVTyQ2XB2Zf0YDxG4u55iyGXlxOE',
      },
    }

    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()
      const updateData = {
        movieName: data.original_title,
        posterImage: data.poster_path,
        rating: data.vote_average,
        duration: data.popularity,
        genre: data.genres.map(each => each.name),
        releaseDate: data.release_date,
        overview: data.overview,
      }
      this.setState({movieDetails: updateData})
    }
  }

  getCast = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiKey = '63b96bbc81217f2e35fb4a9acca608f9'
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2I5NmJiYzgxMjE3ZjJlMzVmYjRhOWFjY2E2MDhmOSIsInN1YiI6IjY1NDEyYjk4MzNhNTMzMDEwYjJlZjJlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3bUAYmhsynW7yc_IVTyQ2XB2Zf0YDxG4u55iyGXlxOE',
      },
    }

    const response = await fetch(url, options)
    console.log(await response.json())
  }

  render() {
    const {movieDetails, isTrue} = this.state
    console.log(movieDetails)
    const {
      poster,
    } = `https://image.tmdb.org/t/p/w500${movieDetails.posterImage}`

    return (
      <div className="single-movie-section">
        <img src={poster} className="poster" alt="poster" />
        <div className="text-container">
          <h1 className="name">{movieDetails.movieName}</h1>
          <p className="text">{movieDetails.overview}</p>
          <p className="text">{movieDetails.genre}</p>
          <p className="text">Rating :{movieDetails.rating}</p>
          <p className="text">Release date: {movieDetails.releaseDate}</p>
          <p className="text">duration:02hrs 30min</p>
        </div>
      </div>
    )
  }
}
export default SingleMovie
