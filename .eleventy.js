module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("bundle.css");
    eleventyConfig.addPassthroughCopy("robots.txt");
    eleventyConfig.ignores.add("google6e603d039f038c5a.html");
    eleventyConfig.addPassthroughCopy("google6e603d039f038c5a.html");
    eleventyConfig.addPassthroughCopy("research/assets/*.{jpg,jpeg,png,gif,pdf,zip}");
    eleventyConfig.addPassthroughCopy("notes/*.ipynb");
    eleventyConfig.ignores.add("notes/ram-tutorial.html");
    eleventyConfig.addPassthroughCopy("notes/ram-tutorial.html");
    eleventyConfig.ignores.add("notes/tilt_matching_tutorial.html");
    eleventyConfig.addPassthroughCopy("notes/tilt_matching_tutorial.html");
    eleventyConfig.ignores.add("notes/flow_map_101.html");
    eleventyConfig.addPassthroughCopy("notes/flow_map_101.html");
    eleventyConfig.ignores.add("notes/diffusion_opd_101.html");
    eleventyConfig.addPassthroughCopy("notes/diffusion_opd_101.html");
    eleventyConfig.addFilter("isoDate", (date) => date.toISOString().split("T")[0]);
};
