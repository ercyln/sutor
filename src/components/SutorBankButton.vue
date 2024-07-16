<template>
	<!-- 
    Button element is conditionally rendered using v-if.
    All button props are listed together for better readability:
    - v-if="icon": Determines whether the single icon or prepend/append icon.
    - :v-bind="btnProps": All vuetify props and more.
  	-->
	<v-btn v-if="icon" v-bind="btnProps" @click="handleClick"> </v-btn>
	
	<v-btn v-else v-bind="btnProps" @click="handleClick">

		<template v-if="$slots['prepend']" #prepend>
			<slot name="prepend"></slot>
		</template>

		<slot>{{ label }}</slot>

		<template v-if="$slots['append']" #append>
			<slot name="append"></slot>
		</template>

		<template v-if="$slots['loader']" #loader>
			<slot name="loader"></slot>
		</template>
		
	</v-btn>
	
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps({
	variant: {
		type: String,
		default: "",
	},
	label: {
		type: String,
		default: "Click",
	},
	color: {
		type: String,
		default: "#7367f0",
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
	},
	icon: {
		type: String,
		default: "",
	},
});

const btnProps = computed(() => {
	const variantOptions = ["outlined", "tonal", "text", "plain"];
	const densityOptions = ["comfortable", "compact"];

	return {
		...props,
		variant: variantOptions.includes(props.variant) ? props.variant : undefined,
		density: densityOptions.includes(props.density) ? props.density : 'comfortable',
		icon: props?.icon?.length > 0 ? props.icon : undefined,
	};
});

const emit = defineEmits(["click"]);

const handleClick = (event) => {
	emit("click", event);
};
</script>
