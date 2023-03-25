import './index.css'

const Header = () => (
  <nav>
    <div className="nav-img-container1">
      <img
        className="image3"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
    </div>

    <div className="nav-img-container2">
      <img
        className="image4"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
      />
    </div>

    <ul className="nav-list-container">
      <li>Home</li>
      <li>Products</li>
      <li>Cart</li>
      <li>
        <button type="button">Logout</button>
      </li>
    </ul>
  </nav>
)

export default Header
