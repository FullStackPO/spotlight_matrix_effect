addEventListener("mousemove", function(e){
    document.body.style.setProperty("--x", e.clientX + "px");
    document.body.style.setProperty("--y", e.clientY + "px");
})

let matrix = document.querySelector(".matrix");
let h1 = document.querySelector(".matrix h1");
let text = h1.innerText;
let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

matrix.addEventListener("mouseenter", function(){
    setInterval(()=>{
    const str = text.split('').map(()=>{
        return character.split('')[Math.floor(Math.random()*53)]
    }).join('')
    h1.innerText = str
    },100)
})
