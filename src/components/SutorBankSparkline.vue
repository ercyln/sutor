<template>
    <v-sparkline v-bind="computedProps">
        <template v-if="$slots['label']" v-slot:label="{ value }">
            <slot name="label" :item="value"></slot>
        </template>
    </v-sparkline>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    
});

const computedProps = computed(() => {
	return {
		...props,
	};
});
</script>

<style>

</style>