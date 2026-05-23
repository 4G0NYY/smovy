const isRootAppBuild = process.cwd() === __dirname;

module.exports = {
  plugins: [
    isRootAppBuild ? require("tailwindcss") : null,
    isRootAppBuild ? require("postcss-rtlcss") : null,
    require("autoprefixer"),
  ].filter(Boolean),
}
