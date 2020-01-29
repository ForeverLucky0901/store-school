<template>
	<div class="wrap">
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
import request from './utils/utils.js';
export default {
	mounted() {
		// request.post('/carousel/list', { type: 1 }).then(({ data }) => {
		// 	console.log(data);
		// });
	},
};
</script>

<style>
.wrap {
	width: 100%;
	height: 100%;
}
* {
	padding: 0;
	margin: 0;
	list-style: none;
	text-decoration: none;
	box-sizing: border-box;
}

html,
body,
#app {
	width: 100%;
	height: 100%;
}
</style>
