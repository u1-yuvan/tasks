// creating an XML Http request object

const req = new XMLHttpRequest(); 
// what should i do and from where i have to connect 

// req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all"); // GET : get the data
req.send();  // sending a request
// what to do when the request is completed successfully
req.onload = function (){
    // console.log(JSON.parse(this.response));
    const obj = JSON.parse(this.response);
    for(let ind = 0; ind < obj.length; ind++ ){
        console.log(obj[ind].name.common);
        console.log(obj[ind].region.Africa);
        console.log(obj[ind].subregion.Eastern Africa);
        console.log(obj[ind].population.fifa);
    }
};