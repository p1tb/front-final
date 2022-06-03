<template>
	<nav>
		<div v-if="user">
			<p>Welcome, {{ user.displayName }}!</p>
			<p class="email">You are logged in with email {{ user.email }}</p>
		</div>
		<button @click="handleClickLogout">Log Out</button>
	</nav>
</template>

<script setup>
import { watchEffect } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import useLogout from "../composables/useLogout";
import { user } from "../composables/useUser";

const { error, logout } = useLogout();
const router = useRouter();

const handleClickLogout = async () => {
	await logout();

	if (!error.value) {
		router.push("/");
	} else {
		console.log(error.value);
	}
};

watchEffect(() => {
	if (!user.value) {
		router.push("/");
	}
}, user);
</script>

<style>
nav {
	padding: 20px;
	border-bottom: 1px solid #eee;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
nav p {
	margin: 2px auto;
	font-size: 16px;
	color: #444;
}
nav p.email {
	font-size: 14px;
	color: #999;
}
</style> 