<template>
	<div>
		<form action="/">
			<van-search placeholder="请输入搜索关键词" v-model="value" @click="href" />
		</form>
		<div class="left">
			<van-sidebar v-model="activeKey">
				<van-sidebar-item
					:title="item.type"
					v-for="(item, index) in list"
					:key="index"
					@click="updateFn(item.id)"
				/>
			</van-sidebar>
		</div>

		<div class="right">
			<div v-for="(item, index) in render_list" :key="index">
				<van-card :price="item.price" :title="item.title" :thumb="item.img" origin-price="90.5" />
			</div>
		</div>
	</div>
</template>

<script>
import request from '../../utils/utils.js';
export default {
	data() {
		return {
			activeKey: 0,
			value: '',
			list: [],
			good_list: [],
			render_list: [],
		};
	},
	mounted() {
		request.post('/devide/list').then(({ data }) => {
			console.log(data.result);
			this.list = data.result;
		});
		request.post('/devide/list2').then(({ data }) => {
			console.log(data.result);
			this.good_list = data.result;
			this.updateFn(1);
		});
	},
	methods: {
		href() {
			this.$router.push('/search');
		},
		updateFn(type) {
			console.log(type);
			this.render_list = this.good_list.filter(item => {
				return item.type == type;
			});
			// console.log(newarr);
		},
	},
};
</script>

<style>
.left {
	float: left;
}
.right {
	float: right;
	width: 230px;
}
</style>
