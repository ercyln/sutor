# Sutor Bank Component Library

A Vue 3 component library built with Vite and Vuetify.

## Introduction

**Sutor Bank Component** is a collection of reusable Vue 3 components, styled with Vuetify, and optimized for performance using Vite. This library aims to provide a set of commonly used components to speed up the development process of your Vue.js applications.

## ❗️ Important Links

-   📄 [Docs](https://www.npmjs.com/package/sutorbank-component#readme)

## 💿 Install

Before you can use this project, make sure you have the following prerequisites installed:

-   [Vue.js](https://vuejs.org/)
-   [Vuetify](https://vuetifyjs.com/)

Set up your project using NPM. Use the corresponding command to install the dependencies:

| Package Manager                                           | Command                       |
| --------------------------------------------------------- | ----------------------------- |
| [npm](https://docs.npmjs.com/cli/v7/commands/npm-install) | `npm install sutorbank-component` |

## 💡 Usage

After successfully installing dependencies, register component globally.

```
import vuetify from './vuetify'
import router from '@/router'
import sutorbankComponent from 'sutorbank-component'
import 'sutorbank-component/dist/style.css'

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(sutorbankComponent)
    .use(router)
}




```

## Button Component

The `sb-button` component is a customizable button with various props and events. Extended from Vuetify.

### Props

| Prop          | Type    | Default   | Description                                                                |
| ------------- | ------- | --------- | -------------------------------------------------------------------------- |
| `color`       | String  | `primary` | The color of the button (e.g., `primary`, `secondary`).                    |
| `disabled`    | Boolean | `false`   | Whether the button is disabled.                                            |
| `variant`     | String  | `''`      | The variant of the button (`outlined`, `tonal`, `text`, `plain`).          |
| `icon`        | String  | `''`      | The icon for a single icon button, using MDI icons.                        |
| `prependIcon` | String  | `''`      | The icon to prepend to the button text, using MDI icons.                   |
| `appendIcon`  | String  | `''`      | The icon to append to the button text, using MDI icons.                    |
| `density`     | String  | `''`      | The density of the button ('default', `comfortable`, `compact`).           |
| `size`        | String  | `medium`  | The size of the button (`x-small`, `small`, `medium`, `large`, `x-large`). |
| `block`       | Boolean | `false`   | Whether the button should take the full width of its container.            |
| `rounded`     | String  | `0`       | The border radius of the button (e.g., `0`, `xs`, `sm`, `md`, `lg`, `xl`). |
| `elevation`   | Number  | `2`       | The elevation (shadow) level of the button.                                |
| `ripple`      | Boolean | `true`    | Whether the button has a ripple effect when clicked.                       |
| `loading`     | Boolean | `false`   | Whether the button shows a loading indicator.                              |
| `width`       | String  | `''`      | The width of the button.                                                   |
| `maxWidth`    | String  | `''`      | The maximum width of the button.                                           |
| `minWidth`    | String  | `''`      | The minimum width of the button.                                           |
| `height`      | String  | `''`      | The height of the button.                                                  |
| `maxHeight`   | String  | `''`      | The maximum height of the button.                                          |
| `minHeight`   | String  | `''`      | The minimum height of the button.                                          |

### Slots

| Slot Name | Description                      |
| --------- | -------------------------------- |
| `prepend` | Slot for custom prepend content. |
| ``        |                                  |
| `append`  | Slot for custom append content.  |
| `loader`  | Slot for custom loader content.  |

### Events

| Event    | Description                              |
| -------- | ---------------------------------------- |
| `@click` | Event emitted when the button is clicked |

### Example Usage

```vue
<template>
	<sb-button @click="onClick" elevation="4" color="#1814F3" class="mt-1" :disabled="!terms"> Add Card </sb-button>
</template>

<script setup>
import { ref } from 'vue'
const terms = ref(false)
function onClick() {
    alert('Button clicked!');
},
</script>
```

## Card Component

The `sb-card` component is a versatile card component with a customizable button. It is built using Vuetify's card and button components and offers various customization options for appearance and behavior.

### Props

| Prop               | Type    | Default         | Description                                                                         |
| ------------------ | ------- | --------------- | ----------------------------------------------------------------------------------- |
| `text`             | String  | `''`            | The main text content of the card.                                                  |
| `buttonText`       | String  | `Click`         | The text displayed on the button.                                                   |
| `buttonBackground` | String  | `#7367f0`       | The background color of the button.                                                 |
| `buttonColor`      | String  | `#fff`          | The text color of the button.                                                       |
| `showButton`       | Boolean | `false`         | Whether to show the button.                                                         |
| `title`            | String  | `''`            | The title of the card.                                                              |
| `target`           | String  | `''`            | The target attribute for the link, if `href` is provided.                           |
| `subtitle`         | String  | `''`            | The subtitle of the card.                                                           |
| `variant`          | String  | `''`            | The variant of the card (`outlined`, `tonal`, `elevated`, `flat`, `text`, `plain`). |
| `loading`          | Boolean | `false`         | Whether the card shows a loading state.                                             |
| `hover`            | Boolean | `false`         | Whether the card has a hover effect.                                                |
| `href`             | String  | `''`            | The link URL for the card.                                                          |
| `rounded`          | String  | `xs`            | The border radius of the card (e.g., `xs`, `sm`, `md`, `lg`, `xl`).                 |
| `elevation`        | Number  | `1`             | The elevation (shadow) level of the card.                                           |
| `image`            | String  | `''`            | The image URL for the card.                                                         |
| `color`            | String  | `''`            | The color of the card.                                                              |
| `disabled`         | Boolean | `false`         | Whether the card is disabled.                                                       |
| `prependIcon`      | String  | `''`            | The icon to prepend to the card content.                                            |
| `appendIcon`       | String  | `''`            | The icon to append to the card content.                                             |
| `density`          | String  | `'comfortable'` | The density of the card (`comfortable`, `compact`).                                 |
| `width`            | String  | `''`            | The width of the card.                                                              |
| `maxWidth`         | String  | `''`            | The maximum width of the card.                                                      |
| `minWidth`         | String  | `''`            | The minimum width of the card.                                                      |
| `height`           | String  | `''`            | The height of the card.                                                             |
| `maxHeight`        | String  | `''`            | The maximum height of the card.                                                     |
| `minHeight`        | String  | `''`            | The minimum height of the card                                                      |

### Slots

| Slot Name | Description                      |
| --------- | -------------------------------- |
| `prepend` | Slot for custom prepend content. |
| ``        |                                  |
| `append`  | Slot for custom append content.  |
| `actions` | Slot for actions loader content. |

### Events

| Event    | Description                               |
| -------- | ----------------------------------------- |
| `@click` | Event emitted when the button is clicked. |

### Example Usage

```vue
<template>
	<sb-card
		title="Card Title"
		subtitle="Card Subtitle"
		text="This is some example text content for the card."
		:show-button="true"
		button-text="Learn More"
		button-background="#ff5722"
		button-color="#ffffff"
		:hover="true"
		:elevation="4"
		href="https://example.com"
		target="_blank"
		class="my-custom-class"
		:rounded="'md'"
	>
		<template #prepend>
			<v-avatar size="56">
				<img src="https://example.com/avatar.jpg" alt="Avatar" />
			</v-avatar>
		</template>
		<template #append>
			<v-icon>mdi-heart</v-icon>
		</template>
	</sb-card>
</template>

<script setup></script>
```

## Chip Component

The `sb-chips` component represents a small interactive element used to represent information such as tags, categories, or actions.

### Props

| Prop          | Type    | Default     | Description                                                           |
| ------------- | ------- | ----------- | --------------------------------------------------------------------- |
| `title`       | String  | `'Chip'`    | The text content displayed within the chip.                           |
| `color`       | String  | `'#7367f0'` | The background color of the chip.                                     |
| `elevation`   | Number  | `0`         | Elevation level of the chip.                                          |
| `size`        | String  | `'default'` | Size of the chip (`small`, `default`, `large`).                       |
| `variant`     | String  | `'tonal'`   | Visual variant of the chip (`outlined`, `elevated`, `text`, `plain`). |
| `prependIcon` | String  | `''`        | Icon to prepend before the chip text.                                 |
| `appendIcon`  | String  | `''`        | Icon to append after the chip text.                                   |
| `closable`    | Boolean | `false `    | If true, displays a close icon for removing the chip.                 |
| `label`       | Boolean | `false`     | If true, renders the chip as a label style.                           |
| `disabled`    | Boolean | `false`     | If true, disables interactions with the chip.                         |
| `density`     | String  | `''`        | Density of the chip (`comfortable`, `compact`).                       |

### Slots

| Slot Name | Description                      |
| --------- | -------------------------------- |
| `prepend` | Slot for custom prepend content. |
| `append`  | Slot for custom append content.  |

### Events

| Event Name | Description                         | Payload    |
| ---------- | ----------------------------------- | ---------- |
| `click`    | Triggered when the chip is clicked. | MouseEvent |

### Example Usage

```vue
<template>
	<sb-chips title="Example Chip" color="#ff9800" elevation="2" size="default" variant="outlined" prependIcon="mdi-check" appendIcon="mdi-close" closable label disabled class="custom-chip" density="compact" @click="handleChipClick">
		<template #prepend>
			<v-icon>mdi-tag</v-icon>
		</template>
	</sb-chips>
</template>

<script setup>
import Chip from "sutorbank-component/Chip.vue";

const handleChipClick = (event) => {
	console.log("Chip clicked!", event);
};
</script>

<style>
.custom-chip {
	font-size: 14px;
}
</style>
```

## Expansion Panels Component

The `sb-expansion-panel` component allows for displaying collapsible panels with customizable options.

### Props

| Prop        | Type    | Default     | Description                                                                        |
| ----------- | ------- | ----------- | ---------------------------------------------------------------------------------- |
| `items`     | Array   | `See below` | Array of objects defining each panel's title and text content.                     |
| `variant`   | String  | `'default`' | Variant style of the expansion panels (`default`, `accordion`, `inset`, `popout`). |
| `rounded`   | String  | `'xs'`      | Rounded corner size of the panels.                                                 |
| `elevation` | Number  | `1`         | Elevation level of the panels.                                                     |
| `readonly`  | Boolean | `false`     | Whether the panels are readonly.                                                   |
| `color`     | String  | `''`        | Color of the expansion panels.                                                     |
| `disabled`  | Boolean | `false`     | Whether the panels are disabled.                                                   |

### Example Usage

```vue
<template>
	<sb-expansion-panel :items="panelItems" variant="accordion" rounded="md" :elevation="3" :readonly="false" color="#7367f0" class="custom-expansion-panels" />
</template>

<script setup>
import { ref } from "vue";

const panelItems = ref([
	{
		title: "Panel 1",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		title: "Panel 2",
		text: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.",
	},
]);
</script>

<style>
.custom-expansion-panels .v-expansion-panel-title {
	color: var(--title);
}
.custom-expansion-panels .v-expansion-panel-title--active {
	color: var(--primary);
	font-weight: 600;
}
.custom-expansion-panels .v-expansion-panel-text {
	color: var(--text);
}
</style>
```

## Dialog Component

The `sb-dialog` component provides a dialog with an activator slot for flexibility in triggering the dialog.

### Props

| Prop              | Type    | Default            | Description                                                   |
| ----------------- | ------- | ------------------ | ------------------------------------------------------------- |
| `title`           | String  | `'Title'`          | Title of the dialog.                                          |
| `text`            | String  | `'Lorem ipsum...'` | Text content displayed within the dialog.                     |
| `closeButtonText` | String  | `'Close'`          | Text for the close button inside the dialog.                  |
| `rounded`         | String  | `'xs'`             | Rounded corner size of the dialog.                            |
| `buttonText`      | String  | `'Open Modal'`     | Text displayed on the activator button triggering the dialog. |
| `buttonColor`     | String  | `'#7367f0'`        | Color of the activator button.                                |
| `buttonElevation` | Number  | `2`                | Elevation level of the activator button.                      |
| `persistent`      | Boolean | `false`            | Whether the dialog persists after being closed.               |
| `transition`      | String  | `''`               | Transition name for dialog animation.                         |
| `scrollable`      | Boolean | `false`            | Whether the dialog content is scrollable.                     |
| `fullscreen`      | Boolean | `false`            | Whether the dialog should occupy the full screen.             |
| `width`           | String  | `''`               | Width of the dialog.                                          |
| `maxWidth`        | String  | `''`               | Maximum width of the dialog.                                  |
| `minWidth`        | String  | `''`               | Minimum width of the dialog.                                  |
| `height`          | String  | `''`               | Height of the dialog.                                         |
| `maxHeight`       | String  | `''`               | Maximum height of the dialog.                                 |
| `minHeight`       | String  | `''`               | Minimum height of the dialog.                                 |
| `buttonVariant`   | String  | `''`               | Variant style of the activator button.                        |
| `buttonDisabled`  | Boolean | `false`            | Whether the activator button is disabled.                     |
| `buttonDensity`   | String  | `'comfortable'`    | Density of the activator button.                              |
| `buttonClass`     | String  | `''`               | Custom CSS classes for the activator button.                  |
| `buttonSize`      | String  | `'default'`        | Size of the activator button.                                 |
| `buttonBlock`     | Boolean | `false`            | Whether the activator button spans full width.                |
| `buttonRounded`   | String  | `'xs'`             | Rounded corner size of the activator button.                  |
| `buttonLoading`   | Boolean | `false`            | Whether the activator button is in a loading state.           |
| `buttonWidth`     | String  | `''`               | Width of the activator button.                                |
| `buttonMaxWidth`  | String  | `''`               | Maximum width of the activator button.                        |
| `buttonMinWidth`  | String  | `''`               | Minimum width of the activator button.                        |
| `buttonHeight`    | String  | `''`               | Height of the activator button.                               |
| `buttonMaxHeight` | String  | `''`               | Maximum height of the activator button.                       |
| `buttonMinHeight` | String  | `''`               | Minimum height of the activator button.                       |

### Slots

| Slot Name   | Description                                                                                                                         |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `activator` | Slot for replacing the default activator button. Provides props (`activatorProps`) to customize the activator button.               |
| `default`   | Slot for customizing the content inside the dialog. Receives the `isActive` prop indicating whether the dialog is currently active. |

### Example Usage

```vue
<template>
	<sb-dialog width="auto" scrollable :title="dialogTitle" :text="dialogText">
		<template v-slot:activator="{ props: activatorProps }">
			<sb-button color="brown" prepend-icon="mdi-earth" text="Custom Modal Activator" variant="outlined" v-bind="activatorProps"></sb-button>
		</template>
	</sb-dialog>
</template>

<script setup>
const dialogTitle = "Example Dialog";
const dialogText = "This is an example of a dialog component with custom slots and props.";
</script>
```

## List Component

The `sb-list` component renders a list of items with optional sub-groups, allowing customization of each list item.

### Props

| Prop            | Type    | Default         | Description                                                               |
| --------------- | ------- | --------------- | ------------------------------------------------------------------------- |
| `lines`         | String  | `'one'`         | Number of lines for list items (one or two).                              |
| `items`         | Array   | `[]`            | Array of items to render in the list.                                     |
| `density`       | String  | `'comfortable'` | Density of the list items (comfortable or compact).                       |
| `elevation`     | Number  | `0`             | Elevation level of the list.                                              |
| `variant`       | String  | `''`            | Variant style of the list (outlined, tonal, elevated, flat, text, plain). |
| `disabled`      | Boolean | `false`         | Whether the list is disabled.                                             |
| `listItemClass` | String  | `''`            | Custom CSS classes for each list item.                                    |
| `width`         | String  | `''`            | Width of the list wrapper.                                                |
| `maxWidth`      | String  | `''`            | Maximum width of the list wrapper.                                        |
| `minWidth`      | String  | `''`            | Minimum width of the list wrapper.                                        |
| `height`        | String  | `''`            | Height of the list wrapper.                                               |
| `maxHeight`     | String  | `''`            | Maximum height of the list wrapper.                                       |
| `minHeight`     | String  | `''`            | Minimum height of the list wrapper.                                       |

### Example Usage

```vue
<template>
	<sb-list lines="two" :items="listItems" density="compact" elevation="3" variant="outlined" :disabled="false" class="custom-list" width="100%" :maxWidth="'800px'" :minHeight="'300px'">
		<template v-slot:list-item="{ item }">
			<v-list-item-content>
				<v-list-item-title>{{ item.title }}</v-list-item-title>
				<v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
			</v-list-item-content>
		</template>
		<template v-slot:sub-item="{ item }">
			<v-list-item-content>
				<v-list-item-title>{{ item.title }}</v-list-item-title>
				<v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
			</v-list-item-content>
		</template>
	</sb-list>
</template>

<script setup>
const listItems = ref([
	{
		title: "Item 1",
		subtitle: "Description of Item 1",
	},
	{
		title: "Item 2",
		subtitle: "Description of Item 2",
		prependAvatar: "https://example.com/avatar.jpg",
	},
	{
		title: "Item 3",
		subtitle: "Description of Item 3",
		prependIcon: "mdi-account",
	},
	{
		title: "Item 4",
		subtitle: "Description of Item 4",
		appendIcon: "mdi-check",
	},
	{
		title: "Item 5",
		subtitle: "Description of Item 5",
		subItems: [
			{
				title: "Sub-item 1",
				subtitle: "Description of Sub-item 1",
				prependIcon: "mdi-subdirectory-arrow-right",
			},
			{
				title: "Sub-item 2",
				subtitle: "Description of Sub-item 2",
				prependIcon: "mdi-subdirectory-arrow-right",
			},
		],
	},
]);
</script>
```

## Tabs Component

The `sb-tab` component is a customizable tab component with support for icons, dynamic tab content, and various styling options. It allows for flexible props, slots, and a simple API to manage the tabs.

### Props

| Prop        | Type    | Default                                                                                                                                                  | Description                                                                                     |
| ----------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `items`     | Array   | `[{ id: 1, tabText: "1st Tab", tabContent: "Content for 1st Tab" }, { id: 2, tabText: "2nd Tab", tabContent: "Content for 2nd Tab", icon: "$vuetify" }]` | Array of tab items, each containing an `id`, `tabText`, `tabContent`, and optionally an `icon`. |
| `bgColor`   | String  | `#7367f0`                                                                                                                                                | Background color for the tab component.                                                         |
| `alignTabs` | String  | `start`                                                                                                                                                  | Alignment of the tabs (start, center, end).                                                     |
| `rounded`   | String  | `xs`                                                                                                                                                     | Border radius for the tab component (xs, sm, md, lg, xl).                                       |
| `elevation` | Number  | `2`                                                                                                                                                      | Elevation for the tab component (range from 0 to 24).                                           |
| `density`   | String  | `comfortable`                                                                                                                                            | Density of the tabs (comfortable, compact).                                                     |
| `disabled`  | Boolean | `false`                                                                                                                                                  | Whether the tabs are disabled.                                                                  |
| `width`     | String  | `undefined`                                                                                                                                              | The width of the tabs wrapper.                                                                  |
| `maxWidth`  | String  | `undefined`                                                                                                                                              | The maximum width of the tabs wrapper.                                                          |
| `minWidth`  | String  | `undefined`                                                                                                                                              | The minimum width of the tabs wrapper.                                                          |
| `height`    | String  | `undefined`                                                                                                                                              | The height of the tabs wrapper.                                                                 |
| `maxHeight` | String  | `undefined`                                                                                                                                              | The maximum height of the tabs wrapper.                                                         |
| `minHeight` | String  | `undefined`                                                                                                                                              | The minimum height of the tabs wrapper.                                                         |

### Slots

| Slot Name         | Description                                                                                         |
| ----------------- | --------------------------------------------------------------------------------------------------- |
| `tab-{id}`        | Slot for customizing the tab with the specific `id`. Receives `item` as a scoped slot prop.         |
| `tabContent-{id}` | Slot for customizing the tab content with the specific `id`. Receives `item` as a scoped slot prop. |

### Example Usage

```vue
<template>
	<sb-tab :items="tabs" bgColor="#4caf50" alignTabs="center" rounded="md" elevation="4" density="compact">
		<template #tab-1="{ item }">
			<span>Custom Tab Content for {{ item.tabText }}</span>
		</template>
		<template #tabContent-1="{ item }">
			<div>Custom Content for {{ item.tabContent }}</div>
		</template>
	</sb-tab>
</template>

<script setup>
import { ref } from "vue";

const tabs = ref([
	{ id: 1, tabText: "1st Tab", tabContent: "Content for 1st Tab" },
	{ id: 2, tabText: "2nd Tab", tabContent: "Content for 2nd Tab", icon: "$vuetify" },
]);
</script>
```

## Speed Dial Component

The `sb-speed-deal` component provides a customizable speed dial menu with various items. Extended from Vuetify.

### Props

| Prop       | Type   | Default                | Description                                                              |
| ---------- | ------ | ---------------------- | ------------------------------------------------------------------------ |
| `items`    | Array  | `See Example`          | An array of objects, each representing an item in the speed dial menu.   |
| `position` | Array  | `['bottom', 'center']` | The position of the speed dial menu (horizontal and vertical alignment). |
| `icon`     | String | `'mdi-translate'`      | The icon for the speed dial activator button.                            |
| `color`    | String | `'#7367f0'`            | The color of the speed dial activator button.                            |
| `variant`  | String | `'tonal'`              | The variant style of the activator button.                               |
| `density`  | String | `'comfortable'`        | The density of the activator button.                                     |

### Slots

| Slot Name   | Description                                |
| ----------- | ------------------------------------------ |
| `activator` | Slot for customizing the activator button. |

### Events

The `sb-speed-deal` component emits a 'click' event when any item in the speed dial menu is clicked. The clicked item object is passed as the event payload.

### Example Usage

```vue
<template>
	<sb-speed-deal :items="speedDialItems" :position="['bottom', 'center']" icon="mdi-plus" color="#42b983" @click="handleSpeedDialClick">
		<template v-slot:activator="{ props }">
			<!-- Custom activator button -->
			<v-btn v-bind="{ ...props, color: 'secondary', dark: true }"> Custom Activator </v-btn>
		</template>
	</sb-speed-deal>
</template>

<script setup>
import { ref } from "vue";
import SutorBankSpeedDial from "./components/SutorBankSpeedDial.vue";

const speedDialItems = ref([
	{
		icon: "mdi-pencil",
		variant: "tonal",
		color: "#7367f0",
		onClick: () => console.log("Edit clicked"),
	},
	{
		icon: "mdi-delete",
		variant: "tonal",
		color: "#f04e54",
		onClick: () => console.log("Delete clicked"),
	},
]);

const handleSpeedDialClick = (item) => {
	console.log("Clicked item:", item);
};
</script>
```

## Textbox Component

The `sb-textbox` component is a customizable text field component with various props, computed properties, and reactive data bindings. This component leverages Vuetify's `v-text-field` and offers additional flexibility through props and slots.

### Props

| Prop              | Type             | Default            | Description                                                                   |
| ----------------- | ---------------- | ------------------ | ----------------------------------------------------------------------------- |
| `label`           | String           | `'Text'`           | The label of the text field.                                                  |
| `value`           | [String, Number] | `''`               | The value of the text field.                                                  |
| `variant`         | String           | `'outlined'`       | The variant of the text field (e.g., outlined, underlined, solo, etc.).       |
| `density`         | String           | `'compact'`        | The density of the text field (e.g., comfortable, compact).                   |
| `prependIcon`     | String           | `''`               | The icon to prepend to the text field.                                        |
| `appendIcon`      | String           | `''`               | The icon to append to the text field.                                         |
| `appendInnerIcon` | String           | `''`               | The inner icon to append to the text field.                                   |
| `clearable`       | Boolean          | `false`            | Whether the text field is clearable.                                          |
| `type`            | String           | `'text'`           | The type of the input (e.g., text, password, email).                          |
| `placeholder`     | String           | `'Type something'` | The placeholder text.                                                         |
| `hint`            | String           | `''`               | Hint text to display.                                                         |
| `persistentHint`  | Boolean          | `false`            | Whether the hint text should always be visible.                               |
| `disabled`        | Boolean          | `false`            | Whether the text field is disabled.                                           |
| `readonly`        | Boolean          | `false`            | Whether the text field is read-only.                                          |
| `rules`           | Array            | `[]`               | Array of validation rules.                                                    |
| `prefix`          | String           | `''`               | Prefix text to display inside the text field.                                 |
| `suffix`          | String           | `''`               | Suffix text to display inside the text field.                                 |
| `maxlength`       | [String, Number] | `''`               | Maximum length of the input.                                                  |
| `counter`         | Boolean          | `false`            | Whether to display the character counter.                                     |
| `singleLine`      | Boolean          | `false`            | Whether the text field is single-line.                                        |
| `money`           | Object           | `{}`               | Input mask rules.                                                             |
| `moneyCurrency`   | String           | `''`               | Pre-defined input mask rules for money currencies. `EUR`, `TRY`, `USD`, `GBP` |

### Slots

| Slot Name       | Description                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------- |
| `prepend-inner` | Slot for customizing the inner prepend-inner icon.                                              |
| `prepend`       | Slot for customizing the prepend icon.                                                          |
| `append`        | Slot for customizing the appended icon.                                                         |
| `append-inner`  | Slot for customizing the inner appended-inner icon.                                             |
| `details`       | Slot for customizing the details. Used for displaying messages, hint, error-messages, and more. |
| `label`         | Slot for customizing the label.                                                                 |

### Example Usage

```vue
<template>
	<sb-textbox v-model="inputValue" label="Enter your name" variant="underlined" prependIcon="mdi-account" appendIcon="mdi-check" appendInnerIcon="mdi-information" clearable :rules="[(v) => !!v || 'Name is required']" hint="Enter your full name" persistentHint counter maxlength="50">
		<template #prepend-inner>
			<v-icon>mdi-account</v-icon>
		</template>
		<template #append>
			<v-icon>mdi-check</v-icon>
		</template>
		<template #append-inner>
			<v-icon>mdi-information</v-icon>
		</template>
	</sb-textbox>
</template>

<script setup>
import { ref } from "vue";

const inputValue = ref("");
const money = ref({
	decimal: ",",
	thousands: ".",
	prefix: "€ ",
	suffix: " #",
	precision: 2,
	masked: false,
});
</script>
```

## Combobox Component

The `sb-combobox` component provides a customizable combobox interface for selecting items with various configurations.

### Props

| Prop             | Type    | Default                          | Description                                                                                       |
| ---------------- | ------- | -------------------------------- | ------------------------------------------------------------------------------------------------- |
| `items`          | Array   | `['Item 1', 'Item 2', 'Item 3']` | Array of items to display in the combobox.                                                        |
| `label`          | String  | `'Select'`                       | Label displayed above the combobox.                                                               |
| `placeholder`    | String  | `'Select an item'`               | Placeholder text displayed when no item is selected.                                              |
| `density`        | String  | `'compact'`                      | Density of the combobox ('comfortable' or 'compact').                                             |
| `multiple`       | Boolean | `false`                          | Whether multiple items can be selected.                                                           |
| `chips`          | Boolean | `false`                          | Whether to use chips for selected items display.                                                  |
| `readonly`       | Boolean | `false`                          | Whether the combobox is in readonly mode.                                                         |
| `hint`           | String  | `''`                             | Hint text displayed below the combobox.                                                           |
| `hideSelected`   | Boolean | `false`                          | Whether to hide the selected item(s) from the dropdown list.                                      |
| `variant`        | String  | `'outlined'`                     | Variant style of the combobox ('outlined', 'underlined', 'solo', 'solo-filled', 'solo-inverted'). |
| `persistentHint` | Boolean | `false`                          | Whether the hint text is persistent (visible when the combobox is focused).                       |
| `hideNoData`     | Boolean | `true`                           | Whether to show a message when no matching items are found.                                       |

### Slots

| Slot Name | Description                                                            |
| --------- | ---------------------------------------------------------------------- |
| `no-data` | Slot for custom no-data content. Make sure hide-no-data props is false |

### Example Usage

```vue
<template>
	<sb-combobox
		:items="['Apple', 'Banana', 'Orange', 'Grapes']"
		label="Select Fruit"
		placeholder="Choose a fruit"
		:density="'compact'"
		:multiple="true"
		:chips="true"
		:readonly="false"
		hint="Select multiple fruits"
		:hideSelected="false"
		variant="outlined"
		class="custom-combobox"
		:persistentHint="true"
	></sb-combobox>
</template>

<script setup>
import sb-combobox from "sutorbank-component/SutorBankCombobox.vue";
</script>

<style>
.custom-combobox {
	border: 1px solid #ccc;
	border-radius: 8px;
	padding: 16px;
}
</style>
```

## File Input Component

The `sb-file-input` component allows users to upload files with customizable options.

### Props

| Prop               | Type    | Default            | Description                                                                          |
| ------------------ | ------- | ------------------ | ------------------------------------------------------------------------------------ |
| `rules`            | Array   | `[]`               | Validation rules for file input (array of validation functions).                     |
| `accept`           | String  | `''`               | File types accepted by the input (comma-separated MIME types).                       |
| `variant`          | String  | `'outlined'`       | Variant style of the input (outlined, underlined, solo, solo-filled, solo-inverted). |
| `clearable`        | Boolean | `false`            | Whether the input can be cleared.                                                    |
| `chips`            | Boolean | `false`            | Whether to use chips for selected files.                                             |
| `multiple`         | Boolean | `false`            | Whether multiple files can be selected.                                              |
| `prependInnerIcon` | String  | `''`               | Icon prepended inside the input.                                                     |
| `label`            | String  | `'File'`           | Label text for the input.                                                            |
| `appendInnerIcon`  | String  | `'mdi-attachment'` | Icon appended inside the input.                                                      |
| `loading`          | Boolean | `false`            | Whether the input is in loading state.                                               |
| `color`            | String  | `''`               | Color of the input.                                                                  |
| `disabled`         | Boolean | `false`            | Whether the input is disabled.                                                       |
| `prependIcon`      | String  | `''`               | Icon prepended outside the input.                                                    |
| `appendIcon`       | String  | `''`               | Icon appended outside the input.                                                     |
| `density`          | String  | `'compact'`        | Density of the input (comfortable or compact).                                       |
| `rounded`          | String  | `'xs'`             | Rounded corner size of the input.                                                    |
| `readonly`         | Boolean | `false`            | Whether the input is readonly.                                                       |
| `persistentHint`   | Boolean | `false`            | Whether to show hint persistently.                                                   |
| `hint`             | String  | `''`               | Hint text for the input.                                                             |
| `counter`          | Boolean | `false`            | Whether to show file counter.                                                        |
| `showSize`         | Boolean | `false`            | Whether to show file size.                                                           |

### Example Usage

```vue
<template>
	<sb-file-input
		:rules="fileRules"
		accept=".jpg,.png"
		variant="outlined"
		:clearable="true"
		:chips="true"
		:multiple="true"
		prependIcon="mdi-file"
		appendInnerIcon="mdi-cloud-upload"
		class="custom-file-input"
		density="compact"
		rounded="sm"
		:readonly="false"
		:persistentHint="true"
		hint="Select one or more files to upload."
		:counter="true"
		:showSize="true"
	/>
</template>

<script setup>
import { ref } from "vue";

const fileRules = ref([
	(file) => file.size < 1024 * 1024 * 2, // Max 2MB
	(file) => ["image/jpeg", "image/png"].includes(file.type),
]);
</script>

<style>
.custom-file-input .v-input--outline {
	border-color: var(--bordercolor);
}
.custom-file-input .v-input--outline.v-input--focused .v-input__control .v-input__slot::before {
	color: var(--primary);
}
</style>
```

## Select Component

The `sb-select` component provides a customizable select dropdown with various props and configurations.

### Props

| Prop               | Type    | Default       | Description                                                                         |
| ------------------ | ------- | ------------- | ----------------------------------------------------------------------------------- |
| `items`            | Array   | `See Example` | An array of items to populate the select options.                                   |
| `label`            | String  | `'Select'`    | The label displayed above the select dropdown.                                      |
| `variant`          | String  | `'outlined'`  | The variant of the select (outlined, underlined, solo, solo-filled, solo-inverted). |
| `clearable`        | Boolean | `false`       | Whether the select allows clearing the selected value.                              |
| `chips`            | Boolean | `false`       | Whether to use chips for multiple selections.                                       |
| `multiple`         | Boolean | `false`       | Whether multiple items can be selected.                                             |
| `prependInnerIcon` | String  | `''`          | The icon to prepend inside the select input.                                        |
| `appendInnerIcon`  | String  | `''`          | The icon to append inside the select input.                                         |
| `loading`          | Boolean | `false`       | Whether the select is in a loading state.                                           |
| `color`            | String  | `''`          | The color of the select.                                                            |
| `disabled`         | Boolean | `false`       | Whether the select is disabled.                                                     |
| `prependIcon`      | String  | `''`          | The icon to prepend to the select.                                                  |
| `appendIcon`       | String  | `''`          | The icon to append to the select.                                                   |
| `density`          | String  | `'compact'`   | The density of the select ('comfortable', 'compact').                               |
| `rounded`          | String  | `'xs'`        | The border radius of the select.                                                    |
| `readonly`         | Boolean | `false`       | Whether the select is readonly.                                                     |
| `persistentHint`   | Boolean | `false`       | Whether the hint text is persistent.                                                |
| `returnObject`     | Boolean | `false`       | Whether to return selected items as objects instead of values.                      |
| `singleLine`       | Boolean | `false`       | Whether to display the select as a single line.                                     |
| `hint`             | String  | `''`          | Hint text displayed below the select.                                               |
| `itemTitle`        | String  | `''`          | The property name for the title of items in the select dropdown.                    |
| `itemValue`        | String  | `''`          | The property name for the value of items in the select dropdown.                    |

### Example Usage

```vue
<template>
	<sb-select :items="selectItems" label="Choose an option" variant="outlined" :clearable="true" :chips="false" :multiple="false" color="#42b983" prepend-icon="mdi-format-list-checks" append-icon="mdi-chevron-down" class="mt-4" />
</template>

<script setup>
import { ref } from "vue";

const selectItems = ref(["Option 1", "Option 2", "Option 3"]);
</script>
```

## Number Input Component

The `sb-number-input` component integrates the Vuetify VNumberInput to provide a customizable number input field.

### Props

| Prop             | Type    | Default      | Description                                                                        |
| ---------------- | ------- | ------------ | ---------------------------------------------------------------------------------- |
| `controlVariant` | String  | `'stacked'`  | The variant of the control (stacked, standard, enclosed).                          |
| `rounded`        | String  | `'xs'`       | The rounded corners size of the input (xs, sm, md, lg).                            |
| `label`          | String  | `'Number'`   | The label of the number input field.                                               |
| `variant`        | String  | `'outlined'` | The variant style of the input (outlined, filled, solo, solo-inverted, solo-full). |
| `loading`        | Boolean | `false`      | Whether the number input is in loading state.                                      |
| `color`          | String  | `''`         | The color of the input.                                                            |
| `disabled`       | Boolean | `false`      | Whether the number input is disabled.                                              |
| `prependIcon`    | String  | `''`         | The icon to prepend to the input field.                                            |
| `appendIcon`     | String  | `''`         | The icon to append to the input field.                                             |
| `density`        | String  | `'compact'`  | The density of the input (comfortable, compact).                                   |
| `hideInput`      | Boolean | `false`      | Whether to hide the input field.                                                   |
| `inset`          | Boolean | `false`      | Whether the input is inset.                                                        |
| `reverse`        | Boolean | `false`      | Whether to reverse the input layout.                                               |
| `min`            | Number  | `undefined`  | The minimum value allowed in the input.                                            |
| `max`            | Number  | `undefined`  | The maximum value allowed in the input.                                            |
| `step`           | Number  | `undefined`  | The step value for incrementing/decrementing the input value.                      |

### Example Usage

```vue
<template>
	<sb-number-input
		control-variant="stacked"
		rounded="md"
		label="Quantity"
		variant="filled"
		:loading="false"
		color="#42b983"
		:disabled="false"
		prepend-icon="mdi-minus"
		append-icon="mdi-plus"
		class="custom-number-input"
		density="comfortable"
		:hide-input="false"
		:inset="false"
		:reverse="false"
		:min="0"
		:max="10"
		:step="1"
	/>
</template>

<script setup></script>
```

## OTP Input Component

The `sb-otp-input` component provides an input field for entering OTP (One-Time Password) codes with customizable configurations.

### Props

| Prop              | Type    | Default      | Description                                                     |
| ----------------- | ------- | ------------ | --------------------------------------------------------------- |
| `length`          | Number  | `6`          | The length of the OTP input.                                    |
| `variant`         | String  | `'outlined'` | The variant style of the input (solo, solo-filled, underlined). |
| `backgroundColor` | String  | `''`         | The background color of the OTP input.                          |
| `disabled`        | Boolean | `false`      | Whether the OTP input is disabled.                              |
| `loading`         | Boolean | `false`      | Whether the OTP input is in loading state.                      |
| `focusAll`        | Boolean | `false`      | Whether to focus all OTP input fields.                          |
| `placeholder`     | String  | `'-'`        | The placeholder text for the OTP input fields.                  |
| `divider`         | String  | `''`         | Divider character between OTP input fields.                     |
| `width`           | String  | `''`         | The width of the OTP input.                                     |
| `maxWidth`        | String  | `''`         | The maximum width of the OTP input.                             |
| `minWidth`        | String  | `''`         | The minimum width of the OTP input.                             |
| `height`          | String  | `''`         | The height of the OTP input.                                    |
| `maxHeight`       | String  | `''`         | The maximum height of the OTP input.                            |
| `minHeight`       | String  | `''`         | The minimum height of the OTP input.                            |

### Events

The sb-otp-input component does not emit any events directly.

### Example Usage

```vue
<template>
	<sb-otp-input :length="6" variant="underlined" background-color="#42b983" :disabled="false" class="otp-input" :loading="false" :focus-all="false" placeholder="-" divider="•" width="100%" height="100%" />
</template>

<script setup></script>
```

## Checkbox Component

The `sb-checkbox` component is a customizable checkbox with various props and events.

### Props

| Prop       | Type    | Default    | Description                               |
| ---------- | ------- | ---------- | ----------------------------------------- |
| `label`    | String  | `Check me` | The label displayed next to the checkbox. |
| `checked`  | Boolean | `false`    | Whether the checkbox is checked.          |
| `color`    | String  | `#7367f0`  | The color of the checkbox.                |
| `disabled` | Boolean | `false`    | Whether the checkbox is disabled.         |

### Events

| Event             | Description                                   |
| ----------------- | --------------------------------------------- |
| `@update:checked` | Event emitted when the checked state changes. |

### Example Usage

```vue
<template>
	<sb-checkbox v-model:checked="isChecked" label="Accept Terms" color="primary" :disabled="isDisabled" />
</template>

<script setup>
import { ref } from "vue";
import sb-checkbox from "sutorbank-component/SutorBankCheckbox.vue";

const isChecked = ref(false);
const isDisabled = ref(false);
</script>
```

## Switch Component

The `sb-switch` component is a customizable switch with various props and events. Extended from Vuetify.

### Props

| Prop            | Type    | Default     | Description                                                    |
| --------------- | ------- | ----------- | -------------------------------------------------------------- |
| `label`         | String  | `'Switch'`  | The label text displayed next to the switch.                   |
| `indeterminate` | Boolean | `true`      | Whether the switch is in an indeterminate state.               |
| `disabled`      | Boolean | `false`     | Whether the switch is disabled.                                |
| `loading`       | Boolean | `false`     | Whether the switch is in a loading state.                      |
| `prependIcon`   | String  | `''`        | The icon to prepend to the switch.                             |
| `appendIcon`    | String  | `''`        | The icon to append to the switch.                              |
| `inset`         | Boolean | `false`     | Whether the switch is inset (positioned inside its container). |
| `color`         | String  | `'#7367f0'` | The color of the switch.                                       |
| `falseValue`    | String  | `false`     | The value of the switch when it's unchecked.                   |
| `trueValue`     | String  | `true`      | The value of the switch when it's checked.                     |

### Slots

| Slot Name | Description                    |
| --------- | ------------------------------ |
| `label`   | Slot for custom label content. |

### Events

The sb-switch component does not emit any specific events directly.

### Example Usage

```vue
<template>
	<sb-switch v-model="switchValue" label="Enable Notifications" color="#42b983" class="mt-2" :disabled="isDisabled" />

	<sb-switch v-model="switchValue" :disabled="isDisabled" :indeterminate="false">
		<template v-slot:label>
			Turn on the progress:
			<v-progress-circular :indeterminate="switchValue" class="ms-2" size="24"></v-progress-circular>
		</template>
	</sb-switch>
</template>

<script setup>
import { ref } from "vue";

const switchValue = ref(false);
const isDisabled = ref(false);
</script>
```

## Radio Group Component

The `sb-radio` component allows selection from a group of radio buttons, with support for custom HTML labels and various configurations.

### Props

| Prop     | Type    | Default       | Description                                                                  |
| -------- | ------- | ------------- | ---------------------------------------------------------------------------- |
| `items`  | Array   | `See Example` | An array of objects representing the radio buttons and their configurations. |
| `color`  | String  | `'#7367f0`'   | The color of the radio buttons.                                              |
| `inline` | Boolean | `false`       | Whether the radio buttons should display inline.                             |
| `label`  | String  | `''`          | The label for the radio group.                                               |

### Example Usage

```vue
<template>
	<sb-radio :items="radioItems" color="#42b983" :inline="true" group-label="Select an option" />
</template>

<script setup>
import { ref } from "vue";

const radioItems = ref([
	{ value: 1, label: "Option 1" },
	{
		value: 2,
		slotHTML: '<div>Option 2 <strong class="text-primary">with custom HTML</strong></div>',
	},
]);
</script>
```

## ColorPicker Component

The `sb-color-picker` component allows users to select colors with various configurations.

### Props

| Prop                | Type    | Default | Description                                                                                        |
| ------------------- | ------- | ------- | -------------------------------------------------------------------------------------------------- |
| `disabled`          | Boolean | `false` | Disables the color picker.                                                                         |
| `showSwatches`      | Boolean | `false` | Shows color swatches in the color picker.                                                          |
| `hideCanvas`        | Boolean | `false` | Hides the color canvas in the color picker.                                                        |
| `hideInputs`        | Boolean | `false` | Hides color value input fields in the color picker.                                                |
| `elevation`         | Number  | `2`     | Elevation level of the color picker.                                                               |
| `swatchesMaxHeight` | Number  | `0`     | Maximum height of the color swatches. If set to 0, height is auto-calculated based on swatch size. |
| `width`             | String  | `''`    | Width of the color picker.                                                                         |
| `maxWidth`          | String  | `''`    | Maximum width of the color picker.                                                                 |
| `minWidth`          | String  | `''`    | Minimum width of the color picker.                                                                 |
| `height`            | String  | `''`    | Height of the color picker.                                                                        |
| `maxHeight`         | String  | `''`    | Maximum height of the color picker.                                                                |
| `minHeight`         | String  | `''`    | Minimum height of the color picker.                                                                |

### Example Usage

```vue
<template>
	<ColorPicker :disabled="false" :showSwatches="true" :hideCanvas="false" :hideInputs="false" :elevation="2" :swatchesMaxHeight="0" width="300px" :maxWidth="" :minWidth="" :height="" :maxHeight="" :minHeight=""></ColorPicker>
</template>

<script setup>
import ColorPicker from "sutorbank-component/ColorPicker.vue";
</script>
```

## Date Picker Component

The `sb-date-picker` component encapsulates a date picker with customizable properties for enhanced flexibility.

### Props

| Prop                 | Type    | Default     | Description                                         |
| -------------------- | ------- | ----------- | --------------------------------------------------- |
| `color`              | String  | `'#7367f0'` | Color theme of the date picker.                     |
| `disabled`           | Boolean | `false`     | Whether the date picker is disabled.                |
| `showAdjacentMonths` | Boolean | `false`     | Whether to show adjacent months in the date picker. |
| `elevation`          | Number  | `2`         | Elevation level of the date picker.                 |
| `rounded`            | String  | `''`        | Rounded corner size of the date picker.             |
| `width`              | String  | `''`        | Width of the date picker.                           |
| `maxWidth`           | String  | `''`        | Maximum width of the date picker.                   |
| `minWidth`           | String  | `''`        | Minimum width of the date picker.                   |
| `height`             | String  | `''`        | Height of the date picker.                          |
| `maxHeight`          | String  | `''`        | Maximum height of the date picker.                  |
| `minHeight`          | String  | `''`        | Minimum height of the date picker.                  |
| `min`                | String  | `''`        | Minimum selectable date (format: 'YYYY-MM-DD').     |
| `max`                | String  | `''`        | Maximum selectable date (format: 'YYYY-MM-DD').     |

### Example Usage

```vue
<template>
	<sb-date-picker color="#42a5f5" :disabled="false" :showAdjacentMonths="true" :hideCanvas="false" :hideInputs="false" :elevation="3" class="custom-datepicker" rounded="md" width="300px" maxWidth="500px" minHeight="200px" min="2024-07-01" max="2024-12-31"></sb-date-picker>
</template>

<script setup>
import SutorBankDatePicker from "sutorbank-component/SutorBankDatePicker.vue";
</script>

<style>
.custom-datepicker {
	border: 1px solid #ccc;
	border-radius: 8px;
	padding: 16px;
}
</style>
```

## Table Component

The `sb-table` component is a versatile data table with search functionality, sorting, and customizable headers and items. It supports various props, slots, and events to provide flexibility.

### Props

| Prop                     | Type                                          | Default                                                                                                                                                                                          | Description                                                                                                                                                                                                                        |
| ------------------------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                | Array                                         | `[{ key: 'id', title: 'INVOICE ID' }, { key: 'name', title: 'RECIPIENT NAME' }, { key: 'date', title: 'DATE' }, { key: 'amount', title: 'AMOUNT' }, { key: 'status', title: 'STATUS' }]`         | Array of header objects, each containing a `key` and `title`.                                                                                                                                                                      |
| `items`                  | Array                                         | `[{ id: 1, name: 'Eric Cartman', date: '23 Jun, 2024', amount: '$119.99', status: 'Completed' }, { id: 2, name: 'Kenny McCormick', date: '14 Jun, 2024', amount: '$39.99', status: 'Pending' }]` | Array of item objects to display in the table.                                                                                                                                                                                     |
| `theme`                  | String                                        | `light`                                                                                                                                                                                          | The theme of the table (light, dark).                                                                                                                                                                                              |
| `items-per-page`         | Number                                        | `5`                                                                                                                                                                                              | Number of items to display per page.                                                                                                                                                                                               |
| `sort-by`                | Array                                         | `[]`                                                                                                                                                                                             | Array of sorting options.                                                                                                                                                                                                          |
| `density`                | String                                        | `compact`                                                                                                                                                                                        | Density of the table (comfortable, compact).                                                                                                                                                                                       |
| `hide-default-footer`    | Boolean                                       | `false`                                                                                                                                                                                          | Whether to hide the default footer.                                                                                                                                                                                                |
| `hide-default-header`    | Boolean                                       | `false`                                                                                                                                                                                          | Whether to hide the default header.                                                                                                                                                                                                |
| `hide-default-body`      | Boolean                                       | `false`                                                                                                                                                                                          | Whether to hide the default body.                                                                                                                                                                                                  |
| `height`                 | String                                        | ``                                                                                                                                                                                               | Height of the table.                                                                                                                                                                                                               |
| `fixed-header`           | Boolean                                       | `falseæ                                                                                                                                                                                          | Whether the header should be fixed. Make sure specify height.                                                                                                                                                                      |
| `show-select`            | Boolean                                       | `false`                                                                                                                                                                                          | Whether to show selection checkboxes.                                                                                                                                                                                              |
| `selectableKey`          | String                                        | ``                                                                                                                                                                                               | The key used to determine if an item is selectable.                                                                                                                                                                                |
| `select-strategy`        | String                                        | `page`                                                                                                                                                                                           | The strategy for item selection. `page`, `single`, `all`                                                                                                                                                                           |
| `multi-sort`             | Boolean                                       | `false`                                                                                                                                                                                          | Whether to allow multiple column sorting.                                                                                                                                                                                          |
| `groupBy`                | Boolean                                       | `false`                                                                                                                                                                                          | Whether to enable grouping of items.                                                                                                                                                                                               |
| `loading`                | Boolean                                       | `false`                                                                                                                                                                                          | Whether to show the loading state.                                                                                                                                                                                                 |
| `disable-sort`           | Boolean                                       | `false`                                                                                                                                                                                          | Disables sorting completely.                                                                                                                                                                                                       |
| `expanded`               | string[]                                      | `[]`                                                                                                                                                                                             | Whether the item is expanded or not.                                                                                                                                                                                               |
| `expand-on-click`        | boolean                                       | `false`                                                                                                                                                                                          | Expands item when the row is clicked.                                                                                                                                                                                              |
| `filter-keys`            | string - string[]                             | `undefined`                                                                                                                                                                                      | Array of specific keys to filter on the item.                                                                                                                                                                                      |
| `first-icon`             | string                                        | `'$first'`                                                                                                                                                                                       | First icon.                                                                                                                                                                                                                        |
| `first-page-label`       | string                                        | `'$vuetify.dataFooter.firstPage'`                                                                                                                                                                | Label for first page.                                                                                                                                                                                                              |
| `fixed-footer`           | boolean                                       | `false`                                                                                                                                                                                          | Use the fixed-footer prop together with the height prop to fix the footer to the bottom of the table.                                                                                                                              |
| `hide-no-data`           | boolean                                       | `false`                                                                                                                                                                                          | Hides the menu when there are no options to show. Useful for preventing the menu from opening before results are fetched asynchronously. Also has the effect of opening the menu when the items array changes if not already open. |
| `hover`                  | boolean                                       | `false`                                                                                                                                                                                          | Adds a hover effects to a table rows.                                                                                                                                                                                              |
| `items-per-page-options` | (number - { title: string; value: number })[] | `[ {value: 10, title: '10'}, {value: 25, title: '25'}, {value: 50, title: '50'}, {value: 100, title: '100'}, {value: -1, title: '$vuetify.dataFooter.itemsPerPageAll'} ]`                        | Array of options to show in the items-per-page dropdown.                                                                                                                                                                           |
| `items-per-page-text`    | string                                        | `'$vuetify.dataFooter.itemsPerPageText'`                                                                                                                                                         | Text for items-per-page dropdown.                                                                                                                                                                                                  |
| `item-value`             | SelectItemKey<any>                            | `'id'`                                                                                                                                                                                           | Property on supplied items that contains its value.                                                                                                                                                                                |
| `last-icon`              | string                                        | `'$last'`                                                                                                                                                                                        | Last icon.                                                                                                                                                                                                                         |
| `last-page-label`        | string                                        | `'$vuetify.dataFooter.lastPage'`                                                                                                                                                                 | Label for last page.                                                                                                                                                                                                               |
| `next-icon`              | string                                        | `'$next'`                                                                                                                                                                                        | Next icon.                                                                                                                                                                                                                         |
| `next-page-label`        | string                                        | `'$vuetify.dataFooter.nextPage'`                                                                                                                                                                 | Label for next page.                                                                                                                                                                                                               |
| `page-text`              | string                                        | `'$vuetify.dataFooter.pageText'`                                                                                                                                                                 | Label for page number.                                                                                                                                                                                                             |
| `prev-icon`              | string                                        | `'$prev'`                                                                                                                                                                                        | Previous icon.                                                                                                                                                                                                                     |
| `prev-page-label`        | string                                        | `'$vuetify.dataFooter.prevPage'`                                                                                                                                                                 | Label for previous page.                                                                                                                                                                                                           |
| `return-object`          | boolean                                       | `false`                                                                                                                                                                                          | Changes the selection behavior to return the object directly rather than the value specified with item-value.                                                                                                                      |
| `search`                 | string                                        | `undefined`                                                                                                                                                                                      | Text input used to filter items.                                                                                                                                                                                                   |
| `show-current-page`      | boolean                                       | `false`                                                                                                                                                                                          | Show current page number between prev/next icons.                                                                                                                                                                                  |
| `show-expand`            | boolean                                       | `false`                                                                                                                                                                                          | Shows the expand toggle in default rows.                                                                                                                                                                                           |
| `sort-asc-icon`          | any                                           | `'$sortAsc'`                                                                                                                                                                                     | Icon used for ascending sort button.                                                                                                                                                                                               |
| `sort-desc-icon`         | any                                           | `'$sortDesc'`                                                                                                                                                                                    | Icon used for descending sort button.                                                                                                                                                                                              |
| `sticky`                 | boolean                                       | `false`                                                                                                                                                                                          | Sticks the header to the top of the table.                                                                                                                                                                                         |
| `tag`                    | string                                        | `'div'`                                                                                                                                                                                          | Specify a custom tag used on the root element.                                                                                                                                                                                     |

### Slots

| Slot Name      | Description                                                                                                                 |
| -------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `header.id`    | Slot for customizing the header of a column with key `id`.                                                                  |
| `headers`      | Slot for customizing the headers row. Receives `columns`, `isSorted`, `getSortIcon`, and `toggleSort` as scoped slot props. |
| `item`         | Slot for customizing an item row. Receives `item` as a scoped slot prop.                                                    |
| `item.actions` | Slot for customizing actions for each item. Receives `item` as a scoped slot prop.                                          |
| `group-header` | Slot for customizing the group header. Receives `item`, `columns`, `toggleGroup`, and `isGroupOpen` as scoped slot props.   |
| `top`          | Slot for placing content above the table.                                                                                   |
| `activator`    | Slot for customizing the activator button of a row.                                                                         |
| `expanded-row` | Slot for customizing the expanded row content. Receives `item` and `columns` as scoped slot props.                          |
| `loading`      | Slot for customizing the loading state.                                                                                     |

### Events

| Event              | Description                                    |
| ------------------ | ---------------------------------------------- |
| `@update:selected` | Event emitted when the selected items change.  |
| `@update:sortBy`   | Event emitted when the sorting options change. |

### Example Usage

```vue
<template>
	<sb-table :headers="headers" item-value="name" show-select :items="items" v-model="selectedItems" @update:selected="updateSelectedItems" @update:sortBy="updateSortOptions">
		<template #headers="{ columns, isSorted, getSortIcon, toggleSort }">
			<tr>
				<th v-for="column in columns" :key="column.key" @click="toggleSort(column)">
					{{ column.title }}
					<v-icon v-if="isSorted(column)">{{ getSortIcon(column) }}</v-icon>
				</th>
			</tr>
		</template>

		<template #loading>
			<tr>
				<td colspan="5">Loading...</td>
			</tr>
		</template>
	</sb-table>
</template>

<script setup>
import { ref } from "vue";

const headers = [
	{ key: "id", title: "INVOICE ID" },
	{ key: "name", title: "RECIPIENT NAME" },
	{ key: "date", title: "DATE" },
	{ key: "amount", title: "AMOUNT" },
	{ key: "status", title: "STATUS" },
];

const items = [
	{
		id: 1,
		name: "Eric Cartman",
		date: "23 Jun, 2024",
		amount: "$119.99",
		status: "Completed",
	},
	{
		id: 2,
		name: "Kenny McCormick",
		date: "14 Jun, 2024",
		amount: "$39.99",
		status: "Pending",
	},
];

const selectedItems = ref([]);

function updateSelectedItems(newSelectedItems) {
	selectedItems.value = newSelectedItems;
}

function updateSortOptions(newSortOptions) {
	console.log("Sort options updated:", newSortOptions);
}
</script>
```

## Carousel Component

The `sb-carousel` component is a versatile carousel that can display images, text, or a mix of both. It is built with Vuetify's carousel functionality and offers various customization options.

### Props

| Prop                      | Type    | Default                                                                           | Description                                                                        |
| ------------------------- | ------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `type`                    | String  | `mix`                                                                             | The type of carousel items to display (`image`, `text`, `mix`).                    |
| `images`                  | Array   | `[Array of default image URLs]`                                                   | An array of image URLs for the carousel.                                           |
| `texts`                   | Array   | `['I ❤️ South Park', 'I ❤️ South Park', ...]`                                     | An array of text items for the carousel.                                           |
| `colors`                  | Array   | `['indigo', 'warning', 'pink darken-2', 'red lighten-1', 'deep-purple accent-4']` | An array of colors for the background of text items.                               |
| `items`                   | Array   | `[Array of default items with images, titles, and texts]`                         | An array of objects containing images, titles, and texts for mixed carousel items. |
| `fontSize`                | Number  | `14`                                                                              | The font size of the text in the carousel items.                                   |
| `titleSize`               | Number  | `22`                                                                              | The font size of the title in the carousel items.                                  |
| `textBackground`          | String  | `rgba(115, 103, 240, .8)`                                                         | The background color of the text in mixed carousel items.                          |
| `textColor`               | String  | `#fff`                                                                            | The color of the text in the carousel items.                                       |
| `height`                  | String  | `100%`                                                                            | The height of the carousel.                                                        |
| `showArrows`              | String  | `hover`                                                                           | When to show the navigation arrows (`always`, `hover`, `never`).                   |
| `delimiterIcon`           | String  | `mdi-circle`                                                                      | The icon used for the carousel delimiters.                                         |
| `cycle`                   | Boolean | `true`                                                                            | Whether the carousel should automatically cycle through items.                     |
| `hideDelimiterBackground` | Boolean | `true`                                                                            | Whether to hide the background of the delimiter icons.                             |
| `hideDelimiters`          | Boolean | `false`                                                                           | Whether to hide the delimiter icons.                                               |

### Example Usage

```vue
<template>
	<sb-carousel
		:type="'mix'"
		:height="'400px'"
		:show-arrows="'always'"
		:cycle="true"
		:images="['https://example.com/image1.jpg', 'https://example.com/image2.jpg']"
		:texts="['Text 1', 'Text 2']"
		:colors="['blue', 'green']"
		:items="[
			{
				img: 'https://example.com/image3.jpg',
				title: 'Title 1',
				text: 'Some descriptive text 1',
			},
			{
				img: 'https://example.com/image4.jpg',
				title: 'Title 2',
				text: 'Some descriptive text 2',
			},
		]"
		:font-size="16"
		:title-size="24"
		:text-background="'rgba(0, 0, 0, 0.5)'"
		:text-color="'#ffffff'"
	/>
</template>

<script setup></script>
```

## AvatarMenu Component

The `sb-avatar-menu` component is a dropdown menu activated by clicking on an avatar image. It includes a navigation drawer with a list of items and integrates with Vue Router for navigation.

### Props

| Prop         | Type   | Default                                                                                                                                            | Description                                             |
| ------------ | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| `items`      | Array  | `[{ text: 'Profile', icon: 'mdi-account-outline', href: '/components' }, { text: 'Billing', icon: 'mdi-note-text-outline', href: '/components' }]` | The list of navigation items with text, icon, and href. |
| `image`      | String | `https://upload.wikimedia.org/wikipedia/en/7/77/EricCartman.png`                                                                                   | The URL of the avatar image.                            |
| `name`       | String | `SutorBank`                                                                                                                                       | The name to be displayed in the menu.                   |
| `title`      | String | `Frontend Developer`                                                                                                                               | The title to be displayed in the menu.                  |
| `menuHeight` | Number | `225`                                                                                                                                              | The height of the main menu section.                    |

### Slots

| Slot        | Description                    |
| ----------- | ------------------------------ |
| `activator` | Slot for the avatar activator. |
| `prepend`   | Slot for prepending an icon.   |

### Events

| Event    | Description                                                              |
| -------- | ------------------------------------------------------------------------ |
| `@click` | Event emitted when a menu item is clicked, navigates to the item's href. |

### Example Usage

```vue
<template>
	<sb-avatar-menu :items="menuItems" image="https://example.com/avatar.jpg" name="John Doe" title="Software Engineer" :menuHeight="300" />
</template>

<script setup>
const menuItems = [
	{
		text: "Dashboard",
		icon: "mdi-view-dashboard-outline",
		href: "/dashboard",
	},
	{
		text: "Settings",
		icon: "mdi-cog-outline",
		href: "/settings",
	},
];
</script>
```

## Activity Timeline Component

The `sb-activity-timeline` component displays a list of activities using a timeline format with customizable items and participant avatars.

## Sidebar Component

The sb-side-bar component provides a sidebar navigation with collapsible menu items and customizable appearance.

### Props

| Prop               | Type   | Default     | Description                                                               |
| ------------------ | ------ | ----------- | ------------------------------------------------------------------------- |
| `logo`             | String | `''`        | The URL or path to the main logo image.                                   |
| `miniLogo`         | String | `''`        | The URL or path to the mini version of the logo image.                    |
| `menu`             | Array  | `[]`        | An array of objects representing the menu items and their configurations. |
| `currentPathColor` | String | `'#7367f0'` | The color used to highlight the current active menu item.                 |

### Events

The sb-side-bar component does not emit any events directly.

### Example Usage

```vue
<template>
	<sb-side-bar :logo="'/assets/logo.png'" :mini-logo="'/assets/mini-logo.png'" :menu="sidebarMenu" current-path-color="#42b983" />
</template>

<script setup>
import { ref } from "vue";

const sidebarMenu = ref([
	{
		icon: "mdi-view-dashboard",
		title: "Dashboard",
		href: "/dashboard",
	},
	{
		icon: "mdi-account-group",
		title: "Users",
		href: "/users",
	},
	{
		icon: "mdi-settings",
		title: "Settings",
		href: "/settings",
	},
]);
</script>
```

## sb-char-widget Component

The `sb-char-widget` component is a flexible and customizable chart component using ApexCharts. It provides various props to configure the chart and card appearance, including dynamic data and styles.

### Props

| Prop         | Type   | Default | Description                                                           |
| ------------ | ------ | ------- | --------------------------------------------------------------------- |
| `chartProps` | Object | `{}`    | Configuration object for the ApexCharts chart. This prop is required. |
| `series`     | Array  | `[]`    | Data series for the chart.                                            |
| `bgColor`    | String | `#fff`  | Background color of the card.                                         |
| `elevation`  | Number | `0`     | Elevation of the card (range from 0 to 24).                           |

### `chartProps` Object Properties

| Property                 | Type    | Description                                                  |
| ------------------------ | ------- | ------------------------------------------------------------ |
| `chartId`                | String  | Unique identifier for the chart.                             |
| `chartType`              | String  | Type of the chart (e.g., `line`, `bar`, `pie`).              |
| `toolbarShow`            | Boolean | Whether to show the chart toolbar.                           |
| `fillColors`             | Array   | Colors for filling the chart.                                |
| `fillType`               | String  | Fill type (e.g., `solid`, `gradient`).                       |
| `gradientShade`          | String  | Gradient shade type (e.g., `light`, `dark`).                 |
| `gradientType`           | String  | Gradient type (e.g., `vertical`, `horizontal`).              |
| `gradientShadeIntensity` | Number  | Intensity of the gradient shade.                             |
| `gradientOpacityFrom`    | Number  | Starting opacity for the gradient.                           |
| `gradientOpacityTo`      | Number  | Ending opacity for the gradient.                             |
| `gridShow`               | Boolean | Whether to show the grid.                                    |
| `gridPadding`            | Object  | Padding for the grid.                                        |
| `xaxisLabelsShow`        | Boolean | Whether to show labels on the x-axis.                        |
| `xaxisCategories`        | Array   | Categories for the x-axis.                                   |
| `xaxisAxisBorderShow`    | Boolean | Whether to show the x-axis border.                           |
| `xaxisAxisTicksShow`     | Boolean | Whether to show ticks on the x-axis.                         |
| `dataLabelsEnabled`      | Boolean | Whether to enable data labels.                               |
| `strokeCurve`            | String  | Curve type for the stroke (e.g., `smooth`, `straight`).      |
| `strokeWidth`            | Number  | Width of the stroke.                                         |
| `titleText`              | String  | Title text of the chart.                                     |
| `titleAlign`             | String  | Alignment of the title (e.g., `left`, `center`, `right`).    |
| `titleMargin`            | Number  | Margin for the title.                                        |
| `titleOffsetX`           | Number  | Horizontal offset for the title.                             |
| `titleOffsetY`           | Number  | Vertical offset for the title.                               |
| `titleFloating`          | Boolean | Whether the title is floating.                               |
| `titleStyle`             | Object  | Style object for the title.                                  |
| `subtitleText`           | String  | Subtitle text of the chart.                                  |
| `subtitleAlign`          | String  | Alignment of the subtitle (e.g., `left`, `center`, `right`). |
| `subtitleMargin`         | Number  | Margin for the subtitle.                                     |
| `subtitleOffsetX`        | Number  | Horizontal offset for the subtitle.                          |
| `subtitleOffsetY`        | Number  | Vertical offset for the subtitle.                            |
| `subtitleFloating`       | Boolean | Whether the subtitle is floating.                            |
| `subtitleStyle`          | Object  | Style object for the subtitle.                               |
| `yaxisLabelsShow`        | Boolean | Whether to show labels on the y-axis.                        |
| `legendShow`             | Boolean | Whether to show the legend.                                  |
| `responsiveOptions`      | Array   | Array of responsive options.                                 |

### Example Usage

```vue
<template>
	<sutorbankChart :chartProps="chartProps" :series="series" bgColor="#f5f5f5" :elevation="4" />
</template>

<script setup>
import { ref } from "vue";

const chartProps = ref({
	chartId: "example-chart",
	chartType: "line",
	toolbarShow: true,
	fillColors: ["#7367f0", "#28c76f"],
	fillType: "gradient",
	gradientShade: "dark",
	gradientType: "vertical",
	gradientShadeIntensity: 0.5,
	gradientOpacityFrom: 0.7,
	gradientOpacityTo: 0.3,
	gridShow: true,
	gridPadding: { top: 0, right: 0, bottom: 0, left: 0 },
	xaxisLabelsShow: true,
	xaxisCategories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
	xaxisAxisBorderShow: true,
	xaxisAxisTicksShow: true,
	dataLabelsEnabled: true,
	strokeCurve: "smooth",
	strokeWidth: 2,
	titleText: "Monthly Sales",
	titleAlign: "center",
	titleMargin: 10,
	titleOffsetX: 0,
	titleOffsetY: 0,
	titleFloating: false,
	titleStyle: { fontSize: "18px", fontWeight: "bold", color: "#263238" },
	subtitleText: "For the year 2024",
	subtitleAlign: "center",
	subtitleMargin: 10,
	subtitleOffsetX: 0,
	subtitleOffsetY: 30,
	subtitleFloating: false,
	subtitleStyle: { fontSize: "14px", fontWeight: "regular", color: "#607d8b" },
	yaxisLabelsShow: true,
	legendShow: true,
	responsiveOptions: [
		{
			breakpoint: 1000,
			options: {
				chart: {
					width: "100%",
				},
			},
		},
	],
});

const series = ref([
	{
		name: "Sales",
		data: [30, 40, 45, 50, 49, 60],
	},
]);
</script>
```

# P2

## Tooltip Component

The `sb-tooltip` component is a customizable tooltip with various props and events. Tooltips can wrap any element.

### Props

| Prop          | Type                       | Default     | Description                                                                                                                                                                        |
| ------------- | -------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `text`        | String                     | `Tooltip!`  | The text of tooltip content.                                                                                                                                                       |
| `location`    | String                     | `left`      | The location of the tooltip.                                                                                                                                                       |
| `model-value` | Boolean                    | `false`     | Always show.                                                                                                                                                                       |
| `bgColor`     | String                     | `#424242`   | Background color of the tooltip.                                                                                                                                                   |
| `color`       | String                     | `#fff`      | Text color of the tooltip.                                                                                                                                                         |
| `disabled`    | Boolean                    | `false`     | Whether the tooltip is disabled.                                                                                                                                                   |
| `width`       | String                     | `''`        | The width of the tooltip.                                                                                                                                                          |
| `maxWidth`    | String                     | `''`        | The maximum width of the tooltip.                                                                                                                                                  |
| `minWidth`    | String                     | `''`        | The minimum width of the tooltip.                                                                                                                                                  |
| `height`      | String                     | `''`        | The height of the tooltip.                                                                                                                                                         |
| `maxHeight`   | String                     | `''`        | The maximum height of the tooltip.                                                                                                                                                 |
| `minHeight`   | String                     | `''`        | The minimum height of the tooltip.                                                                                                                                                 |
| `openDelay`   | [String, Number]           | `undefined` | Delay (in ms) after which tooltip opens (when open-on-hover prop is set to true).                                                                                                  |
| `closeDelay`  | [String, Number]           | `undefined` | Delay (in ms) after which menu closes (when open-on-hover prop is set to true).                                                                                                    |
| `openOnClick` | Boolean                    | `false`     | Designates whether the tooltip should open on activator click.                                                                                                                     |
| `openOnFocus` | Boolean                    | `undefined` | Activate the component when the activator is focused.                                                                                                                              |
| `openOnHover` | Boolean                    | `true`      | Designates whether the tooltip should open on activator hover.                                                                                                                     |
| `z-index`     | [String, Number]           | `2000`      | The z-index used for the component.                                                                                                                                                |
| `id`          | String                     | `undefined` | HTML id attribute of the tooltip overlay. If not set, a globally unique id will be used.                                                                                           |
| `attach`      | [String, Boolean, Element] | `false`     | Specifies which DOM element the overlay content should teleport to. Can be a direct element reference, querySelector string, or true to disable teleporting. Uses body by default. |

### Slots

| Slot Name | Description                 |
| --------- | --------------------------- |
| ``        | Slot for tooltip activator. |

### Example Usage

```vue
<template>
	<sb-tooltip text="Another Tooltip" model-value>
		<div class="custom-div">Hover over me!</div>
	</sb-tooltip>
</template>

<script setup>
import SutorBankTooltip from "sutorbank-component/SutorBankTooltip.vue";
</script>
```

## Breadcrumb Component

The `sb-bread-crumbs` component is a customizable breadcrumb with various props and events.

### Props

| Prop          | Type                     | Default     | Description                                                                                                                                                                                                                                                          |
| ------------- | ------------------------ | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `activeClass` | String                   | `undefined` | The class applied to the component when it is in an active state.                                                                                                                                                                                                    |
| `activeColor` | String                   | `undefined` | The applied color when the component is in an active state.                                                                                                                                                                                                          |
| `bgColor`     | String                   | `undefined` | Applies specified color to the control’s background. Used on components that also support the color prop. - supports utility colors (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)). Find a list of built-in classes on the colors page. |
| `color`       | String                   | `undefined` | Applies specified color to the control - supports utility colors (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)). Find a list of built-in classes on the colors page.                                                                    |
| `density`     | String                   | `default`   | Adjusts the vertical height used by the component.                                                                                                                                                                                                                   |
| `disabled`    | Boolean                  | `galse`     | Removes the ability to click or target the component.                                                                                                                                                                                                                |
| `divider`     | String                   | `/`         | Specifies the dividing character between items.                                                                                                                                                                                                                      |
| `icon`        | Any                      | `undefined` | Apply a specific icon using the v-icon.                                                                                                                                                                                                                              |
| `items`       | Array                    | `[]`        | An array of strings or objects used for automatically generating children components..                                                                                                                                                                               |
| `rounded`     | [String, Number Boolean] | `undefined` | Designates the border-radius applied to the component. This can be 0, xs, sm, true, lg, xl, pill, circle, and shaped. Find more information on available border radius classes on the Border Radius page.                                                            |
| `tag`         | String                   | `ul`        | Specify a custom tag used on the root element.                                                                                                                                                                                                                       |
| `tile`        | Boolean                  | `false`     | Removes any applied border-radius from the component.                                                                                                                                                                                                                |

### Slots

| Slot Name | Description                      |
| --------- | -------------------------------- |
| `prepend` | Slot for custom prepend content. |
| `divider` | Slot for divider.                |
| `title`   | Slot for item title.             |

### Example Usage

```vue
<template>
	<sb-bread-crumbs :items="['Foo', 'Bar', 'Fizz']" bg-color="red">
		<template v-slot:title="{ item }">
			{{ item.title.toUpperCase() }}
		</template>
		<template v-slot:divider>
			<v-icon icon="mdi-chevron-right"></v-icon>
		</template>
	</sb-bread-crumbs>
</template>

<script setup>
import SutorBankBreadcrumbs from "sutorbank-component/SutorBankBreadcrumbs.vue";
</script>
```

## Pagination Component

The `sb-pagination` component is a customizable pagination with various props and events.

### Props

| Prop                      | Type                      | Default                                       | Description                                                                                                                                                                                                    |
| ------------------------- | ------------------------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active-color`            | String                    | `undefined`                                   | The applied color when the component is in an active state.                                                                                                                                                    |
| `aria-label`              | String                    | `'$vuetify.pagination.ariaLabel.root'`        | Label for the root element.                                                                                                                                                                                    |
| `border`                  | [String, Number, Boolean] | `false`                                       | Designates the border-radius applied to the component. This can be xs, sm, md, lg, xl.                                                                                                                         |
| `color`                   | String                    | `undefined`                                   | Applies specified color to the selected page button - supports utility colors (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)). Find a list of built-in classes on the colors page. |
| `current-page-aria-label` | String                    | `'$vuetify.pagination.ariaLabel.currentPage'` | Label for the currently selected page.                                                                                                                                                                         |
| `density`                 | String                    | `'default'`                                   | Adjusts the vertical height used by the component ('default', `comfortable`, `compact`).                                                                                                                       |
| `disabled`                | Boolean                   | `false`                                       | Removes the ability to click or target the component.                                                                                                                                                          |
| `elevation`               | [String, Number]          | `undefined`                                   | Designates an elevation applied to the component between 0 and 24.                                                                                                                                             |
| `ellipsis`                | String                    | `'...'`                                       | Text to show between page buttons when truncating the list.                                                                                                                                                    |
| `first-aria-label`        | String                    | `'$vuetify.pagination.ariaLabel.first'`       | Label for the go to first button.                                                                                                                                                                              |
| `first-icon`              | Any                       | `'$first'`                                    | The icon to use for the first button.                                                                                                                                                                          |
| `last-aria-label`         | String                    | `'$vuetify.pagination.ariaLabel.last'`        | Label for the go to last button.                                                                                                                                                                               |
| `last-icon`               | Any                       | `'$last'`                                     | The icon to use for the last button.                                                                                                                                                                           |
| `length`                  | [String, Number]          | `1`                                           | The number of pages.                                                                                                                                                                                           |
| `model-value`             | Number                    | `undefined`                                   | The v-model value of the component. If component supports the multiple prop, this defaults to an empty array.                                                                                                  |
| `next-aria-label`         | String                    | `'$vuetify.pagination.ariaLabel.next'`        | Label for the next button.                                                                                                                                                                                     |
| `next-icon`               | Any                       | `'$next'`                                     | The icon to use for the next button.                                                                                                                                                                           |
| `page-aria-label`         | String                    | `'$vuetify.pagination.ariaLabel.page'`        | Label for each page button.                                                                                                                                                                                    |
| `prev-icon`               | Any                       | `'$prev'`                                     | The icon to use for the prev button.                                                                                                                                                                           |
| `previous-aria-label`     | String                    | `'$vuetify.pagination.ariaLabel.previous'`    | Label for the previous button.                                                                                                                                                                                 |
| `rounded`                 | [String, Number, Boolean] | `undefined`                                   | Designates the border-radius applied to the component. This can be 0, xs, sm, true, lg, xl, pill, circle, and shaped. Find more information on available border radius classes on the Border Radius page.      |
| `show-first-last-page`    | Boolean                   | `false`                                       | Show buttons for going to first and last page.                                                                                                                                                                 |
| `size`                    | [String, Number]          | `'default'`                                   | Sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: x-small, small, default, large, and x-large.                                                      |
| `start`                   | [String, Number]          | `1`                                           | Specify the starting page.                                                                                                                                                                                     |
| `tag`                     | String                    | `'nav'`                                       | Specify a custom tag used on the root element.                                                                                                                                                                 |
| `theme`                   | String                    | `undefined`                                   | Specify a theme for this component and all of its children.                                                                                                                                                    |
| `tile`                    | Boolean                   | `false`                                       | Removes any applied border-radius from the component.                                                                                                                                                          |
| `total-visible`           | [String, Number]          | `undefined`                                   | Specify the total visible pagination numbers.                                                                                                                                                                  |
| `variant`                 | String                    | `'text'`                                      | Applies a distinct style to the component. (`flat`, `elevated`, `tonal`, `outlined`, `text`, `plain`)                                                                                                          |

### Example Usage

```vue
<template>
	<sb-pagination :length="5" v-model="currenctPage"> </sb-pagination>
</template>

<script setup>
import SutorBankPagination from "sutorbank-component/SutorBankPagination.vue";

const currenctPage = ref(1);
</script>
```

## Slider Component

The `sb-slider` component is a customizable slider with various props and events.

### Props

| Prop                | Type                                                                                                                                    | Default        | Description                                                                                                                                                                                                                                                                                                       |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `append-icon`       | Any                                                                                                                                     | `undefined`    | Creates a v-icon component after default content in the append slot.                                                                                                                                                                                                                                              |
| `center-affix`      | Boolean                                                                                                                                 | `true`         | Vertically align appendInner, prependInner, clearIcon and label in the center.                                                                                                                                                                                                                                    |
| `color`             | String                                                                                                                                  | `undefined`    | Applies specified color to the control - supports utility colors (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)). Find a list of built-in classes on the colors page.                                                                                                                 |
| `density`           | String                                                                                                                                  | `'default'`    | Adjusts the vertical height used by the component. ('default', `comfortable`, `compact`)                                                                                                                                                                                                                          |
| `direction`         | String                                                                                                                                  | `'horizontal'` | Changes the direction of the input. (`horizontal`, `vertical`)                                                                                                                                                                                                                                                    |
| `disabled`          | Boolean                                                                                                                                 | `null`         | Removes the ability to click or target the component.                                                                                                                                                                                                                                                             |
| `elevation`         | [String, Number]                                                                                                                        | `2`            | Designates an elevation applied to the component between 0 and 24.                                                                                                                                                                                                                                                |
| `error`             | Boolean                                                                                                                                 | `false`        | Puts the input in a manual error state.                                                                                                                                                                                                                                                                           |
| `error-messages`    | String \| String[]                                                                                                                      | `[]`           | Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the rules prop. This field will not trigger validation.                                                                                                                          |
| `focused`           | Boolean                                                                                                                                 | `false`        | Forces a focused state styling on the component.                                                                                                                                                                                                                                                                  |
| `hide-details`      | Boolean \| 'auto'                                                                                                                       | `false`        | Hides hint and validation errors. When set to auto messages will be rendered only if there’s a message (hint, error message, counter value etc) to display.                                                                                                                                                       |
| `hide-spin-buttons` | Boolean                                                                                                                                 | `false`        | Hides spin buttons on the input when type is set to number.                                                                                                                                                                                                                                                       |
| `hint`              | string                                                                                                                                  | `undefined`    | Displays hint text below the input when focused. Force this always open with the persistent-hint property.                                                                                                                                                                                                        |
| `id`                | string                                                                                                                                  | `undefined`    | Sets the DOM id on the component.                                                                                                                                                                                                                                                                                 |
| `label`             | string                                                                                                                                  | `undefined`    | Sets the text of the v-label or v-field-label component.                                                                                                                                                                                                                                                          |
| `max`               | [String, Number]                                                                                                                        | `100`          | Sets the maximum allowed value.                                                                                                                                                                                                                                                                                   |
| `max-errors`        | [String, Number]                                                                                                                        | `1`            | Control the maximum number of shown errors from validation.                                                                                                                                                                                                                                                       |
| `max-width`         | [String, Number]                                                                                                                        | `undefined`    | Sets the maximum width for the component.                                                                                                                                                                                                                                                                         |
| `messages`          | String \| String[]                                                                                                                      | `[]`           | Displays a list of messages or a single message if using a string.                                                                                                                                                                                                                                                |
| `min`               | [String, Number]                                                                                                                        | `0`            | Sets the minimum allowed value.                                                                                                                                                                                                                                                                                   |
| `min-width`         | [String, Number]                                                                                                                        | `undefined`    | Sets the minimum width for the component.                                                                                                                                                                                                                                                                         |
| `model-value`       | [String, Number]                                                                                                                        | `0`            | The v-model value of the component. If component supports the multiple prop, this defaults to an empty array.                                                                                                                                                                                                     |
| `name`              | string                                                                                                                                  | `undefined`    | Sets the component’s name attribute.                                                                                                                                                                                                                                                                              |
| `persistent-hint`   | Boolean                                                                                                                                 | `false`        | Forces hint to always be visible.                                                                                                                                                                                                                                                                                 |
| `prepend-icon`      | any                                                                                                                                     | `undefined`    | Prepends an icon to the component, uses the same syntax as v-icon.                                                                                                                                                                                                                                                |
| `readonly`          | Boolean                                                                                                                                 | `null`         | Puts input in readonly state.                                                                                                                                                                                                                                                                                     |
| `reverse`           | Boolean                                                                                                                                 | `false`        | Reverses the slider direction.                                                                                                                                                                                                                                                                                    |
| `ripple`            | Boolean                                                                                                                                 | `true`         | Applies the v-ripple directive.                                                                                                                                                                                                                                                                                   |
| `rounded`           | [String, Number, Boolean]                                                                                                               | `undefined`    | Designates the border-radius applied to the component. This can be 0, xs, sm, true, lg, xl, pill, circle, and shaped. Find more information on available border radius classes on the Border Radius page.                                                                                                         |
| `rules`             | ValidationRule[]                                                                                                                        | `[]`           | Accepts a mixed array of types function, boolean and string. Functions pass an input value as an argument and must return either true / false or a string containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) false or is a string. |
| `show-ticks`        | Boolean \| 'always'                                                                                                                     | `false`        | Show track ticks. If true it shows ticks when using slider. If set to 'always' it always shows ticks.                                                                                                                                                                                                             |
| `step`              | [String, Number]                                                                                                                        | `0`            | If greater than 0, sets step interval for ticks.                                                                                                                                                                                                                                                                  |
| `theme`             | String                                                                                                                                  | `undefined`    | Specify a theme for this component and all of its children.                                                                                                                                                                                                                                                       |
| `thumb-color`       | String                                                                                                                                  | `undefined`    | Sets the thumb and thumb label color.                                                                                                                                                                                                                                                                             |
| `thumb-label`       | Boolean \| 'always'                                                                                                                     | `undefined`    | Show thumb label. If true it shows label when using slider. If set to 'always' it always shows label.                                                                                                                                                                                                             |
| `thumb-size`        | [String, Number]                                                                                                                        | `20`           | Controls the size of the thumb label.                                                                                                                                                                                                                                                                             |
| `ticks`             | Number[] \| Record<number, string>                                                                                                      | `undefined`    | Show track ticks. If true it shows ticks when using slider. If set to 'always' it always shows ticks.                                                                                                                                                                                                             |
| `tick-size`         | [String, Number]                                                                                                                        | `2`            | Controls the size of ticks.                                                                                                                                                                                                                                                                                       |
| `tile`              | Boolean                                                                                                                                 | `false`        | Removes any applied border-radius from the component.                                                                                                                                                                                                                                                             |
| `track-color`       | String                                                                                                                                  | `undefined`    | Sets the track’s color.                                                                                                                                                                                                                                                                                           |
| `track-fill-color`  | String                                                                                                                                  | `undefined`    | Sets the track’s fill color.                                                                                                                                                                                                                                                                                      |
| `track-size`        | [String, Number]                                                                                                                        | `4`            | Sets the track’s size (height).                                                                                                                                                                                                                                                                                   |
| `validate-on`       | 'blur' \| 'input' \| 'submit' \| 'blur lazy' \| 'input lazy' \| 'submit lazy' \| 'lazy blur' \| 'lazy input' \| 'lazy submit' \| 'lazy' | `undefined`    | Change what type of event triggers validation to run.                                                                                                                                                                                                                                                             |
| `validation-value`  | Any                                                                                                                                     | `undefined`    | The value used when applying validation rules.                                                                                                                                                                                                                                                                    |
| `width`             | [String, Number]                                                                                                                        | `undefined`    | Sets the width for the component.                                                                                                                                                                                                                                                                                 |

### Slots

| Slot Name | Description                      |
| --------- | -------------------------------- |
| `prepend` | Slot for custom prepend content. |
| `append`  | Slot for custom append content.  |

### Example Usage

```vue
<template>
	<sb-slider v-model="volume" step="1" show-ticks color="orange" track-color="green" thumb-color="red">
		<template v-slot:prepend>
			<v-btn color="#7367f0" icon="mdi-minus" size="small" variant="text" @click="volume--"></v-btn>
		</template>

		<template v-slot:append>
			<v-btn color="#7367f0" icon="mdi-plus" size="small" variant="text" @click="volume++"></v-btn>
		</template>
	</sb-slider>
</template>

<script setup>
import { ref } from "vue";
import SutorBankSlider from "sutorbank-component/SutorBankSlider.vue";
const volume = ref(0);
</script>
```

## Textarea Component

The `sb-text-area` component is a customizable textarea with various props and events.

### Props

| Prop                     | Type                                                                                                                                    | Default          | Description                                                                                                                                                                                                                                                                                                                        |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`                 | boolean                                                                                                                                 | `false`          | Controls the active state of the item. This is typically used to highlight the component.                                                                                                                                                                                                                                          |
| `append-icon`            | any                                                                                                                                     | `undefined`      | Creates a v-icon component after default content in the append slot.                                                                                                                                                                                                                                                               |
| `append-inner-icon`      | any                                                                                                                                     | `undefined`      | Creates a v-icon component in the append-inner slot.                                                                                                                                                                                                                                                                               |
| `autofocus`              | boolean                                                                                                                                 | `false`          | MISSING DESCRIPTION (edit in github)                                                                                                                                                                                                                                                                                               |
| `auto-grow`              | boolean                                                                                                                                 | `false`          | Automatically grow the textarea depending on amount of text.                                                                                                                                                                                                                                                                       |
| `base-color`             | string                                                                                                                                  | `undefined`      | Sets the color of the input when it is not focused.                                                                                                                                                                                                                                                                                |
| `bg-color`               | string                                                                                                                                  | `undefined`      | Applies specified color to the control’s background. Used on components that also support the color prop. - supports utility colors (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)). Find a list of built-in classes on the colors page.                                                               |
| `clearable`              | boolean                                                                                                                                 | `false`          | Allows for the component to be cleared.                                                                                                                                                                                                                                                                                            |
| `clear-icon`             | any                                                                                                                                     | `'$clear'`       | The icon used when the clearable prop is set to true.                                                                                                                                                                                                                                                                              |
| `color`                  | string                                                                                                                                  | `undefined`      | Applies specified color to the control - supports utility colors (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)). Find a list of built-in classes on the colors page.                                                                                                                                  |
| `counter`                | string \| number \| true                                                                                                                | `false`          | Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation.                                                                                                                                                                                                                     |
| `counter-value`          | (value: any) => number                                                                                                                  | `compact`        | Display the input length but do not provide any validation.                                                                                                                                                                                                                                                                        |
| `density`                | String                                                                                                                                  | `'compact'`      | Adjusts the vertical height used by the component. ('default' \| 'comfortable' \| 'compact')                                                                                                                                                                                                                                       |
| `direction`              | 'horizontal' \| 'vertical'                                                                                                              | `'horizontal'`   | Changes the direction of the input.                                                                                                                                                                                                                                                                                                |
| `dirty`                  | boolean                                                                                                                                 | `false`          | Manually apply the dirty state styling.                                                                                                                                                                                                                                                                                            |
| `disabled`               | boolean                                                                                                                                 | `null`           | Removes the ability to click or target the input.                                                                                                                                                                                                                                                                                  |
| `error`                  | boolean                                                                                                                                 | `false`          | Puts the input in a manual error state.                                                                                                                                                                                                                                                                                            |
| `error-messages`         | string \| string[]                                                                                                                      | `[]`             | Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the rules prop. This field will not trigger validation.                                                                                                                                           |
| `flat`                   | boolean                                                                                                                                 | `false`          | Removes box shadow when using a variant with elevation.                                                                                                                                                                                                                                                                            |
| `focused`                | boolean                                                                                                                                 | `false`          | Forces a focused state styling on the component.                                                                                                                                                                                                                                                                                   |
| `hide-details`           | boolean \| 'auto'                                                                                                                       | `false`          | Hides hint and validation errors. When set to auto messages will be rendered only if there’s a message (hint, error message, counter value etc) to display.                                                                                                                                                                        |
| `hide-spin-buttons`      | boolean                                                                                                                                 | `false`          | Hides spin buttons on the input when type is set to number.                                                                                                                                                                                                                                                                        |
| `hint`                   | string                                                                                                                                  | `undefined`      | Displays hint text below the input when focused. Force this always open with the persistent-hint property.                                                                                                                                                                                                                         |
| `id`                     | string                                                                                                                                  | `undefined`      | Sets the DOM id on the component.                                                                                                                                                                                                                                                                                                  |
| `label`                  | string                                                                                                                                  | `Textarea`       | Sets the text of the v-label or v-field-label component.                                                                                                                                                                                                                                                                           |
| `loading`                | string \| boolean                                                                                                                       | `false`          | Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - primary, secondary, success, info, warning, error) or a Boolean which uses the component color (set by color prop - if it’s supported by the component) or the primary color. |
| `max-errors`             | string \| number                                                                                                                        | `1`              | Control the maximum number of shown errors from validation.                                                                                                                                                                                                                                                                        |
| `max-rows`               | string \| number                                                                                                                        | `undefined`      | Specifies the maximum number of row count.                                                                                                                                                                                                                                                                                         |
| `max-width`              | string \| number                                                                                                                        | `undefined`      | Sets the maximum width for the component.                                                                                                                                                                                                                                                                                          |
| `messages`               | string \| string[]                                                                                                                      | `[]`             | Displays a list of messages or a single message if using a string.                                                                                                                                                                                                                                                                 |
| `min-width`              | string \| number                                                                                                                        | `undefined`      | Sets the minimum width for the component.                                                                                                                                                                                                                                                                                          |
| `model-value`            | any                                                                                                                                     | `undefined`      | The v-model value of the component. If component supports the multiple prop, this defaults to an empty array.                                                                                                                                                                                                                      |
| `name`                   | string                                                                                                                                  | `undefined`      | Sets the component’s name attribute.                                                                                                                                                                                                                                                                                               |
| `no-resize`              | boolean                                                                                                                                 | `false`          | Remove resize handle.                                                                                                                                                                                                                                                                                                              |
| `persistent-clear`       | boolean                                                                                                                                 | `false`          | Always show the clearable icon when the input is dirty (By default it only shows on hover).                                                                                                                                                                                                                                        |
| `persistent-counter`     | boolean                                                                                                                                 | `false`          | Forces counter to always be visible.                                                                                                                                                                                                                                                                                               |
| `persistent-hint`        | boolean                                                                                                                                 | `false`          | Forces hint to always be visible.                                                                                                                                                                                                                                                                                                  |
| `persistent-placeholder` | boolean                                                                                                                                 | `false`          | Forces placeholder to always be visible.                                                                                                                                                                                                                                                                                           |
| `placeholder`            | string                                                                                                                                  | `Type something` | Sets the input’s placeholder text.                                                                                                                                                                                                                                                                                                 |
| `prefix`                 | string                                                                                                                                  | `undefined`      | Displays prefix text.                                                                                                                                                                                                                                                                                                              |
| `prepend-icon`           | any                                                                                                                                     | `undefined`      | Prepends an icon to the component, uses the same syntax as v-icon.                                                                                                                                                                                                                                                                 |
| `prepend-inner-icon`     | any                                                                                                                                     | `undefined`      | Creates a v-icon component in the prepend-inner slot.                                                                                                                                                                                                                                                                              |
| `readonly`               | boolean                                                                                                                                 | `null`           | Puts input in readonly state.                                                                                                                                                                                                                                                                                                      |
| `reverse`                | boolean                                                                                                                                 | `false`          | Reverses the orientation.                                                                                                                                                                                                                                                                                                          |
| `rounded`                | string \| number \| boolean                                                                                                             | `undefined`      | Designates the border-radius applied to the component. This can be 0, xs, sm, true, lg, xl, pill, circle, and shaped. Find more information on available border radius classes on the Border Radius page.                                                                                                                          |
| `rows`                   | string \| number                                                                                                                        | `5`              | Default row count.                                                                                                                                                                                                                                                                                                                 |
| `rules`                  | ValidationRule[]                                                                                                                        | `[]`             | Accepts a mixed array of types function, boolean and string. Functions pass an input value as an argument and must return either true / false or a string containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) false or is a string.                  |
| `single-line`            | boolean                                                                                                                                 | `false`          | Label does not move on focus/dirty.                                                                                                                                                                                                                                                                                                |
| `suffix`                 | string                                                                                                                                  | `undefined`      | Displays suffix text.                                                                                                                                                                                                                                                                                                              |
| `theme`                  | string                                                                                                                                  | `undefined`      | Specify a theme for this component and all of its children.                                                                                                                                                                                                                                                                        |
| `tile`                   | boolean                                                                                                                                 | `false`          | Removes any applied border-radius from the component.                                                                                                                                                                                                                                                                              |
| `validate-on`            | 'blur' \| 'input' \| 'submit' \| 'blur lazy' \| 'input lazy' \| 'submit lazy' \| 'lazy blur' \| 'lazy input' \| 'lazy submit' \| 'lazy' | `undefined`      | Change what type of event triggers validation to run.                                                                                                                                                                                                                                                                              |
| `validation-value`       | any                                                                                                                                     | `undefined`      | The value used when applying validation rules.                                                                                                                                                                                                                                                                                     |
| `variant`                | String                                                                                                                                  | `'outlined'`     | Applies a distinct style to the component. ('underlined' \| 'outlined' \| 'filled' \| 'solo' \| 'solo-inverted' \| 'solo-filled' \| 'plain')                                                                                                                                                                                       |
| `width`                  | string \| number                                                                                                                        | `undefined`      | Sets the width for the component.                                                                                                                                                                                                                                                                                                  |

