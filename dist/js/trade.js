define(["jquery","jquery-cookie"],function($){
  function wear(url,html){
    $.ajax({
      url:url,
      success:function(obj){
        var brandInfo = obj.data.brandInfo;
        for(var j in brandInfo){
          var node = $(` 
          <a href="javascript:;"><div class="homeTrades fl">
            <img src="${brandInfo[j].brandImage.size1}" alt="">
            <p class="homeTrade-collect"><span class="iconfont icon-shoucang1"></span>收藏品牌</p>
            <p class="homeTrades-infor">${brandInfo[j].salesName}</p>
            <p class="homeTrades-off">${brandInfo[j].agio}</p>
            </div></a>`);
          node.appendTo($(html))
        }
      },error:function(msg){
        console.log(msg)
      }
    })
  }function wear2(url,html){
    $.ajax({
      url:url,
      success:function(obj){
        var items = obj.data.items;
        for(var j in items){
          var node = $(` 
          <a href="javascript:;"><div class="homeTrades fl">
            <img src="${items[j].brandImage.size1}" alt="">
            <p class="homeTrade-collect"><span class="iconfont icon-shoucang1"></span>收藏品牌</p>
            <p class="homeTrades-infor">${items[j].salesName}</p>
            <p class="homeTrades-off">${items[j].agio}</p>
            </div></a>`);
          node.appendTo($(html))
        }
      },error:function(msg){
        console.log(msg)
      }
    })
  }
  function tradeTab(){
    var aBtns = $(".homeTrade").find(".hometrade-tab .hometrade-tabs");
    var iNow = 0;
    var timer = null;
    var scroll = 0;
    timer = setInterval(function(){
      var distance = document.body.scrollTop||document.documentElement.scrollTop;
      console.log(distance)
      if(distance>=1750){
        $(".hometrade-tab").css("position","fixed");
        $(".hometrade-tab").css("top",180);
      }else{
        $(".hometrade-tab").css("position","absolute");
        $(".hometrade-tab").css("top",44);
      }
      switch((distance-1630)/3400){
        case :0; break;
      }
    },1)
    aBtns.click(function(){
      iNow = $(this).index();
      console.log(iNow)
      aBtns.removeClass("active").eq(iNow).addClass("active");
      document.documentElement.scrollTop = (iNow*3400)+1630 
    })
  }
  return{
    wear,
    wear2,
    tradeTab,
  }
})