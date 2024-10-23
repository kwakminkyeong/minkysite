$(window).load(function(){
    $(".main").mouseover(function(){
        $(this).find(".sub").stop().slideDown();
        $(this).stop().animate({"height":"250px"});
    });
    $(".main").mouseout(function(){
        $(this).find(".sub").stop().slideUp();
        $(this).stop().animate({"height":"50px"});
    });

    setInterval(function(){
        $(".pan").animate({"top":"0%"});
        $(".pan").delay(2000);
        $(".pan").animate({"top":"-100%"});
        $(".pan").delay(2000);
        $(".pan").animate({"top":"-200%"});
        $(".pan").delay(2000);
    },1);

    $(".list1").click(function(){
        $("#modal").css("display","block");

    });
    $("span").click(function(){
        $("#modal").css("display","none");
    });

});