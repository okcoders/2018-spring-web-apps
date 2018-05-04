import React from 'react'

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

  componentWillReceiveProps() {
    console.log("received props")
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

export default PostForm;
