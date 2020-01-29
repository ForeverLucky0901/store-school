<template>
	<div class="login">
		<mt-header title="登录页面"></mt-header>
		<br>
		<br>
		
		<van-image width="100" height="100"  round src="https://pbs.twimg.com/media/ENQ5-cjVAAEYD8c?format=jpg&name=240x240" />
		<br>
		<br>
		<br>
		<br>
		<van-cell-group>
			<van-field
				v-model="username"
				required
				clearable
				label="用户名"
				right-icon="question-o"
				placeholder="请输入用户名"
				@click-right-icon="$toast('question')"
			/>

			<van-field
				v-model="password"
				type="password"
				right-icon="question-o"
				label="密码"
				placeholder="请输入密码"
				required
			/>
		</van-cell-group>
		<van-button type="default" @click="loginFn">登录</van-button>
		<van-button type="primary" @click="hrefFn">注册</van-button>
	</div>
</template>

<script>
import request from '../utils/utils.js';
export default {
	data() {
		return {
			password: '2020',
			username: 'yanpeng',
		};
	},
	mounted() {},
	methods: {
		loginFn() {
			// console.log(request);

			request.post('/login', { name: this.username, password: this.password }).then(({ data }) => {
				console.log(data);
				document.cookie = `token=${data.token};expires=1h`;
				this.$router.push('/home');
			});
		},
		hrefFn() {
			this.$router.push('/apply');
		},
	},
};
</script>

<style>
.login {
	text-align: center;
}
</style>
