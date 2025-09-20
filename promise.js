/*
 Promise states->

  1.pending -> initial state, neither fulfilled nor rejected.

    -> pending promise either be fulfilled with value or rejected with a reason(error).

2.fulfilled -> meaning that operation was completed successfully.

3.rejected -> meaning that the operation failed.

resolve data can be linked with .then()
reject data can be linked with .catch()

Note-> A Promise is said to be settled if it is fulfilled or rejected, but not pending.
*/


//promise creation
function fetchData(){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            let success = true;

            if(success){
                //we can pass obj, array, string etc in resolve, resolve=fulfilled, so .then() log results
                resolve("Data fetched successfully");
            }
            else{
                //when promise is rejected execute this and .catch() log that reason
                reject("Error fetching data");
            }
        }, 3000);
    })
}


//consume promise
// let response = fetchData()
// console.log(response); //pending state

fetchData()
  .then((data)=>console.log(data))
  .catch((error)=>console.error(error))

  //output -> Data fetched successfully as success=true and call goes into resolve() and .then() gets data and log it
  //output -> Error fetching data as success =false and call goes into reject() and .catch() catches the reason(error)

//.then() chaining can be done, every .then() output is input to next .then() in chaining


//uncomment this and comment above consume and see the output as we chain .then()
// fetchData()
//   .then((data)=>{
//     console.log(data);
    // return `Aman`  //uncomment any return
    // return data.toLowerCase();
//   })
//   .then((name)=> console.log(name))
//   .catch((error)=>console.error(error))