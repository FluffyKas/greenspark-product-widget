# Greenspark Product Widgets

My implementation of the product widgets task for Greenspark.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The task

##### Non-technical requirements:

- As a user I want to see my product widgets.
- As a user I want to customize my widgets by changing their colors, active state and
  whether it’s linked to my public profile (using client-side state management)
- Only one widget can have the active state at a time
- While there isn't a strict deadline, completing the homework should ideally take only a
  few hours. We hope to receive your solution within one week.

##### Technical requirements:

- You can find a Figma prototype for the UI design here. Please make sure that you sign
  up/login to Figma, so you can investigate the design details. We also recommend
  making a copy of the design for yourself.
- You can fetch the product widget DTOs and its initial properties from
  https://api.mocki.io/v2/016d11e8/product-widgets
- The initial properties should be reflected on page mount
- The UI can be implemented using any well-known framework or library (FYI, we use
  Vue.js, Vuex and Typescript)
- Please include a README describing what you’ve done and why, and how to run and
  use the service.
- Finish the task by implementing a simple, but production-ready, clean code. We would
  like you to be proud of the quality of your final code
- Optional: Write appropriate tests for your frontend service (unit, Storybook)

### Screenshot

![](./screenshot.jpg)

### Links

- Live Site URL: [Greenspark Product Widgets]()

### Local setup

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## My process

### Built with

- [Next.js](https://nextjs.org/)
- Typescript
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn](https://ui.shadcn.com/)

### Thought process

### Challenges

Had an issue with hot reload I haven't encountered before. I was working on a small NextJS project a week ago and everything worked fine there, but since then I had to download a new version of Node for NextJs to work. I suspected this might've been the root cause but before switching around different versions, I looked it up and found that there's already an issue about [this](https://github.com/vercel/next.js/issues/51162). Someone suggested that the problem might've been the global CSS import which I now moved to a different folder and magically, hot reload works again.

### Useful resources

- [shadcn](https://ui.shadcn.com/)

## Author

- Frontend Mentor - [@FluffyKas](https://www.frontendmentor.io/profile/FluffyKas)
