
//create promise 1 ->
function fetchPostData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Post Data fetched.");
        }, 3000);
    });
}

//create promise 2 -> 
function fetchCommentData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Comment data fetched.");
        }, 3000);
    });
}

/*consume promise using async-await way 
  and lets try to consume 2 promises at once using Promise.all() method 
  and also by default method
*/

async function getBlogData() {
    try {
        console.log("Fetching blog data...");
        
        //default way to handle data/promise
        // const postData = await fetchPostData();
        // console.log(postData);
        
        // const commentData = await fetchCommentData();
        // console.log(commentData);

        //using promise.all() method
        const [postData, commentData] = await Promise.all([
            fetchPostData(), 
            fetchCommentData()
        ])
        console.log(postData);
        console.log(commentData);
        
        
        
        console.log("Fetch complete.");
        
    } catch (error) {
        console.error("Error fetching blog data", error);
    }
}

getBlogData();