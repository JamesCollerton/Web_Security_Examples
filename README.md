# React Drag and Drop

A small Node/ React application for drag and dropping images. Built using WebPack, Babel and Jest, linted with ESLint.

At the moment this is just an outline application. The below explanation is quite basic, but it is useful for me who is not a front-end developer!

## Technologies Used

- Babel - Backwards compatibility of ES6
- Enzyme - React testing framework
- ESLint - Linting the ES6
- File Loader - Loads images for Web Pack
- HTML Loader - Loads the HTML file we would like to inject the JS into for Web Pack
- Jest - JavaScript testing framework
- Mini CSS - Minimises CSS in the production compilation
- Optimize CSS - Optimises CSS in the production compilation
- Style Loader - 
- Uglify JS - Optimises JS in the production compilation
- URL Loader - Loads images into CSS and Javascript files
- Webpack - Controls the compilation of the various files

## Functionality Overview

### Build

The build process uses Babel to transpile the ES6 into backwards compatible JavaScript. We can build two versions of the client project. One which has some developer tools included and one which is production ready. Building either can be done with:

```
npm run buildDev
```

or

```
npm run buildProd
```

Both of these builds will build into the `dist` folder and so we can run both in the same way using

```
npm start
```

Both build processes use WebPack, this bundles the `js` into the `index.html` page so it can attach to the `html`.

The node server itself is always compiled in the same way and is done as part of the above commands.

### Testing

This is done using `Enzyme` and `Jest`. We can run the tests using:

```
npm run test
```

Which will produce a `Jest` report of results.

### Code

The code is a basic node server which serves up the `index.html` file on any URL. This `index.html` file contains a div with the `react-container` Id. This is attached to by the react components in the `js` files.