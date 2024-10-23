$(window).load(function(){
    $(".main").mouseover(function(){
        $(".sub").stop().fadeIn();
    });
    $(".main").mouseout(function(){
        $(".sub").stop().fadeOut();
    });

    setInterval(function(){
        $(".pan").animate({"top":"0px"});
        $(".pan").delay(2000);
        $(".pan").animate({"top":"-300px"});
        $(".pan").delay(2000);
        $(".pan").animate({"top":"-600px"});
        $(".pan").delay(2000);
    },1);


    $(".gongbtn").click(function(){
        $(".gonglist").css("z-index","23");
        $(".gallimg").css("z-index","22");
    });
    $(".gallbtn").click(function(){
        $(".gonglist").css("z-index","22");
        $(".gallimg").css("z-index","23");
    });

    $(".list1").click(function(){
        $("#modal").css("display","block");
    });
    $(".close").click(function(){
        $("#modal").css("display","none");
    });
});