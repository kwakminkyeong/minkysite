// window.onload=function(){
//     let slide=document.getElementById("slide");
//     let side=document.getElementById("side");
//     let close=document.getElementsByClassName("close")[0];
   
//     slide.addEventListener("click",function(){
//         side.style.width="250px";
//     });

//     close.addEventListener("click",function(){
//         side.style.width="0px";
//     });


// }

window.onload=function(){
    let slide=document.getElementById("slide");
    let side=document.getElementById("side");
    let close=document.getElementsByClassName("close")[0];

    slide.addEventListener("click",function(){
        side.style.width="250px";
    });

    close.addEventListener("click",function(){
        side.style.width="0px";
    });
}
