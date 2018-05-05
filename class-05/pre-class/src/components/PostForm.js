import React from 'react'
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      author: '',
      title: '',
      body: ''
    };
    this.state = this.defaultState
    console.log(this.props)
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
    this.props.history.push("/show")
  }

  render() {

    const paperStyle = {
      margin: '10px'
    }
    const inputStyle = {
      marginLeft: 20
    }

    return (
      <div>
      <Paper style={paperStyle} zDepth={3}>
      <form onSubmit={this.handleSubmit}>
        <TextField style={inputStyle} floatingLabelText="Author" hintText="Joe" type="text "value={this.state.author} onChange={this.handleAuthorChange} underlineShow={false}/>
        <Divider />
        <TextField style={inputStyle} floatingLabelText="Title" hintText="Your new blog post" type="text" value={this.state.title} onChange={this.handleTitleChange} underlineShow={false}/>
        <Divider />
        <TextField style={inputStyle} floatingLabelText="Body" hintText="Your new blog post body" type="text" rows={5} rowsMax={100} multiLine={true} value={this.state.body} onChange={this.handleBodyChange} underlineShow={false}/>
        <Divider />
        <RaisedButton type="submit" label="Submit" primary={true} fullWidth={true} />
      </form>
      </Paper>
      </div>
    );
  }
}

export default PostForm;
