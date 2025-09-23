function fetchUserData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            // resolve({name:"Aman", url:"https://amanpatel2529.netlify.app"})
               reject("Server Response failed")
        }, 3000);
    })
}

//common way to consume promise->
//  fetchUserData
//     .then((data)=> console.log(data))
//     .catch((error)=> console.log(error))


//async-await way to consume promise
async function getUserData(){
    try {
        console.log("Fetching user data...");
        const userData = await fetchUserData()
        
        console.log("User data fetched successfully");
        console.log("User Data: ", userData);
        
    } catch (error) {
        console.error("Error feteching data", error);
    }
}

getUserData();