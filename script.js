


const btn = document.getElementById("btn");
const cont = document.getElementById("cont");
const loader = document.getElementById("loading");

loader.classList.add("hide");


async function getD () {

try {

          loader.classList.remove("hide");
          cont.classList.add("hide");

const response = await fetch("https://jsonplaceholder.typicode.com/posts");

if(!response.ok){

          throw new Error(`HTTP ERROR ${response.status}`)
}

const data = await response.json();

        loader.classList.add("hide");
          cont.classList.remove("hide");
return data;

}

catch (error) {

console.error(error)
loader.textContent= `Error fetching ${error}`

}


}


async function sisa () {

const data = await getD();
if(!data) return;


const random = Math.floor(Math.random() * data.length) + 1;


cont.innerHTML=`<h1>ID:${data[random].id}</h1> <br>
<h2>${data[random].title}</h2> <br>
<p id="phara">${data[random].body} </p>`



}


btn.addEventListener("click", sisa);