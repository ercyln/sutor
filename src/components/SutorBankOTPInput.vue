<template>
	<v-otp-input 
		v-bind="otpInputProps" 
		class="sutorbank-otp-input"
	></v-otp-input>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
	variant: {
		type: String,
		default: "",
	},
	placeholder: {
		type: String,
		default: "-",
	},
});

const otpInputProps = computed(() => {
	const variantOptions = ["solo", "solo-filled", "underlined"];

	return {
		...props,
		variant: variantOptions.includes(props.variant) ? props.variant : undefined,
	};
});
</script>

<style>
.sutorbank-otp-input .v-field--variant-outlined {
	border-color: var(--bordercolor);
}
.sutorbank-otp-input .v-field--variant-outlined.v-field--focused .v-field__outline {
	color: var(--primary) !important;
}
</style>
