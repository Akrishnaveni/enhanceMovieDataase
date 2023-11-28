import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header col-12">
    <ul className="header-list-items d-flex flex-row justify-content-space-between">
      <li className="d-flex flex-row color-w">
        <Link to="/" className="link">
          <h1 className="movie-title">movieDB</h1>
        </Link>
      </li>
      <li className="d-flex flex-row color-w">
        <Link to="/" className="link">
          <p className="color-w ml-3 head">Popular</p>
        </Link>
        <Link to="/top-rated" className="link">
          <p className="color-w ml-1 head">Top Rated</p>
        </Link>
        <Link to="/upcoming" className="link">
          <p className="color-w ml-1 head">Upcoming</p>
        </Link>
      </li>

      <Link to="/search" className="link">
        <li className="d-flex flex-row">
          <input type="search" className="input" />

          <button type="button" className="search-button" alt="searchButton">
            search
          </button>
        </li>
      </Link>
    </ul>
  </nav>
)
export default Header
