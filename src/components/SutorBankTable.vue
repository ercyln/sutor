<template>
	<v-data-table v-bind="tableProps">
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
	</v-data-table>
</template>


<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
	headers: {
		type: Array,
		default: () => [
			{ key: "id", title: "INVOICE ID" },
			{ key: "name", title: "RECIPIENT NAME" },
			{ key: "date", title: "DATE" },
			{ key: "amount", title: "AMOUNT" },
			{ key: "status", title: "STATUS" },
		],
	},
	items: {
		type: Array,
		default: () => [
			{
				id: 1,
				name: "Eric Cartman",
				date: "23 Jun, 2024",
				amount: "$119.99",
				status: "Completed",
			},
			{
				id: 2,
				name: "Kenny McCormick",
				date: "14 Jun, 2024",
				amount: "$39.99",
				status: "Pending",
			},
		],
	},
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

const tableProps = computed(() => ({
  ...props
}));
</script>


<style>
.sutorbank-table-search .v-field--variant-outlined {
	border-color: var(--bordercolor);
}
.sutorbank-table-search
	.v-field--variant-outlined.v-field--focused
	.v-field__outline {
	color: var(--primary) !important;
}
.sutorbank-table .v-data-table-header__content {
	color: var(--title);
}
.sutorbank-table .v-data-table__tr {
	color: var(--text);
}
.sutorbank-table .v-data-table-footer__items-per-page,
.sutorbank-table .v-data-table-footer__info {
	color: var(--subtitle);
}
</style>
