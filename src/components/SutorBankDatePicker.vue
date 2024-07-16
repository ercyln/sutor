<template>
	<v-date-picker v-bind="datePickerProps"></v-date-picker>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
	color: {
		type: String,
		default: "#7367f0",
	},
});

const datePickerProps = computed(() => {
	return {
		...props
	};
});
</script>
