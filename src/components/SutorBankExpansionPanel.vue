<template>
	<v-expansion-panel v-bind="computedProps">
		<template v-if="$slots['default']" #default>
			<slot name="default"></slot>
		</template>

		<template v-if="$slots['title']" #title>
			<slot name="title"></slot>
		</template>

		<template v-if="$slots['text']" #text>
			<slot name="text"></slot>
		</template>
	</v-expansion-panel>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({ });

const computedProps = computed(() => {
	return {
		...props,
	};
});
</script>

<style>

</style>