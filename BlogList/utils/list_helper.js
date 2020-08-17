const _ = require("lodash");
const dummy = (blogs) => {
    return 1;
};
const totalLikes = (blogs) => {
    const reducer = (accumulator, blog) => {
        return accumulator + blog.likes;
    };
    return blogs.length === 0 ? 0 : blogs.reduce(reducer, 0);
};
const favoriteBlog = (blogs) => {
    return blogs.reduce((prev, current) => (prev.likes > current.likes ? prev : current), 0);
};
const mostBlogs = (blogs) => {
    const result = _.chain(blogs)
        .countBy("author")
        .map((blogs, author) => ({author, blogs}))
        .sortBy("blogs")
        .last()
        .value();
    return result;
};
const mostLikes = (blogs) => {
    const result = _.chain(blogs)
        .groupBy("author")
        .map((obj, key) => ({author: key, likes: _.sumBy(obj, "likes")}))
        .sortBy("likes")
        .last()
        .value();
    return result;
};
module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes,
};
