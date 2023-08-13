<template>
	<view class="container">
		circle
		<Tabbars :current="1" />
	</view>
</template>

<script>
	import Tabbars from "@/components/tabbars/index.vue";
	export default {
		components: {
			Tabbars,
		},
		data() {
			return {

			}
		},
		methods: {
			init() {
				console.log("_init")
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {}
</style>