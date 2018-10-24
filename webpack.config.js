module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.sj'
    },
}
module: {
    loader: [
        {
            test: /\.js$/,
            loader: 'babel-loader'
        } 
    ]
}
};
