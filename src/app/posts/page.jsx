import React from 'react';

const PostsPage = async() => {

    // normal Easy way-1 to data fetching in next.js
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    return (
        <div>
            <h1>Posts is Coming Soon....{posts.length}</h1>
        </div>
    );
};

export default PostsPage;