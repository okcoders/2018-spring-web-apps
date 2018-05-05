import React from 'react';
import Paper from 'material-ui/Paper';
import './ShowPosts.css'
import RaisedButton from 'material-ui/RaisedButton';
import ContentClear from 'material-ui/svg-icons/content/clear';

class ShowPosts extends React.Component {
  constructor(props) {
    super(props)
  }

  add = () => {
    this.props.history.push("add")
  }

  render() {

    const style = {
      marginTop: '10px'
    }

    const postsHtml = this.props.posts.map(elem => {
      return (
        <Paper className="post">
          <h3>{elem.title}</h3>
          <h4>{elem.author}</h4>
          <p>{elem.body}</p>
          <ContentClear />
        </Paper>
      )
    })
    return (
      <div>
      <RaisedButton style={style} onClick={this.add} label="Add New Post" primary={true} fullWidth={true} />
      {postsHtml}
      </div>
    )
  }
}

export default ShowPosts;
