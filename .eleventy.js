module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("bundle.css");
    eleventyConfig.addPassthroughCopy("robots.txt");
    eleventyConfig.addPassthroughCopy("research/assets/*.{jpg,jpeg,png,gif,pdf,zip}");
    eleventyConfig.addPassthroughCopy("notes/*.ipynb");
    eleventyConfig.ignores.add("notes/ram-tutorial.html");
    eleventyConfig.addPassthroughCopy("notes/ram-tutorial.html");
    eleventyConfig.addFilter("isoDate", (date) => date.toISOString().split("T")[0]);
};