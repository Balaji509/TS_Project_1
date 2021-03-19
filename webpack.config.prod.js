const path = require('path'); //built-in node.js module
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    mode:'production',
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js', //you can include your required name
        path:path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            {
                test:/\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts','.js']
    },
    plugins: [
         new CleanPlugin.CleanWebpackPlugin()
    ]
};