module.exports = {
	mode: process.env.ELEVENTY_ENV || "development",
	entry: {
		app: __dirname + "/src/js/script.js",
	},
	output: {
		path: __dirname + "/src/static/js", // `/dist` is the destination
		filename: "script.js", // bundle created by webpack it will contain all our app logic. we will link to this .js file from our html page.
	},
	module: {
		rules: [
			{
				test: /\.js$/, // rule for .js files
				exclude: /node_modules/,
				loader: "babel-loader", // apply this loader for js files
			},
		],
	},
};
