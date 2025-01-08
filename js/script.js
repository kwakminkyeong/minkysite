window.onload=function(){

    let main=document.getElementsByClassName("main");
    for(let i=0; i<main.length; i++){
        main[i].addEventListener("mouseover",function(){
            let sub=main[i].getElementsByClassName("sub")[0];
            sub.setAttribute("style","display:block;")
           
        });

        main[i].addEventListener("mouseout",function(){
            let sub=main[i].getElementsByClassName("sub")[0];
            sub.setAttribute("style","display:none;")

        });



    };




 
	
	setInterval(function(){
		$(".pan div:first-child").fadeOut(2000).next().fadeIn(2000).end().appendTo(".pan");
	},3000);

   
	
       
        let linkimg = document.getElementsByClassName("pan2")[0];
        // console.log(linkimg);
        let move = 0;
        setInterval(function () {
            move -= 210;
            linkimg. style.left = move + "px";
            if (move < 0) {
                    move = 0;
                    linkimg.appendChild(linkimg.firstElementChild);
                }
        }, 2500);
        
	

        var i = 0;
        var txt1 = 'NAME__곽민경 : PHONE__010-8982-7903 : E-MAIL__minky_kwak@naver.com : SkillTools__포토샵/일러스트/인디자인/프리미어프로/애프터이펙트/Html/CSS/JAVASCRIPT/JAVA/JSP/MySQL';
        var speed = 100;
        var infoRightElement = document.getElementsByClassName("infoRight")[0];

        setInterval(function typeWriter() {
            if (i < txt1.length) {
                infoRightElement.innerHTML += txt1.charAt(i);
                if (txt1.charAt(i) === ' ') {
                    infoRightElement.innerHTML += "<br>";
                }
            } else {
                return; // All text is displayed, exit
            }

            i++;
            setTimeout(typeWriter, speed);
        }, 1000);
            

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
                let list=document.getElementsByClassName("listtext00")[0];
                list.removeAttribute("style");
                // career[0].style.backgroundColor="red"; 

                let a=list.getElementsByTagName("a");
                for(let f=0; f<a.length; f++){
                    a[f].removeAttribute("style");
                }
        });    
    } 


	
	
};// 이 아래에는 아무것도 적으면 안됨