<template>
	<v-number-input
		v-bind="inputProps"
		class="sutorbank-number-input"
	></v-number-input>
</template>

<script setup>
import { defineProps, computed } from "vue";
import { VNumberInput } from "vuetify/labs/VNumberInput"; // Labs components require a manual import and installation of the component.

const props = defineProps({
	controlVariant: {
		type: String,
		default: "stacked",
	},
	label: {
		type: String,
		default: "Number",
	},
	variant: {
		type: String,
		default: "outlined",
	},
	density: {
		type: String,
		default: "compact",
	},
	rounded: {
		type: String,
		default: "xs",
	},
});

const inputProps = computed(() => {
	const variantOptions = [ "outlined", "filled", "solo", "solo-inverted", "solo-full" ];
	const densityOptions = ["comfortable", "compact"];

	return {
		...props,
		variant: variantOptions.includes(props.variant) ? props.variant : 'outlined',
		density: densityOptions.includes(props.density) ? props.density : 'comfortable',
	};
});
</script>

<style>
.sutorbank-number-input .v-field--variant-outlined {
	border-color: var(--bordercolor);
}
.sutorbank-number-input
	.v-field--variant-outlined.v-field--focused
	.v-field__outline {
	color: var(--primary) !important;
}
</style>
