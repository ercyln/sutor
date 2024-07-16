<template>
	<v-expansion-panels v-bind="computedProps">
		<slot></slot>
	</v-expansion-panels>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
	variant: {
		type: String,
		default: "default",
	},
	rounded: {
		type: String,
		default: "xs",
	},
	bgColor: {
		type: String,
		default: undefined
	},
	color: {
		type: String,
		default: undefined
	}
});

const computedProps = computed(() => {
	const variantOptions = ["default", "accordion", "inset", "popout"];
	const colorOptions = ["red", "blue"];

	return {
		...props,
		variant: variantOptions.includes(props.variant) ? props.variant : "default",
		bgColor: undefined,
		color: colorOptions.includes(props.color) ? props.color : undefined,
	};
});
</script>

<style>

</style>