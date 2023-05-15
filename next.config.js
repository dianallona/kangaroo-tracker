/** @type {import('next').NextConfig} */
const path = require("path");
console.log(path.join(__dirname, "styles"));
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
