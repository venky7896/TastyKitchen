import {AiFillStar} from 'react-icons/ai'
import './index.css'

const RestaurantItemCard = props => {
  const {restaurantData} = props
  const {imageUrl, userRating, name, cuisine} = restaurantData
  return (
    <li className="restaurant-item-card">
      <img className="restaurant-card" src={imageUrl} alt="food" />
      <div className="restaurant-item-card-details">
        <p className="restaurant-card-name">{name}</p>
        <p className="restaurant-card-cuisine">{cuisine}</p>
        <div className="rating">
          <AiFillStar className="rating-star" />
          <p className="restaurant-card-rating">{userRating}</p>
        </div>
      </div>
    </li>
  )
}

export default RestaurantItemCard
