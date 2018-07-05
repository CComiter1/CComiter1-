# Call Center UI React Overhaul

Made w/ love :)

## Atomic Design

Atomic design is the principle used for the structure of these components, and understanding atomic design is key to contributing [here](http://bradfrost.com/blog/post/atomic-web-design/) is a link to the website, and ensure that you understand this before continuing

A good way to understand the file structure is by opening up storybook. This can be done by running `npm run storybook`

You may need to install storybook by running `npm i -g @storybook/cli`

## CSS in JS

If you want to understand the thinking behind using CSS-in-JS, check out this [medium article](https://hackernoon.com/all-you-need-to-know-about-css-in-js-984a72d48ebc).

If you're ok with just taking a leap of faith, let's talk a bit about using `styled-components` the library of choice, read through this [section of documentation](https://www.styled-components.com/docs/basics#getting-started) until you feel comfortable.

## Running the repository

If you used create-react-app before, you probably used webpack and babel to bundle your code. We're not doing that, we're using parcel. To use parcel, simply do `npm i -g parcel-bundler` and then you can do `npm run start-dev` to check run the program on your local host.

If you're running into issues, make sure that you installed all the packages beforehand.

Also, this project is done with `yarn`, use that.