import {Component} from 'react'
import MovieItem from '../MovieItem'
import Header from '../Header'
import LoaderElement from '../LoaderElement'
import './index.css'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    apiStatus: apiConstants.initial,
    allPopularMovies: [],
    pageNumber: 1,
  }

  componentDidMount() {
    this.getPopularMoviesURL()
  }

  getPopularMoviesURL = async () => {
    const {pageNumber} = this.state
    this.setState({apiStatus: apiConstants.inProgress})
    const API_KEY = '63b96bbc81217f2e35fb4a9acca608f9'
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNumber}`
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

      const updateData = data.results.map(eachPopular => ({
        movieId: eachPopular.id,
        movieName: eachPopular.original_title,
        imagePath: eachPopular.backdrop_path,
        posterImage: eachPopular.poster_path,
        releaseDate: eachPopular.release_date,
        movieRating: eachPopular.vote_average,
        overview: eachPopular.overview,
        popularity: eachPopular.popularity,
      }))
      console.log(updateData)
      this.setState({
        apiStatus: apiConstants.success,
        allPopularMovies: updateData,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {allPopularMovies} = this.state

    return (
      <div className="home-container">
        <ul className="popular-list">
          {allPopularMovies.map(eachM => (
            <MovieItem key={eachM.movieId} details={eachM} />
          ))}
        </ul>
      </div>
    )
  }

  renderLoader = () => <LoaderElement />

  renderFailureView = () => (
    <div className="failure-view-container">
      <img
        alt="failure view"
        src="https://res.cloudinary.com/dtjcxf7z5/image/upload/v1650297174/Mini%20Project%20Netflix%20Clone/Background-Complete_t8c6zl.png"
        className="failure-image"
      />
      <p className="search-content">Something went wrong. Please try again</p>
    </div>
  )

  onClickPrev = () => {
    const {pageNumber} = this.state
    if (pageNumber > 1) {
      this.setState(prevState => ({
        pageNumber: prevState.pageNumber - 1,
      }))
      console.log('prev')
      this.getPopularMoviesURL()
    }
  }

  onClickNext = () => {
    const {pageNumber} = this.state
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + 1,
    }))
    console.log('next')
    this.getPopularMoviesURL()
  }

  render() {
    const {apiStatus, pageNumber} = this.state
    const getResult = () => {
      switch (apiStatus) {
        case apiConstants.success:
          return this.renderSuccessView()
        case apiConstants.failure:
          return this.renderFailureView()
        case apiConstants.inProgress:
          return this.renderLoader()
        default:
          return null
      }
    }

    return (
      <div className="home-container">
        <div className="header-container">
          <Header />
        </div>
        {getResult()}
        <div className="pagination-container">
          <button type="button" className="btn" onClick={this.onClickPrev}>
            Prev
          </button>
          <p className="page-number">{pageNumber}</p>
          <button type="button" className="btn" onClick={this.onClickNext}>
            Next
          </button>
        </div>
      </div>
    )
  }
}
export default Home
