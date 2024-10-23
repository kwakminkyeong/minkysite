window.onload=function(){
 /*큰 화면 메인메뉴에 마우스가 올라간 경우*/
 
//전역변수
    let main=document.getElementsByClassName("main");
    //0에서 6까지 반복하는 for문을 만드시오
    for(let i=0; i<main.length; i++){
        main[i].addEventListener("mouseover",function(){
            //중괄호 안에 있는 지역변수
            let sub=this.getElementsByClassName("sub")[0];
            sub.setAttribute("style","display:block;")
        
        });
        
        main[i].addEventListener("mouseout", function(){
            let sub=this.getElementsByClassName("sub")[0];
            sub.setAttribute("style","display:none;");
        });
    }


    /*모달처리 위치 */
    
    let modal=document.getElementsByClassName("modal")[0];
    let totalmenu=document.getElementsByClassName("totalmenu")[0];
    let sidemodal=document.getElementsByClassName("side-modal")[0];

    totalmenu.addEventListener("click",function(){
        modal.setAttribute("style","display:block;");
    });

    let close=document.getElementsByClassName("close")[0];
    close.addEventListener("click",function(){
        modal.setAttribute("style","display:none;"); 
       /*@media를 통해서 다시 화면이 보이도록 하고 싶다면
         아래처럼 attribute을 지워주는 방법으로 구현하다.
         가변사이즈애 따라 나타났다 사라졌다가 하는 방식일때는 사용하지 않는다.
         css에 우선권을 줘야하기 때문. 경우의 수를 전부 생각한다. */
       //modal.removeAttribute("style"); /*inline안에 있는 block을 소멸하라는 명령 */
       //modal.setAttribute("style","");/*아무것도 기능하지 않는 더미코드가 생기므로 사용하지 않는다. */
    });

    /*모달 부분이 클릭되어도 모달팝업이 사라지도록 처리 */
    let popTop=document.getElementsByClassName("popup-top")[0];
    modal.addEventListener("click",function(e){
        
        // modal.setAttribute("style","display:none;");
       if(e.target==modal){
        modal.setAttribute("style","display:none;");
       }else if(e.target==popTop){
        modal.setAttribute("style","display:none;");
       }
    });

    //팝업 하단이 비어보이는 현상을 방지
    window.addEventListener("scroll",function(){
        modal.style.height=document.documentElement.scrollHeight+"px";
    });

    //기존 모달이 1020px보다 작은 화면에서 보이지 않도록 하는 기능
    window.addEventListener("resize",function(){
        if(window.innerWidth<=1019){
            modal.removeAttribute("style");
        }else if(window.innerWidth>=1020){
            modal.setAttribute("style","display:block;");
        }    
    });

    //사이드 메인 메뉴 클릭처리
    
    let smain=document.getElementsByClassName("side-main");
    let sbtm=document.getElementsByClassName("side-bottom")[0];
    let ssub=document.getElementsByClassName("side-sub");
    let tags=document.getElementsByClassName("tag");

    for(let i=0; i<smain.length; i++){
        smain[i].addEventListener("click", function(){
            //전체 초기화 하는 코드
            for(let i=0; i<ssub.length; i++){
                tags[i].removeAttribute("style");
                ssub[i].removeAttribute("style");
                sbtm.removeAttribute("style");
            }

            let tag=this.getElementsByClassName("tag")[0];
            let sub=this.getElementsByClassName("side-sub")[0];
            if(tag.getAttribute("id")==null){
                //메인메뉴가 클릭이 안된 상태
                tag.setAttribute("style","rotate:-180deg;");
                sub.setAttribute("style","display:block;");
                tag.setAttribute("id","selected");
                //내부요소가 화면 높이보다 더 큰지 여부를 확인
                //side-top + (side-main갯수 *51)+(this내부 div의 수 *51)
                let inh=window.innerHeight;
                console.log("윈도우 내부 높이 :" +inh);
                let fullsize=422;
                let s=this.getElementsByClassName("side-sub")[0];
                let ins=s.getElementsByTagName("div").length;
                console.log("서브메뉴의 수 :"+ins);
                console.log("서브메뉴의 높이 : "+(fullsize+(ins*51)));
                console.log("스크롤바 만들지 말지 :"+(inh<(fullsize+(ins*51))));
                
                if(inh<fullsize+(51*ins)){
                    sbtm.setAttribute("style","overflow-y:scroll; height:"+inh+"px;");
                }

            }else{
                //메인메뉴가(열려있는 메뉴를) 클릭이 된 상태
               
                tag.removeAttribute("style");
                sub.setAttribute("style","display:none");
                tag.removeAttribute("id");
            }
            console.log(tag.getAttribute("style"));
        });
    } //사이드메뉴 클릭시 동작 완료
    
    let sideopen=document.getElementsByClassName("sidebtn")[0];
    sideopen.addEventListener("click", function(){
        sidemodal.setAttribute("style","display:block;");
    });
    let sideclose=document.getElementsByClassName("side-close")[0];
    sideclose.addEventListener("click", function(){
        sidemodal.setAttribute("style","display:block;");
    });
    sidemodal.addEventListener("click",function(e){
        if(e.target==sidemodal){
            sidemodal.setAttribute("style","display:none;");
        }
    });


    











    

};




   
//     let main=document.getElementsByClassName("main");
//     console.log(main);
//     for(let i=0; i<main.length; i++){
//         console.log(i);
//     }


/*자바스크립트 연출 */
/*반복문 for : 특정 동작을 반복해서 수행하도록 하는 문법 */
/*for(기준; 조건; 증감){반복할 내용;} */
/*A=A+B                         A+=B*/
/*document get element by id */
/*document.getElementById()  카멜기법 */
/*document.getElementsByClassName()  카멜기법 클레스이름으로 가져오겠어*/
/*데이터가 하나만 있어도 배열로 가져오기때문에 [0](배열번호)을 지정 */
/*document.getElementsByTagName() */
/*Element.addEventListener("상황", 동작()) ==== 상황이 됐을때 동작을 실행시켜라*/


/*프로그램의 구성 3요소 */
/*
1. 정의 : 변수 _ 컴퓨터랑 미리 약속이 되어있어야한다.합의가 되어있어야한다===변수를 만든다
2. 조건 : if문
3. 동작 : 함수 선정의 후실행  합의되어있지 않다면 실행될 수 없다

함수명(); 해당 동작을 실행 시켜라
동작이 실행되면 해당 동작의 return값을 변환해준다. 
 */








// let data=[3,5,7,9,11,13,14,15]; //[]는 데이터 안을 칸으로 나누라는 뜻
// /*집합데이터 배열for문 */
// console.log(data.length);
// for(let i=0; i<data.length; i++){
//     console.log(data[i]);
// }

// let data=document;  //글자가 아니라 객체이다. object 한마디로 뭐라 설명하기 어려운 것
// console.log(typeof(data));
