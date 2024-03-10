{/* <div id="joke" class="joke">Awsome Joke is Loading.....</div>
        <button id="jokebtn" class="btn">NExt JOke</button> */}

// Promises
// 2 conditions => success or => fail

// fetch('http://any api///just for the sake of example')

// milega => sahi hai
// nai milega => reason could be internet prob or server console.error;

// fullfield that means Promise will be kept  
// reject

// In 90% cases we consume the promise na ki create karte hai

// consume kya hota hai
// fetch()//it wiil return me promise
// us promise ko consume karna hai 
// either 
// fullfilled or reject

//call back hell se bachne k lie will use promises
//promises me then then then aur kuch nahi hai


//Promises
// GET https://icanhazdadjoke.com/

const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokebtn');



// const generateJokes = () => {
//     const setHeader = {
//         headers: {
//             Accept: "application/json"
//         }
//     }
//     fetch('https://icanhazdadjoke.com', setHeader)
//         .then((res) => res.json())
//         .then((data) => {
//             jokes.innerHTML = data.joke;
//         }).catch((error) => {
//             console.log(error);
//         })
// }//completed this through Promises

// jokeBtn.addEventListener('click', generateJokes);
// generateJokes();

//Async await 
//work of Async await is to reduce the complexity of promises and make it simpler to use

// for traditional function
//we have to add async at the starting point of function

// async function generateJokes (){

// }with traditional function

//with fat arrow function
const generateJokes = async () => {
    try {
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }
        const res = await fetch('https://icanhazdadjoke.com', setHeader)
        const data = await res.json();
        jokes.innerHTML = data.joke;
    } catch (err) {
        console.log(`The error is ${err}`);
    }//completed thorough async await =>--
}
jokeBtn.addEventListener('click', generateJokes);
generateJokes();
















//     fetch('https://icanhazdadjoke.com', setHeader)//it means jab mene isko call kia muje data miilga k nahi
//         .then((res) => {
//             //    res.json(); //jo bhi data milta hai html formate me milta hai usko jason me convert kanrna rahega
//             console.log(res.json());//if data or response mil gya to .then me data return kar dega nahi to error dega
//         })
//         .then((data) => {
//             jokes.innerHTML = data.joke;
//         }).catch((error) => {
//             console.log(error);
//         })//agar nahi mila to data reject hua or error hoga to usko catch karva ke error me de dega
// }


// jokeBtn.addEventListener('click', generateJokes);//how we can achive it through promises
// generateJokes();//by default ye function call ho jayega and at least ek na ek joke dikh jayega
