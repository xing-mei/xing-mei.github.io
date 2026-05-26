module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("bundle.css");
    eleventyConfig.addPassthroughCopy("research/assets/*.{jpg,jpeg,png,gif,pdf,zip}");
    eleventyConfig.addFilter("isoDate", (date) => date.toISOString().split("T")[0]);
};