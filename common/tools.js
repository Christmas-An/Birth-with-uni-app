// 弹框
export function toast(value ){
	uni.showToast({
		icon:'none',
		title: value,
		mask: true
	})
}
// 加载
export function loading() {
	uni.showLoading({
		title: '加载中',
		mask: true
	})
}

