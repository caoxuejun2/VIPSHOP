define(["jquery","jquery-cookie"],function($){
  function move(){
    $(function(){
      var aBtns = $(".banner").find(".banner-index div")
      var oImg = $(".banner").find(".banner-c .bannerimg")
      var aBtn = $(".banner").find("#leftandright")
      var iNow = 0
      var timer = null
      timer = setInterval(function(){
        iNow++;
        tab()
      },2000)
      aBtns.click(function(){
        iNow = $(this).index();
        tab()
      })
      $(".banner-c").mouseenter(function(){
        clearInterval(timer)
        aBtn.css("display","block")
      })
      $(".banner-c").mouseleave(function(){
        aBtn.css("display","none")
        timer = setInterval(function(){
          iNow++;
          tab()
        },2000)
      })
      $("#left").click(function(){
        iNow--;
        tab();
      })
      $("#right").click(function(){
        iNow++;
        tab();
      })
      $("#left").mouseenter(function(){
        aBtn.css("display","block")
        clearInterval(timer)
        tab();
      })
      $("#right").mouseenter(function(){
        aBtn.css("display","block")
        clearInterval(timer)
        tab();
      })
      function tab(){
        aBtns.removeClass("active").eq(iNow).addClass("active")
        if(iNow == aBtns.size()){
          aBtns.eq(0).addClass("active")
        }
        oImg.animate(
          {
            left:iNow * -998,
          },600,
          function(){
            if(iNow == aBtns.size()){
              iNow = 0
              oImg.css("left",0)
            }
          }
        )
      }
    })
  }
  function off(){
    $(".off").click(function(){
      $(".adv-news").css("display","none")
    })
  }
  function ceiling(){
    var distance = document.body.scrollTop||document.documentElement.scrollTop;
    if(distance>=174){
      $(".nav-f").css("position","fixed");
      $(".nav-f").css("top",0);
    }
  }
  // function download(){
  //   $.ajax({
  //     url:"../data/data.json",
  //     success:function(arr){
  //       var str = ``;
  //       for(var i=0;i<arr.length;i++){
  //         str += ``
  //       }
  //       // $("").html(str)
  //     },
  //     error:function(msg){
  //       console.log(msg)
  //     }
  //   })
  // }
  return{
    move,
    off,
    ceiling,
  }
})