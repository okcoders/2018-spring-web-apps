import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Link } from 'react-router-dom'

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
      title: '',
      author: '',
      body: '',
      posts: []
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
    this.state = {}
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
         <Router>
           <Route path="/posts" component={Posts}/>
           <Route path="/posts/new" component={New}/>
           <Route path="/posts/:id" component={SpecificPost}/>
         </Router
        </MuiThemeProvider>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
