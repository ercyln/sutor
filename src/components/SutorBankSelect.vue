<template>
	<v-select v-bind="selectProps" class="sutorbank-select"></v-select>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
	items: {
		tpye: Array,
		default: () => ["Item 1", "Item 2", "Item 3"],
	},
	label: {
		type: String,
		default: "Select",
	},
	variant: {
		type: String,
		default: "outlined",
	},
	loading: {
		type: Boolean,
		default: false,
	},
	density: {
		type: String,
		default: "compact",
	},
	rounded: {
		type: String,
		default: "xs",
	}
});

const selectProps = computed(() => {
	const variantOptions = [ "outlined", "underlined", "solo", "solo-filled", "solo-inverted" ];
	const densityOptions = ["comfortable", "compact"];

	return {
		...props,
		variant: variantOptions.includes(props.variant) ? props.variant : 'outlined',
		density: densityOptions.includes(props.density) ? props.density : 'compact'
		 
	};
});
</script>

<style>
.sutorbank-select .v-field--variant-outlined {
	border-color: var(--bordercolor);
}
.sutorbank-select .v-field--variant-outlined.v-field--focused .v-field__outline {
	color: var(--primary) !important;
}
</style>
