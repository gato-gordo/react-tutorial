module.exports = {
  context: __dirname + "/src",
  entry: "./helloworld.js",

  output: {
    filename: "helloworld.js",
    path: __dirname + "/build",
  },
	module: {
	  loaders: [
	    {
	      test: /\.js$/,
	      exclude: /node_modules/,
	      loaders: ["babel-loader"],
	    }
	  ],
	}
}