const path = require("path");

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    envAiApiUrl: process.env.AI_API_URL,
  },
};
