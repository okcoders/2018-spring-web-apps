# Class 02

### topics
- homework review
- starting new projects with create-react-app
- jsx
- react pure components
- react components
- state

### resources
[create-react-app](https://github.com/facebook/create-react-app)
[starting a new react app](https://github.com/facebook/create-react-app#creating-an-app)
[styling in react](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-stylesheet)
[images in react](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-images-fonts-and-files)
[ajax in react](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#fetching-data-with-ajax-requests)
[routing suggestions from react](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-router)
[react guide](https://reactjs.org/docs/hello-world.html)


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

Now just do ```yarn start``` (or you can do npm start), and you should now have a
running server and your web browser should have opened.

![yarn start](https://github.com/okcoders/2018-spring-web-apps/tree/master/gifs/yarn_start.gif)





