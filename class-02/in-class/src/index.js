import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

function wrapHabit(habit) {
  return <li>{habit}</li>
}

const CurrentHabits = (props) => {
  const liHabits = props.habits.map(wrapHabit)
  return (
    <div>
      <ol>
       {liHabits}
      </ol>
    </div>
  )
}

class UserHabits extends Component {
  constructor(props) {
    super(props)
    this.state = {
      habitName: '',
      habits: []
    }
  }

  handleChange = (event) => {
    this.setState({ habitName: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // add habit name to the habits array
    this.setState((prevState) => {
      return {
        habitName: '',
        habits: [ ...prevState.habits, prevState.habitName]
      }
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Habit Name:
            <input type="text" value={this.state.habitName} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <CurrentHabits habits={this.state.habits} />
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name2: "Fitz"
    }
  }

  render() {
    return (
      <div>
        <h1>Hello {this.props.name} and {this.state.name2} welcome to class components!</h1>
        <h2> You are rendering more than one html tag now!</h2>
        <UserHabits />
      </div>
    )
  }
}

ReactDOM.render(<App name="Zach" />, document.getElementById('root'));
registerServiceWorker();
