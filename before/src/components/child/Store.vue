<template>
	<div class="store">
		<div v-if="getlist.length == 0">
			<img
				src="http://img3.imgtn.bdimg.com/it/u=1837721985,2880452776&fm=26&gp=0.jpg"
				alt=""
			/>
		</div>
		<div v-else>
			<!-- {{ getlist }} -->
			<div v-for="(item, index) in getlist" :key="index">
				<van-checkbox v-model="item.singlecheck" @click="Checkitem(item.good_id)"></van-checkbox>
				<van-card
					:num="item.count"
					:price="item.good_price"
					:desc="item.good_desc"
					:title="item.good_name"
					:thumb="item.good_img"
				/>
				<van-submit-bar :price="getsum" button-text="提交订单" @submit="onSubmit"
					><van-checkbox v-model="flag" @click="checkall">全选</van-checkbox></van-submit-bar
				>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
import request from '../../utils/utils.js';
export default {
	data() {
		return {
			value: 0,
			sum: 0,
			num: 10,
			flag: true,
			result: [],
			list: [],
		};
	},

	computed: {
		...mapState(['storelist']),
		...mapGetters(['getsum', 'getlist']),
	},
	mounted() {
		this.Checkitem();
	},

	methods: {
		...mapMutations(['Checkitem']),
		checkall() {
			if (this.flag) {
				this.getlist.map(item => {
					return (item.check = true);
				});
			}
		},
		calcudes(value) {
			console.log(value);
		},

		onSubmit() {
			console.log(111111111111);
			// console.log(this.storelist)
			// request.post('/order/list', { list: this.storelist }).then(({ data }) => {
			// 	// console.log(data);
			// });
		},
	},
};
</script>

<style lang="scss">
.store {
	width: 100%;
	height: 100%;
	overflow: auto;
	position: relative;
}
img {
	width: 300px;
	height: 300px;
}

.van-submit-bar {
	position: static;
	bottom: 50px !important;
}
</style>
