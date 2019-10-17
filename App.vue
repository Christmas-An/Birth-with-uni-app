<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "./comStyle/style.scss";
	
	body {
		background: #FFF;
	}

	view {
		font-size: 24rpx;
		color: #333;
	}

	image {
		display: inline-block;
		vertical-align: middle;
	}
</style>
