<template>
	<v-radio-group v-bind="computedProps" class="sutorbank-radio-group">
		<slot></slot>
	</v-radio-group>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
	color: {
		type: String,
		default: "#7367f0",
	},
});

const computedProps = computed(() => {
	return {
		...props
	};
});
</script>

<style>

</style>
