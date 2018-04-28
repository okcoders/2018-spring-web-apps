# Third Class

### topics
- homework review
- lifecycle methods
- ajax in react
- react-router
- material-ui
- passing state up

### resources
- [components and lifecycle](https://reactjs.org/docs/react-component.html)
- [react-router quick start](https://reacttraining.com/react-router/web/guides/quick-start)
- [material-ui](https://www.material-ui.com/#/get-started/usage)
- [lifting state up](https://reactjs.org/docs/lifting-state-up.html)

### class notes

#### lifecycle methods

Lifecycle methods are available to us so that we can perform actions during
specific moments our components go through. At a high level these are:

- creating the component
- updating the component/deciding to update the component
- destroying the component

For our purposes we can ignore most of the lifecyle methods. They are there for
more advanced functionality, like tuning the performance of the application.

We have already seen one lifecycle method, which is the constructor. The other
one we care about is componentDidMount.

we care about componentDidMount because it is the method that we need to perform
ajax.

#### ajax in react

Often we need data to initialize a page (this is different from needing data
based off an interaction with the user) that we can only get after performing an
ajax request. This create an issue in that we can't just wait for the data to
come back before showing something to the user. So what is suggested is to use
the componentDidMount method, which is fired after the render method is called.

The idea being:
- we render something to the user
- then get data from the server
- then update the state with that data when it comes back
- by updating the state we force a render cycle, and our new data show up on the
  page

#### react-router

npm install --save react-router-dom

We need a way to react to url changes, and a way to update the url based of
changes in our site.

React router let's us setup what routes we want to support, and attach
components to those particular routes. React router handles taking the url
information and passing it to our component

#### passing state upwards

In some cases we have subcomponents that need to send data into the state of
parent components. We can do this by passing functions as props into components
that update state. Then, the child components can call those functions and pass
in the information that should be passed up.

#### material-ui

Material ui is the component library we will use to create complicated web
pages.

npm install --save material-ui
