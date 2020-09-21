module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [],
	purge:
		process.env.NODE_ENV === "production"
			? {
					mode: "all",
					enabled: true,
					preserveHtmlElements: false,
					content: ["./src/**/*.njk", "./src/**/*.md"],
			  }
			: {},
};
