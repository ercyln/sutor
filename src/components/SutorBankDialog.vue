<template>
	<v-dialog v-bind="dialogProps">
		<!--
            Slot usage: If external content is given, show it, otherwise show default button
        -->
		<template v-slot:activator="{ props: activatorProps }">
			<slot name="activator" :props="activatorProps">
				<v-btn v-bind="{ ...activatorProps, ...btnProps }">
					{{ buttonText }}
				</v-btn>
			</slot>
		</template>
		
		<template v-slot:default="{ isActive }">
			<slot :isActive="isActive">
				<v-card :title="title">
					<v-card-text>
						{{ text }}
					</v-card-text>

					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn
							:text="closeButtonText"
							@click="
								isActive.value = false;
								handleClick;
							"
						></v-btn>
					</v-card-actions>
				</v-card>
			</slot>
		</template>
	</v-dialog>
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps({
	title: {
		type: String,
		default: "Title",
	},
	text: {
		type: String,
		default:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et sodales quam, quis viverra arcu. Phasellus nunc magna, imperdiet eu malesuada lacinia, imperdiet vel leo. Fusce sed accumsan quam. Donec finibus diam porta lacus condimentum suscipit. ",
	},
	closeButtonText: {
		type: String,
		default: "Close",
	},
	rounded: {
		type: String,
		default: "xs",
	},
	buttonText: {
		type: String,
		default: "Open Modal",
	},
	buttonColor: {
		type: String,
		default: "#7367f0",
	},
	buttonElevation: {
		type: Number,
		default: 2,
	},
	buttonVariant: {
		type: String,
		default: "",
	},
	buttonDisabled: {
		type: Boolean,
		default: false,
	},
	buttonIcon: {
		type: String,
		default: "",
	},
	buttonDensity: {
		type: String,
		default: "comfortable",
	},
	buttonClass: {
		type: String,
		default: "",
	},
	buttonSize: {
		type: String,
		default: "default",
	},
	buttonBlock: {
		type: Boolean,
		default: false,
	},
	buttonRounded: {
		type: String,
		default: "xs",
	},
	buttonLoading: {
		type: Boolean,
		default: false,
	},
	buttonWidth: {
		type: String,
		default: "",
	},
	buttonMaxWidth: {
		type: String,
		default: "",
	},
	buttonMinWidth: {
		type: String,
		default: "",
	},
	buttonHeight: {
		type: String,
		default: "",
	},
	buttonMaxHeight: {
		type: String,
		default: "",
	},
	buttonMinHeight: {
		type: String,
		default: "",
	},
});

const dialogProps = computed(() => {
	return {
		...props
	};
});

const btnProps = computed(() => {
	const variantOptions = ["outlined", "tonal", "text", "plain"];
	const densityOptions = ["comfortable", "compact"];

	return {
		color: props.buttonColor,
		disabled: props.buttonDisabled,
		icon: props?.buttonIcon?.length > 0 ? props.buttonIcon : undefined,
		variant: variantOptions.includes(props.buttonVariant) ? props.buttonVariant : undefined,
		density: densityOptions.includes(props.buttonDensity) ? props.buttonDensity : 'compact',
		class: props.buttonClass,
		size: props.buttonSize,
		block: props.buttonBlock,
		rounded: props.buttonRounded,
		elevation: props.buttonElevation,
		loading: props.buttonLoading,
		width: props.buttonWidth,
		"max-width": props.buttonMaxWidth,
		"min-width": props.buttonMinWidth,
		height: props.buttonHeight,
		"max-height": props.buttonMaxHeight,
		"min-height": props.buttonMinHeight,
	};
});

const emit = defineEmits(["click"]);

const handleClick = (event) => {
	emit("click", event);
};
</script>
