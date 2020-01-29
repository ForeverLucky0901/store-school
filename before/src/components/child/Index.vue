<template>
	<div class="index">
		<form action="/">
			<van-search @click="$router.push('/Address')" placeholder="请输入搜索关键词" v-model="value" />
		</form>

		<van-swipe :autoplay="1000" indicator-color="red">
			<van-swipe-item v-for="(item, index) in list" :key="index">
				<img class="img" :src="item.carousel_img" alt="" />
			</van-swipe-item>
		</van-swipe>
		<div class="nav">
			<dl>
				<dt><van-image width="50" height="50" round src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png.webp" /></dt>
				<dd>校园超市</dd>
			</dl>
			<dl>
				<dt><van-image width="50" height="50" round src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png.webp" /></dt>
				<dd>数码电器</dd>
			</dl>
			<dl>
				<dt><van-image width="50" height="50" round src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png.webp" /></dt>
				<dd>校园服饰</dd>
			</dl>
			<dl>
				<dt><van-image width="50" height="50" round src="//m.360buyimg.com/mobilecms/s120x120_jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png.webp" /></dt>
				<dd>校园生鲜</dd>
			</dl>
			<dl>
				<dt><van-image width="50" height="50" round src="//m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png.webp" /></dt>
				<dd>校园到家</dd>
			</dl>
			<dl>
				<dt><van-image width="50" height="50" round src="//m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png.webp" /></dt>
				<dd>校园充值</dd>
			</dl>
			<dl>
				<dt><van-image width="50" height="50" round src="//m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png.webp" /></dt>
				<dd>校园9.9</dd>
			</dl>
			<dl>
				<dt><van-image width="50" height="50" round src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png.webp" /></dt>
				<dd>领劵</dd>
			</dl>
			<dl>
				<dt><van-image width="50" height="50" round src="//m.360buyimg.com/mobilecms/s120x120_jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png.webp" /></dt>
				<dd>赚钱</dd>
			</dl>

			<dl>
				<dt><van-image width="50" height="50" round src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/22262/9/1470/4527/5c120cd0E5d3c6c66/4792ec307a853e9f.png.webp" /></dt>
				<dd>PLUS</dd>
			</dl>
		</div>
		<div>
			<van-tabs v-model="active" @change="fn">
				<van-tab v-for="(item, index) in tabs" :key="index" :title="item.good_type_text">
					<van-card
						v-for="(item, index) in newlist"
						:key="index"
						:price="item.good_price"
						:desc="item.good_desc"
						:title="item.good_name"
						:thumb="item.good_img"
					>
						<div slot="footer">
							<van-button plain type="primary" @click="add(item)">加入购物车</van-button>
						</div>
					</van-card>
				</van-tab>
			</van-tabs>
		</div>
	</div>
</template>

<script>
import request from '../../utils/utils.js';
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
	data() {
		return {
			value: '',
			active: 0,
			list: [],
			tabs: [],
			goodlist: [],
			newlist: [],
		};
	},
	methods: {
		...mapMutations(['add']),
		fn(name, title) {
			// console.log(name, title);
			// console.log(this.goodlist);
			this.newlist = this.goodlist.filter(item => item.good_type == name);
		},
		// addStore(item) {
		// 	this.add(item);
		// 	console.log(item);
		// },
	},
	mounted() {
		request.post('/carousel').then(({ data }) => {
			console.log(data.result);
			this.list = data.result;
		});
		request.post('/store/types').then(({ data }) => {
			// console.log(data.result);
			// this.list = data.result;
			this.tabs = data.result;
		});
		request.post('/store/list').then(({ data }) => {
			// console.log(data);
			this.goodlist = data.result;
			this.newlist = this.goodlist.filter(item => item.good_type == 1);
		});
	},
};
</script>

<style lang="scss">
.index {
	text-align: center;
	width: 100%;
	height: 100%;
	overflow: auto;
}
.footer
{
	float: right;
	width: 100px;
	height: 30px;
}
.img {
	width: 90%;
	height: 150px;
}
.nav {
	width: 100%;
	height: 200px;
	background: #fff;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	// line-height: 100px;
	dl {
		flex: 2;
	}
}
</style>
