<template>
	<div>
		<p>
			联系人
			<input type="text" placeholder="请输入联系人" v-model="names" />
		</p>
		<p>
			手机号
			<input type="text" placeholder="请输入手机号" v-model="phones" />
		</p>
		<p>
			地址
			<input type="text" placeholder="请输入小区，街道，大厦" v-model="streets" />
		</p>

		<button @click="btnok">完成</button>
	</div>
</template>

<script>
import request from '../utils/utils.js';
export default {
	props: [],
	data() {
		return {
			names: '',
			phones: '',
			streets: '',
		};
	},
	created() {
		// console.log(this.$route.query);
	},
	mounted() {
		// console.log(this.$route.query.item);
		if (this.$route.query.item === undefined) {
			return;
		}
		let { id, name, tel, address } = this.$route.query.item;
		console.log(id, name, tel, address);
		this.names = name;
		this.phones = tel;
		this.streets = address;
	},
	methods: {
		btnok() {
			console.log(22222222222);
			request
				.post('/add/address', { name: this.names, tel: this.phones, address: this.streets })
				.then(({ data }) => {
					if(data.result.affectedRows===1)
					{
						this.$router.push("/address")
					}
					console.log(data);
				});
		},
	},
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
}
p {
	width: 100%;
	height: 50px;
	line-height: 50px;
	border-bottom: 1px solid #ccc;
	color: rgb(71, 71, 71);
}
input {
	height: 90%;
	border: 0;
	margin-left: 20px;
}
button {
	width: 100%;
	height: 40px;
	background: orangered;
	margin-top: 30px;
	border: 0;
	color: #fff;
}
</style>
