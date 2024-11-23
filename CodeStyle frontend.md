
Source: https://v2.vuejs.org/v2/style-guide/?redirect=true

\## Vue.js Code Style Guide

\### Multi-Word Component Names

Always use names with multiple words for components, except for the root App and built-in components like `<transition>`.

\*\*Incorrect:\*\*

\```javascript

Vue.component('todo', {

`  `// ...

})

export default {

`  `name: 'Todo',

`  `// ...

}

\```

\*\*Correct:\*\*

\```javascript

Vue.component('todo-item', {

`  `// ...

})

export default {

`  `name: 'TodoItem',

`  `// ...

}

\```

\### Component Data as a Function

Ensure `data` is a function that returns an object in components.

\*\*Incorrect:\*\*

\```javascript

Vue.component('some-comp', {

`  `data: {

`    `foo: 'bar'

`  `}

})

export default {

`  `data: {

`    `foo: 'bar'

`  `}

}

\```

\*\*Correct:\*\*

\```javascript

Vue.component('some-comp', {

`  `data: function () {

`    `return {

`      `foo: 'bar'

`    `}

`  `}

})

// In a .vue file

export default {

`  `data() {

`    `return {

`      `foo: 'bar'

`    `}

`  `}

}

\```

\### Detailed Prop Definitions

Define props with detailed specifications, including types.

\*\*Incorrect:\*\*

\```javascript

props: ['status']

\```

\*\*Correct:\*\*

\```javascript

props: {

`  `status: String

}

// Best practice

props: {

`  `status: {

`    `type: String,

`    `required: true,

`    `validator: function (value) {

`      `return ['syncing', 'synced', 'version-conflict', 'error'].includes(value)

`    `}

`  `}

}

\```

\### Avoid Using v-if with v-for

Do not combine `v-if` and `v-for` on the same element.

\*\*Incorrect:\*\*

\```html

<ul>

`  `<li v-for="user in users" v-if="user.isActive" :key="user.id">

`    `{{ user.name }}

`  `</li>

</ul>

<ul>

`  `<li v-for="user in users" v-if="shouldShowUsers" :key="user.id">

`    `{{ user.name }}

`  `</li>

</ul>

\```

\*\*Correct:\*\*

\```html

<ul>

`  `<li v-for="user in activeUsers" :key="user.id">

`    `{{ user.name }}

`  `</li>

</ul>

<ul v-if="shouldShowUsers">

`  `<li v-for="user in users" :key="user.id">

`    `{{ user.name }}

`  `</li>

</ul>

\```

\### Scoped Styles in Components

For non-root components, ensure styles are scoped to avoid conflicts.

\*\*Incorrect:\*\*

\```html

<template>

`  `<button class="btn btn-close">X</button>

</template>

<style>

.btn-close {

`  `background-color: red;

}

</style>

\```

\*\*Correct:\*\*

\```html

<template>

`  `<button class="button button-close">X</button>

</template>

<style scoped>

.button {

`  `border: none;

`  `border-radius: 2px;

}

.button-close {

`  `background-color: red;

}

</style>

\```

\### Naming Private Properties

Use a naming convention to indicate private properties, like a '$\_' prefix.

\*\*Incorrect:\*\*

\```javascript

var myGreatMixin = {

`  `methods: {

`    `update: function () {

`      `// ...

`    `}

`  `}

}

\```

\*\*Correct:\*\*

\```javascript

var myGreatMixin = {

`  `methods: {

`    `publicMethod() {

`      `// ...

`      `myPrivateFunction()

`    `}

`  `}

}

function myPrivateFunction() {

`  `// ...

}

export default myGreatMixin

\```

\---
