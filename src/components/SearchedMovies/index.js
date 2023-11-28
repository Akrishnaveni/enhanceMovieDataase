import {Component} from 'react'
import MovieItem from '../MovieItem'
import Header from '../Header'
import './index.css'

class SearchedMovies extends Component {
  state = {searchMovies: [], input: ''}

  componentDidMount() {
    this.getSearchMoviesURL()
  }

  getSearchMoviesURL = async () => {
    const {input} = this.state
    const apiKey = '63b96bbc81217f2e35fb4a9acca608f9'
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${input}&page=1`
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2I5NmJiYzgxMjE3ZjJlMzVmYjRhOWFjY2E2MDhmOSIsInN1YiI6IjY1NDEyYjk4MzNhNTMzMDEwYjJlZjJlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3bUAYmhsynW7yc_IVTyQ2XB2Zf0YDxG4u55iyGXlxOE',
      },
    }

    const response = await fetch(url, options)

    const data = await response.json()

    if (response.ok === true) {
      console.log(data)
    }
  }

  render() {
    const {topMovies} = this.state

    return <h1>Search</h1>
  }
}
export default SearchedMovies
