$(window).load(function(){
    setInterval(function(){
        $(".pan div:first-child").fadeOut(1000).next().fadeIn(1000).end().appendTo(".pan");
    },2000);

    $(".main").mouseover(function(){
        $(".sub").stop().fadeIn();
        $(".bg").stop().fadeIn();
    });
    $(".main").mouseout(function(){
        $(".sub").stop().fadeOut();
        $(".bg").stop().fadeOut();
    });


    $(".gongbtn").click(function(){
        $(".gonglist").css({"z-index":"56"});
        $(".gallimgs").css({"z-index":"55"});
    });
    $(".gallbtn").click(function(){
        $(".gonglist").css({"z-index":"55"});
        $(".gallimgs").css({"z-index":"56"});
    });

    $(".list1").click(function(){
        $("#modal").css("display","block");
    });
    $(".close").click(function(){
        $("#modal").css("display","none");
    });
});