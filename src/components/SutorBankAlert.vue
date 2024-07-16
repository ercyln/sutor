<template>
    <v-alert v-bind="computedProps">
        <template v-if="$slots['append']" #append>
			<slot name="append"></slot>
		</template>
        <template v-if="$slots['close']" #close>
			<slot name="close"></slot>
		</template>
        <slot></slot>
        <template v-if="$slots['prepend']" #prepend>
			<slot name="prepend"></slot>
		</template>
        <template v-if="$slots['text']" #text>
			<slot name="text"></slot>
		</template>
        <template v-if="$slots['title']" #title>
			<slot name="title"></slot>
		</template>
    </v-alert>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    text: {
		type: String,
		default: "...",
	},
	variant: {
		type: String,
		default: "tonal",
	},
});

const computedProps = computed(() => {
	const variantOptions = [ "default", "outlined", "underlined", "solo", "solo-filled", "solo-inverted", ];
	return {
		...props,
		variant: variantOptions.includes(props.variant) ? props.variant : 'tonal',
	};
});
</script>

<style>

</style>
