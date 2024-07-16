<template>
    <v-skeleton-loader v-bind="computedProps"></v-skeleton-loader>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    type: {
		type: String,
		default: "image, article",
	},
    timer: {
        type: Boolean,
        default: true
    }
});

const computedProps = computed(() => {
	return {
		...props,
	};
});
</script>

<style>

</style>
