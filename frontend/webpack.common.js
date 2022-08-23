/*
 *   Copyright (c) 2021 AwesomestCode

 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU Affero General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.

 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU Affero General Public License for more details.

 *   You should have received a copy of the GNU Affero General Public License
 *   along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: ''
  },
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new WebpackPwaManifest({
      background_color: 'purple',
      description: 'Aquifer PWA (BETA)',
      display: 'standalone',
      /*icons: [
        {
          src: 'assets/icon.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ],*/
      name: 'Aquifer',
      short_name: 'Aquifer',
      start_url: '/index.html',
      ios: {
        'apple-mobile-web-app-title': 'Aquifer',
        'apple-mobile-web-app-status-bar-style': 'black-translucent'
      }
    }),
    new CopyPlugin({
      patterns: [
        { from: 'assets/', to: './' }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