### Example Usage

```vue
<template>
	<sb-text-area bgColor="light-blue" clearable label="Label" prepend-icon="$vuetify" variant="solo-inverted" v-model="value"></sb-text-area>
</template>

<script setup>
import { ref } from "vue";
import SutorBankTextarea from "sutorbank-component/SutorBankTextarea.vue";
const value = ref("");
</script>
```

## Infinite Scroll Component

The `sb-infinite-scroll` component displays a potentially infinite list, by loading more items of the list when scrolling. It supports either vertical or horizontal scrolling.

### Props

| Prop                | Type                                                                                                                | Default                                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `custom-filter`     | FilterFunction                                                                                                      | `undefined`                                                 | Function to filter items.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `custom-key-filter` | unknown                                                                                                             | `undefined`                                                 | Function used on specific keys within the item object. `customFilter` is skipped for columns with `customKeyFilter` specified.                                                                                                                                                                                                                                                                                                                                                                                   |
| `custom-key-sort`   | unknown                                                                                                             | `undefined`                                                 | Function used on specific keys within the item object. `customSort` is skipped for columns with `customKeySort` specified.                                                                                                                                                                                                                                                                                                                                                                                       |
| `expanded`          | string[]                                                                                                            | `[]`                                                        | Array of expanded items. Can be used with `.sync` modifier.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `expand-on-click`   | boolean                                                                                                             | `false`                                                     | Expands item when the row is clicked.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `filter-keys`       | string \| string[]                                                                                                  | `undefined`                                                 | Array of specific keys to filter on the item.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `filter-mode`       | 'every' \| 'some' \| 'union' \| 'intersection'                                                                      | `'intersection'`                                            | Controls how the results of `customFilter` and `customKeyFilter` are combined. <br> **some:** There is at least one match from either the custom filter or the custom key filter. <br> **every:** All columns match either the custom filter or the custom key filter. <br> **union:** There is at least one match from the custom filter, or all columns match the custom key filters. <br> **intersection:** There is at least one match from the custom filter, and all columns match the custom key filters. |
| `group-by`          | SortItem[]                                                                                                          | `[]`                                                        | Changes which item property should be used for grouping items. Currently only supports a single grouping in the format: `group` or `['group']`. When using an array, only the first element is considered. Can be used with `.sync` modifier.                                                                                                                                                                                                                                                                    |
| `items`             | unknown[]                                                                                                           | `[]`                                                        | An array of strings or objects used for automatically generating children components.                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `item-selectable`   | SelectItemKey                                                                                                       | `null`                                                      | Property on supplied items that contains the boolean value indicating if the item is selectable.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `items-per-page`    | string \| number                                                                                                    | `5`                                                         | Changes how many items per page should be visible. Can be used with `.sync` modifier. Setting this prop to `-1` will display all items on the page.                                                                                                                                                                                                                                                                                                                                                              |
| `item-value`        | SelectItemKey                                                                                                       | `'id'`                                                      | Property on supplied items that contains its value.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `loading`           | boolean                                                                                                             | `false`                                                     | If true and no items are provided, then a loading text will be shown.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `model-value`       | any[]                                                                                                               | `[]`                                                        | The `v-model` value of the component. If component supports the multiple prop, this defaults to an empty array.                                                                                                                                                                                                                                                                                                                                                                                                  |
| `multi-sort`        | boolean                                                                                                             | `false`                                                     | If true then one can sort on multiple properties.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `must-sort`         | boolean                                                                                                             | `false`                                                     | If true then one cannot disable sorting, it will always switch between ascending and descending.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `no-filter`         | boolean                                                                                                             | `false`                                                     | Disables all item filtering.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `page`              | string \| number                                                                                                    | `1`                                                         | The current displayed page number (1-indexed).                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `return-object`     | boolean                                                                                                             | `false`                                                     | Changes the selection behavior to return the object directly rather than the value specified with `item-value`.                                                                                                                                                                                                                                                                                                                                                                                                  |
| `search`            | string                                                                                                              | `undefined`                                                 | Text input used to filter items.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `select-strategy`   | 'single' \| 'page' \| 'all'                                                                                         | `'page'`                                                    | Defines the strategy of selecting items in the list. Possible values are: ‘single’ (only one item can be selected at a time), ‘page’ (‘Select all’ button will select only items on the current page), ‘all’ (‘Select all’ button will select all items in the list).                                                                                                                                                                                                                                            |
| `show-expand`       | boolean                                                                                                             | `false`                                                     | Shows the expand icon.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `show-select`       | boolean                                                                                                             | `false`                                                     | Shows the column with checkboxes for selecting items in the list.                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `sort-by`           | SortItem[]                                                                                                          | `[]`                                                        | Changes which item property (or properties) should be used for sort order. Can be used with `.sync` modifier.                                                                                                                                                                                                                                                                                                                                                                                                    |
| `tag`               | string                                                                                                              | `'div'`                                                     | Specify a custom tag used on the root element.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `transition`        | { component: Component; hideOnLeave: boolean } \| string \| boolean \| (TransitionProps & { component: Component }) | `{component: {name: 'fade-transition'}, hideOnLeave: true}` | Sets the component transition. Can be one of the built-in or custom transition.                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `value-comparator`  | (a: any, b: any) => boolean                                                                                         | `undefined`                                                 | Apply a custom comparison algorithm to compare `model-value` and values contains in the `items` prop.                                                                                                                                                                                                                                                                                                                                                                                                            |

