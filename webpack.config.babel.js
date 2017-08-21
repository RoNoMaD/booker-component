import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
const ENV = process.env.NODE_ENV || 'development';

const CSS_MAPS = ENV !== 'production';

let API_ENDPOINT;
let MEDIAS_ENDPOINT;
if (process.env.BOOKER_ENV == 'staging') {
  API_ENDPOINT = JSON.stringify(
    'https://staging-open-api.myeasyloisirs.com/v1'
  );
  MEDIAS_ENDPOINT = JSON.stringify('https://staging-medias.myeasyloisirs.com');
} else if (process.env.BOOKER_ENV == 'preprod') {
  API_ENDPOINT = JSON.stringify(
    'https://preprod2-api.myeasyloisirs.com/api/v1'
  );
  MEDIAS_ENDPOINT = JSON.stringify('https://preprod-medias.myeasyloisirs.com');
} else if (process.env.BOOKER_ENV == 'review') {
  API_ENDPOINT = JSON.stringify(
    'https://preprod-open-api.myeasyloisirs.com/v1'
  );
  MEDIAS_ENDPOINT = JSON.stringify('https://review-medias.myeasyloisirs.com');
} else if (process.env.BOOKER_ENV == 'prod') {
  API_ENDPOINT = JSON.stringify(
    'https://preprod-open-api.myeasyloisirs.com/v1'
  );
  MEDIAS_ENDPOINT = JSON.stringify('https://medias.myeasyloisirs.com');
  // } else (process.env.BOOKER_ENV == 'local') {
} else {
  API_ENDPOINT = JSON.stringify(
    'https://staging-open-api.myeasyloisirs.com/v1'
  );
  MEDIAS_ENDPOINT = JSON.stringify('https://staging-medias.myeasyloisirs.com');
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    library: 'booker',
    libraryTarget: 'umd' // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
    // libraryTarget: 'commonjs2' // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        // Transform our own .(scss|css) files with PostCSS and CSS-modules
        test: /\.(s[ac]ss|css)$/,
        include: [
          path.resolve(__dirname, 'src/components'),
          path.resolve(__dirname, 'src/routes')
        ],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: !CSS_MAPS,
                modules: true,
                sourceMap: CSS_MAPS,
                importLoaders: 1,
                localIdentName: '[local]__[hash:base64:5]'
              }
            },
            {
              loader: `postcss-loader`,
              options: {
                sourceMap: CSS_MAPS,
                plugins: () => {
                  autoprefixer({ browsers: ['last 2 versions'] });
                }
              }
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: CSS_MAPS }
            }
          ]
        })
      },
      {
        test: /\.(s[ac]ss|css)$/,
        exclude: [
          path.resolve(__dirname, 'src/components'),
          path.resolve(__dirname, 'src/routes')
        ],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: !CSS_MAPS,
                sourceMap: CSS_MAPS,
                importLoaders: 1
              }
            },
            {
              loader: `postcss-loader`,
              options: {
                sourceMap: CSS_MAPS,
                plugins: () => {
                  autoprefixer({ browsers: ['last 2 versions'] });
                }
              }
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: CSS_MAPS }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true,
      disable: ENV !== 'production'
    }),
    new webpack.DefinePlugin({
      API_ENDPOINT: API_ENDPOINT,
      MEDIAS_ENDPOINT: MEDIAS_ENDPOINT
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    })
  ],
  externals: {
    preact: 'preact' // this line is just to use the Preact dependency of our parent-testing-project instead of using our own Preact.
    // preact: 'commonjs preact' // this line is just to use the Preact dependency of our parent-testing-project instead of using our own Preact.
  },
  devtool: ENV === 'production' ? 'source-map' : 'cheap-module-eval-source-map'
};
