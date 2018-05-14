import React, { Component } from 'react';
import './App.css';
import PostForm from './PostForm'
import ShowPosts from './ShowPosts'
import Home from './Home'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div>
            <div className="nav" >
              <NavLink className="nav-item" exact to="/">Home</NavLink>
              <NavLink className="nav-item" exact to="/posts">Posts</NavLink>
              <NavLink className="nav-item" exact to="/add">Add New Post</NavLink>
            </div>
            <Route exact path="/" component={Home} />
            <Route exact path="/posts" component={ShowPosts} />
            <Route exact path="/add" component={PostForm} />
          </div>
        </MuiThemeProvider>
      </Router>
    )
  }
}

export default App;
