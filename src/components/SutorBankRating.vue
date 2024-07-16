<template>
    <v-rating v-bind="computedProps">
        <template v-if="$slots['item']">
            <slot name="item"></slot>
        </template>
        <template v-if="$slots['item-label']">
            <slot name="item-label"></slot>
        </template>
    </v-rating>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    color: {
        type: String,
        default: 'orange-lighten-1'
    },
    activeColor: {
        type: String,
        default: '#7367f0'
    },
    hover: {
        type: Boolean,
        default: true
    },
    density: {
		type: String,
		default: "comfortable",
	},
});

const computedProps = computed(() => {
    const densityOptions = ["comfortable", "compact"];

	return {
		...props,
		density: densityOptions.includes(props.density) ? props.density : 'default',
	};
});
</script>

<style>

</style>

 

