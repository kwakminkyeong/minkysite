window.onload=function(){
    //menu
    let main=document.getElementsByClassName("main");
    for(let i=0; i<main.length; i++){
        main[i].addEventListener("mouseover",function(){
            let sub=main[i].getElementsByClassName("sub")[0];
            sub.setAttribute("style","display:block; background-color:white;");
           
           
        });

        main[i].addEventListener("mouseout",function(){
            let sub=main[i].getElementsByClassName("sub")[0];
            sub.setAttribute("style","display:none;");

        });



    };

    

    //스크롤하면서 다음 내용 올라오기

    // let career1 = document.getElementsByClassName("career")[0];
    // window.addEventListener("scroll", function(){
    // var scrollY=this.scrollY;
    // console.log(scrollY);
    // //를 통하여 현재 스크롤 위치를 특정할 수 있습니다.
    // let height=400;
    // for(let i=0; i<career.length; i++){
    //      if(400 ==scrollY){
    //         scrollY+=height+"px";
    //         career[i].setAttribute("style","display:block;");
    //         //동작할 애니메이션
    //      }
    // }
    // });


    //캐리어 마우스오버시 scale 조정
    let career = document.getElementsByClassName("career");
   


    for(let i=0; i<career.length; i++){
        career[i].addEventListener("mouseover", function(){
                career[i].setAttribute("style","background-color:#fafafa; scale:107%;");
                let list=this.getElementsByClassName("listtext00")[0];
                console.log(list);
                list.setAttribute("style","color:rgb(255, 138, 138);");


                let a=list.getElementsByTagName("a");
                for(let f=0; f<a.length; f++){
                    a[f].setAttribute("style","color:blue;");
                }
                
               
                // a.setAttribute("style","color:blue;");
                // career[0].style.backgroundColor="red"; 
                
                //career이 커지면 아래로 밀리게 하기
                // let inh=window.innerHeight;
                // let hsize=document.getElementsByClassName("career.innerHTML");
                // console.log(hsize);
                //console.log("윈도우 내부높이 : "+inh);
                //메뉴 높이 +인포 높이+ career의 높이가 일정하지 않음
        });  
        
      
    }
    for(let i=0; i<career.length; i++){
        career[i].addEventListener("mouseout", function(){
                career[i].removeAttribute("style");
                let list=this.getElementsByClassName("listtext00")[0];
                console.log(list);
                list.removeAttribute("style");
                // career[0].style.backgroundColor="red"; 

                let a=list.getElementsByTagName("a");
                for(let f=0; f<a.length; f++){
                    a[f].removeAttribute("style");
                }
        });    
    } 

   
            
    
 
	//그래픽 마우스오버시 칼라변경  클릭시 큰 이미지
   
    let graphic= document.getElementsByClassName("graphic");
    let popgall= document.getElementsByClassName("popgall");
    


    for(let i=0; i<graphic.length; i++){
        graphic[i].addEventListener("mouseover", function(){
                graphic[i].setAttribute("style","background-color:#f1f1f1");
               
        }); 

       

        graphic[i].addEventListener("mouseout",function(){
            graphic[i].setAttribute("style","background-color:none");

        });

    
    }
    
    for(let i=0; i<graphic.length; i++){
       
        graphic[i].addEventListener("click", function(){
            popgall[i].setAttribute("style","display:block");
            displaynone();   
         });
         
         /*popgall[i].addEventListener("click", function(){
             this.setAttribute("style","display:none");
         });*/
    }
	
};// 이 아래에는 아무것도 적으면 안됨

function displaynone(){
    let popgall=document.getElementsByClassName("popgall");
    for(let i=0; i<popgall.length; i++){
        popgall[i].addEventListener("click", function(){
            this.setAttribute("style","display:none");
        });
    }
}