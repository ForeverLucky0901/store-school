<template>
	<div class="search">
		搜索页
		<span class="header">{{ $route.meta.title }}</span>
		<div class="nav">
			<p><span>北京></span><van-search placeholder="搜索地址" v-model="value" /></p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: '',
		};
	},
};
</script>

<style lang="scss">
.search {
	width: 100%;
	height: 100%;
	text-align: center;
	display: flex;
	flex-direction: column;
	.nav {
		width: 100%;
		height: 50px;
		p {
			span {
				float: left;
			}
		}
	}

	.content {
		width: 100%;
		flex: 1;
		// background: #f00;
		position: relative;
		.ul {
			width: 100%;
			height: auto;
			text-align: left;
			li {
				width: 100%;
				height: 80px;
			}
		}
		h6 {
			float: left;
			padding-left: 10px;
		}
		h5 {
			float: left;
			padding-left: 10px;
		}
	}
}
</style>
