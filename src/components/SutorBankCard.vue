<template>
	<v-card class="sutorbank-card-wrapper" v-bind="cardProps">
		
		<template v-if="$slots['prepend']" #prepend>
			<slot name="prepend"></slot>
		</template>

		<slot></slot>

		<template v-if="$slots['append']" #append>
			<slot name="append"></slot>
		</template>

		<template v-if="$slots['actions']" #actions>
			<slot name="actions"></slot>
		</template>

		<v-card-actions v-if="showButton">
			<v-btn
				v-bind="btnProps"
				:style="{ background: props.buttonBackground }"
				@click="handleClick"
			>
				{{ buttonText }}
			</v-btn>
		</v-card-actions>

	</v-card>
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps({
	variant: {
		type: String,
		default: "",
	},
	density: {
		type: String,
		default: "comfortable",
	},
	rounded: {
		type: String,
		default: "xs",
	},
	showButton: {
		type: Boolean,
		default: false,
	},
	buttonText: {
		type: String,
		default: "Click",
	},
	buttonBackground: {
		type: String,
		default: "#7367f0",
	},
	buttonColor: {
		type: String,
		default: "#fff",
	},
});

const cardProps = computed(() => {
	const variantOptions = [ "outlined", "tonal", "elevated", "flat", "text", "plain" ];
	const densityOptions = [ "comfortable", "compact" ];

	return {
		...props,
		variant: variantOptions.includes(props.variant) ? props.variant : undefined,
		density: densityOptions.includes(props.density) ? props.density : 'comfortable',
	};
});

const btnProps = computed(() => {
	return {
		buttonText: props.buttonText,
		color: props.buttonColor,
	};
});

const emit = defineEmits(["click"]);

const handleClick = (event) => {
	emit("click", event);
};
</script>

<style>
.sutorbank-card-wrapper .v-card-actions {
	justify-content: flex-end;
	padding: 0.625rem 1rem;
}
.sutorbank-card-wrapper .v-card-title {
	color: var(--title);
}
.sutorbank-card-wrapper .v-card-text {
	color: var(--text);
}
</style>
