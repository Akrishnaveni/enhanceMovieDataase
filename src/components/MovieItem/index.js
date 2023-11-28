import {Link} from 'react-router-dom'
import './index.css'

const MovieItem = props => {
  const {details} = props
  const id = details.movieId
  const moviePoster = `https://image.tmdb.org/t/p/w500${details.posterImage}`

  return (
    <li className="movie-list-items">
      <img src={moviePoster} alt="poster" className="movie-poster" />
      <h1 className="movie-name">{details.movieName}</h1>
      <div className="btn-container">
        <Link to={`/${id}`} className="link">
          <button type="button" className="view-details">
            View Details
          </button>
        </Link>

        <p className="rating">rating:{details.movieRating}</p>
      </div>
    </li>
  )
}
export default MovieItem
