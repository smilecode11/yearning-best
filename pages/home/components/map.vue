<template>
	<view class="map-control">
		<map :show-location="true" id="mapControl" @updated="onMapInit" @tap="onMapTap"
			style="width: 100vw;height: 100vh;" :latitude="latitude" :longitude="longitude" :markers="markers"
			:polyline="polyline" :include-points="includePoints" />

		<!-- 操作区域 -->
		<uni-fab ref="fab" :pattern="fabOptions.pattern" :content="fabOptions.content"
			:horizontal="fabOptions.horizontal" :vertical="fabOptions.vertical" :direction="fabOptions.direction"
			@trigger="onTrigger" @fabClick="onFabClick" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude: '27.98605',
				longitude: '120.689264',
				markers: [],
				polyline: [],
				fabOptions: {
					horizontal: 'right',
					vertical: 'bottom',
					direction: 'vertical',
					pattern: {
						color: '#666666',
						selectedColor: '#333333',
						backgroundColor: '#fff',
						buttonColor: '#e7afb4',
						iconColor: '#fff'
					},
					content: [
						/* {
							iconPath: '/static/images/icons/定位.png',
							selectedIconPath: '/static/images/icons/定位.png',
							text: '路线',
							active: false
						}, */
						{
							iconPath: '/static/images/icons/定位.png',
							selectedIconPath: '/static/images/icons/定位.png',
							text: '导航',
							active: false
						},
						{
							iconPath: '/static/images/icons/手机.png',
							selectedIconPath: '/static/images/icons/手机.png',
							text: '联系我',
							active: false
						},
					]
				}
			}
		},
		computed: {
			includePoints() {
				return [
					...(this.markers.map(marker => ({
						latitude: marker.latitude,
						longitude: marker.longitude
					}))), {
						latitude: this.latitude,
						longitude: this.longitude
					},
				]
			}
		},
		mounted() {
			this.mapContext = uni.createMapContext('mapControl', this)
		},
		methods: {
			onTrigger(ev) {
				console.log("_trigger", ev)
				this.fabOptions.content.forEach((item, idx) => {
					item.active = false
					if (idx === ev.index) item.active = true
				})


				uni.showModal({
					title: '提示',
					content: `您${this.fabOptions.content[ev.index].active ? '选中了' : '取消了'}${ev.item.text}`,
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定')
						} else if (res.cancel) {
							console.log('用户点击取消')
						}
					}
				})
			},
			onFabClick() {
				console.log("_fabClick")
			},
			initPoints() {
				this.markers = [{
					id: 999,
					latitude: "27.98605",
					longitude: "120.689264",
					title: "目标1",
					callout: {
						anchorY: "-4",
						content: " 今天，酒水在这里！",
						color: "red",
						padding: 5,
						display: "BYCLICK",
						textAlign: "center"
					},
					iconPath: "../../../static/images/icons/酒水.png",
					width: 40,
					height: 40
				}, {
					id: 998,
					latitude: "27.986523",
					longitude: "120.688615",
					title: "目标2",
					width: "",
					height: "",
					callout: {
						anchorY: "-4",
						content: " 今天，我在这里！",
						color: "red",
						padding: 5,
						display: "ALWAYS",
						textAlign: "center"
					},
					iconPath: "../../../static/images/icons/美食.png",
					width: 40,
					height: 40
				}]
			},
			initPolyline() {

			},
			onMapTap(ev) {
				console.log("_onMapTap", ev)
			},
			onMapInit() {
				console.log("_map init")
				this.startLocation()
				this.initPoints()
			},
			startLocation(callback) {
				uni.getLocation({
					type: "gcj02",
					success: ({
						latitude,
						longitude
					}) => {
						console.log("_uni.getLocation", latitude, longitude)

						this.latitude = latitude;
						this.longitude = longitude;
						callback && callback()
					},
					fail: (err) => {
						console.log("_getLocation error")
					}
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	.map-control {
		width: 100vw;
		height: 100vh;
	}
</style>