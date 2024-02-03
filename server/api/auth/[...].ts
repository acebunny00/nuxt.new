import { NuxtAuthHandler } from "#auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";

export default NuxtAuthHandler({
	secret: process.env.AUTH_SECRET || "my-auth-secret",
	pages: { signIn: "/login" },
	providers: [
		// @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
		CredentialsProvider.default({
			name: "Credentials",
			credentials: {
				username: { label: "Username", type: "text", placeholder: "(hint: jsmith)" },
				password: { label: "Password", type: "password", placeholder: "(hint: hunter2)" },
			},
			authorize(credentials: any) {
				console.warn("ATTENTION: You should replace this with your real providers or credential provider logic! The current setup is not safe");
				const user = { id: "1", name: "J Smith", image: "https://randomuser.me/api/portraits/women/84.jpg", username: "jsmith", password: "hunter2" };
				if (credentials?.username === user.username && credentials?.password === user.password) {
					return user;
				} else {
					console.error("Warning: Malicious login attempt registered, bad credentials provided");
					return null;
				}
			},
		}),
		// @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
		GithubProvider.default({
			clientId: process.env.GITHUB_CLIENT_ID || "enter-your-client-id-here",
			clientSecret: process.env.GITHUB_CLIENT_SECRET || "enter-your-client-secret-here",
		}),
	],
});
