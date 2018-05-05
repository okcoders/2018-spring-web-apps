import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import './App.css';
import PostForm from './PostForm'
import ShowPosts from './ShowPosts'
import Home from './Home'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
    }
  }

  // add post to the posts array in state
  addPost = (post) => {
    this.setState((prevState) => {
      return {
        posts: [...prevState.posts, post]
      }
    })
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div>
           <div className="links">
             <NavLink className="link" exact to="/">Home</NavLink>
             <NavLink className="link" exact to="/add">Add Post</NavLink>
             <NavLink className="link" exact to="/show">Posts</NavLink>
           </div>
            <Route exact path="/" component={Home} />
            <Route exact path="/add" render={(props) => <PostForm {...props} addPost={this.addPost}/>} />
            <Route exact path="/show" render={(props) => <ShowPosts {...props} posts={this.state.posts}/>} />
          </div>
        </MuiThemeProvider>
      </Router>
    )
  }
}

export default App;
