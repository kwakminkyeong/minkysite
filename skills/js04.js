window.onload=function(){
    let pan=document.getElementsByClassName("pan")[0];  //이동할 뒷판
    //처음 보이는 페이지를 2페이지부터 시작할 용도
    pan.setAttribute("style","left:-400px;transition:1s;");

    let access=true;    //지금 눌러서 이동 가능한지 여부

    let left=document.getElementsByClassName("btn-left")[0];   //왼쪽버튼
    let right=document.getElementsByClassName("btn-right")[0]; //오른쪽버튼
    let start=document.getElementsByClassName("start")[0];     //자동실행버튼
    let stop=document.getElementsByClassName("stop")[0];       //정지버튼
    let marker=document.getElementsByClassName("mark")[0].getElementsByTagName("div");    //슬라이드 표시...
    marker[1].setAttribute("style","background-color:red;");  //처음 보여지는 마커에 색상 표기
    let number=1;   //지금 보고있는 화면의 번호를 저장

    //왼쪽으로 이동하는 기능
    let moveL=function(){
        if(access==false){  //이동 애니메이션 중 중복동작 방지
            return;
        }
        access=false;
        pan.setAttribute("style","left:-800px;"); //슬라이드 애니메이션 효과를 주기위해 -800px 
        setTimeout(function(){
            let first=pan.getElementsByTagName("div")[0];
            pan.append(first);
            pan.setAttribute("style","left:-400px;transition:0s;");
            access=true;    //access를 true로 변경해주는 코드 가장 마지막에
        },2000);  //위의 트랜지션보다 느려야한다. 초계산을 잘 해야한다.
        number++;
        markC();  //마커색상을 표기하는 기능입니다.
    };

    //오른쪽으로 이동하는 기능
    let moveR=function(){
        if(access==false){
            return;
        }
        access=false;
        //왼쪽 이동과는 반대로 가장 마지막 내용물을 앞으로 가져와야 한다.
        let last=pan.getElementsByTagName("div")[2];
        pan.setAttribute("style","left:0px;");
        setTimeout(function(){
            pan.prepend(last);
            pan.setAttribute("style","left:-400px;transition:0s;");
            access=true;
        },2000);
        number--;
        markC();
        

    };
    //마커의 색상을 표기하는 기능
    let markC=function(){
        if(number==marker.length){
            number=0;
        }
        //오른쪽으로 이동 시 마커 번호가 0보다 작아져버리는 문제를 해결하기 위함
        if(number==-1){
            number=marker.length-1;
        }

        for(let i=0; i<marker.length; i++){
            marker[i].removeAttribute("style");
        }
        marker[number].setAttribute("style","background-color:red;");
    };

    //<버튼 클릭시 왼쪽으로 이동하는 기능
    left.addEventListener("click",moveL);
    //>버튼 클릭시 오른쪽으로 이동하는 기능
    right.addEventListener("click",moveR)

    let inter;  //몇 초 마다자동 실행을 반복해주는 Interval을 저장할 공간.펑션자체를 저장한 것
                //자동실행을 반복해주는 Interval을 저장할 공간
    //자동실행기능
    start.addEventListener("click",function(){
        start.setAttribute("style","color:red;");
        stop.setAttribute("style","color:white;");
        inter=setInterval(function(){
            moveL();
        },3000);
    });
    //정지기능
    stop.addEventListener("click",function(){
        start.setAttribute("style","color:white;");
        stop.setAttribute("style","color:red;");
        clearInterval(inter); //정지신호
    });

    //marker클릭시 이동기능 부여
    for(let i=0; i<marker.length; i++){
        marker[i].setAttribute("class",i);
        marker[i].addEventListener("click",function(){
            console.log("지금 클릭된 번호 :"+this.getAttribute("class"));
            console.log("지금 보이고 있는 번호 :"+number);

            let temp=number;            //임시로 지금 보고있는 슬라이드 값을 저장
            let target=this.getAttribute("class");   //앞으로 이동할 목적지

            //0번에서 1번으로 이동
            if(temp==0){
                if(target==1){              //0번에서 1번으로 이동
                    moveR();
                }else if(target==2){        //0번에서 2번으로 이동
                    moveL();
                    setTimeout(function(){
                        moveL();
                    },3000);
                    
                }
            }else if(temp==1){
                if(target==0){      //1번에서 0번으로 이동
                    moveR();

                }else if(target==2){ //1번에서 2번으로 이동
                    moveL();
                }
            }else if(temp==2){
                if(target==0){      //2번에서 0번으로 이동
                    moveR();
                    setTimeout(function(){
                        moveR();
                    },3000);
                }else if(target==1){    //2번에서 1번으로 이동
                    moveR();
                }
            }

        });
    }


};//이 아래로는 아무것도 적지 말것