### Slots

| Slot Name   | Description                                                                  |
| ----------- | ---------------------------------------------------------------------------- |
| ``          | Default slot for content.                                                    |
| `error`     | The slot is shown when the status is error.                                  |
| `load-more` | The slot shown when the mode is set to manual and the status is not loading. |
| `loading`   | The slot is shown when the mode is set to manual and status is loading.      |
| `empty`     | The slot shown when the status is empty.                                     |

### Example Usage

```vue
<template>
	<sb-infinite-scroll height="300" @load="load">
		<template v-for="(item, index) in items" :key="item">
			<div :class="['pa-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']">Item #{{ item }}</div>
		</template>
		<template v-slot:empty>
			<v-alert type="warning">No more items!</v-alert>
		</template>
	</sb-infinite-scroll>
</template>

<script setup>
import { ref } from "vue";
import SutorBankInfiniteScroll from "sutorbank-component/SutorBankInfiniteScroll.vue";

const items = ref(Array.from({ length: 30 }, (k, v) => v + 1));

async function load({ done }) {
	setTimeout(() => {
		done("empty");
	}, 1000);
}
</script>
```

## Sparkline Component

The `sb-spark-line` component can be used to create simple graphs, like GitHub’s contribution chart.

### Props

| Prop                 | Type                                   | Default     | Description                                                                                                                                                                                       |
| -------------------- | -------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto-draw`          | boolean                                | `false`     | Trace the length of the line when first rendered.                                                                                                                                                 |
| `auto-draw-duration` | string \| number                       | `undefined` | Amount of time (in ms) to run the trace animation.                                                                                                                                                |
| `auto-draw-easing`   | string                                 | `'ease'`    | The easing function to use for the trace animation.                                                                                                                                               |
| `auto-line-width`    | boolean                                | `false`     | Automatically expand bars to use space efficiently.                                                                                                                                               |
| `color`              | string                                 | `undefined` | Applies specified color to the control - supports utility colors (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)). Find a list of built-in classes on the colors page. |
| `fill`               | boolean                                | `false`     | Using the fill property allows you to better customize the look and feel of your sparkline.                                                                                                       |
| `gradient`           | string[]                               | `[]`        | An array of colors to use as a linear-gradient.                                                                                                                                                   |
| `gradient-direction` | 'top' \| 'bottom' \| 'left' \| 'right' | `'top'`     | The direction the gradient should run.                                                                                                                                                            |
| `height`             | string \| number                       | `75`        | Height of the SVG trendline or bars.                                                                                                                                                              |
| `id`                 | string                                 | `undefined` | MISSING DESCRIPTION (edit in github).                                                                                                                                                             |
| `item-value`         | string                                 | `'value'`   | MISSING DESCRIPTION (edit in github).                                                                                                                                                             |
| `labels`             | (number \| { value: number })[]        | `[]`        | An array of string labels that correspond to the same index as its data counterpart.                                                                                                              |
| `label-size`         | string \| number                       | `7`         | The label font size.                                                                                                                                                                              |
| `line-width`         | string \| number                       | `4`         | The thickness of the line, in px.                                                                                                                                                                 |
| `max`                | string \| number                       | `undefined` | MISSING DESCRIPTION (edit in github).                                                                                                                                                             |
| `min`                | string \| number                       | `undefined` | MISSING DESCRIPTION (edit in github).                                                                                                                                                             |
| `model-value`        | (number \| { value: number })[]        | `[]`        | The v-model value of the component. If component supports the multiple prop, this defaults to an empty array.                                                                                     |
| `padding`            | string \| number                       | `8`         | Low smooth or high line-width values may result in cropping, increase padding to compensate.                                                                                                      |
| `show-labels`        | boolean                                | `false`     | Show labels below each data point.                                                                                                                                                                |
| `smooth`             | boolean                                | `false`     | Number of px to use as a corner radius. true defaults to 8, false is 0.                                                                                                                           |
| `type`               | 'trend' \| 'bar'                       | `'trend'`   | Choose between a trendline or bars.                                                                                                                                                               |
| `width`              | string \| number                       | `300`       | Width of the SVG trendline or bars.                                                                                                                                                               |

### Example Usage

```vue
<template>
	<sb-spark-line :auto-line-width="false" :fill="false" :gradient="gradients[5]" gradient-direction="top" :line-width="2" :model-value="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]" :padding="8" :smooth="10 || false" stroke-linecap="round" type="trend" auto-draw />
