<template>
	<v-speed-dial
		:location="position[0] + ' ' + position[1]"
		transition="scale-transition"
	>	

		<template v-slot:activator="{ props: activatorProps }">
			<slot name="activator" :props="activatorProps">
				<v-btn v-bind="{ ...activatorProps, ...btnProps }"></v-btn>
			</slot>
		</template>

		<v-btn
			v-for="button in items"
			:key="button.$index"
			:variant="button.variant"
			:icon="button.icon"
			:color="button.color"
			@click="button.onClick"
		>
			<span v-if="button.text">
				{{ button.text }}
			</span>
			<v-icon color="button.color" :variant="button.variant" v-else>
				{{ button.icon }}
			</v-icon>
		</v-btn>

	</v-speed-dial>
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps({
	items: {
		type: Array,
		default: () => [
			{ 
				icon: '$success',
				color: '#7367f0',
				variant: 'tonal',
				onClick: () => console.log('Custom Success clicked') 
			},
			{ 
				icon: '$info',
				color: '#7367f0',
				variant: 'tonal',
				onClick: () => console.log('Custom Info clicked') 
			},
			{ 
				icon: '$warning',
				color: '#7367f0',
				variant: 'tonal',
				onClick: () => console.log('Custom Warning clicked') 
			},
			{ 
				icon: '$error',
				color: '#7367f0',
				variant: 'tonal',
				onClick: () => console.log('Custom Error clicked') 
			},
		],
	},
	position: {
		type: Array,
		default: () => ["bottom", "center"],
	},
	icon: {
		tpye: String,
		default: "mdi-translate",
	},
	color: {
		type: String,
		default: "#7367f0",
	},
	variant: {
		tpye: String,
		default: "tonal"
	},
	density: {
		tpye: String,
		default: "comfortable"
	}
});

const btnProps = computed(() => {
	const variantOptions = ["outlined", "tonal", "text", "plain"];
	const densityOptions = ["comfortable", "compact"];

	return {
		...props,
		variant: variantOptions.includes(props.variant) ? props.variant : undefined,
		density: densityOptions.includes(props.density) ? props.density : 'comfortable',
	};
});

const emit = defineEmits(["click"]);

const handleClick = (item) => {
	emit("click", item);
};
</script>
