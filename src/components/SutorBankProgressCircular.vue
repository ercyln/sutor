<template>
    <v-progress-circular v-bind="computedProps">
        <slot></slot>
    </v-progress-circular>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    color: {
        type: String,
        default: '#7367f0'
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