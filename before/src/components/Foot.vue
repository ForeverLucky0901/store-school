<template>
	<div>
		<van-tabbar v-model="active">
			<van-tabbar-item name="home" icon="home-o" to="/home/index">首页</van-tabbar-item>
			<van-tabbar-item name="search" icon="qr-invalid" to="/home/devide">分类</van-tabbar-item>
			<van-tabbar-item name="friends" icon="logistics" to="/home/store">购物车</van-tabbar-item>
			<van-tabbar-item name="setting" icon="contact" to="/home/my">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
export default {
	data() {
		return {
			active: 'home',
		};
	},
};
</script>

<style></style>
