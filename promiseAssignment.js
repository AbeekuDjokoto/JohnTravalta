let loadPage = () => {
  const div = document.getElementById("canvas");
  const img = document.createElement("img");
  img.src = "./assets/John.gif";
  div.appendChild(img);
};

// let sillySignin = () => {
//   for (let index = 0; index < 10000000000; index++) {}
//   console.log("SIGNED IN");
// };

let sillySignin = new Promise((resolve, reject) => {
    setTimeout(function sillySignin(){
         for (let index = 0; index < 10000000000; index++) {}
          console.log("SIGNED IN");
          resolve('Working')
       }, 1000)
          reject('This doesnt work')
})


sillySignin.then((result)=>{
  console.log(`the result was a ${result}`)
}).catch(function(error){
  console.log(`the result was a failure ${error}`)
})

