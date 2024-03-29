/** @type {import('@types/eslint').Linter.BaseConfig}*/
const config = {
	root: true,
	extends: ['@michaelhelvey/eslint-config/base'],
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json'],
	},
	env: {
		node: true,
		jest: true,
	},
	ignorePatterns: ['**/dist/**/*', '**/node_modules/**/*', '.eslintrc.cjs'],
}

export default config
