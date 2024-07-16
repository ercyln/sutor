<template>
    <v-banner v-bind="computedProps">
        <template v-if="$slots['prepend']" #prepend>
			<slot name="prepend"></slot>
		</template>
        <slot></slot>
        <template v-if="$slots['text']" #text>
			<slot name="text"></slot>
		</template>
        <template v-if="$slots['actions']" #actions>
			<slot name="actions"></slot>
		</template>
    </v-banner>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    density: {
		type: String,
		default: "default",
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
