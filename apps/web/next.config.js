const path = require("path");

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    AI_API_URL: process.env.AI_API_URL,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
      },
    ],
  },
};
