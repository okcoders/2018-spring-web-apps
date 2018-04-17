# Class 02

### topics
- homework review
- starting new projects with create-react-app
- jsx
- react pure components
- react components
- state

### resources
- [create-react-app](https://github.com/facebook/create-react-app)
- [starting a new react app](https://github.com/facebook/create-react-app#creating-an-app)
- [styling in react](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-stylesheet)
- [images in react](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-images-fonts-and-files)
- [ajax in react](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#fetching-data-with-ajax-requests)
- [routing suggestions from react](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-router)
- [react guide](https://reactjs.org/docs/hello-world.html)
- [components and props](https://facebook.github.io/react/docs/components-and-props.html)
- [state](https://facebook.github.io/react/docs/state-and-lifecycle.html)
- [class components api](https://facebook.github.io/react/docs/react-component.html)


## create-react-app

If you have the latest version of node, you can from whatever directory you like
to keep your code projects, the following:

```
npx create-react-app my-new-project
```

For older version of node:

```
npm install -g create-react-app
create-react-app my-new-project
```

This will create a new folder for you called my-new-project, and inside that
folder will be all the files we need to create and run a react-app. 

Here is what it will look like when you try this:

```
$ npx create-react-app ok-coders-habit-tracker

Creating a new React app in /Users/zach/code/okcoders/ok-coders-habit-tracker.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts...

yarn add v1.0.0
info No lockfile found.
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning "babel-loader@7.1.2" has incorrect peer dependency "babel-core@6 || 7 || ^7.0.0-alpha || ^7.0.0-beta || ^7.0.0-rc".
warning "babel-loader@7.1.2" has incorrect peer dependency "webpack@2 || 3".
warning "babel-preset-react-app@3.1.1" has incorrect peer dependency "babel-runtime@^6.23.0".
warning "eslint-config-react-app@2.1.0" has incorrect peer dependency "babel-eslint@^7.2.3".
warning "eslint-config-react-app@2.1.0" has incorrect peer dependency "eslint@^4.1.1".
warning "eslint-config-react-app@2.1.0" has incorrect peer dependency "eslint-plugin-flowtype@^2.34.1".
warning "eslint-config-react-app@2.1.0" has incorrect peer dependency "eslint-plugin-import@^2.6.0".
warning "eslint-config-react-app@2.1.0" has incorrect peer dependency "eslint-plugin-jsx-a11y@^5.1.1".
warning "eslint-config-react-app@2.1.0" has incorrect peer dependency "eslint-plugin-react@^7.1.0".
warning "eslint-loader@1.9.0" has incorrect peer dependency "eslint@>=1.6.0 <5.0.0".
warning "eslint-plugin-jsx-a11y@5.1.1" has incorrect peer dependency "eslint@^2.10.2 || ^3 || ^4".
warning "file-loader@1.1.5" has incorrect peer dependency "webpack@^2.0.0 || ^3.0.0".
warning "extract-text-webpack-plugin@3.0.2" has incorrect peer dependency "webpack@^3.1.0".
warning "eslint-plugin-react@7.4.0" has incorrect peer dependency "eslint@^3.0.0 || ^4.0.0".
warning "html-webpack-plugin@2.29.0" has incorrect peer dependency "webpack@1 || ^2 || ^2.1.0-beta || ^2.2.0-rc || ^3".
warning "eslint-plugin-import@2.8.0" has incorrect peer dependency "eslint@2.x - 4.x".
warning "eslint-plugin-flowtype@2.39.1" has incorrect peer dependency "eslint@>=2.0.0".
warning "url-loader@0.6.2" has incorrect peer dependency "file-loader@*".
warning "sw-precache-webpack-plugin@0.11.4" has incorrect peer dependency "webpack@^1 || ^2 || ^2.1.0-beta || ^2.2.0-beta || ^3".
warning "webpack-manifest-plugin@1.3.2" has incorrect peer dependency "webpack@1 || 2 || 3".
warning "webpack-dev-server@2.9.4" has incorrect peer dependency "webpack@^2.2.0 || ^3.0.0".
warning "ajv-keywords@2.1.1" has incorrect peer dependency "ajv@^5.0.0".
warning "ajv-keywords@3.1.0" has incorrect peer dependency "ajv@^6.0.0".
warning "webpack-dev-middleware@1.12.2" has incorrect peer dependency "webpack@^1.0.0 || ^2.0.0 || ^3.0.0".
warning "uglifyjs-webpack-plugin@0.4.6" has incorrect peer dependency "webpack@^1.9 || ^2 || ^2.1.0-beta || ^2.2.0-rc || ^3.0.0".
[4/4] 📃  Building fresh packages...
success Saved lockfile.
warning Your current version of Yarn is out of date. The latest version is "1.6.0" while you're on "1.0.0".
info To upgrade, run the following command:
$ curl -o- -L https://yarnpkg.com/install.sh | bash
success Saved 971 new dependencies.
├─ abab@1.0.4
├─ abbrev@1.1.1
├─ accepts@1.3.5
├─ acorn-dynamic-import@2.0.2
├─ acorn-globals@3.1.0
├─ acorn-jsx@3.0.1
├─ acorn@4.0.13
├─ address@1.0.3
├─ ajv-keywords@2.1.1
├─ ajv@5.5.2
├─ align-text@0.1.4
├─ alphanum-sort@1.0.2
├─ amdefine@1.0.1
├─ ansi-align@2.0.0
...
✨  Done in 29.23s.

Success! Created ok-coders-habit-tracker at /Users/zach/code/okcoders/ok-coders-habit-tracker
Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd ok-coders-habit-tracker
  yarn start

Happy hacking!
```

Now just do `yarn start` (or you can do npm start), after you cd into the
new directory that was just made and you should now have a running server and
your web browser should have opened.

![yarn start](https://github.com/okcoders/2018-spring-web-apps/blob/master/gifs/yarn_start.gif)


### Jsx

Ok so think of jsx as exactly the same as html. When you are "writing" jsx it
will look like you are writing html, the jsx part is that you are writing html
where you normally would be writing javascript, and in particular it is most
closely related to a string. 

For example you may see in the react docs:

```
const element = <div />;

OR

const element = <Welcome name="Sara" />;
```


Those two things look very simlar to something you might assign to a variable,
but with quotes wrapped around the whole thing.

Jsx allows us to put html directly in our javascript files, without having to
treat them as strings.

### Pure/Functional components

One of the first things one learns about in the react ecosystem are functional
components. The idea behind them is simple, and much like a function (i.e take
in parameters and return a value), but it
only has one signature, which follows:

```
props => html
```

i.e we take in props and produce html. Props here can actually be more than one
thing, so really props you can think of as a bag that may contain many named
things. Also, html here is not exactly right, we actually typically return jsx,
which is a representation of html that allows us to inject javascript code.
Caveats aside, we can still think of this a function that the react framework
can call at any time to produce some html that can be rendered on a website.

Here is a functional component that does not use any props:

```
// note the name of the component is camelCased with proper casing (first letter
capitalized)
const ExampleComponent = () => {
  return <h1>Hello World</h1>
}
```

and here is one that does

```
const ExampleWProps = (props) => {
  // note the use of brackets to inject the props
  return <h1>Hello {props.something}</h1>
}
```

and here is one that takes multiple props

```
const ExampleWMultipleProps = (props) => {
  return <h1>Hello, {props.firstSomething} {props.secondSomething}</h1>
}
```

Once you make a component, you can call it within other components (assuming you
exported and imported it properly) like so:

```
// note that I can "self close" my component by putting a slash in the opening tag
<ExampleComponent />
<ExampleWProps something="World!"/>
<ExampleWMultipleProps firstSomething="a whole new" secondSomething="world"/>
```

### Class based components

The second react family member we learn about are class based components. With
these we lose our elegent pure function of ```props => html``` but gain
significanly more power.

The signature for class based components is still ```props => html```, but it is
no longer pure. One could not look at the props and know what the html will be.
One would also have to inspect the state, and any code written into the
lifecycle methods.

Here is a sneak peak, I don't expect any of this to make sense just yet:

```
import React, { Component } from 'react'

class OkCodersExample extends Component {
  constructor(props) {
    super(props)
    this.state = { hello: "world!" }
    // we only do the above in the constructor, anywhere else we use this.setState`
  }

  // all of these are methods we may use for various purposes
  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillReceiveProps() {
  }

  shouldComponentUpdate() {
  }

  componentWillUpdate() {
  }

  componentDidUpdate() {
  }

  // we will always use this method to return the "html" for our component
  render() {
    return (
      <h1>Hello {this.state.hello}</h1>
    )
  }
}

```

### State

State is a rather abstract term, but in react it is a specific member of class
based components. We do 2 things with state:

1. initialize state
2. update state

#### Initializing state

Inside our constructor we assign an object with any keys and values we desire.
