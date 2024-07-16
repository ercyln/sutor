<template>
	<v-checkbox
		v-model="checked"
		v-bind="checkboxProps"
		class="sutorbank-checkbox"
	></v-checkbox>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits, computed } from "vue";

const props = defineProps({
	label: {
		type: String,
		default: "Check me",
	},
	checked: {
		type: Boolean,
		default: false,
	},
	color: {
		type: String,
		default: "#7367f0",
	},
	disabled: {
		type: Boolean,
		default: false,
	},
});

const checkboxProps = computed(() => {
	return {
		...props,
	};
});

const emit = defineEmits(["update:checked"]);
const checked = ref(props.checked);

watch(checked, (newValue) => {
	emit("update:checked", newValue);
});
</script>

<style>
.sutorbank-checkbox label {
	color: var(--text);
}
</style>