</template>

<script setup>
import { ref } from "vue";
import SutorBankSparkline from "sutorbank-component/SutorBankSparkline.vue";

const gradients = [["#222"], ["#42b3f4"], ["red", "orange", "yellow"], ["purple", "violet"], ["#00c6ff", "#F0F", "#FF0"], ["#f72047", "#ffd200", "#1feaea"]];
</script>
```

## Alert Component

The `sb-alert` component is used to convey important information to the user through the use of contextual types, icons, and colors.

### Props

| Prop           | Type                                                               | Default            | Description                                                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------ | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `border`       | boolean \| 'top' \| 'end' \| 'bottom' \| 'start'                   | `false`            | Adds a colored border to the component.                                                                                                                                                                   |
| `border-color` | string                                                             | `undefined`        | Specifies the color of the border. Accepts any color value.                                                                                                                                               |
| `closable`     | boolean                                                            | `false`            | Adds a close icon that can hide the alert.                                                                                                                                                                |
| `close-icon`   | any                                                                | `'$close'`         | Change the default icon used for closable alerts.                                                                                                                                                         |
| `close-label`  | string                                                             | `'$vuetify.close'` | Text used for aria-label on closable alerts. Can also be customized globally in Internationalization.                                                                                                     |
| `color`        | string                                                             | `undefined`        | Applies specified color to the control - supports utility colors (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)). Find a list of built-in classes on the colors page.         |
| `density`      | 'default' \| 'comfortable' \| 'compact'                            | `'default'`        | Adjusts the vertical height used by the component.                                                                                                                                                        |
| `elevation`    | string \| number                                                   | `undefined`        | Designates an elevation applied to the component between 0 and 24. You can find more information on the elevation page.                                                                                   |
| `height`       | string \| number                                                   | `undefined`        | Sets the height for the component.                                                                                                                                                                        |
| `icon`         | any                                                                | `null`             | Apply a specific icon using the v-icon component.                                                                                                                                                         |
| `location`     | Anchor                                                             | `undefined`        | Specifies the component’s location. Can combine by using a space separated string.                                                                                                                        |
| `max-height`   | string \| number                                                   | `undefined`        | Sets the maximum height for the component.                                                                                                                                                                |
| `max-width`    | string \| number                                                   | `undefined`        | Sets the maximum width for the component.                                                                                                                                                                 |
| `min-height`   | string \| number                                                   | `undefined`        | Sets the minimum height for the component.                                                                                                                                                                |
| `min-width`    | string \| number                                                   | `undefined`        | Sets the minimum width for the component.                                                                                                                                                                 |
| `model-value`  | boolean                                                            | `true`             | Controls whether the component is visible or hidden.                                                                                                                                                      |
| `position`     | 'static' \| 'relative' \| 'fixed' \| 'absolute' \| 'sticky'        | `undefined`        | Sets the position for the component.                                                                                                                                                                      |
| `prominent`    | boolean                                                            | `false`            | Displays a larger vertically centered icon to draw more attention.                                                                                                                                        |
| `rounded`      | string \| number \| boolean                                        | `undefined`        | Designates the border-radius applied to the component. This can be 0, xs, sm, true, lg, xl, pill, circle, and shaped. Find more information on available border radius classes on the Border Radius page. |
| `tag`          | string                                                             | `'div'`            | Specify a custom tag used on the root element.                                                                                                                                                            |
| `text`         | string                                                             | `'...'`            | Specify content text for the component.                                                                                                                                                                   |
| `theme`        | string                                                             | `undefined`        | Specify a theme for this component and all of its children.                                                                                                                                               |
| `tile`         | boolean                                                            | `false`            | Removes the component’s border-radius.                                                                                                                                                                    |
| `title`        | string                                                             | `undefined`        | Specify a title text for the component.                                                                                                                                                                   |
| `type`         | 'success' \| 'info' \| 'warning' \| 'error'                        | `undefined`        | Create a specialized alert that uses a contextual color and has a pre-defined icon.                                                                                                                       |
| `variant`      | 'text' \| 'flat' \| 'elevated' \| 'tonal' \| 'outlined' \| 'plain' | `'tonal'`          | Applies a distinct style to the component.                                                                                                                                                                |
| `width`        | string \| number                                                   | `undefined`        | Sets the width for the component.                                                                                                                                                                         |

### Slots

| Slot Name | Description                             |
| --------- | --------------------------------------- |
| ``        | The default Vue slot.                   |
| `append`  | Slot for icon at end of alert.          |
| `close`   | Slot for icon used in dismissible prop. |
| `prepend` | Slot for icon at beginning of alert.    |
| `title`   | Slot for the component’s title content. |
| `text`    | Slot for the component’s text content.  |

### Example Usage

```vue
<template>
	<sb-alert closable icon="$vuetify" title="Alert title" text="..." variant="tonal" class="mt-5">
		<template v-slot:close>
			<v-icon>mdi-close</v-icon>
		</template>
	</sb-alert>
