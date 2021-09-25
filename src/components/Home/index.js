import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import RestaurantHeader from '../RestaurantHeader'
import RestaurantItemCard from '../RestaurantItemCard'
import './index.css'
import ReactSlider from '../ReactSlider'

const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]

class Home extends Component {
  state = {
    activeId: sortByOptions[0].value,
    restaurantsList: [],
  }

  componentDidMount() {
    this.getRestaurants()
  }

  renderRestaurants = () => {
    const {activeId, restaurantsList} = this.state
    return (
      <div>
        <RestaurantHeader
          activeId={activeId}
          sortByOptions={sortByOptions}
          changeSortBy={this.changeSortBy}
        />
        <ul className="restaurants-list">
          {restaurantsList.map(res => (
            <RestaurantItemCard restaurantData={res} key={res.id} />
          ))}
        </ul>
      </div>
    )
  }

  getRestaurants = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const {activeId} = this.state
    const apiUrl = `https://apis.ccbp.in/restaurants-list?sort_by_rating=${activeId}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updateData = data.restaurants.map(e => ({
        imageUrl: e.image_url,
        cuisine: e.cuisine,
        name: e.name,
        userRating: e.user_rating.rating,
        id: e.id,
      }))
      this.setState({
        restaurantsList: updateData,
      })
    }
  }

  changeSortBy = activeOptionId => {
    this.setState(
      {
        activeId: activeOptionId,
      },
      this.getRestaurants,
    )
  }

  render() {
    return (
      <>
        <Header />
        <div className="home-container">
          <div className="slide-container">
            <ReactSlider />
            {this.renderRestaurants()}
          </div>
        </div>
      </>
    )
  }
}

export default Home
