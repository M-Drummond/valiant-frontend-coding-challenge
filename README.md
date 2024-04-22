
# 🦁 Valiant Frontend Coding Challenge

  

This is an attempt at the finance calculator challenge. I've made some decisions regarding structure that'll benefit from some explanation.

 **Vue / JS  Structure**
	

- **Components:** When I build something, I try to imagine opening for the first time, with no familiarity.  It should be largely readable, and the `app.vue` should contain enough information that a dev can find what they need right away.  So, I've shied away from using slotted components or any components that import anything else.  I've also not used a layout or header component, so it's very simple.   What's resulted from this is that there's a total of five components, one for each input, and one for the outputs. 
 
- **Store:** I always try to do things in computed() or in the component logic, but end up moving to Pinia at some point.  Most projects work better if the components can share state, and this is my favourite way to do it.  In each component, I've aliased the store to `ls()`, an abbreviation for `Loan Store`.   We can model properties and call actions via `ls()` anywhere it's included.
		- All the logic happens in the store, it's the backbone of the app. It has the options available, user inputs and the validation logic.  
		- There's an imported function for fetching each of the available options for the select box.  I considered using something like mande(), but I like having each fetch in it's own little file, in case it needs to be extended in the future.
- **Inputs** It would've been relatively simple to add in a currency picker Vue component, or an inline-select plugin.  I've chosen to use native browser inputs instead.  This is a more simple, performant solution, and we're only dealing with a handful of selects.  Because they're in their own component files, we'd be able to swap each out individually without a big refactor.
	
	- The spec required the loan amount is of `[type=text]` which is a little bit of a curveball, as we really only wanted number inputs.  My solution here was to add both a text and number input, both using `v-model` to keep the same value.  The text input is hidden.  This approach allows us to use the nicer number input, while meeting the requirements.  
		- Similarly, validation could've been handled by a plugin, but as we're now using number inputs, we can do it in one line. Checking that the input amount is between the two values and returning a true/false.  Then it's a matter of updating the UI with the information in the output component. A `v-if` works well here.   
		- If there were more varied inputs,  like email addresses and locations, being added, I'd definitely look to a plugin.
	
**CSS:**
- The structure of the site is all TailwindCSS.  The style.css includes only imports and the requisite tailwind rules. 
- Using TailwindCSS is great, but when you have multiples of slightly different elements, extracting them out to a repeatable component is ideal. That's what I've done with `forms.css` and it's contents.   A hybrid of `theme()` and regular CSS is used, as is a handful of `@apply` rules.  
	
- The decision here is to keep a balance of legibility and repeatability.  These rules are in the base layer, so they can be overwritten inline, in case a future design change necessitated one input having special colours or formatting, as an example.  This is an extensible solution I've enjoyed in the past.
	- People don't always like `@apply`, but I think it's a decent way to make inputs work well.  
- I've defined only two new rules in `tailwind.config.js` as we really only wanted to modify the shadows for the frame and buttons.  

 **JS, comments and Testing**

- The PMT function file (`src\utils\PMT.js`) has been expanded with some JSDOC comments, nothing super fancy, but makes it a bit clearer to use.
- The store file has comments explaining each of it's actions.  
- There's some simple tests added in `LoanStore.test.js`.  The state of the store is examined, and the relevant properties are checked for.  
- Similarly, there's an example test in `tests\unit\fetchLoanPeriods.spec.js` - I haven't added one for each of the fetch functions, because they'd be the same, and I think if you're reading this, you get the point.
	- `tests\e2e\specs\tests.js` has a cypress test, ready to be run.  

**Requirements Summary**
- 🏆 **Code quality:** 
	- DRY, when appropriate.
	- Code is pretty clean, would take any feedback on this.  
	- Consistent naming / formatting: no ESLint warnings or errors. 
	- Testsable code: Automated tests are setup and ready to run.
- 🔧**Javascript and CSS Skills:**
	- JS works, is simple enough to read and has relevant comments.
	- CSS is minimal, mostly in TailwindCSS as mentioned in **Vue / JS  Structure** heading.  I strongly recommend not blindly stacking up columns of tailwind classses for form inputs - it's a common trap.
- 🔄 **API use and state management:** The API was accessed using Axios, and the store is handled across components in Pinia.  I have my preferences on how to do this, but am open to fedback.
- 🧱 **Component architecture:** There are five components in addition to `app.vue` and they are named as according to the vue style guide - multiple-word, PascalCased.
- ⚙ **Use of tooling and GIT**:  The repo is tracked, and I've attempted to emulate the commits in the original fork. I would like to know the rules for the emoji selections.
- 🎨 **UI/ Design flair**: This one's pretty well subjective, but I personally enjoy buttons that look like buttons.  I've also added a dark mode - didn't get listed as a criteria for bonus points, but I'm not on the scoreboard, so I may as well do it anyway.  I was tempted to do something really out-there (either looking like MacOS9, or a skeumorphic thing that looked really close to the fat marker drawing) but I thought better to play it safe.  
- 🎉 **Ability to interpret a task and deliver a result**:  I'm writing this list and making sure I've met specifications as I go.  This list item is proof of itself.  
- ⚒ **Ability to break down tasks**:  There's a TODO below, which I followed fairly closely.  I would prefer to use something with actual checkboxes I can click, but it worked well for a task this size.   I really enjoy writing documents like this, as you can probably tell from it's length.

**Conclusion**

This went OK, should satisfy the requirements in it's own way.  I enjoyed the project overall, and was interested to see the challenge documents.  It's quite novel to someone from industry-land. 

I've taken a lot more than four hours doing this project.  I suspected 4 hours may have been a low-ball suggestion to try and find people who'd flag with their management that they'd need more time were this a real-world task. 

As I'm out of the running, I figured I'd just work on it until I was done. 

Here's the rest of the readme, with the todo at the bottom. 

Dependencies include:

- [Vue 3](https://vuejs.org/guide/introduction)

- [Vite](https://vitejs.dev/)

- [Tailwind CSS](https://tailwindcss.com/)

- [ESLint](https://eslint.org/)

- [Vitest](https://vitest.dev/)

- [Cypress](https://www.cypress.io/)

- [Axios](https://axios-http.com/docs/intro%29) (➕ New)
  

## 🚀 Getting Started

  

Requires Node 20 and NPM 10.

  

```bash

# Install dependencies.

npm  install

```

  

## 🏃‍♀️ Scripts

-  `npm run backend` – Start the backend server.

-  `npm run dev` – Start the development server.

-  `npm run lint` – Lint the code.

-  `npm run test:e2e` – Open Cypress.

-  `npm run test:unit` – Run vitest unit tests.

  
  

# TODO

  

- [✅] Frame out the grid of the site/widget. Attempt to emulate the fat marker look

- [✅] Components for each input and for each output, group styles into repeatable component classes

- [✅] Fetch data / functionality for each component

- [✅] Validate inputs + test

- [✅] Add Pinia store

- [✅] Implement calcuation as a store action

- [✅] Add cypress test.

- [✅] Favicons, ~~Manifest~~, tidy comments for build, write extra docs