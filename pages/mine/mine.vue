<template>
	<view class="container">
		<view class="head">
			<view class="blur-bg"></view>
			<view class="info">
				<view class="avatar"></view>
				<view class="base-info">
					<view class="nickname">Smiling</view>
					<view class="description">这里是描述</view>
				</view>
			</view>
			<view class="card">
				<view class="card-item">
					<view class="icon-wrap like-icon"></view>
					喜欢
				</view>
				<view class="card-item">
					<view class="icon-wrap"></view>
					占位符
				</view>
				<view class="card-item">
					<view class="icon-wrap"></view>
					占位符
				</view>
			</view>
		</view>
		<view class="opera-wrap">
			<view class="opera-item">
				<view class="icon-setting"></view>
				<view class="text">店铺设置</view>
				<view class="icon-right">
					<u-icon name="arrow-right" color="#f2f2f2"></u-icon>
				</view>
			</view>
			<view class="opera-item">
				<view class="icon-phone"></view>
				<view class="text">联系我</view>
				<view class="icon-right">
					<u-icon name="arrow-right" color="#f2f2f2"></u-icon>
				</view>
			</view>
		</view>
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
	.container {
		width: 100vw;
		min-height: 100vh;
		background-color: #f8f8f8;

		.head {
			box-sizing: border-box;
			padding-top: 180rpx;
			position: relative;
			width: 100%;
			height: 520rpx;

			.blur-bg {
				position: absolute;
				left: 0;
				top: 0;
				z-index: 1;
				width: 100%;
				height: 520rpx;
				// border-radius: 16rpx;
				background: #ffe66e;
				filter: blur(5px);
			}

			.info {
				padding: 0 32rpx;
				position: relative;
				z-index: 3;
				width: 686rpx;
				min-height: 220rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.avatar {
					margin-right: 24rpx;
					overflow: hidden;
					width: 132rpx;
					height: 132rpx;
					background: #f8f8f8;
					border: 2px solid #ffffff;
					border-radius: 50%;
				}

				.base-info {
					color: #ffffff;
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: flex-start;
					align-items: flex-start;

					.nickname {
						font-size: 48rpx;
						font-weight: 500;
					}
				}
			}

			.card {
				position: absolute;
				bottom: -90rpx;
				left: 50%;
				transform: translateX(-50%);
				z-index: 4;
				width: 686rpx;
				height: 180rpx;
				color: #333333;
				background: #ffffff;
				border-radius: 24rpx;
				box-shadow: 0 0 4px 1px #f8f8f8;
				display: flex;
				align-items: center;

				.card-item {
					flex: 1;
					display: flex;
					flex-direction: column;
					align-items: center;
					font-size: 28rpx;
					font-weight: 500;

					.icon-wrap {
						width: 88rpx;
						height: 88rpx;
						background: #f8f8f8;
						margin-bottom: 6rpx;

						&.like-icon {
							background: url("../../static/images/icons/喜欢.png") no-repeat center/88rpx 88rpx;
						}
					}
				}
			}
		}

		.opera-wrap {
			overflow: hidden;
			position: relative;
			width: 686rpx;
			color: #333333;
			border-radius: 16rpx;
			margin-top: 120rpx;
			margin-left: 32rpx;

			.opera-item {
				position: relative;
				padding: 24rpx 32rpx;
				min-height: 96rpx;
				background: #ffffff;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				justify-content: flex-start;

				&::after {
					content: "";
					position: absolute;
					left: 24rpx;
					bottom: 0;
					width: calc(100% - 48rpx);
					height: 1rpx;
					background: #f8f8f8;
				}

				&:nth-last-of-type(1) {
					&::after {
						background: transparent;
					}
				}

				.icon-setting {
					width: 48rpx;
					height: 48rpx;
					background: url("../../static/images/icons/设置.png") no-repeat center/48rpx 48rpx;
				}

				.icon-phone {
					width: 48rpx;
					height: 48rpx;
					background: url("../../static/images/icons/手机.png") no-repeat center/48rpx 48rpx;
				}

				.text {
					margin-left: 18rpx;
				}

				.icon-right {
					flex: 1;
					display: flex;
					justify-content: flex-end;
				}
			}
		}
	}
</style>