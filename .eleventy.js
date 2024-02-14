module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("bundle.css");
    eleventyConfig.addPassthroughCopy("**/*.{jpg,jpeg,png,gif,pdf,zip}");
};