// webpack.config.js
module.exports = {
    // other webpack configurations...
  
    module: {
      rules: [
        // other rules...
  
        {
          test: /\.html$/,
          use: ['html-loader'],
        },
      ],
    },
  };
  