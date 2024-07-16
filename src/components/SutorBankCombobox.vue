<template>
	<v-combobox
		v-model="selectedItem"
		v-model:search="search"
		v-bind="computedProps"
		class="sutorbank-combobox"
	>
		<template v-if="$slots['no-data']" #no-data>
			<slot name="no-data"></slot>
		</template>
	</v-combobox>
</template>

<script setup>
import { ref, computed, defineProps } from "vue";

const props = defineProps({
	items: {
		type: Array,
		default: () => ["Item 1", "Item 2", "Item 3"],
	},
	label: {
		type: String,
		default: "Select",
	},
	placeholder: {
		type: String,
		default: "Select an item",
	},
	variant: {
		type: String,
		default: "outlined",
	},
	density: {
		type: String,
		default: "compact",
	},
});

const selectedItem = ref(null);
const search = ref(null);

const computedProps = computed(() => {
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
.sutorbank-combobox .v-field--variant-outlined {
	border-color: var(--bordercolor);
}
.sutorbank-combobox .v-field--variant-outlined:hover {
	border-color: var(--primary) !important;
}
.sutorbank-combobox .v-field--variant-outlined.v-field--focused .v-field__outline {
	color: var(--primary) !important;
}
.v-overlay--absolute .v-list-item-title {
	font-size: 15px;
	line-height: 1.25;
}
.v-overlay--absolute .v-list-item--density-default.v-list-item--one-line {
	min-height: 38px !important;
	color: var(--text);
}
</style>
