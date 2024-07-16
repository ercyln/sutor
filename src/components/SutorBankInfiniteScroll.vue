<template>
    <v-infinite-scroll v-bind="computedProps">
		<slot></slot>
		<template v-if="$slots['error']" v-slot:error="{ props }">
			<slot name="error" :props="props"></slot>
		</template>
		<template v-if="$slots['load-more']" v-slot:load-more="{ props }">
			<slot name="load-more" :props="props"></slot>
		</template>
        <template v-if="$slots['loading']" #loading>
			<slot name="loading"></slot>
		</template>
		<template v-if="$slots['empty']" #empty>
			<slot name="empty"></slot>
		</template>
	</v-infinite-scroll>
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
