const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
// if(bar){
//     bar.addEventListener("click",()=>{
//         nav.classList.add("active");
//     });
//     close.addEventListener("click",()=>{
//         nav.classList.toggle("active");
//     })

// }

if(bar){
    bar.addEventListener("click",()=>{
        nav.classList.add("active");
    });
    close.addEventListener("click",()=>{
        nav.classList.toggle("active");
    })

}



