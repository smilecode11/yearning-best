<template>
	<view class="container">
		mine
		<Tabbars :current="2" />
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