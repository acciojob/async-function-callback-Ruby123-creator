let btn = document.getElementById("btn");
 btn.addEventListener("click" ,getdata)
 let div = document.getElementById("output")
async function getdata(){
	let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log(data);
	div.innerText = data.title;
}
