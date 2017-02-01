// Configuration data
// Main events: webpack will get the file from entry point (Main.js), run through transformation (es2015, react),
// and spit out to output (bundle.js)


module.exports = {
	// Specify the root component to start processing jsx
  entry: "./app/components/Main.js",
  output: {
  	// Output of compiling file
    filename: "public/bundle.js"
  },
  module: {
  	// Loaders to load the programs and libraries
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
        	// Presets: all transformations that babel will do to our code
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}