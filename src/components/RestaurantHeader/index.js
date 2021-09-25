import {BsFilterRight} from 'react-icons/bs'
import './index.css'

const RestaurantHeader = props => {
  const {activeId, sortByOptions, changeSortBy} = props
  const onChangeSortBy = event => {
    changeSortBy(event.target.value)
  }
  return (
    <div>
      <h1 className="page-header">Popular Restaurants</h1>
      <div className="page-section">
        <p className="page-description">
          Select Your favorite restaurant special dish and make your day
          happy...
        </p>
        <div className="sort-by-container">
          <BsFilterRight className="sort-by-icon" />
          <p className="sort-by">Sort by</p>
          <select
            className="sort-by-select"
            value={activeId}
            onChange={onChangeSortBy}
          >
            {sortByOptions.map(eachOption => (
              <option
                key={eachOption.id}
                value={eachOption.value}
                className="select-option"
              >
                {eachOption.displayText}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default RestaurantHeader
