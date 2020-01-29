<template>
	<div class="my">
		<div class="top">
			<h2>我的昵称</h2>
			<br />
			<br />
			<h3>开启美好的一天....</h3>
			<img
				src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578282063029&di=2bd06ce6b063322a27882acec00fce0d&imgtype=0&src=http%3A%2F%2F58pic.ooopic.com%2F58pic%2F12%2F81%2F77%2F67V58PICtyp.jpg"
			/>
		</div>
		<div class="order">
			<p>我的订单 <span>查看全部></span></p>
			<br />
			<br />
			<img src="../../assets/my.jpg" alt="" />
		</div>
		<div class="youhui">
			<van-coupon-cell title="我的优惠券" />
			<van-coupon-cell title="资质规则" />
			<van-coupon-cell title="联系客服" />
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},

	methods: {},
};
</script>

<style lang="scss" scoped>
.my {
	width: 100%;
	height: 100%;
	position: relative;
	.youhui {
		position: absolute;
		bottom: 30px;
		width: 280px;
		height: 150px;
		left: 18px;
		border-radius: 6%;
		border: 1px solid #ccc;
	}
	.order {
		position: absolute;
		width: 280px;
		height: 150px;
		border: 1px solid #ccc;
		background: #fff;
		// margin: 0 auto;
		left: 18px;
		top: 98px;
		z-index: 18;
		border-radius: 6%;
		p {
			text-align: left;
			padding-left: 10px;
			padding-top: 10px;
			span {
				float: right;
				color: #ccc;
				padding-right: 10px;
			}
		}
		img {
			width: 100%;
			height: 50px;
		}
	}
}
.top {
	width: 100%;
	height: 135px;
	background: #ff3300;
	color: #fff;
	h3 {
		float: left;
	}
	h2 {
		float: left;
	}
	img {
		width: 40px;
		height: 40px;
		float: right;
		margin-right: 30px;
		border-radius: 50%;
	}
}
</style>
