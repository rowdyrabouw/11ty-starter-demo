module.exports = {
	plugins: {
		tailwindcss: "./tailwind.config.js",
		autoprefixer: {},
		cssnano: {
			preset: [
				"default",
				{
					discardComments: {
						removeAll: true,
					},
				},
			],
		},
	},
};
