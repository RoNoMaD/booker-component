# ACTIVTY Booker
> Booker component to be integrated in the different EasyLoisirs apps.

This component allows you to :
- book CLASSIC products with units of type MAIN, SESSION or FORFAIT :
    * choose units quantities
    * choose booking day
    * choose booking timeslots
    * choose eventuals extras products
- book GIFT products :
    * choose quantity
    * fill beneficiary details

## Installing / Getting started

#### Add this component to your JS project :

* with [NPM](https://www.npmjs.com)

```shell
npm add https://github.com/RoNoMaD/booker-component.git#<branch/commit/tag>
```
* with [Yarn](https://yarnpkg.com)

```shell
yarn add https://github.com/RoNoMaD/booker-component.git#<branch/commit/tag>
```

#### Integrate the JS code to your project :

* with scripts tags :
```html
<html>
  <head>
    ...
    <script src="<path/to/node_modules>/preact/dist/preact.js"></script>
    <script src="<path/to/node_modules>/booker-component/build/index.js"></script>
  </head>
  <body>
    ...
  </body>
</html>
```

* with CommonJS require :
```javascript
var preact = require('preact');
var Booker = require('booker-component');
```

* with JS ES2015 imports :
```javascript
import { h, render } from 'preact';
import Booker from 'booker-component';
```

#### Integrate the CSS style to your project :

* with link tag :
```html
<html>
  <head>
    ...
    <link rel="stylesheet" href="<path/to/node_modules>/style.css">
  </head>
  <body>
    ...
  </body>
</html>
```

* within your SCSS stylesheet :
```css
@import '~booker-componenent/build/style.css'
```

#### Render the component :
* within an ES5 AngularJS app :
```javascript
angular.module('app', []).directive('bookerPreact', function() {
    return {
        restrict: 'E',
        scope: {
            productId: '=',
            setOrder: '='
        },
        link: function(scope, el, attrs) {
            scope.$watch('productId', function(newValue, oldValue) {
                preact.render(
                    preact.h(booker.default, {
                        productId: newValue,
                        setOrder: scope.setOrder
                    }),
                    el[0]
                );
            });
        }
    };
})
```
```html
<booker-preact product-id="product.id" set-order="setOrder"></booker-preact>
```

You need to set a product ID parameter, that will be used to retrieve the product to book.
And a setOrder function that will be called with the order and his associated bookings at the end of the booking process.
And an optional orderId if the booking is to be added to a current order.

## Developing

### Built With
- JS:
  - [Preact](https://preactjs.com/),
  - [preact-i18n](https://github.com/synacor/preact-i18n)
- Style:
  - [SCSS](http://sass-lang.com/)
  - [CSS Modules](https://github.com/css-modules/css-modules)
- Build tools:
  - [Webpack](https://webpack.js.org/),
  - [Babel](https://babeljs.io/)
- Lint/Static Typing:
  - [Prettier](https://prettier.io/),
  - [ESLint](http://eslint.org/),
  - [Flow](https://flow.org/)

### Prerequisites

- Install [Git](https://git-scm.com/)
- Install [NodeJS](https://nodejs.org)
- Install [Yarn](https://yarnpkg.com/lang/en/docs/install/)


### Setting up Dev

```shell
git clone https://github.com/RoNoMaD/booker-component.git
cd booker-component
git checkout develop
yarn install
git checkout -b <yournewbranch> develop
```

- Clone the Github repository
- Switch (checkout) to develop branch
- Install the JS dependencies
- Start a new feature/fix branch

**You should never code on develop or master**

**You should always code on a feature or fix branch**

Branch naming convention :
- feature : feat-<*yournewfeature*>
- fix/bug : fix-<*thebugyourefixing*>

*Keep the naming short please !*

### Building

```shell
yarn run start
```

This will generate the [UMD](https://github.com/umdjs/umd) minified JS component and his CSS styling in the build folder and watch for modifications.

```shell
yarn run build
```

This will generate the [UMD](https://github.com/umdjs/umd) minified JS component and his CSS styling in the build folder.

### Deploying / Publishing
give instructions on how to build and release a new version
In case there's some step you have to take that publishes this project to a
server, this is the right time to state it.

```shell
packagemanager deploy your-project -s server.com -u username -p password
```

And again you'd need to tell what the previous code actually does.

## Versioning

We use [SemVer](http://semver.org/) for versioning.


## Configuration

Here you should write what are all of the configurations a user can enter when
using the project.

## Tests

Describe and show how to run the tests with code examples.
Explain what these tests test and why.

```shell
Give an example
```

## Style guide

Explain your code style and show how to check it.

## Api Reference

If the api is external, link to api documentation. If not describe your api including authentication methods as well as explaining all the endpoints with their required parameters.

## Licensing

State what the license is and how to find the text version of the license.
