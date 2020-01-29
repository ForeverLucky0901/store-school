<template>
	<div>
		<mt-header >
			<router-link to="/login" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<van-cell-group>
			<van-field v-model="username" required label="用户名" placeholder="请输入用户名" />
			<van-field v-model="phone" required label="手机号" placeholder="请输入手机号" />
			<van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
				<van-button slot="button" size="small" required type="primary">发送验证码</van-button>
			</van-field>
			<van-field
				v-model="password"
				type="password"
				label="密码"
				placeholder="请输入密码"
				required
			/>
		</van-cell-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			message: '',
			password: '',
			username: '',
			phone: '',
			sms: '',
		};
	},
};
</script>

<style></style>
