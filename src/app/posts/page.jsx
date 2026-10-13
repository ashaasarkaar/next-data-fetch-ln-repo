
{/*way-2 Globally normal Easy  to data fetching in next.js*/ }
// const getPost = async() =>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     return res.json()
// }


{/*way-3 Globally normal Easy  to data fetching in next.js with throwing errorr sms inside cache and fething data inside try*/ }
// const getPost = async() =>{
//    try{
//      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     return res.json()
//    }
//    catch(err){
//     throw new Error('Failed To Fetch Data')
//    }

// }

{/*way-4 Globally normal Easy  to data fetching in next.js with throwing errorr sms inside if condition with res.ok*/ }
// const getPost = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    
//     if(!res.ok){
//         throw new Error('Failed To Fetch Data')
//     }
    
//     return res.json()

// } 



const PostsPage = async () => {

    // normal Easy way-1 to data fetching in next.js
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const posts = await res.json();

    // const posts = await getPost()

    return (
        <div>
            {/* <h1>Posts is Coming Soon....{posts.length}</h1> */}
        </div>
    );
};

export default PostsPage;