</template>

<script setup>
import SutorBankAlert from "sutorbank-component/SutorBankAlert.vue";
</script>
```

## Badge Component

The `sb-badge` component superscripts or subscripts an avatar-like icon or text onto content to highlight information to a user or to just draw attention to a specific element. Content within the badge usually contains numbers or icons.

### Props

| Prop          | Type                                                              | Default                     | Description                                                                                                                                                                                               |
| ------------- | ----------------------------------------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bordered`    | boolean                                                           | `false`                     | Applies a 2px by default and 1.5px border around the badge when using the dot property.                                                                                                                   |
| `color`       | string                                                            | `#7367f0`                   | Applies specified color to the control - supports utility colors (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)). Find a list of built-in classes on the colors page.         |
| `content`     | string \| number                                                  | `undefined`                 | Text content to show in the badge.                                                                                                                                                                        |
| `dot`         | boolean                                                           | `false`                     | Reduce the size of the badge and hide its contents.                                                                                                                                                       |
| `floating`    | boolean                                                           | `false`                     | Elevates the badge above the slotted content.                                                                                                                                                             |
| `icon`        | any                                                               | `undefined`                 | Apply a specific icon using the v-icon component.                                                                                                                                                         |
| `inline`      | boolean                                                           | `false`                     | Moves the badge to be inline with the wrapping element. Supports the usage of the left prop.                                                                                                              |
| `label`       | string                                                            | `'$vuetify.badge'`          | The aria-label used for the badge.                                                                                                                                                                        |
| `location`    | Anchor                                                            | `'top end'`                 | Specifies the component’s location. Can combine by using a space separated string.                                                                                                                        |
| `max`         | string \| number                                                  | `undefined`                 | Sets the maximum number allowed when using the content prop with a number like value. If the content number exceeds the maximum value, a + suffix is added.                                               |
| `model-value` | boolean                                                           | `true`                      | The v-model value of the component. If component supports the multiple prop, this defaults to an empty array.                                                                                             |
| `offset-x`    | string \| number                                                  | `undefined`                 | Offset the badge on the x-axis.                                                                                                                                                                           |
| `offset-y`    | string \| number                                                  | `undefined`                 | Offset the badge on the y-axis.                                                                                                                                                                           |
| `rounded`     | string \| number \| boolean                                       | `undefined`                 | Designates the border-radius applied to the component. This can be 0, xs, sm, true, lg, xl, pill, circle, and shaped. Find more information on available border radius classes on the Border Radius page. |
| `tag`         | string                                                            | `'div'`                     | Specify a custom tag used on the root element.                                                                                                                                                            |
| `text-color`  | string                                                            | `undefined`                 | Applies a specified color to the control text - supports utility colors (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)). Find a list of built-in classes on the colors page.  |
| `theme`       | string                                                            | `undefined`                 | Specify a theme for this component and all of its children.                                                                                                                                               |
| `tile`        | boolean                                                           | `false`                     | Removes any applied border-radius from the component.                                                                                                                                                     |
| `transition`  | string \| boolean \| (TransitionProps & { component: Component }) | `'scale-rotate-transition'` | Sets the component transition. Can be one of the built-in or custom transition.                                                                                                                           |

