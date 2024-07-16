<template>
	<v-radio v-bind="computedProps">
		<template v-if="$slots['label']" #label>
			<slot name="label"></slot>
		</template>
	</v-radio>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
	color: {
		type: String,
		default: "#7367f0",
	},
});

const computedProps = computed(() => {
	return {
		...props
	};
});
</script>

<style>

</style>