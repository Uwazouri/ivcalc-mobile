module.exports = {
    entry: './src/js/main.js',
    output: {
        path: __dirname + '/tmp',
        filename: 'index.js'
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
}