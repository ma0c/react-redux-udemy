var path = require('path');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, "./app.jsx"),
    output: {
        path: __dirname,
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
}

