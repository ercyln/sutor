<template>
	<v-card v-bind="wrapperProps" class="sutorbank-tabs-wrapper">
		<v-tabs v-model="tab" v-bind="tabProps">
			<v-tab v-for="item in items" :key="item.id" :value="item.id">
				<v-icon v-if="item.icon" :icon="item.icon" class="mr-4" />
				{{ item.tabText }}
				<slot :name="'tab-' + item.id"  :item="item"></slot>
			</v-tab>
		</v-tabs>

		<v-card-text>
			<v-tabs-window v-model="tab">
				<v-tabs-window-item
					v-for="item in items"
					:key="item.id"
					:value="item.id"
				>
					{{ item.tabContent }}
					<slot :name="'tabContent-' + item.id" :item="item"></slot>
				</v-tabs-window-item>
			</v-tabs-window>
		</v-card-text>
	</v-card>
</template>

<script setup>
import { defineProps, computed, ref } from "vue";

const tab = ref(null);

const props = defineProps({
	items: {
		type: Array,
		default: () => [
			{
				id: 1,
				tabText: "1st Tab",
				tabContent: "Content for 1st Tab",
			},
			{
				id: 2,
				tabText: "2nd Tab",
				tabContent: "Content for 2nd Tab",
				icon: '$vuetify'
			},
		],
	},
	bgColor: {
		type: String,
		default: "#7367f0",
	},
	alignTabs: {
		type: String,
		default: "start",
	},
	rounded: {
		type: String,
		default: "xs",
	},
	elevation: {
		type: Number,
		default: 2,
	},
	density: {
		type: String,
		default: "comfortable",
	}
});

const tabProps = computed(() => ({
	...props,
	density: ["comfortable", "compact"].includes(props.density) ? props.density : 'comfortable',
}));

const wrapperProps = computed(() => ({
	...props
}));
</script>

<style>
.sutorbank-tabs-wrapper .v-tabs-window {
	color: var(--text);
}
</style>