### Example Usage

```vue
<template>
	<sb-badge :content="48" floating>
		<v-icon icon="$vuetify" size="x-large"></v-icon>
	</sb-badge>
</template>

<script setup>
import SutorBankBadge from "sutorbank-component/SutorBankBadge.vue";
</script>
```

## Banner Component

The `sb-banner` component is used as a middle-interrupting message to the user with one to two actions.

### Props

| Prop                | Type                                                              | Default                     | Description                                                                                                                                                                                                      |
| ------------------- | ----------------------------------------------------------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `avatar`            | string                                                            | `undefined`                 | Designates a specific src image to pass to the thumbnail.                                                                                                                                                        |
| `bg-color`          | string                                                            | `undefined`                 | Applies specified color to the control’s background. Used on components that also support the color prop. - supports utility colors (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)). |
| `border`            | string \| number \| boolean                                       | `false`                     | Designates the border-radius applied to the component. This can be xs, sm, md, lg, xl.                                                                                                                           |
| `color`             | string                                                            | `undefined`                 | Applies specified color to the control - supports utility colors (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)). Find a list of built-in classes on the colors page.                |
| `density`           | 'default' \| 'comfortable' \| 'compact'                           | `'default'`                 | Adjusts the vertical height used by the component.                                                                                                                                                               |
| `elevation`         | string \| number                                                  | `undefined`                 | Designates an elevation applied to the component between 0 and 24. You can find more information on the elevation page.                                                                                          |
| `height`            | string \| number                                                  | `undefined`                 | Sets the height for the component.                                                                                                                                                                               |
| `icon`              | any                                                               | `undefined`                 | Apply a specific icon using the v-icon component.                                                                                                                                                                |
| `lines`             | 'one' \| 'two' \| 'three'                                         | `undefined`                 | The amount of visible lines of text before it truncates.                                                                                                                                                         |
| `location`          | Anchor                                                            | `undefined`                 | Specifies the component’s location. Can combine by using a space separated string.                                                                                                                               |
| `max-height`        | string \| number                                                  | `undefined`                 | Sets the maximum height for the component.                                                                                                                                                                       |
| `max-width`         | string \| number                                                  | `undefined`                 | Sets the maximum width for the component.                                                                                                                                                                        |
| `min-height`        | string \| number                                                  | `undefined`                 | Sets the minimum height for the component.                                                                                                                                                                       |
| `min-width`         | string \| number                                                  | `undefined`                 | Sets the minimum width for the component.                                                                                                                                                                        |
| `mobile`            | boolean                                                           | `null`                      | Applies the mobile banner styles.                                                                                                                                                                                |
| `mobile-breakpoint` | number \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl'           | `undefined`                 | Overrides the display configuration default screen size that the component should be considered in mobile.                                                                                                       |
| `position`          | 'sticky' \| 'static' \| 'relative' \| 'fixed' \| 'absolute'       | `undefined`                 | Sets the position for the component.                                                                                                                                                                             |
| `rounded`           | string \| number \| boolean                                       | `undefined`                 | Designates the border-radius applied to the component. This can be 0, xs, sm, true, lg, xl, pill, circle, and shaped. Find more information on available border radius classes on the Border Radius page.        |
| `stacked`           | boolean                                                           | `false`                     | Forces the banner actions onto a new line. This is not applicable when the banner has lines="one".                                                                                                               |
| `sticky`            | boolean                                                           | `false`                     | Applies position: sticky to the component with top: 0. You can find more information on the MDN documentation for sticky position.                                                                               |
| `tag`               | string                                                            | `'div'`                     | Specify a custom tag used on the root element.                                                                                                                                                                   |
| `text`              | string                                                            | `undefined`                 | Specify content text for the component.                                                                                                                                                                          |
| `theme`             | string                                                            | `undefined`                 | Specify a theme for this component and all of its children.                                                                                                                                                      |
| `tile`              | boolean                                                           | `false`                     | Removes any applied border-radius from the component.                                                                                                                                                            |
| `width`             | string \| number                                                  | `undefined`                 | Sets the width for the component.                                                                                                                                                                                |
| `transition`        | string \| boolean \| (TransitionProps & { component: Component }) | `'scale-rotate-transition'` | Sets the component transition. Can be one of the built-in or custom transition.                                                                                                                                  |

### Slots

| Slot Name | Description                                                   |
| --------- | ------------------------------------------------------------- |
| `actions` | The slot used for the action’s content such as a sb-button. |
| ``        | The default Vue slot                                          |
| `prepend` | Adds an item outside the input and before input content.      |
| `text`    | Slot for the component’s text content.                        |

### Example Usage

```vue
<template>
	<sb-banner color="success" icon="$vuetify" lines="three" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus." stacked>
		<template v-slot:actions>
			<sb-button>Click me</sb-button>
		</template>
	</sb-banner>
</template>

<script setup>
import SutorBankBanner from "sutorbank-component/SutorBankBanner.vue";
</script>
```

## Skeleton Loader Component

The `sb-skeleton-loader` component provides a simple way to display loading placeholders in your application.

### Props

| Prop           | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Default              | Description                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `boilerplate`  | boolean                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `false`              | Remove the loading animation from the skeleton.                                                                                                                                                                                                                                                                                                                                                          |
| `color`        | string                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `undefined`          | Applies specified color to the control - supports utility colors (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)). Find a list of built-in classes on the colors page.                                                                                                                                                                                                        |
| `elevation`    | string \| number                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `undefined`          | Designates an elevation applied to the component between 0 and 24. You can find more information on the elevation page.                                                                                                                                                                                                                                                                                  |
| `height`       | string \| number                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `undefined`          | Sets the height for the component.                                                                                                                                                                                                                                                                                                                                                                       |
| `loading`      | boolean                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `false`              | Applies a loading animation with a on-hover loading cursor. A value of false will only work when there is content in the default slot.                                                                                                                                                                                                                                                                   |
| `loading`-text | string                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `'$vuetify.loading'` | MISSING DESCRIPTION (edit in github).                                                                                                                                                                                                                                                                                                                                                                    |
| `max-height`   | string \| number                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `undefined`          | Sets the maximum height for the component.                                                                                                                                                                                                                                                                                                                                                               |
| `max-width`    | string \| number                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `undefined`          | Sets the maximum width for the component.                                                                                                                                                                                                                                                                                                                                                                |
| `min-height`   | string \| number                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `undefined`          | Sets the minimum height for the component.                                                                                                                                                                                                                                                                                                                                                               |
| `min-width`    | string \| number                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `undefined`          | Sets the minimum width for the component.                                                                                                                                                                                                                                                                                                                                                                |
| `theme`        | string                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `undefined`          | Specify a theme for this component and all of its children.                                                                                                                                                                                                                                                                                                                                              |
| `type`         | 'avatar' \| 'button' \| 'chip' \| 'divider' \| 'heading' \| 'image' \| 'text' \| 'sentences' \| 'paragraph' \| 'ossein' \| 'actions' \| 'article' \| 'card' \| 'card-avatar' \| 'date-picker' \| 'date-picker-options' \| 'date-picker-days' \| 'list-item' \| 'list-item-avatar' \| 'list-item-two-line' \| 'list-item-avatar-two-line' \| 'list-item-three-line' \| 'list-item-avatar-three-line' \| 'subtitle' \| 'table' \| 'table-heading' \| 'table-thead' \| 'table-tbody' \| 'table-row-divider' \| 'table-row' \| 'table-tfoot' \| (string & {}) \| ('avatar' \| 'button' \| 'chip' \| 'divider' \| 'heading' \| 'image' \| 'text' \| 'sentences' \| 'paragraph' \| 'ossein' \| 'actions' \| 'article' \| 'card' \| 'card-avatar' \| 'date-picker' \| 'date-picker-options' \| 'date-picker-days' \| 'list-item' \| 'list-item-avatar' \| 'list-item-two-line' \| 'list-item-avatar-two-line' \| 'list-item-three-line' \| 'list-item-avatar-three-line' \| 'subtitle' \| 'table' \| 'table-heading' \| 'table-thead' \| 'table-tbody' \| 'table-row-divider' \| 'table-row' \| 'table-tfoot' \| (string & {})[])[] | `'ossein'`           | A string delimited list of skeleton components to create such as type="text@3" or type="card, list-item". Will recursively generate a corresponding skeleton from the provided string. Also supports short-hand for multiple elements such as article@3 and paragraph@2 which will generate 3 article skeletons and 2 paragraph skeletons. Please see below for a list of available pre-defined options. |
| `width`        | string \| number                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `undefined`          | Sets the width for the component.                                                                                                                                                                                                                                                                                                                                                                        |

### Example Usage

```vue
<template>
	<sb-skeleton-loader :elevation="10" color="success" type="card" />
</template>

<script setup>
import SutorBankSkeletonLoader from "sutorbank-component/SutorBankSkeletonLoader.vue";
</script>
```

## Snackbar Component

The `sb-snackbar` component provides a simple way to display loading placeholders in your application.

### Props

