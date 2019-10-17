<template>
  <view class="container">
    <view class="status_bar"></view>
    <view class="box" @tap="linkTo">
      引导
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    linkTo() {
      uni.navigateTo({
				url: '../index/index'
			});
    },

  },
}
</script>

<style lang="scss">
.container {
  .box {
    width: 300rpx;
    height: 300rpx;
  }
}
</style>