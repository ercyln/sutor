<template>
    <v-avatar v-bind="computedProps">
        <slot></slot>
    </v-avatar>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    color: {
        type: String,
        default: '#7367f0'
    },
    variant: {
		type: String,
		default: "flat",
	},
    density: {
		type: String,
		default: "default",
	},
});

const computedProps = computed(() => {
    const variantOptions = ["flat", "elevated", "text", "tonal", "outlined", "plain"];
    const densityOptions = ["comfortable", "compact"];

	return {
		...props,
        variant: variantOptions.includes(props.variant) ? props.variant : "flat",
        density: densityOptions.includes(props.density) ? props.density : "default",
	};
});
</script>

<style>

</style>