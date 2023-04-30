import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  staticDirs: ["../static"],
  docs: {
    autodocs: "tag",
  },
  webpackFinal: (config) => {
    config.module?.rules?.push({
      test: /\.s(a|c)ss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 1, // We always need to apply postcss-loader before css-loader
            modules: {
              auto: /\.module\.scss$/, // true
            },
          },
        },
        {
          loader: "postcss-loader", // required for tailwind
          options: {
            implementation: require("postcss"), // postcss 8
            postcssOptions: {
              config: path.resolve(__dirname, "../postcss.config.js"),
            },
          },
        },
      ],
    });
    return config;
  },
};
export default config;
