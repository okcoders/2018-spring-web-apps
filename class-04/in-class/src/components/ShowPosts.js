import React from 'react';

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
}

export default ShowPosts;
