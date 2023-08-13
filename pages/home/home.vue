<template>
	<view class="container">
		<!-- 地图区域 -->
		<CustomMap ref="customMapRef" />
		<!-- tabs 区块 -->
		<Tabbars :current="0" />
	</view>
</template>

<script>
	import Tabbars from "@/components/tabbars/index.vue";
	import CustomMap from "./components/map.vue"

	export default {
		components: {
			Tabbars,
			CustomMap
		},
		data() {
			return {};
		},
		methods: {
			init() {
				console.log("_init");
			},
		},
	};
</script>

<style lang="scss" scoped>
	.container {}
</style>