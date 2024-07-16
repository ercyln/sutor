<template>
    <v-snackbar v-bind="computedProps">
        <slot></slot>
        <template v-if="$slots['actions']" #actions>
			<slot name="actions"></slot>
		</template>
        <template v-if="$slots['activator']" #activator>
			<slot name="activator"></slot>
		</template>
        <template v-if="$slots['text']" #text>
			<slot name="text"></slot>
		</template>
    </v-snackbar>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    variant: {
        type: String,
        default: 'elevated'
    }
});

const computedProps = computed(() => {
    const variantOptions = ["text", "flat", "elevated", "tonal", "outlined", "plain"];

	return {
		...props,
        variant: variantOptions.includes(props.variant) ? props.variant : 'elevated',
	};
});
</script>

<style>

</style>



