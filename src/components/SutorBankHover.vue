<template>
    <v-hover v-bind="computedProps">
        <template v-slot:default="{ isHovering, props }">
            <slot name="default" :isHovering="isHovering" v-bind="props"></slot>
		</template>
    </v-hover>
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