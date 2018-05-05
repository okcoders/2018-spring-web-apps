import React from 'react';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import rockers from '../images/rockers.jpeg'

class ShowPosts extends React.Component {
  constructor(props) {
    super(props)
    console.log("constructing show posts")
  }

  componentWillReceiveProps() {
    console.log("show posts props")
  }

  render() {
    console.log("show posts render")
    const postsHtml = this.props.posts.map(elem => {
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
