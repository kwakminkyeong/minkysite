$(window).load(function(){
    $(".main").mouseover(function(){
        $(this).find(".sub").stop().fadeIn();
        var size=$(this).find("li").length*50+50;
        $(this).stop().animate({"height":size+"px"});
    });
    $(".main").mouseout(function(){
        $(this).find(".sub").stop().fadeOut();
        $(this).stop().animate({"height":"50px"});
    });

    setInterval(function(){
        $(".pan div:first-child").fadeOut(1000).next().fadeIn(1000).end().appendTo(".pan");
    },2000);

    $(".list1").click(function(){
        $("#modal").css("display","block");
    });
    $(".close").click(function(){
        $("#modal").css("display","none");
    });


});