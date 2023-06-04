let btnfull = document.getElementById("btnfull");
let el = document.documentElement;

btnfull.addEventListener("click", ()=> {
    if(el.requestFullscreen) {
        el.requestFullscreen()
    }
})

btnfull.click();