# Vue Friendly Captcha

Wrapper component library for [Friendly Challenge][frc]. Works with Vue 2 and 3.

## Getting Started

**1. Install the package**

-   Vue 2.x: `npm install --save @somushq/vue-friendly-captcha`
-   Vue 3.x: `npm install --save @somushq/vue3-friendly-captcha`

**2. Use it in your Vue app**

Vue 2.x:

```vue
<template>
    <vue-friendly-captcha sitekey="your-site-key" />
</template>

<script>
    import VueFriendlyCaptcha from '@somushq/vue-friendly-captcha';

    export default {
        components: {
            VueFriendlyCaptcha,
        },
    };
</script>
```

Vue 3.x:

```vue
<template>
    <vue-friendly-captcha sitekey="your-site-key" />
</template>

<script setup>
    import VueFriendlyCaptcha from '@somushq/vue3-friendly-captcha';
</script>
```

## API

### Props

| Name                | Type    | Default value                                     | Description                                                |
| :------------------ | :------ | :------------------------------------------------ | :--------------------------------------------------------- |
| `sitekey`\*         | String  | N/A                                               | The site key to be used for Friendly Captcha.              |
| `dark`              | Boolean | `false`                                           | Whether the widget should render in dark mode.             |
| `startMode`         | String  | `'focus'`                                         | Specifies when the widget should start solving the puzzle. |
| `language`          | String  | `'en'`                                            | The language to be used for the widget.                    |
| `solutionFieldName` | String  | `'frc-captcha-solution'`                          | The name of the field that will contain the solution.      |
| `puzzleEndpoint`    | String  | `'https://api.friendlycaptcha.com/api/v1/puzzle'` | The endpoint to be used for the puzzle.                    |

_\* - Required_

### Methods

| Name      | Params | Return type | Description                                     |
| :-------- | :----- | :---------- | :---------------------------------------------- |
| `init`    | N/A    | `void`      | Initializes the Friendly Challenge widget.      |
| `start`   | N/A    | `void`      | Starts solving the captcha.                     |
| `reset`   | N/A    | `void`      | Resets the captcha.                             |
| `destroy` | N/A    | `void`      | Destroys the captcha.                           |
| `isValid` | N/A    | `boolean`   | Returns whether the captcha has been validated. |

### Events

| Name      | Params   | Description                                                        |
| :-------- | :------- | :----------------------------------------------------------------- |
| `ready`   | N/A      | The Friendly Captcha widget is ready.                              |
| `started` | N/A      | Solution has been initiated.                                       |
| `done`    | `string` | The captcha was solved. Will contain the solution as a parameter.  |
| `error`   | `string` | The captcha was not solved. Will contain the error as a parameter. |

## For Contributors

We publish separate modules for Vue 2 and 3. You can use Lerna to perform
operations on both packages at once.

```
npm i -g lerna
```

The packages can be found in the following directories:

-   `packages/vue2` for Vue 2.x
-   `packages/vue3` for Vue 3.x

Make sure to lint your changes before committing them by running

```
npm run lint
```

in the root directory.

Building can be done using `npm run build`.

## License

MIT. See the LICENSE file for more details.

[frc]: https://friendlycaptcha.com/
