import React from 'react'
import ActionHome from 'material-ui/svg-icons/action/home';
class Home extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return (
      <div>
      <ActionHome />
       <h1> Welcome to my site! </h1>
      </div>
    )
  }
}

export default Home;
