//webpack have made by node.js using ES5 therefor we can use export
const path = require("path");
const rules = [
  {
    //regular expresion
    test: /\.tsx?/, // will use babel loader for any file ends with jsx
    exclude: /node_mosules/,
    loader: "babel-loader",
  },
];
module.exports = {
  target: "web", // app or anything we want to  export our target to
  mode: "development", // testing or production
  entry: "./src/index.tsx", //
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js", // output  and to put it in index.html
  },
  module: { rules },
  resolve: {
    extensions: [".ts", ".tsx", "js"]
  }, // to write each file when we import it without these extentions
  devServer: {
    contentBase: "./", // root
    port: 5000, // can any port
  }
};
