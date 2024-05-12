# LITERATURE (DEVELOPER OVERVIEW)
_Last modified on 5/11/2024_

This document serves as an overview and/or summarization of a single piece of `literature`. Its purpose is to provide
a bird's-eye view of `literature` so that it can soon be made into a _template_ for a component which can then be reused for
automating the process of creating story experiences for the website.

**_NOTE: The "shape" of `literature`, or its properties, may evolve over time, and so too will this document._**

For now, the layout of this document should closely reflect the layout of a corresponding piece of `literature` in the code, 
with documentation and descriptions for each.

# Concepts
While creating this project, the first "tale" (this term will be deprecated soon by the client) or `literature` was "The Juice" (title of one of Justin's pieces of prose).
Until functionality is extrapolated into a reusable component, refer to the "The Juice" (or "the-juice.tsx" inside `/tales`) as a reference for creating said component.

## `Literature` Classifications
The current classifications of `literature`:

  * Poem
  * Prose
  * Story
  * Other
  
_Consider updating this structure in the future to accommodate more appropriate forms._

Each piece of published `literature` will be categorized into one of these classifications.

<br/>
<br/>

# `LITERATURE` FILE STRUCTURE
Literature was formerly referred to as a "tale" _[deprecated]_.

## BEGIN TEMPLATE

### USE CLIENT (?)
With the necessity of using `react state`, as well as the `framer-motion` animation library, `use client` will most likely be required. [_Redundant? Remove? Any possible exceptions?_]

### IMPORTS
Any required imports including custom components as well as other installed libraries.

### TYPES
**`TStanza`**
  * The various properties of a `stanza`, mainly used for accessing/referencing various `parts` of the `Literature`.

**Example**
  ```
  export type TStanza = {
	id: number;
	part1: string;
	part2: string | undefined | null;
}
  ```


**`TLiterature`**
  * An object containing an array of stanzas as well as some meta data about a piece of `Literature`. For this app, I use the term "literature" as a sort of "base class" for all types of writings. The `type` list may evolve based on the types of writings publishes.




**Example**
  ```
  export type TLiterature = {
	title: string;
	type: "poem" | "prose" | "story" | "other";
	stanzas: TStanza[];
}
  ```
* `part1`
  * The required text content of the _first_ `part` of a `stanza`. **For viewer readability purposes, `stanzas` are currently split into `parts` (1 to 2 for now, more possible in the future. Please soon refactor in a more robust manner. Array?)**
* `[part2]?`
  * The optional second `part` of a `stanza` (may also use only the first `part` for more emphasis in the story). **For viewer readability purposes, `stanzas` are currently split into `parts` (1 to 2 for now, more possible in the future. Please soon refactor in a more robust manner. Array?)**

<br/>

# OPTIONS

### `TYPEWRITER` OPTIONS
Reference: [`wrapperClassName`, `cursorClassName`](https://www.npmjs.com/package/typewriter-effect)

Object shapes used as defaults to inject into the `Typewriter` component, these properties are based on the documentation for the `typewriter-effect` package. _(See NPM package `[typewriter-effect](https://www.npmjs.com/package/typewriter-effect) for more info.)_

```
const typewriterOptions = {
	wrapperClassName: styles.typewriterWrapper,
	cursorClassName: styles.typewriterCursor
}
```

The `styles.typeWriterWrapper` and `styles.typeWriterCursor` refer to classes in the corresponding CSS Module.

### STANZA OPTIONS
<a href="#stanza-options"></a>

A [`<motion.div>`](https://www.framer.com/motion/) component used to create animatable `stanzas`.

Options for injecting into a `<motion>` component using [`framer-motion`](https://www.framer.com/motion/):

```
const initialOptions = {
	opacity: 0
}

const whileInViewOptions = {
	opacity: 1
}

const transitionOptions = {
	duration: 2
}
```

**Implementation Example:**

Reference: [`TypewriterClass`](https://www.npmjs.com/package/typewriter-effect)
```
<Typewriter
	onInit={(typewriter: TypewriterClass) => {
		if (!literature?.stanzas[3]?.part1) return;		// Return if no text content present
		
		setStanza3TW_P1(typewriter)				// Set the current `Typewriter` in react `state`
		typewriter.changeDelay(45)				// The typewriter's "speed"
		typewriter.typeString(literature.stanzas[3].part1)	// Begin typing a string (part1 or part2 of a stanza)
	}}
	options={typewriterOptions}					// Pre-defined options for the `Typewriter`
/>
```

### SPACER COMPONENT (Temporary, Refactor)

A simple custom component used to separate `stanzas` in order to make the viewer scroll to read (for readability purposes). Will likely
use styling eventually.

```
export const SpacerComponent = () => (
	<div className="my-96"></div>
)
```

# DEFAULT EXPORT

This is the meat of the component. Here is an overview overview of the code structure for `Literature`:

* [Stanza States](#stanza-states)
* [Animation Definitions](#animation-definitions)
* [Actions](#actions)
* [Start Animations](#start-animations)
* [Stop Animations](#stop-animations)
* [Use-Effects](#use-effects)
* [(Rendering)](#rendering)

<br/> 
<br/> 

**Here's a look at each of these, in order:**

## STANZA STATES
<a href="#stanza-states"></a>

```
// Stanza 0 State
const stanza0WrapperRef = useRef(null)				     // A reference to a framer-motion `<motion>` component (one for each stanza)
const stanza0_InView = useInView({ root: stanza0WrapperRef })	     // A boolean for whether the `root` (reference) is visible in the viewport
const [stanza0TW_P1, setStanza0TW_P1] = useState<TypewriterClass>()  // A reference to a `Typewriter` instance, used to start, stop, (etc) its animations.
```
_Reference: [useInView()](https://www.framer.com/motion/use-in-view/)_

These assignations currently exist **for each stanza**. Consider refactoring into an Array or some other more efficient way.

## ANIMATION DEFINITIONS
<a href="#animation-definitions"></a>

In `framer-motion`, each animateable component gets a `scope` and an `animate` via
a hook, which are used to refer to an animateable component and control its animations.

**Format Example**:
```
function Component({ children }) {
  const [scope, animate] = useAnimate()
  
  return <ul ref={scope}>{children}</ul>
}
```

Here, `scope` is a reference to the component being animated (it is a React `useRef` reference), while `animate` is used to start, stop, pause, (etc) the animation. These can be renamed to whatever you like.

```
const [storyContainerScope, storyContainerAnimate] = useAnimate()
	const [headerScope, headerAnimate] = useAnimate()
	const [headerTitleScope, headerTitleAnimate] = useAnimate()
	const [beginButtonScope, beginButtonAnimate] = useAnimate()

	// Stanza 0 Animations
	const [stanza0WrapperScope, stanza0WrapperAnimate] = useAnimate()
	const [stanza0Scope, stanza0Animate] = useAnimate()
```

Refer to `framer-motion` documentation for more about `useAnimate()`.

See [ACTIONS](#actions) below for implementation examples of this functionality.

## ACTIONS
<a href="#actions"></a>

Various custom functions written to control `<motion>` components by `framer-motion`,
via the `animate` part of the `useAnimate` hook mentioned above, passing in optional properties to animate such as opacity, duration, transition, etc.

_Reference: [useAnimate()](https://www.framer.com/motion/use-animate/)_

**Implementation Example**:

```
const onBegin = async() => {
	beginButtonAnimate(beginButtonScope.current, { opacity: 0 }, { duration: 3 })
	headerAnimate(headerScope.current, { opacity: 0 }, { duration: 3 })
	await headerTitleAnimate(headerTitleScope.current, { opacity: 1, color: '#B23056' }, { duration: 3, delay: 2 })
}
```
The first argument for `animate` is the current reference (`scope.current`), followed by an object of values to animate, followed by an optional object of options for the animation.

Also, `async` can be used to wait for an animation to finish before moving on to the next. This is optional in case you don't want to wait (this can be paired with a `delay` in order to better fine-tune the timing of animation sequences.)

## START ANIMATIONS
<a href="#start-animations"></a>

These are also various custom functions written to control `<motion>` components by `framer-motion`,
via the `animate` part of the `useAnimate` hook mentioned above, passing in optional properties to animate such as opacity, duration, transition, etc.

_Reference: [useAnimate()](https://www.framer.com/motion/use-animate/)_


## STOP ANIMATIONS
<a href="#stop-animations"></a>

These are also various custom functions written to control `<motion>` components by `framer-motion`,
via the `animate` part of the `useAnimate` hook mentioned above by calling the `stop` function.

_Reference: [useAnimate()](https://www.framer.com/motion/use-animate/)_


## USE-EFFECTS
<a href="#use-effects"></a>

One or more `useEffects` for `state` purposes, logging, etc.


## (RENDERING)
<a href="#rendering"></a>

The rendering of the `Literature` content.

The main format is:

* Navigation
* Header
* Story Section

### Navigation
The navigation section sits `fixed` at the top of the page, for returning to a list of `Literature`, or to return to the landing page, or to restart the current `Literature`.

### Header
A custom element used to display the title of the current `Literature`.

### Story Section 
This section renders out each of the `stanzas` defined earlier. 

It contains various `<motion>` elements by `framer-motion` used to render the writing. It may make use of the `Spacer Component` in order to separate each individual digestable part of the writing.

**Implementation Example**:

```
{/* STANZA 1 ==================================================================================================== */}
<motion.div 
	className={styles.newStanzaWrapper}
	initial={initialOptions}
	whileInView={whileInViewOptions}
	transition={transitionOptions}
	onViewportEnter={() => startStanza1Animation()}
	onViewportLeave={() => stopStanza1Animation()}
>
	<article ref={stanza1Scope} className={`${styles.stanza} ${styles.stanza0}`}>
		{ literature?.stanzas[1]?.part1 && <Typewriter
			onInit={(typewriter: TypewriterClass) => {
				if (!literature?.stanzas[1]?.part1) return;

				setStanza1TW_P1(typewriter)
				typewriter.changeDelay(45)
				typewriter.typeString(literature.stanzas[1].part1)
			}}
			options={typewriterOptions}
		/> }
	</article>
	<div 
		ref={stanza1WrapperScope} 
		className={`${styles.stanzaImageWrapper} ${styles.stanzaImageWrapper1}`}>
	</div>
</motion.div>

<SpacerComponent />
```
Defaults for the properties `initial`, `whileInView`, and `transition` were defined above, here: [OPTIONS](#stanza-options)

`onViewportEnter` and `onViewportLeave` are from `framer-motion` for providing callback functions when the `<motion>` component goes in or out of the viewport.