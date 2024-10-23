$(window).load(function(){
    setInterval(function(){
        
       
        $(".pan").animate({"left":"-100%"});
        $(".pan").delay(2000);
        $(".pan").animate({"left":"-200%"});
        $(".pan").delay(2000);
        $(".pan").animate({"left":"-300%"},function(){
            $(".pan").css({"left":"0%"});
        });
        $(".pan").delay(2000);
    },1);

    $(".main").mouseover(function(){
        $(this).find(".sub").stop().fadeIn();
    });
    $(".main").mouseout(function(){
        $(this).find(".sub").stop().fadeOut();
    });

    $(".list1").click(function(){
        $("#modal").css("display","block");
    });
    $(".close").click(function(){
        $("#modal").css("display","none");
    });
});