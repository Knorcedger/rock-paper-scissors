module.exports = {
	extends: ['google', 'eslint:recommended', 'plugin:react/recommended'],
	rules: {
		indent: [2, 'tab'],
		'no-console': [0]
	},
	env: {
		browser: true,
		node: true,
		es6: true
	},
	plugins: ['react']
};
