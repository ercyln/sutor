<template>
    <v-slider v-bind="computedProps">
        <template v-if="$slots['prepend']" #prepend>
			<slot name="prepend"></slot>
		</template>
        <template v-if="$slots['append']" #append>
			<slot name="append"></slot>
		</template>
    </v-slider>
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
