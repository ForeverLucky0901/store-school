<template>
	<div class="address">
		<span class="header">{{ $route.meta.title }}</span>
		<div class="nav">
			<p><span>北京></span><van-search placeholder="搜索地址" v-model="value" /></p>
		</div>
		<div class="content">
			<br />
			<h6>定位到当前位置</h6>
			<br />
			<h5>历史记录</h5>
			<br />
			<ul class="ul" v-if="list.length == 0">
				<van-icon name="location-o" />
			</ul>
			<ul class="ul" v-else>
				<van-address-list
					v-model="chosenAddressId"
					:list="list"
					default-tag-text="默认"
					@add="onAdd"
					@edit="onEdit"
				>
				</van-address-list>
			</ul>
		</div>
	</div>
</template>

<script>
import request from '../utils/utils.js';
export default {
	data() {
		return {
			value: '',
			list: [],
			flag: true,
			chosenAddressId: '1',
		};
	},
	mounted() {
		request.post('/address/list').then(({ data }) => {
			console.log(data.result);
			this.list = data.result;
		});
	},
	methods: {
		onAdd(item, index) {
			// Toast('新增地址');
			console.log(111111111111);
			// console.log(item, index);
			this.$router.push('/edit');
		},
		onEdit(item, index) {
			// Toast('编辑地址:' + index);
			console.log(item);
			this.$router.push({
				path: '/edit',
				query: {
					item,
				},
			});
		},
		deleteFn() {
			console.log();
		},
	},
};
</script>

<style lang="scss">
.address {
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
				margin-top: 15px;
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
