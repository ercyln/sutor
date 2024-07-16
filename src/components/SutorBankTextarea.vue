<template>
    <v-textarea v-bind="computedProps" class="sutorbank-textarea"></v-textarea>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    label: {
		type: String,
		default: "Textarea",
	},
	variant: {
		type: String,
		default: "outlined",
	},
	density: {
		type: String,
		default: "compact",
	},
	placeholder: {
		type: String,
		default: "Type something",
	},
});

const computedProps = computed(() => {
	const variantOptions = [ "default", "outlined", "underlined", "solo", "solo-filled", "solo-inverted", ];
	
	return {
		...props,
		variant: variantOptions.includes(props.variant) ? props.variant : 'outlined',
	};
});
</script>

<style>
.sutorbank-textarea .v-field--variant-outlined {
	border-color: var(--bordercolor);
}
.sutorbank-textarea .v-field--variant-outlined.v-field--focused .v-field__outline {
	color: var(--primary);
}
</style>