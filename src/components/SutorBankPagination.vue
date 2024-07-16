<template>
    <v-pagination v-bind="paginationProps"></v-pagination>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    length: {
        type: Number,
        default: 1
    }
});

const paginationProps = computed(() => {
	return {
		...props,
        length: props.length
	};
});
</script>

<style>

</style>
