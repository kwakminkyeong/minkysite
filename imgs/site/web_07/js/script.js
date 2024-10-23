window.onload=(function(){
    
    
     //fadeInOut
     setInterval(function(){
          $(".slide li:first-child").fadeOut(1000).next().fadeIn(1000).end().appendTo(".slide");
   },2000);
     




     //slideUp
     setInterval(function(){
          $(".pan").animate({"top":"0px"});
          $(".pan").delay(2000);
          $(".pan").animate({"top":"-490px"});
          $(".pan").delay(2000);
          $(".pan").animate({"top":"-980px"});
          $(".pan").delay(2000);
     

     },1);


          //slideUp
     // setInterval(function(){
     //      $(".pan2").animate({"left":"0px"});
     //      $(".pan2").delay(2000);
     //      $(".pan2").animate({"left":"-1000px"});
     //      $(".pan2").delay(2000);
     //      $(".pan2").animate({"left":"-2000px"});
     //      $(".pan2").delay(2000);
     

     // },1);

     // setInterval(function(){
     //      $(".pan2").animate({"left":"-1000px"},function(){
     //           $(".pan2").css({"left":"0px"}).append($(".pan2>li:first-child"));
     //      });
        
     // },2000);

     setInterval(function(){
          $(".pan2").animate({"left":"-1000px"}, function(){
               $(".pan2").css({"left":"0px"}).append($(".pan2>li:first-child"));
          });
     },2000);

});