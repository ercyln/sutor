<template>
	<v-switch v-bind="switchProps" v-model="model" class="sutorbank-switch">
		<template v-if="$slots['label']" #label>
			<slot name="label"></slot>
		</template>
	</v-switch>
</template>

<script setup>
import { defineProps, computed, ref } from "vue";

const props = defineProps({
	indeterminate: {
		type: Boolean,
		default: true,
	},
	label: {
		type: String,
		default: "Switch",
	},
	color: {
		type: String,
		default: "#7367f0",
	},
	falseValue: {
		type: String,
		default: false,
	},
	trueValue: {
		type: String,
		default: true,
	},
});

const switchProps = computed(() => {
	return {
		...props
	};
});

const model = ref(null);
</script>

<style>
.sutorbank-switch .v-field--variant-outlined {
	border-color: var(--bordercolor);
}
.sutorbank-switch .v-field--variant-outlined.v-field--focused .v-field__outline {
	color: var(--primary) !important;
}
</style>
