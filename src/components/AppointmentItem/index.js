// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {eachAppointmentDetails, toggleIsStarred} = props
  const {title, date, id, isStarred} = eachAppointmentDetails

  const onClickStarIcon = () => {
    toggleIsStarred(id)
  }

  const isFilledStar = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <div className="appointment-item">
      <div className="title-container">
        <p className="title-heading">{title}</p>
        <button
          data-testid="star"
          className="star-image"
          type="button"
          onClick={onClickStarIcon}
        >
          <img src={isFilledStar} alt="star" />
        </button>
      </div>
      <p className="appointment-date">Date: {date}</p>
    </div>
  )
}

export default AppointmentItem
