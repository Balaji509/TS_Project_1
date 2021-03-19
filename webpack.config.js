const path = require('path'); //built-in node.js module

module.exports = {
    mode:'development',
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js', //you can include your required name
        path:path.resolve(__dirname,'dist'),
        publicPath: '/dist/'
    },
    devtool: 'inline-source-map',
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
    }
};