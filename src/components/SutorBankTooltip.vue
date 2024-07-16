<template>
    <v-tooltip v-bind="tooltipProps" content-class="sutorbank-tooltip">
        <template v-slot:activator="{ props }">
            <span v-bind="props">
                <slot />
            </span>
        </template>
    </v-tooltip>
</template>

<script setup>
import { defineProps, computed, watchEffect } from 'vue';

const props = defineProps({
    text: {
        type: String,
        default: 'Tooltip!'
    },
    bgColor: {
        type: String,
        default: '#424242'
    },
    color: {
        type: String,
        default: '#fff'
    }
});

const tooltipProps = computed(() => {
	return {
		...props,
	};
});

watchEffect(() => {
    document.documentElement.style.setProperty('--tooltip-color', props.color);
    document.documentElement.style.setProperty('--tooltip-bg-color', props.bgColor);
});
</script>

<style>
/* .sutorbank-tooltip {
    color: v-bind('props.color');
    background: v-bind('props.bgColor');
} */
.sutorbank-tooltip {
    color: var(--tooltip-color) !important;
    background-color: var(--tooltip-bg-color) !important;
}
</style>
