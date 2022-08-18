let id=document.getElementById("features")

console.log(document.getElementById("features"))

document.querySelectorAll("p").forEach((el)=>console.log(el));
console.log(document.querySelector("a").getAttribute("href"))

document.querySelector("a").setAttribute("href","https://www.google.com.co/")

const $mi=document.querySelector("#features")
$mi.style.setProperty("color","pink")
$mi.style.setProperty("width","500px")
$mi.style.setProperty("background-color","gray")

const $mic=document.querySelector(".clase");

let text=`<p>Holu </p><p>H o LA </p>`

//$mic.textContent=text contenido literal
$mic.innerHTML=text;

const img=document.createElement("img")
img.src="https://i.blogs.es/9fb305/xrl2sfi/1366_2000.jpg"

document.body.appendChild(img)

const $caja=document.createElement("div")
$caja.innerHTML="<img src='img/ima.jpg'>"
$mic.appendChild($caja)