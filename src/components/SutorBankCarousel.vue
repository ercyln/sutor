<template>
	<v-carousel
		:height="height"
		:show-arrows="showArrows"
		:delimiter-icon="delimiterIcon"
		:hide-delimiters="hideDelimiters"
		:cycle="cycle"
		:hide-delimiter-background="hideDelimiterBackground"
	>
		<!-- Image -->
		<v-carousel-item
			v-for="image in images"
			:key="image.$index"
			:src="image"
			v-if="type === 'image'"
		/>

		<!-- Text with background color -->
		<v-carousel-item
			v-for="(text, i) in texts"
			:key="i"
			:src="text"
			v-if="type === 'text'"
		>
			<v-sheet :color="colors[i]" height="100%">
				<div class="d-flex fill-height justify-center align-center">
					<div class="text-center" :style="{ color: `${textColor}` }">
						<h3
							class="text-h3"
							:style="{
								'font-size': `${titleSize}px !important`,
							}"
						>
							{{ text }}
						</h3>
					</div>
				</div>
			</v-sheet>
		</v-carousel-item>

		<!-- Image + Text -->
		<v-carousel-item
			v-for="item in items"
			:key="item.$index"
			:src="item.img"
			v-if="type === 'mix'"
			class="mix-carousel"
		>
			<v-sheet height="100%" class="bg-transparent">
				<div class="d-flex fill-height justify-center align-end pb-4">
					<div
						class="text-center pa-4 rounded-lg"
						:style="{
							background: `${textBackground}`,
							color: `${textColor}`,
						}"
					>
						<h3
							class="text-h3"
							:style="{
								'font-size': `${titleSize}px !important`,
							}"
						>
							{{ item.title }}
						</h3>
						<p :style="{ 'font-size': `${fontSize}px !important` }">
							{{ item.text }}
						</p>
					</div>
				</div>
			</v-sheet>
		</v-carousel-item>
	</v-carousel>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
	type: {
		type: String,
		default: "mix",
	},
	images: {
		type: Array,
		default: () => [
			"https://static.wikia.nocookie.net/southpark/images/c/c4/Eric-cartman.png",
			"https://static.wikia.nocookie.net/southpark/images/6/61/Formal-cartman.png",
			"https://static.wikia.nocookie.net/southpark/images/7/71/Pajamas_Cartman.png",
			"https://static.wikia.nocookie.net/southpark/images/4/4d/GrandMaster-WizardCartman.transparent.png",
			"https://static.wikia.nocookie.net/southpark/images/a/af/German_Dance_Cartman.png",
		],
	},
	texts: {
		type: Array,
		default: () => [
			"I ❤️ South Park",
			"I ❤️ South Park",
			"I ❤️ South Park",
			"I ❤️ South Park",
			"I ❤️ South Park",
		],
	},
	colors: {
		type: Array,
		default: () => [
			"indigo",
			"warning",
			"pink darken-2",
			"red lighten-1",
			"deep-purple accent-4",
		],
	},
	items: {
		type: Array,
		default: () => [
			{
				img: "https://static.wikia.nocookie.net/southpark/images/c/c4/Eric-cartman.png",
				title: "Regular Cartman",
				text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			},
			{
				img: "https://static.wikia.nocookie.net/southpark/images/6/61/Formal-cartman.png",
				title: "Formal Cartman",
				text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			},
			{
				img: "https://static.wikia.nocookie.net/southpark/images/7/71/Pajamas_Cartman.png",
				title: "Pajamas Cartman",
				text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			},
			{
				img: "https://static.wikia.nocookie.net/southpark/images/4/4d/GrandMaster-WizardCartman.transparent.png",
				title: "Wizard Cartman",
				text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			},
			{
				img: "https://static.wikia.nocookie.net/southpark/images/a/af/German_Dance_Cartman.png",
				title: "German Cartman",
				text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			},
		],
	},
	fontSize: {
		type: Number,
		default: 14,
	},
	titleSize: {
		type: Number,
		default: 22,
	},
	textBackground: {
		type: String,
		default: "rgba(115, 103, 240, .8)",
	},
	textColor: {
		type: String,
		default: "#fff",
	},
	height: {
		type: String,
		default: "100%",
	},
	showArrows: {
		type: String,
		default: "hover",
	},
	delimiterIcon: {
		type: String,
		default: "mdi-circle",
	},
	cycle: {
		type: Boolean,
		default: true,
	},
	hideDelimiterBackground: {
		type: Boolean,
		default: true,
	},
	hideDelimiters: {
		type: Boolean,
		default: false,
	},
});
</script>

<style></style>
