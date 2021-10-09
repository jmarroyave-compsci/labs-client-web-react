import fs from 'fs'
import matter from 'gray-matter'

export const getTotalPages = function(size=10){
    var posts = getAllPosts();
    return Math.ceil(posts.length / size);
}

export const getAllPosts = function(){
    const files = fs.readdirSync("src/blog");
    let articles = files.map( (file) => {
        const slug = file.split(".")[0]
        const data = fs
            .readFileSync(`src/blog/${file}`)
            .toString();
        return {
            ...matter(data).data,
            slug: slug,
        };
    });
    return articles
}

export const getPosts = function(page, size=10){
    const skip = ( page - 1 ) * size;
    return getAllPosts().slice(skip, skip + size)
}

export const getPost = function(slug){
    const content = fs
        .readFileSync(`src/blog/${slug}.md`)
        .toString();
    const info = matter(content);
    const article = {
        meta: {
            ...info.data,
            slug
        },
        content: info.content
    }
    return article;
}