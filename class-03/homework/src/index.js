import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      author: '',
      title: '',
      body: ''
    };
    this.state = this.defaultState
  }

  handleAuthorChange = (event) => {
    this.setState({author: event.target.value});
  }

  handleTitleChange = (event) => {
    this.setState({title: event.target.value});
  }

  handleBodyChange = (event) => {
    this.setState({body: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // take our post in state and pass it up to the parent component
    this.props.addPost(this.state)
    this.setState(this.defaultState)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.props.test}</h1>
        <div>
        <label>
          Author:
          <input placeholder="Joe" type="text" value={this.state.author} onChange={this.handleAuthorChange} />
        </label>
         </div>
        <label>
          Title:
          <input placeholder="Your new blog post" type="text" value={this.state.title} onChange={this.handleTitleChange} />
        </label>
        <label>
          Body:
          <input placeholder="Your new blog post body" type="text" value={this.state.body} onChange={this.handleBodyChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const ShowPosts = (props) => {
  const postsHtml = props.posts.map(elem => {
    return (
      <div className="post">
        <h3>{elem.title}</h3>
        <h4>{elem.author}</h4>
        <p>{elem.body}</p>
      </div>
    )
  })
  return (
    <div>
    {postsHtml}
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
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
      <div>
        <h1> Posts </h1>
        <PostForm addPost={this.addPost}/>
        <ShowPosts posts={this.state.posts} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
