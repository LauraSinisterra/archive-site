module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/assets/styles/img");

  return {
    dir: {
      input: "src",
    }
  }
};
