const collections = require('./utils/collections.js');
const filters = require('./utils/filters.js');
const transforms = require('./utils/transforms.js');
const ErrorOverlay = require('eleventy-plugin-error-overlay');

module.exports = function (eleventyConfig) {
	// folders to copy to build dir
	eleventyConfig.addPassthroughCopy({ 'src/.temp/css': 'css' });
	eleventyConfig.addPassthroughCopy({ 'src/.temp/img': 'img' });
	eleventyConfig.addPassthroughCopy({ 'src/.temp/js': 'js' });

	// shows 11ty error name, message and stacktrace in the browser
	eleventyConfig.addPlugin(ErrorOverlay);

	// collections
	Object.keys(collections).forEach((collectionName) => {
		eleventyConfig.addCollection(collectionName, collections[collectionName]);
	});

	// filters
	Object.keys(filters).forEach((filterName) => {
		eleventyConfig.addFilter(filterName, filters[filterName]);
	});

	// transforms
	Object.keys(transforms).forEach((transformName) => {
		eleventyConfig.addTransform(transformName, transforms[transformName]);
	});

	// allows Eleventy to watch for file changes during local development
	eleventyConfig.setUseGitIgnore(false);

	return {
		dir: {
			input: 'src',
			output: 'dist',
			includes: '_templates',
			layouts: '_layouts',
			data: '_data',
		},
		templateFormats: ['html', 'md', 'njk'],
		htmlTemplateEngine: 'njk',

		// enable eleventy to pass dirs specified above
		passthroughFileCopy: true,
	};
};
