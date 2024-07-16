<template>
	<v-sheet class="activity-list-wrapper mt-4">
		<v-timeline align="start" side="end" density="compact">
			<v-timeline-item
				v-for="item in items"
				:key="item.$index"
				:dot-color="item.dotColor"
				:size="item.size"
				class="w-100"
			>
				<div class="d-flex">
					<div>
						<strong>{{ item.title }}</strong>
						<div class="text-caption">
							{{ item.description }}
						</div>
						<div class="participants mt-2">
							<v-tooltip
								class="image-container"
								location="top"
								:text="participant.name"
								v-for="(participant, index) in item.participants.slice(0, 5)"
								:key="index"
							>
								<template v-slot:activator="{ props }">
									<v-avatar
										:image="participant.img"
										v-bind="props"
									></v-avatar>
								</template>
							</v-tooltip>

							<template v-if="item.participants.length > 5">
								<v-tooltip
									location="top"
									:text="item.participants.length - 5 + ' more'"
								>
									<template v-slot:activator="{ props }">
										<v-avatar
											image="https://dummyimage.com/30x30/ccc/fff&text=M"
											v-bind="props"
										></v-avatar>
									</template>
								</v-tooltip>
							</template>
						</div>
					</div>
					<span class="ml-auto">{{ item.time }}</span>
				</div>
			</v-timeline-item>
		</v-timeline>
	</v-sheet>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
	items: {
		type: Array,
		default: () => [
			{
				dotColor: "red",
				size: "small",
				title: "Client Meeting",
				description: "Project meeting with client",
				time: "12 min ago",
				participants: [
					{
						name: "Eric Cartman",
						img: "https://static.wikia.nocookie.net/southpark/images/c/c4/Eric-cartman.png",
					},
					{
						name: "Kyle Broflovski",
						img: "https://static.wikia.nocookie.net/southpark/images/9/95/Kyle-broflovski.png",
					},
					{
						name: "Stan Marsh",
						img: "https://static.wikia.nocookie.net/southpark/images/c/c6/Stan-marsh-0.png",
					},
				],
			},
			{
				dotColor: "#7367f0",
				size: "small",
				title: "Daily Scrum",
				description: "7 team members in a project",
				time: "3 hour ago",
				participants: [
					{
						name: "Eric Cartman",
						img: "https://static.wikia.nocookie.net/southpark/images/c/c4/Eric-cartman.png",
					},
					{
						name: "Kenny McCormick",
						img: "https://static.wikia.nocookie.net/southpark/images/6/6f/KennyMcCormick.png",
					},
					{
						name: "Kyle Broflovski",
						img: "https://static.wikia.nocookie.net/southpark/images/9/95/Kyle-broflovski.png",
					},
					{
						name: "Stan Marsh",
						img: "https://static.wikia.nocookie.net/southpark/images/c/c6/Stan-marsh-0.png",
					},
					{
						name: "Tolkien Black",
						img: "https://static.wikia.nocookie.net/southpark/images/d/d3/Token_Black2.png",
					},
					{
						name: "Tweek Tweak",
						img: "https://static.wikia.nocookie.net/southpark/images/9/9d/Tweek_pic.png",
					},
					{
						name: "Craig Tucker",
						img: "https://static.wikia.nocookie.net/southpark/images/c/c2/Craig-tucker.png",
					},
				],
			},
			{
				dotColor: "green",
				size: "small",
				title: "Happy Hour",
				description: "Happy hour with team",
				time: "2 day ago",
				participants: [
					{
						name: "Eric Cartman",
						img: "https://static.wikia.nocookie.net/southpark/images/c/c4/Eric-cartman.png",
					},
					{
						name: "Kenny McCormick",
						img: "https://static.wikia.nocookie.net/southpark/images/6/6f/KennyMcCormick.png",
					},
					{
						name: "Kyle Broflovski",
						img: "https://static.wikia.nocookie.net/southpark/images/9/95/Kyle-broflovski.png",
					},
					{
						name: "Stan Marsh",
						img: "https://static.wikia.nocookie.net/southpark/images/c/c6/Stan-marsh-0.png",
					},
				],
			},
		],
	},
});
</script>

<style>
:root {
	--title: #2f2b3de6;
	--subtitle: #4a4656;
	--text: #2f2b3db3;
	--primary: #7367f0;
	--complementary: #f0b767;
	--darkGray: #333333;
	--lightGray: #e0e0e0;
	--white: #ffffff;
	--offwhite: #f4f4f4;
	--bordercolor: ##2f2b3d1f;
}
.activity-list-item {
	display: flex !important;
	align-items: flex-start !important;
	justify-content: space-between !important;
}
.participants {
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
.participants .v-avatar {
	position: relative;
	margin-left: -12px;
	box-shadow: 0 4px 8px rgba(28, 28, 28, 0.1);
	transition: 0.5s;
}
.participants .v-avatar:hover {
	transform: translateY(-5px) scale(1);
	cursor: pointer;
	transition: 0.5s;
}
.participants img {
	border: 1px solid #1c1c1c;
	padding: 0.1rem;
	border-radius: 50px !important;
	transition: 0.5s;
}
.participants img:first-child {
	margin-left: 0;
}
.activity-list-wrapper .v-timeline-item__body {
	width: 100%;
}
</style>
