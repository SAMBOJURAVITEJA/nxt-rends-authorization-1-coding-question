import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="padding-container">
    <Header />
    <div className="home-bg-container">
      <div className="home-card-container">
        <div className="home-img-container1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt=" nav home"
            className="image4"
          />
          <img
            className="image4"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
          />
          <img
            className="image4"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png "
            alt=" nav cart"
          />
        </div>
        <div className="home-content-container">
          <h1>Clothes That Get YOU Noticed</h1>
          <div className="home-img-container2">
            <img
              className="image2"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt=" clothes that get you noticed"
            />
          </div>
          <p>
            Fashion is part of the daily air and it does not quite that help
            that it changes all the time
          </p>
          <button type="button">Shop Now</button>
        </div>
        <div className="home-img-container3">
          <img
            className="image2"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt=" clothes that get you noticed"
          />
        </div>
      </div>
    </div>
  </div>
)

export default Home
