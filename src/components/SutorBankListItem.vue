<template>
	<v-list-item v-bind="computedProps">
		<slot></slot>
        <template v-if="$slots['prepend']" #prepend>
			<slot name="prepend"></slot>
		</template>
        <template v-if="$slots['append']" #append>
			<slot name="append"></slot>
		</template>
        <template v-if="$slots['title']" #title>
			<slot name="title"></slot>
		</template>

		<template v-if="$slots['subtitle']" #subtitle>
			<slot name="subtitle"></slot>
		</template>
	</v-list-item>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
	density: {
		type: String,
		default: "comfortable",
	},
	variant: {
		type: String,
		default: "text",
	},
});

const computedProps = computed(() => {
	const variantOptions = [ "outlined", "tonal", "elevated", "flat", "text", "plain" ];
	const densityOptions = ["comfortable", "compact"];

	return {
		...props,
		variant: variantOptions.includes(props.variant) ? props.variant : "text",
		density: densityOptions.includes(props.density) ? props.density : "default",
		 
	};
});
</script>

<style>

</style>
