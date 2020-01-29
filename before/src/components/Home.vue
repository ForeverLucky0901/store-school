<template>
	<div class="home">
		<span class="header">{{ $route.meta.title }}</span>
		<div class="main">
			<router-view></router-view>
		</div>
		<Foot class="footer"></Foot>
	</div>
</template>
<script>
import Foot from './Foot';
export default {
	data() {
		return {
			value: '',
		};
	},
	components: {
		Foot,
	},
};
</script>
<style lang="scss">
.home {
	text-align: center;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	.header {
		width: 100%;
		height: 44px;
	}
	.main {
		overflow: auto;
		flex: 1;
	}
	.footer {
		width: 100%;
		height: 44px;
	}
}
</style>
