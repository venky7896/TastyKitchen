import './index.css'
import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
import logo from '../images/logo.png'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-large-container">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <h1 className="nav-website-title">Tasty Kitchen</h1>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Cart
              </Link>
            </li>
          </ul>
          <button
            type="button"
            onClick={onClickLogout}
            className="logout-desktop-btn"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
