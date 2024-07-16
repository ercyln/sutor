<template>
    <v-breadcrumbs v-bind="breadcrumbsProps">
        <template v-if="$slots['prepend']" #prepend>
			<slot name="prepend"></slot>
		</template>
        <template v-if="$slots['divider']" #divider>
			<slot name="divider"></slot>
		</template>
        <template v-if="$slots['title']" v-slot:title="{ item }">
			<slot name="title" :item="item"></slot>
		</template>
    </v-breadcrumbs>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({});

const breadcrumbsProps = computed(() => {
	return {
		...props,
	};
});

</script>

<style>

</style>