| Prop                     | Type                                                                                              | Default                   | Description                                                                                                                                                                                                                                        |
| ------------------------ | ------------------------------------------------------------------------------------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `absolute`               | boolean                                                                                           | `false`                   | Applies `position: absolute` to the content element.                                                                                                                                                                                               |
| `activator`              | Element \| 'parent' \| (string & {}) \| ComponentPublicInstance                                   | `undefined`               | Explicitly sets the overlay’s activator.                                                                                                                                                                                                           |
| `activator-props`        | unknown                                                                                           | `{}`                      | Apply custom properties to the activator.                                                                                                                                                                                                          |
| `attach`                 | string \| boolean \| Element                                                                      | `false`                   | Specifies which DOM element the overlay content should teleport to. Can be a direct element reference, querySelector string, or `true` to disable teleporting. Uses `body` by default.                                                             |
| `close-delay`            | string \| number                                                                                  | `undefined`               | Milliseconds to wait before closing component. Only applies to hover and focus events.                                                                                                                                                             |
| `close-on-back`          | boolean                                                                                           | `true`                    | Closes the overlay content when the browser’s back button is pressed or `$router.back()` is called, cancelling the original navigation. Persistent overlays will cancel navigation and animate as if they were clicked outside instead of closing. |
| `close-on-content-click` | boolean                                                                                           | `false`                   | Closes component when you click on its content.                                                                                                                                                                                                    |
| `color`                  | string                                                                                            | `undefined`               | Applies specified color to the control - supports utility colors (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)). Find a list of built-in classes on the colors page.                                                  |
| `contained`              | boolean                                                                                           | `false`                   | Limits the size of the component and scrim to its offset parent. Implies `absolute` and `attach`. (Note: The parent element must have `position: relative`.)                                                                                       |
| `disabled`               | Boolean                                                                                           | `false`                   | Removes the ability to click or target the component.                                                                                                                                                                                              |
| `eager`                  | Boolean                                                                                           | `false`                   | Forces the component’s content to render when it mounts.                                                                                                                                                                                           |
| `height`                 | String \| Number                                                                                  | `undefined`               | Sets the height for the component.                                                                                                                                                                                                                 |
| `location`               | Anchor                                                                                            | `'bottom'`                | Specifies the anchor point for positioning the component, using directional cues to align it either horizontally, vertically, or both.                                                                                                             |
| `location-strategy`      | `'static' \| 'connected' \| LocationStrategyFn`                                                   | `'static'`                | Specifies how the component should position relative to its activator.                                                                                                                                                                             |
| `max-height`             | String \| Number                                                                                  | `undefined`               | Sets the maximum height for the component.                                                                                                                                                                                                         |
| `max-width`              | String \| Number                                                                                  | `undefined`               | Sets the maximum width for the component.                                                                                                                                                                                                          |
| `min-height`             | String \| Number                                                                                  | `undefined`               | Sets the minimum height for the component.                                                                                                                                                                                                         |
| `min-width`              | String \| Number                                                                                  | `undefined`               | Sets the minimum width for the component.                                                                                                                                                                                                          |
| `model-value`            | Boolean                                                                                           | `false`                   | The v-model value of the component. If component supports the multiple prop, this defaults to an empty array.                                                                                                                                      |
| `multi-line`             | Boolean                                                                                           | `false`                   | Gives the snackbar a larger minimum height.                                                                                                                                                                                                        |
| `offset`                 | String \| Number \| Number[]                                                                      | `undefined`               | A single value that offsets content away from the target based upon what side it is on.                                                                                                                                                            |
| `opacity`                | String \| Number                                                                                  | `undefined`               | Sets the overlay opacity.                                                                                                                                                                                                                          |
| `open-delay`             | String \| Number                                                                                  | `undefined`               | Milliseconds to wait before opening component. Only applies to hover and focus events.                                                                                                                                                             |
| `open-on-click`          | Boolean                                                                                           | `undefined`               | Activate the component when the activator is clicked.                                                                                                                                                                                              |
| `open-on-focus`          | Boolean                                                                                           | `undefined`               | Activate the component when the activator is focused.                                                                                                                                                                                              |
| `open-on-hover`          | Boolean                                                                                           | `false`                   | Activate the component when the activator is hovered.                                                                                                                                                                                              |
| `origin`                 | Anchor \| `'auto' \| 'overlap'`                                                                   | `'auto'`                  | Sets the transition origin on the element.                                                                                                                                                                                                         |
| `position`               | `'static' \| 'relative' \| 'fixed' \| 'absolute' \| 'sticky'`                                     | `undefined`               | Sets the position for the component.                                                                                                                                                                                                               |
| `rounded`                | String \| Number \| Boolean                                                                       | `undefined`               | Designates the border-radius applied to the component. This can be 0, xs, sm, true, lg, xl, pill, circle, and shaped. Find more information on available border radius classes on the Border Radius page.                                          |
| `target`                 | Element \| `'parent' \| 'cursor' \| (string & {}) \| ComponentPublicInstance \| [number, number]` | `undefined`               | For `locationStrategy="connected"`, specify an element or array of x,y coordinates that the overlay should position itself relative to. This will be the activator element by default.                                                             |
| `text`                   | String                                                                                            | `undefined`               | Specify content text for the component.                                                                                                                                                                                                            |
| `theme`                  | String                                                                                            | `undefined`               | Specify a theme for this component and all of its children.                                                                                                                                                                                        |
| `tile`                   | Boolean                                                                                           | `false`                   | Removes any applied border-radius from the component.                                                                                                                                                                                              |
| `timeout`                | String \| Number                                                                                  | `5000`                    | Time (in milliseconds) to wait until snackbar is automatically hidden. Use -1 to keep open indefinitely (0 in version < 2.3). It is recommended for this number to be between 4000 and 10000. Changes to this property will reset the timeout.     |
| `timer`                  | String \| Boolean                                                                                 | `false`                   | Display a progress bar that counts down until the snackbar closes. Pass a string to set a custom color, otherwise uses info.                                                                                                                       |
| `transition`             | String \| Boolean \| (TransitionProps & { component: Component })                                 | `'v-snackbar-transition'` | Sets the component transition. Can be one of the built in or custom transition.                                                                                                                                                                    |
| `variant`                | `'text' \| 'flat' \| 'elevated' \| 'tonal' \| 'outlined' \| 'plain'`                              | `'elevated'`              | Applies a distinct style to the component.                                                                                                                                                                                                         |
| `vertical`               | Boolean                                                                                           | `false`                   | Stacks snackbar content on top of the actions (button).                                                                                                                                                                                            |
| `width`                  | String \| Number                                                                                  | `undefined`               | Sets the width for the component.                                                                                                                                                                                                                  |
| `z-index`                | String \| Number                                                                                  | `2000`                    | The z-index used for the component.                                                                                                                                                                                                                |

### Example Usage

```vue
<template>
	<sb-snackbar v-model="snackbar" variant="tonal" timeout="2000" :timer="true"> Hello world! </sb-snackbar>

	<sb-button @click="snackbar = !snackbar">Show Snack!</sb-button>
</template>

<script setup>
import { ref } from "vue";
import SutorBankSnackbar from "sutorbank-component/SutorBankSnackbar.vue";

const snackbar = ref(false);
</script>
```

## Rating Component

The `sb-rating` component is a specialized but important piece in building user widgets. Collecting user feedback via ratings is a simple analytic that can provide a lot of feedback to your product or application.

### Props

| Prop                  | Type                                      | Default                          | Description                                                                                                                                                                                       |
| --------------------- | ----------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active-color`        | String                                    | `undefined`                      | The applied color when the component is in an active state.                                                                                                                                       |
| `clearable`           | Boolean                                   | `false`                          | Allows for the component to be cleared by clicking on the current value.                                                                                                                          |
| `color`               | String                                    | `undefined`                      | Applies specified color to the control - supports utility colors (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)). Find a list of built-in classes on the colors page. |
| `density`             | `'default' \| 'comfortable' \| 'compact'` | `'default'`                      | Adjusts the vertical height used by the component.                                                                                                                                                |
| `disabled`            | Boolean                                   | `false`                          | Removes the ability to click or target the component.                                                                                                                                             |
| `empty-icon`          | Any                                       | `$ratingEmpty`                   | The icon displayed when empty.                                                                                                                                                                    |
| `full-icon`           | Any                                       | `$ratingFull`                    | The icon displayed when full.                                                                                                                                                                     |
| `half-increments`     | Boolean                                   | `false`                          | Allows the selection of half increments.                                                                                                                                                          |
| `hover`               | Boolean                                   | `false`                          | Provides visual feedback when hovering over icons.                                                                                                                                                |
| `item-aria-label`     | String                                    | `$vuetify.rating.ariaLabel.item` | Label for each rating item (description missing).                                                                                                                                                 |
| `item-label-position` | String                                    | `'top'`                          | Position of item labels. Accepts 'top' and 'bottom'.                                                                                                                                              |
| `item-labels`         | String[]                                  | `undefined`                      | Array of labels to display next to each item.                                                                                                                                                     |
| `length`              | String \| Number                          | `5`                              | The amount of items to show.                                                                                                                                                                      |
| `model-value`         | String \| Number                          | `0`                              | The v-model value of the component. If component supports the multiple prop, this defaults to an empty array.                                                                                     |
| `name`                | String                                    | `undefined`                      | Sets the component’s name attribute.                                                                                                                                                              |
| `readonly`            | Boolean                                   | `false`                          | Removes all hover effects and pointer events.                                                                                                                                                     |
| `ripple`              | Boolean                                   | `false`                          | Applies the v-ripple directive.                                                                                                                                                                   |
| `size`                | String \| Number                          | `'default'`                      | Sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: x-small, small, default, large, and x-large.                                         |
| `tag`                 | String                                    | `'div'`                          | Specify a custom tag used on the root element.                                                                                                                                                    |
| `theme`               | String                                    | `undefined`                      | Specify a theme for this component and all of its children.                                                                                                                                       |

### Example Usage

```vue
<template>
	<sb-rating :item-labels="itemLabels" density="comfortable" clearable item-label-position="bottom" half-increments length="5" />
</template>

<script setup>
import { ref } from "vue";
import SutorBankRating from "sutorbank-component/SutorBankRating.vue";

const itemLabels = ref(["😞", "", "", "", "😀"]);
</script>
```

## Timeline Component

The `sb-time-line` is useful for stylistically displaying chronological information.

### Props

| Prop             | Type                                      | Default      | Description                                                                     |
| ---------------- | ----------------------------------------- | ------------ | ------------------------------------------------------------------------------- |
| `align`          | `'center' \| 'start'`                     | `'center'`   | Places the timeline dot at the top or center of the timeline item.              |
| `density`        | `'default' \| 'compact' \| 'comfortable'` | `'default'`  | Adjusts the vertical height used by the component.                              |
| `direction`      | `'vertical' \| 'horizontal'`              | `'vertical'` | Display timeline in a vertical or horizontal direction.                         |
| `dot-color`      | String                                    | `undefined`  | Color of the item dot.                                                          |
| `fill-dot`       | Boolean                                   | `false`      | Remove outer border of item dot, making the color fill the entire dot.          |
| `hide-opposite`  | Boolean                                   | `undefined`  | Hide opposite content if it exists.                                             |
| `icon-color`     | String                                    | `undefined`  | Color of the icon.                                                              |
| `justify`        | String                                    | `'auto'`     | Places timeline line at the center or automatically on the left or right side.  |
| `line-color`     | String                                    | `undefined`  | Color of the timeline line.                                                     |
| `line-inset`     | String \| Number                          | `0`          | Specifies the distance between the line and the dot of timeline items.          |
| `line-thickness` | String \| Number                          | `2`          | Thickness of the timeline line.                                                 |
| `side`           | `'start' \| 'end'`                        | `undefined`  | Display all timeline items on one side of the timeline, either before or after. |
| `size`           | String \| Number                          | `'default'`  | Size of the item dot.                                                           |
| `tag`            | String                                    | `'div'`      | Specify a custom tag used on the root element.                                  |
| `theme`          | String                                    | `undefined`  | Specify a theme for this component and all of its children.                     |
| `truncate-line`  | `'start' \| 'end' \| 'both'`              | `undefined`  | Truncate timeline directly at the start or end of the line, or on both ends.    |

### Slots

| Slot Name | Description           |
| --------- | --------------------- |
| ``        | The default Vue slot. |

### Example Usage

```vue
<template>
	<sb-time-line align="start" direction="vertical">
		<sb-time-line-item v-for="(year, i) in years" :key="i" :dot-color="year.color" size="small">
			<template v-slot:opposite>
				<div :class="`pt-1 headline font-weight-bold text-${year.color}`" v-text="year.year"></div>
			</template>
			<div>
				<h2 :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`">Lorem ipsum</h2>
				<div>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</div>
			</div>
		</sb-time-line-item>
	</sb-time-line>
</template>

<script setup>
import { ref } from "vue";
import SutorBankTimeline from "sutorbank-component/SutorBankTimeline.vue";

const years = ref([
	{
		color: "cyan",
		year: "1960",
	},
	{
		color: "green",
		year: "1970",
	},
	{
		color: "pink",
		year: "1980",
	},
	{
		color: "amber",
		year: "1990",
	},
	{
		color: "orange",
		year: "2000",
	},
]);
</script>
```

## Timeline Item Component

The `sb-time-line-item` is sub-component used to display a single timeline item.

### Props

| Prop            | Type                        | Default     | Description                                                                                                             |
| --------------- | --------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------- |
| `density`       | `'default' \| 'compact'`    | `undefined` | Adjusts the vertical height used by the component.                                                                      |
| `dot-color`     | String                      | `undefined` | Color of the item dot.                                                                                                  |
| `elevation`     | String \| Number            | `undefined` | Designates an elevation applied to the component between 0 and 24. You can find more information on the elevation page. |
| `fill-dot`      | Boolean                     | `false`     | Remove outer border of item dot, making the color fill the entire dot.                                                  |
| `height`        | String \| Number            | `undefined` | Sets the height for the component.                                                                                      |
| `hide-dot`      | Boolean                     | `false`     | Hide the timeline item dot.                                                                                             |
| `hide-opposite` | Boolean                     | `undefined` | Hide opposite content if it exists.                                                                                     |
| `icon`          | Any                         | `undefined` | Apply a specific icon to the inside dot using the v-icon component.                                                     |
| `icon-color`    | String                      | `undefined` | Color of the icon.                                                                                                      |
| `line-inset`    | String \| Number            | `undefined` | Specifies the distance between the line and the dot of the item.                                                        |
| `max-height`    | String \| Number            | `undefined` | Sets the maximum height for the component.                                                                              |
| `max-width`     | String \| Number            | `undefined` | Sets the maximum width for the component.                                                                               |
| `min-height`    | String \| Number            | `undefined` | Sets the minimum height for the component.                                                                              |
| `min-width`     | String \| Number            | `undefined` | Sets the minimum width for the component.                                                                               |
| `rounded`       | String \| Number \| Boolean | `undefined` | Designates the border-radius applied to the component. This can be 0, xs, sm, true, lg, xl, pill, circle, and shaped.   |
| `size`          | String \| Number            | `'default'` | Size of the item dot.                                                                                                   |
| `tag`           | String                      | `'div'`     | Specify a custom tag used on the root element.                                                                          |
| `tile`          | Boolean                     | `false`     | Removes any applied border-radius from the component.                                                                   |
| `width`         | String \| Number            | `undefined` | Sets the width for the component.                                                                                       |

### Slots

| Slot Name  | Description                                                                            |
| ---------- | -------------------------------------------------------------------------------------- |
| `icon`     | Insert avatars into dots with use of the icon slot and v-avatar.                       |
| `opposite` | The opposite slot provides an additional layer of customization within your timelines. |

### Example Usage

```vue
<template>
	<sb-time-line align="start" direction="vertical">
		<sb-time-line-item v-for="(year, i) in years" :key="i" :dot-color="year.color" size="small">
			<template v-slot:opposite>
				<div :class="`pt-1 headline font-weight-bold text-${year.color}`" v-text="year.year"></div>
			</template>
			<div>
				<h2 :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`">Lorem ipsum</h2>
				<div>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</div>
			</div>
		</sb-time-line-item>
	</sb-time-line>
</template>

<script setup>
import { ref } from "vue";
import SutorbankTimeline from "sutorbank-component/SutorbankTimeline.vue";

const years = ref([
	{
		color: "cyan",
		year: "1960",
	},
	{
		color: "green",
		year: "1970",
	},
	{
		color: "pink",
		year: "1980",
	},
	{
		color: "amber",
		year: "1990",
	},
	{
		color: "orange",
		year: "2000",
	},
]);
</script>
```

## Hover Component

The `sb-hover` component provides a simple interface for handling hover states for any component.

### Props

| Prop          | Type             | Default     | Description                                                                                                   |
| ------------- | ---------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `close-delay` | String \| Number | `undefined` | Milliseconds to wait before closing component. Only applies to hover and focus events.                        |
| `disabled`    | Boolean          | `false`     | Removes hover functionality.                                                                                  |
| `model-value` | Boolean          | `null`      | The v-model value of the component. If component supports the multiple prop, this defaults to an empty array. |
| `open-delay`  | String \| Number | `undefined` | Milliseconds to wait before opening component. Only applies to hover and focus events.                        |

### Slots

| Slot Name | Description                                   |
| --------- | --------------------------------------------- |
| `default` | The default Vue slot. Recives (`isHovering`). |

### Example Usage

```vue
<template>
	<sb-hover>
		<template v-slot:default="{ isHovering, ...props }">
			<sb-card v-bind="props" :color="isHovering ? 'primary' : undefined" title="Hover over me" text="Lorem ipsum dolor sit amet consectetur adipisicing elit."></sb-card>
		</template>
	</sb-hover>
</template>

<script setup>
import SutorBankHover from "sutorbank-component/SutorBankHover.vue";
import SutorBankCard from "sutorbank-component/SutorBankCard.vue";
</script>
```

## Progress Circular Component

The `sb-progress-circular` component is used to convey data circularly to users. It also can be put into an indeterminate state to portray loading.

### Props

| Prop            | Type                          | Default     | Description                                                                                                                                                                                                                                                          |
| --------------- | ----------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bg-color`      | String                        | `undefined` | Applies specified color to the control’s background. Used on components that also support the color prop. - supports utility colors (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)). Find a list of built-in classes on the colors page. |
| `color`         | String                        | `#7367f0`   | Applies specified color to the control - supports utility colors (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)). Find a list of built-in classes on the colors page.                                                                    |
| `indeterminate` | Boolean \| `'disable-shrink'` | `false`     | Constantly animates, use when loading progress is unknown. If set to the string 'disable-shrink' it will use a simpler animation that does not run on the main thread.                                                                                               |
| `model-value`   | String \| Number              | `0`         | The percentage value for current progress.                                                                                                                                                                                                                           |
| `rotate`        | String \| Number              | `0`         | Rotates the circle start point in degrees.                                                                                                                                                                                                                           |
| `size`          | String \| Number              | `'default'` | Sets the diameter of the circle in pixels.                                                                                                                                                                                                                           |
| `tag`           | String                        | `'div'`     | Specify a custom tag used on the root element.                                                                                                                                                                                                                       |
| `theme`         | String                        | `undefined` | Specify a theme for this component and all of its children.                                                                                                                                                                                                          |
| `width`         | String \| Number              | `4`         | Sets the stroke of the circle in pixels.                                                                                                                                                                                                                             |

### Slots

| Slot Name | Description                                                                  |
| --------- | ---------------------------------------------------------------------------- |
| `default` | The default Vue slot. Slot can be used to replace the text inside the loader |

### Example Usage

```vue
<template>
	<sb-progress-circular :model-value="50" :rotate="360" :size="100" :width="8" color="teal">
		<template v-slot:default>
			<span class="text-caption">50%</span>
		</template>
	</sb-progress-circular>
</template>

<script setup>
import SutorBankProgressCircular from "sutorbank-component/SutorBankProgressCircular.vue";
</script>
```

## Progress Linear Component

The `sb-progress-linear` component is used to convey data visually to users. It supports both indeterminate amounts, such as loading or processing, and finite amounts of progress (including separate buffer values).

### Props

| Prop             | Type                        | Default     | Description                                                                                                                                                                                                                                                          |
| ---------------- | --------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `absolute`       | boolean                     | `false`     | Applies `position: absolute` to the component.                                                                                                                                                                                                                       |
| `active`         | boolean                     | `true`      | Reduce the height to 0, hiding component.                                                                                                                                                                                                                            |
| `bg-color`       | string                      | `undefined` | Applies specified color to the control’s background. Used on components that also support the color prop. - supports utility colors (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)). Find a list of built-in classes on the colors page. |
| `bg-opacity`     | string \| number            | `undefined` | Background opacity, if null it defaults to 0.3 if background color is not specified or 1 otherwise.                                                                                                                                                                  |
| `buffer-color`   | string                      | `undefined` | Sets the color of the buffer bar.                                                                                                                                                                                                                                    |
| `buffer-opacity` | string \| number            | `undefined` | Set the opacity of the buffer bar.                                                                                                                                                                                                                                   |
| `buffer-value`   | string \| number            | `0`         | The percentage value for the buffer.                                                                                                                                                                                                                                 |
| `clickable`      | boolean                     | `false`     | Clicking on the progress track will automatically set the value.                                                                                                                                                                                                     |
| `color`          | string                      | `#7367f0`   | Applies specified color to the control - supports utility colors (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)). Find a list of built-in classes on the colors page.                                                                    |
| `height`         | string \| number            | `4`         | Sets the height for the component.                                                                                                                                                                                                                                   |
| `indeterminate`  | boolean                     | `false`     | Constantly animates, use when loading progress is unknown.                                                                                                                                                                                                           |
| `location`       | Anchor                      | `'top'`     | Specifies the component’s location. Can combine by using a space separated string.                                                                                                                                                                                   |
| `max`            | string \| number            | `100`       | Sets the maximum value the progress can reach.                                                                                                                                                                                                                       |
| `model-value`    | string \| number            | `0`         | The v-model value of the component. If component supports the multiple prop, this defaults to an empty array.                                                                                                                                                        |
| `opacity`        | string \| number            | `undefined` | Set the opacity of the progress bar.                                                                                                                                                                                                                                 |
| `reverse`        | boolean                     | `false`     | Displays reversed progress (right to left in LTR mode and left to right in RTL).                                                                                                                                                                                     |
| `rounded`        | string \| number \| boolean | `undefined` | Designates the border-radius applied to the component. This can be 0, xs, sm, true, lg, xl, pill, circle, and shaped. Find more information on available border radius classes on the Border Radius page.                                                            |
| `rounded-bar`    | boolean                     | `false`     | Applies a border radius to the progress bar.                                                                                                                                                                                                                         |
| `stream`         | boolean                     | `false`     | An alternative style for portraying loading that works in tandem with `buffer-value`.                                                                                                                                                                                |
| `striped`        | boolean                     | `false`     | Adds a stripe background to the filled portion of the progress component.                                                                                                                                                                                            |
| `tag`            | string                      | `'div'`     | Specify a custom tag used on the root element.                                                                                                                                                                                                                       |
| `theme`          | string                      | `undefined` | Specify a theme for this component and all of its children.                                                                                                                                                                                                          |
| `tile`           | boolean                     | `false`     | Removes any applied border-radius from the component.                                                                                                                                                                                                                |

