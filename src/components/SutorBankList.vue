<template>
	<!-- 
        - All props are listed together for better readability
        - 2nd <v-list-item> element is conditionally rendered using v-if (sub group).
        - v-if="item.subItems": Determines whether the item have sub group or not.
        - The reason of didn't use directly :items props is, 
        this approach gives more flexibility for later development. 
    -->
	<v-list v-bind="listProps" class="sutorbank-list-wrapper">
		<v-list-item
			v-for="item in items"
			:key="item"
			v-bind="listItemProps(item)"
			@click="handleClick(item)"
		>
			<slot name="list-item"></slot>
			<v-list-item
				v-for="sub in item.subItems"
				:key="sub"
				v-bind="listItemProps(sub)"
				v-if="item.subItems"
				class="sub-list"
				@click="handleClick(sub)"
			>
				<slot name="sub-item"></slot>
			</v-list-item>
		</v-list-item>
	</v-list>
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps({
	items: {
		type: Array,
		default: () => [
			{
				title: "Item",
				subtitle:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			},
			{
				title: "Item w/Avatar",
				subtitle:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				prependAvatar:
					"https://static.wikia.nocookie.net/southpark/images/6/6f/KennyMcCormick.png",
			},
			{
				title: "Item w/Prepend Icon",
				subtitle:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				prependIcon: "$vuetify",
			},
			{
				title: "Item w/Append Icon",
				subtitle:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				appendIcon: "$vuetify",
			},
			{
				title: "Item w/Sub group",
				subtitle:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				subItems: [
					{
						title: "Sub 1 w/Prepend Icon",
						subtitle:
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
						prependIcon: "mdi-circle-slice-8",
					},
					{
						title: "Sub 2 w/Prepend Icon",
						subtitle:
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
						prependIcon: "mdi-circle-slice-8",
					},
				],
			},
		],
	},
	density: {
		type: String,
		default: "comfortable",
	},
	variant: {
		type: String,
		default: "",
	},
});

const listProps = computed(() => {
	const variantOptions = [ "outlined", "tonal", "elevated", "flat", "text", "plain" ];
	const densityOptions = ["comfortable", "compact"];

	return {
		...props,
		variant: variantOptions.includes(props.variant) ? props.variant : undefined,
		density: densityOptions.includes(props.density) ? props.density : undefined,
		 
	};
});

const listItemProps = (item) => {
	return {
		title: item.title,
		subtitle: item.subtitle,
		"prepend-avatar": item.prependAvatar,
		rounded: item.rounded,
		"prepend-icon": item.prependIcon,
		"append-icon": item.appendIcon,
		disabled: item.disabled,
		class: item.listItemClass,
		variant: item.variant,
	};
};

const emit = defineEmits(["click"]);

const handleClick = (event) => {
	emit("click", event);
};
</script>

<style>
.sutorbank-list-wrapper {
	color: var(--text);
}
.sutorbank-list-wrapper .v-list-item-title {
	color: var(--subtitle);
}
.sutorbank-list-wrapper .sub-list .v-list-item-title {
	font-size: 14px;
}
.sutorbank-list-wrapper .sub-list .v-list-item-subtitle {
	font-size: 12px;
}
.sutorbank-list-wrapper .sub-list i {
	font-size: 1rem;
}
</style>
