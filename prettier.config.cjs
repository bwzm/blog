const personalConfig = require('@michaelhelvey/prettier-config')

/** @type {import('@types/prettier').Config */
module.exports = {
	...personalConfig,
	plugins: ['prettier-plugin-astro'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
}