### Slots

| Slot Name | Description                                                               |
| --------- | ------------------------------------------------------------------------- |
| `default` | The default Vue slot. Slot can be used to replace the text inside the bar |

### Example Usage

```vue
<template>
	<sb-progress-linear v-model="progress" height="25">
		<strong>{{ Math.ceil(progress) }}%</strong>
	</sb-progress-linear>
</template>

<script setup>
import { ref } from "vue";
import SutorBankProgressLinear from "sutorbank-component/SutorBankProgressLinear.vue";

const progress = ref(50);
</script>
```

## Avatar Component

The `sb-avatar` component is typically used to display circular user profile pictures. This component will allow you to dynamically size and add a border radius of responsive images, icons, and text. When rounded prop set to 0 will display an avatar without border radius.

### Props

| Prop      | Type                                                               | Default     | Description                                                                                                                                                                                               |
| --------- | ------------------------------------------------------------------ | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `color`   | string                                                             | `#7367f0`   | Applies specified color to the control - supports utility colors (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)). Find a list of built-in classes on the colors page.         |
| `density` | 'default' \| 'comfortable' \| 'compact'                            | `'default'` | Adjusts the vertical height used by the component.                                                                                                                                                        |
| `end`     | boolean                                                            | `false`     | Applies margin at the start of the component.                                                                                                                                                             |
| `icon`    | any                                                                | `undefined` | Apply a specific icon using the `v-icon` component.                                                                                                                                                       |
| `image`   | string                                                             | `undefined` | Apply a specific image using `v-img`.                                                                                                                                                                     |
| `rounded` | string \| number \| boolean                                        | `undefined` | Designates the border-radius applied to the component. This can be 0, xs, sm, true, lg, xl, pill, circle, and shaped. Find more information on available border radius classes on the Border Radius page. |
| `size`    | string \| number                                                   | `'default'` | Sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: x-small, small, default, large, and x-large.                                                 |
| `start`   | boolean                                                            | `false`     | Applies margin at the end of the component.                                                                                                                                                               |
| `tag`     | string                                                             | `'div'`     | Specify a custom tag used on the root element.                                                                                                                                                            |
| `text`    | string                                                             | `undefined` | Specify content text for the component.                                                                                                                                                                   |
| `theme`   | string                                                             | `undefined` | Specify a theme for this component and all of its children.                                                                                                                                               |
| `tile`    | boolean                                                            | `false`     | Removes any applied border-radius from the component.                                                                                                                                                     |
| `variant` | 'flat' \| 'text' \| 'elevated' \| 'tonal' \| 'outlined' \| 'plain' | `'flat'`    | Applies a distinct style to the component.                                                                                                                                                                |

### Slots

| Slot Name | Description                                                                     |
| --------- | ------------------------------------------------------------------------------- |
| `default` | The default Vue slot. Slot can be used to replace the content inside the avatar |

### Example Usage

```vue
<template>
	<sb-avatar color="#7367f0" size="25" icon="$vuetify" />
</template>

<script setup>
import SutorBankAvatar from "sutorbank-component/SutorBankAvatar.vue";
</script>
```

## Server Side Table Component

The `sb-serverside-table` component is are used for showing data coming from an API.

### Props

| Prop                     | Type                                                                                                                                                                                        | Default                                                                                                                                                               | Description                                                                                                                                                                                                                                                                                                                        |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cell-props`             | Record<string, any> \| ((data: Pick<ItemKeySlot<any>, 'value' \| 'item' \| 'index' \| 'internalItem' \| 'column'>) => Record<string, any>)                                                  | undefined                                                                                                                                                             | An object of additional props to be passed to each `<td>` in the table body. Also accepts a function that will be called for each cell. If the same prop is defined both here and in cellProps in a headers object, the value from the headers object will be used.                                                                |
| `color`                  | string                                                                                                                                                                                      | undefined                                                                                                                                                             | Applies specified color to the control - supports utility colors (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)). Find a list of built-in classes on the colors page.                                                                                                                                  |
| `custom-key-sort`        | unknown                                                                                                                                                                                     | undefined                                                                                                                                                             | Function used on specific keys within the item object. customSort is skipped for columns with customKeySort specified.                                                                                                                                                                                                             |
| `density`                | 'default' \| 'comfortable' \| 'compact'                                                                                                                                                     | 'default'                                                                                                                                                             | Adjusts the vertical height used by the component.                                                                                                                                                                                                                                                                                 |
| `disable-sort`           | boolean                                                                                                                                                                                     | false                                                                                                                                                                 | Toggles rendering of sort button.                                                                                                                                                                                                                                                                                                  |
| `expanded`               | string[]                                                                                                                                                                                    | []                                                                                                                                                                    | Whether the item is expanded or not.                                                                                                                                                                                                                                                                                               |
| `expand-on-click`        | boolean                                                                                                                                                                                     | false                                                                                                                                                                 | Expands item when the row is clicked.                                                                                                                                                                                                                                                                                              |
| `first-icon`             | any                                                                                                                                                                                         | '$first'                                                                                                                                                              | First icon.                                                                                                                                                                                                                                                                                                                        |
| `first-page-label`       | string                                                                                                                                                                                      | '$vuetify.dataFooter.firstPage'                                                                                                                                       | Label for first page.                                                                                                                                                                                                                                                                                                              |
| `fixed-footer`           | boolean                                                                                                                                                                                     | false                                                                                                                                                                 | Use the fixed-footer prop together with the height prop to fix the footer to the bottom of the table.                                                                                                                                                                                                                              |
| `fixed-header`           | boolean                                                                                                                                                                                     | false                                                                                                                                                                 | Use the fixed-header prop together with the height prop to fix the header to the top of the table.                                                                                                                                                                                                                                 |
| `group-by`               | SortItem[]                                                                                                                                                                                  | []                                                                                                                                                                    | Defines the grouping of the table items.                                                                                                                                                                                                                                                                                           |
| `header-props`           | unknown                                                                                                                                                                                     | undefined                                                                                                                                                             | MISSING DESCRIPTION (edit in github)                                                                                                                                                                                                                                                                                               |
| `headers`                | { readonly key?: 'data-table-group' \| 'data-table-select' \| 'data-table-expand' \| (string & {}) \| undefined readonly value?: SelectItemKey<Record<string, any>> readonly title?: string | An array of objects that each describe a header column.                                                                                                               |
| `height`                 | string \| number                                                                                                                                                                            | undefined                                                                                                                                                             | Use the height prop to set the height of the table.                                                                                                                                                                                                                                                                                |
| `hide-default-body`      | boolean                                                                                                                                                                                     | false                                                                                                                                                                 | MISSING DESCRIPTION (edit in github)                                                                                                                                                                                                                                                                                               |
| `hide-default-footer`    | boolean                                                                                                                                                                                     | false                                                                                                                                                                 | MISSING DESCRIPTION (edit in github)                                                                                                                                                                                                                                                                                               |
| `hide-default-header`    | boolean                                                                                                                                                                                     | false                                                                                                                                                                 | MISSING DESCRIPTION (edit in github)                                                                                                                                                                                                                                                                                               |
| `hide-no-data`           | boolean                                                                                                                                                                                     | false                                                                                                                                                                 | Hides the menu when there are no options to show. Useful for preventing the menu from opening before results are fetched asynchronously. Also has the effect of opening the menu when the items array changes if not already open.                                                                                                 |
| `hover`                  | boolean                                                                                                                                                                                     | false                                                                                                                                                                 | Will add a hover effect to a table’s row when the mouse is over it.                                                                                                                                                                                                                                                                |
| `items`                  | any[]                                                                                                                                                                                       | []                                                                                                                                                                    | An array of strings or objects used for automatically generating children components.                                                                                                                                                                                                                                              |
| `item-selectable`        | SelectItemKey<any>                                                                                                                                                                          | null                                                                                                                                                                  | Property on supplied items that indicates whether the item is selectable.                                                                                                                                                                                                                                                          |
| `items-length`           | string \| number                                                                                                                                                                            | undefined                                                                                                                                                             | Number of all items.                                                                                                                                                                                                                                                                                                               |
| `items-per-page`         | string \| number                                                                                                                                                                            | 10                                                                                                                                                                    | The number of items to display on each page.                                                                                                                                                                                                                                                                                       |
| `items-per-page-options` | (number \| { title: string; value: number })[]                                                                                                                                              | [{value: 10, title: '10'}, {value: 25, title: '25'}, {value: 50, title: '50'}, {value: 100, title: '100'}, {value: -1, title: '$vuetify.dataFooter.itemsPerPageAll'}] | Array of options to show in the items-per-page dropdown.                                                                                                                                                                                                                                                                           |
| `items-per-page-text`    | string                                                                                                                                                                                      | '$vuetify.dataFooter.itemsPerPageText'                                                                                                                                | Text for items-per-page dropdown.                                                                                                                                                                                                                                                                                                  |
| `item-value`             | SelectItemKey<any>                                                                                                                                                                          | 'id'                                                                                                                                                                  | Property on supplied items that contains its value.                                                                                                                                                                                                                                                                                |
| `last-icon`              | any                                                                                                                                                                                         | '$last'                                                                                                                                                               | Last icon.                                                                                                                                                                                                                                                                                                                         |
| `last-page-label`        | string                                                                                                                                                                                      | '$vuetify.dataFooter.lastPage'                                                                                                                                        | Label for last page.                                                                                                                                                                                                                                                                                                               |
| `loading`                | string \| boolean                                                                                                                                                                           | false                                                                                                                                                                 | Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - primary, secondary, success, info, warning, error) or a Boolean which uses the component color (set by color prop - if it’s supported by the component) or the primary color. |
| `loading-text`           | string                                                                                                                                                                                      | '$vuetify.dataIterator.loadingText'                                                                                                                                   | Text shown when the data is loading.                                                                                                                                                                                                                                                                                               |
| `mobile`                 | boolean                                                                                                                                                                                     | false                                                                                                                                                                 | Determines the display mode of the component. If true, the component will be displayed in mobile mode. If false, the component will be displayed in desktop mode. If null, will be based on the current mobile-breakpoint.                                                                                                         |
| `mobile-breakpoint`      | number \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl'                                                                                                                                     | undefined                                                                                                                                                             | Overrides the display configuration default screen size that the component should be considered in mobile.                                                                                                                                                                                                                         |
| `model-value`            | unknown                                                                                                                                                                                     | []                                                                                                                                                                    | The v-model value of the component. If component supports the multiple prop, this defaults to an empty array.                                                                                                                                                                                                                      |
| `multi-sort`             | boolean                                                                                                                                                                                     | false                                                                                                                                                                 | Allows sorting by multiple columns.                                                                                                                                                                                                                                                                                                |
| `must-sort`              | boolean                                                                                                                                                                                     | false                                                                                                                                                                 | Forces sorting on the column(s).                                                                                                                                                                                                                                                                                                   |
| `next-icon`              | any                                                                                                                                                                                         | '$next'                                                                                                                                                               | Next icon.                                                                                                                                                                                                                                                                                                                         |
| `next-page-label`        | string                                                                                                                                                                                      | '$vuetify.dataFooter.nextPage'                                                                                                                                        | Label for next page.                                                                                                                                                                                                                                                                                                               |
| `no-data-text`           | string                                                                                                                                                                                      | '$vuetify.noDataText'                                                                                                                                                 | Text shown when no items are provided to the component.                                                                                                                                                                                                                                                                            |
| `page`                   | string \| number                                                                                                                                                                            | 1                                                                                                                                                                     | The current displayed page number (1-indexed).                                                                                                                                                                                                                                                                                     |
| `page-text`              | string                                                                                                                                                                                      | '$vuetify.dataFooter.pageText'                                                                                                                                        | Label for page number.                                                                                                                                                                                                                                                                                                             |
| `prev-icon`              | any                                                                                                                                                                                         | '$prev'                                                                                                                                                               | Previous icon.                                                                                                                                                                                                                                                                                                                     |
| `prev-page-label`        | string                                                                                                                                                                                      | '$vuetify.dataFooter.prevPage'                                                                                                                                        | Label for previous page.                                                                                                                                                                                                                                                                                                           |
| `return-object`          | boolean                                                                                                                                                                                     | false                                                                                                                                                                 | Changes the selection behavior to return the object directly rather than the value specified with item-value.                                                                                                                                                                                                                      |
| `row-props`              | Record<string, any> \| ((data: Pick<ItemKeySlot<any>, 'item' \| 'index' \| 'internalItem'>) => Record<string, any>)                                                                         | undefined                                                                                                                                                             | An object of additional props to be passed to each `<tr>` in the table body. Also accepts a function that will be called for each row.                                                                                                                                                                                             |
| `search`                 | string                                                                                                                                                                                      | undefined                                                                                                                                                             | Text input used to filter items.                                                                                                                                                                                                                                                                                                   |
| `select-strategy`        | 'page' \| 'single' \| 'all'                                                                                                                                                                 | 'page'                                                                                                                                                                | Defines the strategy of selecting items in the list. Possible values are: ‘single’ (only one item can be selected at a time), ‘page’ (‘Select all’ button will select only items on the current page), ‘all’ (‘Select all’ button will select all items in the list).                                                              |
| `show-current-page`      | boolean                                                                                                                                                                                     | false                                                                                                                                                                 | Show current page number between prev/next icons.                                                                                                                                                                                                                                                                                  |
| `show-expand`            | boolean                                                                                                                                                                                     | false                                                                                                                                                                 | Shows the expand icon.                                                                                                                                                                                                                                                                                                             |
| `show-select`            | boolean                                                                                                                                                                                     | false                                                                                                                                                                 | Shows the column with checkboxes for selecting items in the list.                                                                                                                                                                                                                                                                  |
| `sort-asc-icon`          | any                                                                                                                                                                                         | '$sortAsc'                                                                                                                                                            | Icon used for ascending sort button.                                                                                                                                                                                                                                                                                               |
| `sort-by`                | SortItem[]                                                                                                                                                                                  | []                                                                                                                                                                    | Array of column keys and sort orders that determines the sort order of the table.                                                                                                                                                                                                                                                  |
| `sort-desc-icon`         | any                                                                                                                                                                                         | '$sortDesc'                                                                                                                                                           | Icon used for descending sort button.                                                                                                                                                                                                                                                                                              |
| `sticky`                 | boolean                                                                                                                                                                                     | false                                                                                                                                                                 | Sticks the header to the top of the table.                                                                                                                                                                                                                                                                                         |
| `tag`                    | string                                                                                                                                                                                      | 'div'                                                                                                                                                                 | Specify a custom tag used on the root element.                                                                                                                                                                                                                                                                                     |
| `theme`                  | string                                                                                                                                                                                      | undefined                                                                                                                                                             | Specify a theme for this component and all of its children.                                                                                                                                                                                                                                                                        |
| `value-comparator`       | (a: any, b: any) => boolean                                                                                                                                                                 | undefined                                                                                                                                                             | Apply a custom comparison algorithm to compare model-value and values contains in the items prop.                                                                                                                                                                                                                                  |
| `width`                  | string \| number                                                                                                                                                                            | undefined                                                                                                                                                             | Sets the width for the component.                                                                                                                                                                                                                                                                                                  |

### Slots

| Slot Name      | Description                                                                                                                 |
| -------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `header.id`    | Slot for customizing the header of a column with key `id`.                                                                  |
| `headers`      | Slot for customizing the headers row. Receives `columns`, `isSorted`, `getSortIcon`, and `toggleSort` as scoped slot props. |
| `item`         | Slot for customizing an item row. Receives `item` as a scoped slot prop.                                                    |
| `item.actions` | Slot for customizing actions for each item. Receives `item` as a scoped slot prop.                                          |
| `group-header` | Slot for customizing the group header. Receives `item`, `columns`, `toggleGroup`, and `isGroupOpen` as scoped slot props.   |
| `top`          | Slot for placing content above the table.                                                                                   |
| `activator`    | Slot for customizing the activator button of a row.                                                                         |
| `expanded-row` | Slot for customizing the expanded row content. Receives `item` and `columns` as scoped slot props.                          |
| `loading`      | Slot for customizing the loading state.                                                                                     |

### Events

| Event                  | Description                                                            |
| ---------------------- | ---------------------------------------------------------------------- |
| `@update:expanded`     | Emits when the expanded property of the options prop is updated.       |
| `@update:groupBy`      | Emits when the group-by property of the options property is updated.   |
| `@update:itemsPerPage` | Emits when the items-per-page property of the options prop is updated. |
| `@update:modelValue`   | Emits when the component’s model changes.                              |
| `@update:options`      | Emits when one of the options properties is updated.                   |
| `@update:page`         | Emits when the page property of the options prop is updated.           |
| `@update:sortBy`       | Emits when the sort-by property of the options prop is updated.        |

### Example Usage

```vue
<template>
	<sb-serverside-table v-model="selectedItems" v-model:items-per-page="itemsPerPage" :headers="headers" :items="serverItems" :items-length="totalItems" :loading="loading" :search="search" item-value="name" show-select @update:options="loadItems"> </sb-serverside-table>
</template>

<script setup>
import { ref } from "vue";

const selectedItems = ref([]);

// Desserts array
const desserts = [
	{
		name: "Frozen Yogurt",
		calories: 159,
		fat: 6.0,
		carbs: 24,
		protein: 4.0,
		iron: "1",
	},
	{
		name: "Jelly bean",
		calories: 375,
		fat: 0.0,
		carbs: 94,
		protein: 0.0,
		iron: "0",
	},
	{
		name: "KitKat",
		calories: 518,
		fat: 26.0,
		carbs: 65,
		protein: 7,
		iron: "6",
	},
	{
		name: "Eclair",
		calories: 262,
		fat: 16.0,
		carbs: 23,
		protein: 6.0,
		iron: "7",
	},
	{
		name: "Gingerbread",
		calories: 356,
		fat: 16.0,
		carbs: 49,
		protein: 3.9,
		iron: "16",
	},
	{
		name: "Ice cream sandwich",
		calories: 237,
		fat: 9.0,
		carbs: 37,
		protein: 4.3,
		iron: "1",
	},
	{
		name: "Lollipop",
		calories: 392,
		fat: 0.2,
		carbs: 98,
		protein: 0,
		iron: "2",
	},
	{
		name: "Cupcake",
		calories: 305,
		fat: 3.7,
		carbs: 67,
		protein: 4.3,
		iron: "8",
	},
	{
		name: "Honeycomb",
		calories: 408,
		fat: 3.2,
		carbs: 87,
		protein: 6.5,
		iron: "45",
	},
	{
		name: "Donut",
		calories: 452,
		fat: 25.0,
		carbs: 51,
		protein: 4.9,
		iron: "22",
	},
];

// FakeAPI for fetching data
const FakeAPI = {
	async fetch({ page, itemsPerPage, sortBy }) {
		return new Promise((resolve) => {
			setTimeout(() => {
				const start = (page - 1) * itemsPerPage;
				const end = start + itemsPerPage;
				const items = desserts.slice();

				if (sortBy.length) {
					const sortKey = sortBy[0].key;
					const sortOrder = sortBy[0].order;
					items.sort((a, b) => {
						const aValue = a[sortKey];
						const bValue = b[sortKey];
						return sortOrder === "desc" ? bValue - aValue : aValue - bValue;
					});
				}

				const paginated = items.slice(start, end);

				resolve({ items: paginated, total: items.length });
			}, 500);
		});
	},
};

// Reactive variables
const itemsPerPage = ref(5);
const headers = ref([
	{
		title: "Dessert (100g serving)",
		align: "start",
		sortable: false,
		key: "name",
	},
	{ title: "Calories", key: "calories", align: "end" },
	{ title: "Fat (g)", key: "fat", align: "end" },
	{ title: "Carbs (g)", key: "carbs", align: "end" },
	{ title: "Protein (g)", key: "protein", align: "end" },
	{ title: "Iron (%)", key: "iron", align: "end" },
]);
const search = ref("");
const serverItems = ref([]);
const loading = ref(true);
const totalItems = ref(0);

// Method to load items
const loadItems = ({ page, itemsPerPage, sortBy }) => {
	loading.value = true;
	FakeAPI.fetch({ page, itemsPerPage, sortBy }).then(({ items, total }) => {
		serverItems.value = items;
		totalItems.value = total;
		loading.value = false;
	});
};
</script>
```
