
{/*way-2 Globally normal Easy  to data fetching in next.js*/}
const getPost = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
}

const PostsPage = async() => {

    // normal Easy way-1 to data fetching in next.js
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const posts = await res.json();

    const posts = await getPost() 

    return (
        <div>
            <h1>Posts is Coming Soon....{posts.length}</h1>
        </div>
    );
};

export default PostsPage;