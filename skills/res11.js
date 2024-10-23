window.onload=function(){
   let hlist=document.getElementsByClassName("hot-list")[0];
   console.log(hlist);
   let move=0;
   setInterval(function(){
    move-=25;
    hlist.style.top=move+"px";
   },1500);
   
};


