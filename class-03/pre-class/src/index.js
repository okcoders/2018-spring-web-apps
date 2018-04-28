import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';

const CurrentHabits = (props) => {
  const cards = props.habits.map((habit) => {
    return (
      <Card>
        <CardHeader title={habit} />
      </Card>
    )
  })
  return (
    <div>
    {cards}
    </div>
  )
}

class Habits extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  render() {
    return (
      <div>
       <CurrentHabits habits={this.props.habits}/>
      </div>
    )
  }
}

class New extends Component {
  constructor(props) {
    super(props)
    this.state = {
      habitName: ''
    }
  }

  handleChange = (event) => {
    this.setState({ habitName: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.new(this.state.habitName)
    this.setState({ habitName: '' })
    this.props.history.push('/habits')
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
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      habits: []
    }
  }

  new = (habit) => {
    this.setState((prevState) => {
      return {
        habits: [ ...prevState.habits, habit]
      }
    })
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
         <BrowserRouter>
          <div>
           <ul>
            <li><Link to="/habits" >habits</Link></li>
            <li><Link to="/habits/new" >new habit</Link></li>
           </ul>
           <Route exact path="/habits" render={(props) => <Habits {...props} habits={this.state.habits}/>}/>
           <Route exact path="/habits/new" render={(props) => <New {...props} new={this.new}/>}/>
          </div>
         </BrowserRouter>
        </MuiThemeProvider>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
