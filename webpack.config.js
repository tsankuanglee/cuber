'use strict'
var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
var FriendlyErrors = require('friendly-errors-webpack-plugin')

module.exports = {
	context: __dirname,

	entry: {
		help: './javascripts/help/index.js',
		home_faculty: './javascripts/home_faculty/index.js',
		home_student: './javascripts/home_student/index.js',
		my_profile: './javascripts/my_profile/index.js',
		course_overview: './javascripts/course_overview/index.js',
		course_settings_general: './javascripts/course_settings/general/index.js',
		course_user_management: './javascripts/course_user_management/index.js',
		course_team_management: './javascripts/course_team_management/index.js',
		discussions: './javascripts/discussions/index.js',
		discussions_popup: './javascripts/discussions_popup/index.js',
		course_content_instructions: './javascripts/course_content_instructions/index.js',
		course_content_rubric: './javascripts/course_content_rubric/index.js',
	},

	output: {
		path: path.resolve('./static/bundles/'),
		filename: "[name]-[hash].js",
		//publicPath: // used for external source, e.g. S3
	},

	plugins: [
		new BundleTracker({filename: './webpack-stats.json'}),
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			filename: "vendor.js",
			minChunks: function (module) {
			   // this assumes your vendor imports exist in the node_modules directory
			   return module.context && module.context.indexOf('node_modules') !== -1;
			},
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: "commons",
			filename: "commons.js",
			children: true,
		}),
		//CommonChunksPlugin will now extract all the common modules from vendor and main bundles
		//But since there are no more common modules between them we end up with just the runtime 
		//code included in the manifest file
		new webpack.optimize.CommonsChunkPlugin({ 
			name: 'manifest',
			minChunks: Infinity,
		}),
		// TODO We can't use this before moving all javascripts into webpack imports
		//new webpack.ProvidePlugin({
		//	$: "jquery",
		//	jQuery: "jquery",
		//	"window.jQuery": "jquery"
		//}),
		new FriendlyErrors(),
		

	],

	module: {
		loaders: [
		{
			// to transform JSX into JS
			loader: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/,
			query: {
				presets: ['vue-app'],
			}
		},
		{
			loader: 'vue-loader',
			test: /\.vue$/,
		},
		{
			loader: ['css-loader'],
			test: /\.css$/,
		},
		{
			loader: 'file-loader?publicPath=/static/bundles/&name=fonts/[name].[ext]',
			test: /\.(png|gif|eot|svg|ttf|woff|woff2)$/,
		},
		{
			loader: 'file-loader?publicPath=/static/bundles/&name=img/[name].[ext]',
			test: /\.(png|gif|jpg|jpeg)$/,
		}
		],
	},

	resolve: {
		modules: ['node_modules'],
		extensions: ['.js', '.jsx', '.vue', '.json'],
		alias: {
			//'vue$': 'vue/dist/vue.js'
			'vue$': 'vue/dist/vue.runtime.js',
		},
	},
	
	externals: {
		//'vue': 'vue',
		//'vue-resource-2': 'vue-resource-2',
		'converse': 'converse',
	},
}
