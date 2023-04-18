# Pod - Podcast Publisher

Pod is a landing page for a fictional podcast publisher that is currently in its early access phase. The project is a mobile-first, responsive web application built with React, CSS3, and Sass SCSS. It includes WAI-ARIA attributes for accessibility and features optimal layout for different screen sizes. Interactive elements have hover states for enhanced user experience. The project also includes error message handling for form submissions and visualizes a success modal message upon valid email submission. It adheres to semantic HTML5 markup and follows the BEM methodology for CSS.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Link](#link)
  - [Functionality](#functionality)
  - [Built with](#built-with)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgment](#acknowledgment)

## Overview

### Screenshot

![Pod - Podcast Publisher](/src/assets/images/screenshots/screenshot.png)

### Link

- Live Site URL: [toki-pod.netlify.app](https://toki-pod.netlify.app)

### Functionality

Users should be able to:

- View the optimal layout for the content depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The email address field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"
  - The email was already submitted should show "This email already has granted access"
- Visualize a success modal message when the form is submitted with a valid email address

### Built with

- React
- CSS3
- Sass SCSS
- BEM methodology
- Semantic HTML5 markup
- WAI-ARIA attributes
- Mobile-first workflow

### Useful resources

#### Accessibility

- [Accessibility Checker](https://www.accessibilitychecker.org/)
- [WAVE Web accessibility evaluation tool](https://wave.webaim.org/)
- [Accessibility - React](https://legacy.reactjs.org/docs/accessibility.html)

#### Email validation

- [How to Validate Emails in React](https://mailtrap.io/blog/validate-emails-in-react/)
- [RegExp.prototype.test()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)

#### Favicon

I used the logo.svg file to create the favicon.

- [Pixlr E](https://pixlr.com/e/) - Cut only the circle part of the logo and saved in png.
- [favicon.io](https://favicon.io/) - Converted the png into ico and replaced the favicon files in the project's public folder.

## Author

Toki Urata - Frontend Developer based in Canada

- Email: [tokiurata@outlook.com](mailto:tokiurata@outlook.com)

## Acknowledgment

This project is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges provide opportunities to improve coding skills by building realistic projects.
