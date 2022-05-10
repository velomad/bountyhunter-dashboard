const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const Dotenv = require("dotenv-webpack");

const deps = require("./package.json").dependencies;
module.exports = (env) => {
  require("dotenv").config({ path: `./.env.${env.NODE_ENV}` });

  return {
    output: {
      publicPath: process.env.BASE_URL,
    },

    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
      alias: {
        store: path.resolve(__dirname, "src/store/"),
        components: path.resolve(__dirname, "src/components/"),
        elements: path.resolve(__dirname, "src/elements/"),
        layouts: path.resolve(__dirname, "src/layouts/"),
        utils: path.resolve(__dirname, "src/utils/"),
        hooks: path.resolve(__dirname, "src/hooks/"),
        assets: path.resolve(__dirname, "src/assets/"),
        locales: path.resolve(__dirname, "src/locales/"),
        i18n: path.resolve(__dirname, "src/i18n/"),
      },
    },

    devServer: {
      port: 8080,
      historyApiFallback: true,
    },

    module: {
      rules: [
        {
          test: /\.m?js/,
          type: "javascript/auto",
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(jpg|png|svg|woff|woff2|eot|truetype)$/,
          use: {
            loader: "url-loader",
          },
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        { test: /\.json$/, type: "json" },
      ],
    },

    plugins: [
      new Dotenv({
        path: `./.env.${env.NODE_ENV}`,
        safe: false,
      }),
      new ModuleFederationPlugin({
        name: "container",
        filename: "remoteEntry.js",
        remotes: {
        },
        exposes: {
        },
        shared: {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
        },
      }),
      new HtmlWebPackPlugin({
        template: "./src/index.html",
      }),
    ],
  };
};
