module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
//    alias: {
//      Main: 'app/components/Main.jsx',
//      PetList: 'app/components/PetList.jsx',
//      PetListItems: 'app/components/PetListItems.jsx',
//      Selections: 'app/components/Selections.jsx',
//      applicationStyles: 'app/styles/app.scss'
//    },
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
