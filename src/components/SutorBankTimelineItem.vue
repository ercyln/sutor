<template>
    <v-timeline-item v-bind="computedProps">
        <template v-if="$slots['icon']" #icon>
			<slot name="icon"></slot>
		</template>
        <template v-if="$slots['opposite']" #opposite>
			<slot name="opposite"></slot>
		</template>
        <slot></slot>
    </v-timeline-item>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({ });

const computedProps = computed(() => {
	return {
		...props,
	};
});
</script>

<style>

</style>

 

