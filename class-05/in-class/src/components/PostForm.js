import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      author: '',
      title: '',
      body: ''
    };
    console.log(props)
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
    this.props.history.push("/posts")
  }

  render() {
    const formStyle = {
      margin: '20px'
    }

    const textFieldStyle = {
      marginLeft: '10px'
    }

    return (
      <Paper style={formStyle} zDepth={3} >
        <form onSubmit={this.handleSubmit}>
          <TextField
            style={textFieldStyle}
            floatingLabelText="Author"
            hintText="Joe"
            type="text"
            value={this.state.author}
            onChange={this.handleAuthorChange}
            underlineShow={false}
            fullWidth={true}
          />
          <Divider />
          <TextField
            style={textFieldStyle}
            floatingLabelText="Title"
            hintText="Your new blog post title"
            type="text"
            value={this.state.title}
            onChange={this.handleTitleChange}
            underlineShow={false}
            fullWidth={true}
          />
          <Divider />
          <TextField
            multiLine={true}
            rows={10}
            style={textFieldStyle}
            floatingLabelText="Body"
            hintText="Your new blog post body"
            type="text"
            value={this.state.body}
            onChange={this.handleBodyChange}
            underlineShow={false}
            fullWidth={true}
          />
          <Divider />
          <RaisedButton
            fullWidth={true}
            type="submit"
            primary={true}
            label="Submit"
          />
        </form>
      </Paper>
    );
  }
}

export default PostForm;
