module.exports = {
  webpack: (config, options) => {
    const assetPrefix = options.assetPrefix || "";

    const cssRule = {
      test: /\.css$/i,
      use: ["to-string-loader", "css-loader"],
    };
    config.module.rules.push(cssRule);

    const fontsRule = {
      test: /\.(woff|woff2)$/i,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 8192,
            fallback: "file-loader",
            publicPath: `${assetPrefix}/_next/static/fonts/`,
            outputPath: `${options.isServer ? "../" : ""}static/fonts/`,
            name: "[name]-[hash].[ext]",
          },
        },
      ],
    };
    config.module.rules.push(fontsRule);

    // const svgRule = {
    //   test: /\.svg$/i,
    //   loader: 'svg-inline-loader'
    // }
    // config.module.rules.push(svgRule);

    return config;
  },
};
