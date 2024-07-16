<template>
	<v-card class="sidebar">
		<v-navigation-drawer
			:width="menuWidth"
			class="bg-white pa-md-4"
			theme="light"
			permanent
		>
			<!-- Menu control button -->
			<v-btn
				icon="mdi-circle-double"
				class="menu-control"
				color="#2f2b3db3"
				variant="text"
				width="20"
				@click="toggleMenuWidth"
			></v-btn>

			<!-- Logo -->
			<v-sheet class="logo-wrapper d-flex justify-center align-center">
				<v-img
					class="mb-4 mx-auto"
					:src="menuWidth > 200 ? logo : miniLogo"
					:max-width="menuWidth > 200 ? 180 : 75"
				/>
			</v-sheet>

			<!-- Menu items -->
			<v-list class="navigation-wrapper">
				<v-sheet v-for="item in menu" :key="item.title">
					<template v-if="item.dropdown === true">
						<v-expansion-panels variant="accordion">
							<v-expansion-panel>
								<v-expansion-panel-title
									:style="{
										background:
											$route.path === item.href
												? currentPathColor
												: '',
										color:
											$route.path === item.href
												? '#fff'
												: '',
									}"
									style="padding-inline: 1rem !important"
								>
									<v-list-item
										:prepend-icon="item.icon"
										class="menu-item"
										:title="
											menuWidth > 200 ? item.title : ''
										"
									></v-list-item>
								</v-expansion-panel-title>
								<v-expansion-panel-text>
									<v-list-item
										v-for="sub in item.dropdownItems"
										:key="sub.title"
										:prepend-icon="sub.icon"
										:title="
											menuWidth > 200 ? sub.title : ''
										"
										class="sub-menu-item"
										:style="{
											color:
												$route.path === sub.href
													? currentPathColor
													: '',
										}"
										@click="navigate(sub.href)"
									>
									</v-list-item>
								</v-expansion-panel-text>
							</v-expansion-panel>
						</v-expansion-panels>
					</template>
					<template v-else>
						<v-list-item
							:prepend-icon="item.icon"
							:title="menuWidth > 200 ? item.title : ''"
							class="menu-item"
							:style="{
								background:
									$route.path === item.href
										? currentPathColor
										: '',
								color: $route.path === item.href ? '#fff' : '',
							}"
							style="padding-inline: 1rem !important"
							@click="navigate(item.href)"
						>
						</v-list-item>
					</template>
				</v-sheet>
			</v-list>
		</v-navigation-drawer>
	</v-card>
</template>

<script setup>
import { defineProps, ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
	logo: { type: String, default: "" },
	miniLogo: { type: String, default: "" },
	menu: { type: Array, default: () => [] },
	currentPathColor: { type: String, default: "#7367f0" },
});

const menuWidth = ref(250);

const toggleMenuWidth = () => {
	menuWidth.value = menuWidth.value > 200 ? 125 : 250;
};

// Navigate to a route, handling external URLs
const navigate = (route) => {
	if (route.startsWith("http")) {
		window.open(route, "_blank");
	} else {
		router.push(route);
	}
};

// Computed styles
const menuItemStyle = (route) =>
	computed(() => ({
		background:
			router.currentRoute.value.path === route
				? props.currentPathColor
				: "",
		color: router.currentRoute.value.path === route ? "#fff" : "",
	}));

const subMenuItemStyle = (route) =>
	computed(() => ({
		color:
			router.currentRoute.value.path === route
				? props.currentPathColor
				: "",
	}));
</script>

<style>
/* Sidebar styles */
.sidebar {
	margin: 0 1rem !important;
	position: relative;
}

.sidebar .v-navigation-drawer {
	padding-top: 2rem !important;
	border: none !important;
	margin: 1rem 0rem;
	border-radius: 8px;
	height: 100% !important;
	max-height: 97%;
}

/* Logo styles */
.sidebar .logo-wrapper {
	width: 100%;
	max-width: 180px;
}

/* Navigation styles */
.sidebar .navigation-wrapper .v-list-item--one-line {
	padding-inline: 0 !important;
}
.sidebar .navigation-wrapper {
	color: #b1b1b1 !important;
}
.sidebar .navigation-wrapper .v-list-item__spacer {
	width: 12px !important;
}
.sidebar .v-expansion-panel-title {
	padding: 0 !important;
}
.sidebar .v-expansion-panel__shadow {
	box-shadow: none !important;
}
.sidebar .menu-item {
	font-size: 1rem;
	padding: 1rem;
	border-radius: 8px !important;
	padding-top: 0.5rem !important;
	padding-bottom: 0.5rem !important;
}
.sidebar .sub-menu-item {
	font-size: 0.75rem;
	padding: 1rem;
	border-radius: 8px !important;
	padding-top: 0.5rem !important;
	padding-bottom: 0.5rem !important;
}
.sidebar .v-list-item-title {
	white-space: pre-wrap !important;
}
.sidebar .menu-control {
	z-index: 99;
	position: absolute;
	right: 0.75rem;
	top: 0;
	opacity: 0.5;
	transition: 0.5s;
}
.sidebar .menu-control:hover {
	opacity: 1;
	transition: 0.5s;
}
.sidebar .v-btn--variant-text .v-btn__overlay {
	background: transparent !important;
}

.sidebar .v-btn--variant-text .v-btn__overlay {
	background: transparent !important;
}

.v-expansion-panel--active
	> .v-expansion-panel-title:not(.v-expansion-panel-title--static) {
	min-height: unset !important;
}
</style>
