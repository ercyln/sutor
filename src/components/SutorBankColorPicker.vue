<template>
	<v-color-picker
		v-bind="colorPickerProps"
		v-model:mode="defMode"
	></v-color-picker>
</template>

<script setup>
import { defineProps, computed, ref } from "vue";

const props = defineProps({
	elevation: {
		type: Number,
		default: 2,
	},
	width: {
		type: String,
		default: "300px",
	},
});

const colorPickerProps = computed(() => {
	return {
		...props
	};
});

let defMode = ref("rgba");
</script>
