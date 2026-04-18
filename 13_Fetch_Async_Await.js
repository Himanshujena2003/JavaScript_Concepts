// let fetchApi = fetch("https://jsonplaceholder.typicode.com/users");
// returns a promise

// fetchApi
// .then((res)=>res.json())
// .then((data)=>console.log(data));


// using async and await 
let getData = async () => {
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
    
}

getData()
