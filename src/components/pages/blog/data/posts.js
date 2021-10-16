import fs from 'fs'
import matter from 'gray-matter'

export const getAllPosts = function(){
    const files = fs.readdirSync("src/blog");
    let articles = files.map( (file) => {
        const slug = file.split(".")[0]
        var data = fs
            .readFileSync(`src/blog/${file}`)
            .toString();

        data = {
            ...matter(data).data,
            slug: slug,
        };
        return data;
    });

    articles = articles.filter( i => (i.published === true));
    articles = articles.sort( (a,b) => {
        if( a.sprint != b.sprint ) return (a.sprint > b.sprint) ? -1 : 1;
        if( a.day != b.day ) return (a.day > b.day) ? -1 : 1;
        return (a.title > b.title) ? 1 : -1;
    })

    return articles
}

export const getTotalPages = function(size=10){
    var posts = getAllPosts();
    return Math.ceil(posts.length / size);
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