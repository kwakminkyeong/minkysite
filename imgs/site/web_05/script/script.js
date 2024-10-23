$(window).load(function(){
    $(".main").mouseover(function(){
        $(this).find(".sub").stop().fadeIn();
        
    });
    $(".main").mouseout(function(){
        $(this).find(".sub").stop().fadeOut();
       
    });

    setInterval(function(){
        $(".pan").animate({"top":"-100%"});
        $(".pan").delay(2000);
        $(".pan").animate({"top":"-200%"});
        $(".pan").delay(2000);
        $(".pan").animate({"top":"-300%"},function(){
            $(".pan").css({"top":"0%"});
        });
        $(".pan").delay(2000);
    },1);

    $(".list1").click(function(){
        $("#modal").css("display","block");
    });
    $(".close").click(function(){
        $("#modal").css("display","none");
    });
});