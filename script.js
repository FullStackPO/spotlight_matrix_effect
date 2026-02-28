addEventListener("mousemove", function(e){
    document.body.style.setProperty("--x", e.clientX + "px");
    document.body.style.setProperty("--y", e.clientY + "px");
})

let matrix = document.querySelector(".matrix");
let h1 = document.querySelector(".matrix h1");
let text = h1.innerText;
let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let iteration = 0

matrix.addEventListener("mouseenter", function(){

    setInterval(() => {
    const str = text.split('').map((char,index) => {
    if(index < iteration){
        return char
    }
    return character.split('')[Math.floor(Math.random() * 53)]
    }).join('')
    h1.innerText = str

    iteration += 0.15
    },50)
})
