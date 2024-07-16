<template>
	<v-expansion-panels v-bind="expansionPanelProps">
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
	}
});
const expansionPanelProps = computed(() => {
	const variantOptions = ["default", "accordion", "inset", "popout"];
	return {
		...props,
		variant: variantOptions.includes(props.variant) ? props.variant : "default",
	};
});
</script>

<style>
</style>