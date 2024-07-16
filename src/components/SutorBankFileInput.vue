<template>
	<v-file-input
		v-bind="fileInputProps"
		class="sutorbank-file-input"
	></v-file-input>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
	label: {
		type: String,
		default: "File",
	},
	variant: {
		type: String,
		default: "outlined",
	},
	density: {
		type: String,
		default: "compact",
	},
	appendInnerIcon: {
		type: String,
		default: "mdi-attachment",
	},
	rounded: {
		type: String,
		default: "xs",
	},
});

const fileInputProps = computed(() => {
	const variantOptions = [ "outlined", "underlined", "solo", "solo-filled", "solo-inverted" ];
	const densityOptions = ["comfortable", "compact"];

	return {
		...props,
		variant: variantOptions.includes(props.variant) ? props.variant : 'outlined',
		density: densityOptions.includes(props.density) ? props.density : 'compact',
	};
});
</script>

<style>
.sutorbank-file-input .v-field--variant-outlined {
	border-color: var(--bordercolor);
}
.sutorbank-file-input
	.v-field--variant-outlined.v-field--focused
	.v-field__outline {
	color: var(--primary) !important;
}
</style>
