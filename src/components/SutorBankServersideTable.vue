<template>
    <v-data-table-server v-bind="computedProps">
        <!-- Group Header Slot -->
		<template v-if="$slots['group-header']" v-slot:group-header="{ item, columns, toggleGroup, isGroupOpen }">
			<slot
			name="group-header"
			:item="item"
			:columns="columns"
			:toggleGroup="toggleGroup"
			:isGroupOpen="isGroupOpen"
			></slot>
		</template>
		
		<!-- Header Slot -->
		<template v-if="$slots['header.id']" v-slot:header.id="{ column }">
			<slot name="header.id" :column="column"></slot>
		</template>

		<!-- Headers Slot -->
		<template v-if="$slots.headers" v-slot:headers="{ columns, isSorted, getSortIcon, toggleSort }">
			<slot
				name="headers"
				:columns="columns"
				:isSorted="isSorted"
				:getSortIcon="getSortIcon"
				:toggleSort="toggleSort"
			></slot>
		</template>

		<!-- Item Slot -->
		<template v-if="$slots.item" v-slot:item="{ item }">
			<slot name="item" :item="item"></slot>
		</template>

		<!-- Item Actions Slot -->
		<template v-slot:item.actions="{ item }">
			<slot name="item.actions" :item="item"></slot>
		</template>

		<!-- Top Slot -->
		<template v-if="$slots.top" v-slot:top>
			<slot name="top"></slot>
		</template>

		<!-- Activator Slot -->
		<template v-if="$slots.activator" v-slot:activator>
			<slot name="activator"></slot>
		</template>

		<!-- Expanded Row Slot -->
		<template v-slot:expanded-row="{ columns, item }">
			<slot name="expanded-row" :item="item" :columns="columns"></slot>
		</template>

		<!-- Loading Slot -->
		<template v-if="$slots.loading" v-slot:loading>
			<slot name="loading"></slot>
		</template>
    </v-data-table-server>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    density: {
		type: String,
		default: "compact",
	},
    theme: {
		type: String,
		default: "light",
	},
	itemsPerPage: {
		type: Number,
		default: 5,
	},
});

const computedProps = computed(() => {
    const densityOptions = ["comfortable", "compact"];

	return {
		...props,
        density: densityOptions.includes(props.density) ? props.density : "default",
	};
});
</script>

<style>

</style>