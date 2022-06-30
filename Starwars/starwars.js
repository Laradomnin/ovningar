

let characterName = document.getElementById("input").value;
document.querySelector('button').onclick = getApi();
//let btn = 

//btn.addEventListenr...
async function getApi(){

let response = await fetch('https://www.swapi.tech/api/people/?name=+characterName')
let content = await response.json()
//content= content.splice(0,5)
console.log(content);
let list = document.querySelector('.posts')
let information = content.result[0].properties;
let height = information.height;
let mass = information.mass;
    list.innerHTML+=
    `<li class="post">
        <h4>Height: ${height}</h4>
        <h4>Weight: ${mass}</h4>
    </li>` 

//{console.log (content[key])}
}
//getApi()