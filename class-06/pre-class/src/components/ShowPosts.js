import React from 'react';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import rockers from '../images/rockers.jpeg'

class ShowPosts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    console.log("did mount")
    this.getPosts()
  }

  getPosts = () => {
    fetch("http://localhost:8080/posts")
      .then(response =>  response.json())
      .then(posts => this.setState({ posts: posts }))
  }

  render() {
    const postsHtml = this.state.posts.map(elem => {
      return (
        <div className="post">
          <Card className="post-paper" >
            <CardHeader
              title={elem.title}
              subtitle={elem.author}
              avatar={rockers}
            />
           <CardText>
             {elem.body}
           </CardText>
          </Card>
        </div>
      )
    })
    return (
      <div>
      {postsHtml}
      </div>
    )
  }
}

export default ShowPosts;
