module.exports = {
	apps: [
		{
			name: "NuxtAppName",
			port: "3000",
			exec_mode: "cluster",
			// instances: "max",
			instances: "2",
			script: "./.output/server/index.mjs",
		},
	],
};

// npx pm2 start
// npx pm2 stop
// npx pm2 restart
// npx pm2 reload
// npx pm2 delete
// npx pm2 logs
