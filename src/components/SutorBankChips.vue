<template>
	<v-chip v-bind="chipsProps" @click="handleClick" class="sutorbank-chips">
		<template v-if="$slots['prepend']" #prepend>
			<slot name="prepend"></slot>
		</template>
		<slot>{{ title }}</slot>
		<template v-if="$slots['append']" #append>
			<slot name="append"></slot>
		</template>
	</v-chip>
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps({
	title: {
		type: String,
		default: "Chip",
	},
	color: {
		type: String,
		default: "#7367f0",
	},
	elevation: {
		type: Number,
		default: 0,
	},
	variant: {
		type: String,
		default: "tonal",
	},
	density: {
		type: String,
		default: "",
	},
});

const chipsProps = computed(() => {
	const variantOptions = ["outlined", "elevated", "text", "plain"];
	const densityOptions = ["comfortable", "compact"];

	return {
		...props,
		variant: variantOptions.includes(props.variant) ? props.variant : undefined,
		density: densityOptions.includes(props.density) ? props.density : undefined,
	};
});

const emit = defineEmits(["click"]);

function handleClick(event) {
	emit("click", event);
}
</script>

<style>
.v-chip--variant-tonal {
	border: 1px solid;
}
</style>
