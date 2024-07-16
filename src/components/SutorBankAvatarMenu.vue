<template>
	<v-menu class="avatar-menu">
		<template v-slot:activator="{ props }">
			<v-avatar
				:image="image"
				size="32"
				class="mr-4"
				v-bind="props"
			></v-avatar>
		</template>

		<v-layout>
			<v-navigation-drawer absolute permanent>
				<v-list>
					<v-list-item
						:prepend-avatar="image"
						:subtitle="title"
						:title="name"
					>
					</v-list-item>
				</v-list>

				<v-divider></v-divider>

				<v-list :lines="false" density="compact" nav>
					<v-list-item
						v-for="(item, i) in items"
						:key="i"
						:value="item"
						color="primary"
						@click="navigate(item.href)"
					>
						<template v-slot:prepend>
							<v-icon :icon="item.icon"></v-icon>
						</template>

						<v-list-item-title
							v-text="item.text"
						></v-list-item-title>
					</v-list-item>
				</v-list>
			</v-navigation-drawer>

			<v-main :style="{ height: `${menuHeight}px` }"></v-main>
		</v-layout>
	</v-menu>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
	items: {
		type: Array,
		default: () => [
			{
				text: "Profile",
				icon: "mdi-account-outline",
				href: "/components",
			},
			{
				text: "Billing",
				icon: "mdi-note-text-outline",
				href: "/components",
			},
		],
	},
	image: {
		tpye: String,
		default:
			"https://upload.wikimedia.org/wikipedia/en/7/77/EricCartman.png",
	},
	name: {
		type: String,
		default: "Swante-Mihi-Ersen",
	},
	title: {
		type: String,
		default: "FinTech Team",
	},
	menuHeight: {
		tpye: Number,
		default: 225,
	},
});

// Navigate to a route, handling external URLs
const navigate = (route) => {
	if (route.startsWith("http")) {
		window.open(route, "_blank");
	} else {
		router.push(route);
	}
};
</script>

<style>
.avatar-menu .v-overlay__content {
	box-shadow: 0 2px 6px rgb(28 28 28 / 20%);
}
</style>
