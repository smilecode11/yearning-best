<template>
	<u-tabbar :value="current" :activeColor="activeColor" :fixed="true" :placeholder="true" :safeAreaInsetBottom="true">
		<u-tabbar-item style="font-weight: 600;" :text="item.text" v-for="(item,index) in list" :key="index"
			@click="handleTabClick" :dot="index===1">
			<!-- :badge="index === 1? 9 : ''" -->
			<image style="width:48rpx;height:48rpx;" class="u-page__item__slot-icon" slot="active-icon"
				:src="item.iconPathActive"></image>
			<image style="width:48rpx;height:48rpx;" class="u-page__item__slot-icon" slot="inactive-icon"
				:src="item.iconPath"></image>
		</u-tabbar-item>
	</u-tabbar>
</template>

<script>
	export default {
		props: {
			current: {
				type: Number,
				default: 0,
			},
		},
		computed: {
			activeColor() {
				return ['#a0b8ea', '#e7afb4', '#90d4dd'][this.current || 0]
			}
		},
		data() {
			return {
				list: [{
						text: "首页",
						url: '/pages/home/home',
						iconPath: "../../static/images/tabbar/首页_.png",
						iconPathActive: "../../static/images/tabbar/首页.png"
					},
					{
						text: "发现",
						url: '/pages/circle/circle',
						iconPath: "../../static/images/tabbar/发现_.png",
						iconPathActive: "../../static/images/tabbar/发现.png"
					}, {
						text: "我的",
						url: '/pages/mine/mine',
						iconPath: "../../static/images/tabbar/我的_.png",
						iconPathActive: "../../static/images/tabbar/我的.png"
					}
				]
			};
		},
		methods: {
			handleTabClick(index) {
				if (index === this.current) return
				const selected = this.list.find((it, idx) => idx === index)
				// console.log("_handleTabClick", index, selected);
				uni.switchTab({
					url: selected.url
				})
			},
		}
	};
</script>

<style lang="scss" scoped>

</style>