<template>
	<h1>useAuth()</h1>
	<!-- <h3>내 포인트</h3>{{ point[0].cur }} -->
	<h3>await getCsrfToken()</h3>
	{{ csrfToken }}
	<h3>useFetch("/api/token")</h3>
	{{ token }}
	<h3>useAuth().{status}</h3>
	{{ useAuth().status }}
	<h3>useAuth().{lastRefreshedAt}</h3>
	{{ useAuth().lastRefreshedAt }}
	<h3>useAuth().{smem_uid}</h3>
	{{ useAuth().data.value.user?.smem_uid }}
	<h3>useAuth().{name}</h3>
	{{ useAuth().data.value.user.name }}
	<h3>useAuth().{session}</h3>
	{{ useAuth().data }}

	<h3>await getSession()</h3>
	{{ session }}
	<h3>await getProviders()</h3>
	{{ providers }}

	<h3>status</h3>
	{{ status }}
	<h3>data</h3>
	{{ data }}
	<h3>lastRefreshedAt</h3>
	{{ lastRefreshedAt }}

	<h3>await useFetch("/api/auth/session")</h3>
	{{ fetchGetSession }}
	<h3>await useFetch("/api/auth/csrf")</h3>
	{{ fetchGetCsrf }}
	<h3>await useFetch("/api/auth/providers")</h3>
	{{ fetchGetProviders }}

	<h3>await useFetch("/api/auth/signin")</h3>
	{{ fetchGetSignin }}
	<h3>await useFetch("/api/auth/signin/github")</h3>
	{{ fetchGetSigninGithub }}
	<h3>await useFetch("/api/auth/callback/github")</h3>
	{{ fetchGetCallbackGithub }}
	<h3>await useFetch("/api/auth/signout")</h3>
	{{ fetchGetSignout }}

	<h3>getCsrfToken</h3>
	{{ getCsrfToken }}
	<h3>getProviders</h3>
	{{ getProviders }}
	<h3>getSession</h3>
	{{ getSession }}
</template>

<script setup>
	// import { PrismaClient } from "@prisma/client";
	// const prisma = new PrismaClient();

	const { status, data, lastRefreshedAt, getCsrfToken, getProviders, getSession, signIn, signOut } = useAuth();
	const csrfToken = await getCsrfToken();
	const providers = await getProviders();
	const session = await getSession();

	const fetchGetSession = await useFetch("/api/auth/session");
	const fetchGetCsrf = await useFetch("/api/auth/csrf");
	const fetchGetProviders = await useFetch("/api/auth/providers");

	const fetchGetSignin = await useFetch("/api/auth/signin");
	const fetchGetSigninGithub = await useFetch("/api/auth/signin/github");
	const fetchGetCallbackGithub = await useFetch("/api/auth/callback/github");
	const fetchGetSignout = await useFetch("/api/auth/signout");

	// https://sidebase.io/nuxt-auth/server-side/jwt-access
	// const headers = useRequestHeaders(["cookie"]) as HeadersInit;
	// const { data: token } = await useFetch("/api/token", { headers });
	const { data: token } = await useFetch("/api/token");
	// const point = await prisma.$queryRaw`
	// 	select cur from e4ds.POINT_cur
	// 	where smem_uid = ${useAuth().data.value.user?.smem_uid}`;
</script>
