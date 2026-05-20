# Frontend Mentor - Social Media Dashboard With Theme Switcher Solution

This is my solution to the **Social Media Dashboard With Theme Switcher** challenge on Frontend Mentor. This project focuses on building a fully responsive social media analytics dashboard with an interactive dark/light theme switcher using semantic HTML, modern CSS, and vanilla JavaScript.

The challenge was a great opportunity to practice responsive layouts, custom toggle components, dark mode implementation, DOM manipulation, accessibility improvements, and scalable frontend architecture without using frameworks or external libraries.

---

## Table of contents
- [Overview](#overview)
- [The challenge](#the-challenge)
- [Design](#design)
- [Links](#links)
- [My process](#my-process)
- [Built with](#built-with)
- [What I learned](#what-i-learned)

---

## Overview
This project is a responsive social media dashboard that displays key metrics such as followers, likes, page views, and engagement statistics across multiple platforms including Facebook, Twitter, Instagram, and YouTube.

It also includes a **theme switcher (dark/light mode)** that allows users to toggle between visual themes dynamically using JavaScript and CSS class manipulation.

The interface is fully responsive and adapts smoothly across desktop, tablet, and mobile devices.

All styling was built using modern CSS techniques such as Flexbox, CSS custom properties, gradients, pseudo-elements, and media queries. Interactivity was implemented using vanilla JavaScript with DOM manipulation and event-driven programming.

---

## The challenge
Users should be able to:

- View the optimal layout depending on their device’s screen size.
- Toggle between light and dark themes.
- See hover and focus states for interactive elements.
- Navigate the interface using keyboard interactions.
- View a responsive dashboard layout across devices.
- Interact with a fully custom theme switcher component.
- Experience accessible UI components with proper semantic structure.

---

## Design

- Desktop Design (Light Mode)

<img src="./design/desktop-design-light.jpg" alt="Desktop light mode preview" width="600">

- Desktop Design (Dark Mode)

<img src="./design/desktop-design-dark.jpg" alt="Desktop dark mode preview" width="600">

- Active States (Light Mode)

<img src="./design/active-states-light.jpg" alt="Active states preview" width="600">

- Active States (Dark Mode)

<img src="./design/active-states-dark.jpg" alt="Active states preview" width="600">

- Mobile Design (Light Mode)

<img src="./design/mobile-design-light.jpg" alt="Mobile preview" width="200">

- Mobile Design (Light Mode)

<img src="./design/mobile-design-dark.jpg" alt="Mobile preview" width="200">

---

## Links
- Solution URL: [GitHub Repository](https://github.com/mlopezl/social-media-dashboard-with-theme-switcher)
- Live Site URL: [Live Demo](https://mlopezl.github.io/social-media-dashboard-with-theme-switcher/)

---

## My process
- Structured the layout using **semantic HTML5** elements such as `main`, `section`, `header`, and `article`.
- Followed a **mobile-first approach**, progressively enhancing the layout with media queries.
- Built responsive layouts using **Flexbox** for alignment and spacing.
- Used **CSS custom properties (variables)** to create a scalable and maintainable design system.
- Implemented a **dark/light theme system** using a root `.dark` class.
- Created a custom toggle switch using HTML and CSS pseudo-elements.
- Used **BEM methodology** for consistent and scalable class naming.
- Added interactive behavior using JavaScript event listeners:
  - `change`
  - `keydown`
- Managed UI state through DOM manipulation and `classList`.
- Ensured accessibility with keyboard support and focus handling.
- Used semantic HTML to improve structure, readability, and SEO.
- Maintained separation of concerns between structure (HTML), styling (CSS), and behavior (JavaScript).

---

## Built with
- HTML5
- CSS3
- JavaScript (ES6)
- Flexbox
- CSS custom properties (variables)
- Mobile-first workflow
- Responsive design principles
- BEM naming convention
- DOM manipulation
- Event listeners
- Keyboard accessibility
- CSS gradients
- CSS pseudo-elements
- Media queries

---

## What I learned
- Building a complete **dark/light theme system** using CSS classes and JavaScript.
- Structuring complex UI layouts using **semantic HTML5**.
- Creating scalable and maintainable CSS using **BEM methodology**.
- Using **CSS variables** to centralize design tokens like colors and gradients.
- Building custom interactive components such as toggle switches.
- Handling user interaction with **JavaScript events (change, keydown)**.
- Improving accessibility with keyboard navigation support.
- Using pseudo-elements (`::before`) to create advanced UI effects without extra HTML.
- Managing responsive layouts using a **mobile-first approach**.
- Enhancing UI/UX with hover states, transitions, and visual feedback.
- Writing clean, modular frontend code without frameworks while maintaining good architecture.