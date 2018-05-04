import React, { Component } from 'react';
import './App.css';
import PostForm from './PostForm'
import ShowPosts from './ShowPosts'

class App extends Component {
  constructor(props) {
    console.log("constructor")
    super(props)
    this.state = {
      posts: [],
      dataLoaded: false,
      title: ''
    }
  }

  componentDidMount() {
    // do an ajax request, and take the data/json that comes back, pull the
    // title out of it, and add it to state
    console.log("did mount, sending ajax now")
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => this.setState({ title: json.title, dataLoaded: true }))
  }

  // add post to the posts array in state
  addPost = (post) => {
    this.setState((prevState) => {
      return {
        posts: [...prevState.posts, post]
      }
    })
  }

  showAjaxData() {
    if (this.state.dataLoaded) {
      return <h1>{this.state.title}</h1>
    } else {
      return <h1> please wait, loading data</h1>
    }
  }

  render() {
    console.log("rendering")
    return (
      <div>
        <h1> Posts </h1>
        {this.showAjaxData()}
        <PostForm addPost={this.addPost}/>
        <ShowPosts posts={this.state.posts} />
      </div>
    )
  }
}

export default App;
