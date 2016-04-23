module.exports = {
	extends: ['google', 'eslint:recommended', 'plugin:react/recommended'],
	rules: {
		indent: [2, 'tab']
	},
	env: {
		browser: true,
		node: true,
		es6: true
	},
	plugins: ['react']
};
