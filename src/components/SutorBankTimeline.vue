<template>
    <v-timeline v-bind="computedProps">
        <slot></slot>
    </v-timeline>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({});

const computedProps = computed(() => {
	return {
		...props,
	};
});
</script>

<style>

</style>

 

