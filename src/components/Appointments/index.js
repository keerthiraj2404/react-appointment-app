// Write your code here
import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'
import AppointmentItem from '../AppointmentItem'

class Appointment extends Component {
  state = {
    appointmentsList: [],
    title: '',
    date: '',
  }

  toggleIsStarred = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(each => {
        if (id === each.id) {
          return {...each, isStarred: !each.isStarred}
        }
        return each
      }),
    }))
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state

    const timeFormate = date ? format(new Date(), 'dd MMMM yyyy, EEEE') : ''

    const newAppointment = {
      id: uuidv4(),
      title,
      isStarred: false,
      date: timeFormate,
    }

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      title: '',
      date: 'dd/mm/yyy',
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  onClickStarred = () => {
    const {appointmentsList} = this.state

    this.setState({
      appointmentsList: appointmentsList.filter(
        each => each.isStarred === true,
      ),
    })
  }

  render() {
    const {appointmentsList, title, date} = this.state
    const imageUrl =
      'https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png '
    return (
      <div className="app-container">
        <div className="content-container">
          <div className="input-image-container">
            <div className="input-container">
              <h1 className="main-heading">Add Appointment</h1>
              <form className="form" onSubmit={this.onAddAppointment}>
                <label className="label" htmlFor="title-id">
                  TITLE
                </label>
                <input
                  type="text"
                  className="input-title"
                  id="title-id"
                  value={title}
                  onChange={this.onChangeTitle}
                  placeholder="Title"
                />
                <label className="label" htmlFor="date-id">
                  DATE
                </label>
                <input
                  type="date"
                  className="input-date"
                  id="date-id"
                  value={date}
                  onChange={this.onChangeDate}
                />
                <button className="add-button" type="submit">
                  Add
                </button>
              </form>
            </div>
            <img className="image" src={imageUrl} alt="appointments" />
          </div>
          <hr />
          <div className="appointments-heading-starred">
            <h1 className="list-heading">Appointments</h1>
            <button
              className="starred"
              type="button"
              onClick={this.onClickStarred}
            >
              Starred
            </button>
          </div>
          <ul>
            <li className="list">
              {appointmentsList.map(eachAppointmentDetails => (
                <AppointmentItem
                  key={eachAppointmentDetails.id}
                  eachAppointmentDetails={eachAppointmentDetails}
                  toggleIsStarred={this.toggleIsStarred}
                />
              ))}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointment
