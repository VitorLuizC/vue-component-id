# vue-component-id

Generates an unique ID for every Vue component.

## Install

This module is published under NPM registry, so you can install using any Node.js package manager.

```sh
npm install vue-component-id --save

# For Yarn use the command below.
yarn add vue-component-id
```

Vue's `use` method will append generated ID on your components.

```js
import Vue from 'vue';
import ComponentID from 'vue-component-id';

Vue.use(ComponentID);
```

## Usage

After installation an `componentID` property is available on scope. So, you can use it on templates and module scope.

```vue
<template>
  <fieldset>
    <label :for="componentID">Password</label>
    <input :id="componentID" type="password" v-model="password" />
  </fieldset>
</template>

<script>
  export default {
    mounted () {
      // Shows Component's unique ID on console.
      console.log(this.componentID);
    }
  };
</script>
```

## How to use custom generator?

You can change library's generator on options argument.

```js
import Vue from 'vue';
import uuid from 'uuid/v4';
import ComponentID from 'vue-component-id';

Vue.use(ComponentID, { generator: uuid });
```

## How to generate another ID?

`vue-component-id` export a function to create generators. To generate another IDs you can create your own generator and using it.

```js
import { createGenerator } from 'vue-component-id';

// Optionally defines an ID prefix.
const generate = createGenerator('ID-');

const items = [ generate(), generate() ];
//=> [ 'ID-0', 'ID-1' ]
```

## License

Released under [MIT License](./LICENSE).
