import {Component} from 'react'
import Cookies from 'js-cookie'
import Slider from 'react-slick'

import './index.css'

export default class ReactSlider extends Component {
  state = {offersList: []}

  componentDidMount() {
    this.getOffersList()
  }

  getOffersList = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/restaurants-list/offers'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const updateDate = data.offers.map(e => ({
      id: e.id,
      imageUrl: e.image_url,
    }))
    this.setState({
      offersList: updateDate,
    })
  }

  render() {
    const settings = {
      dots: true,
    }
    const {offersList} = this.state
    return (
      <div className="container1">
        <Slider {...settings}>
          {offersList.map(e => (
            <div key={e.id}>
              <img className="slide-img" src={e.imageUrl} alt={e.id} />
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}
