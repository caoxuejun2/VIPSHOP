define(["jquery","jquery-cookie","parabola"],function($,parabola){
  function download(){
    var productId = valueByName(location.search, "productId");
    $.ajax({
      url:"../data/list.json",
      success:function(arr){
        var products = arr.data.products
        var goodsMsg = products.find(item => item.productId == productId);
        var node = $(`<div class="details-info clr">
        <div class="magnifying fl">
          <img src="${goodsMsg.smallImage}" alt="" class="detailsInfo-img">
          <div id="mark"></div>
        </div>
        <div class="bigimg">
          <img src="${goodsMsg.smallImage}" alt="">
        </div>
        <div class="detailsInfo-txt fr">
          <div class="detailsInfo-title">
            ${goodsMsg.title}
          </div>
          <div class="detailsInfo-price">
            <img src="//b.appsimg.com/upload/momin/2020/08/19/123/1597801521599.png" alt="" class="detailsInfo-price-bgimg">
            <div class="detailsInfo-price-txt clr">
              <p class="fl"><span class="offLater">￥${goodsMsg.price.salePrice}</span><span class="offAgo">￥${goodsMsg.price.marketPrice}</span><span class="off-txt">${goodsMsg.price.saleDiscount}</span></p>
              <div class="detailsInfo-price-last clr">
                <img src="//b.appsimg.com/upload/momin/2020/05/29/182/1590749985268_100x24_90.png" alt="">
                <div class="progress-bars clr">
                  <div class="progress-bar-box fl">
                    <div class="progress-bar"></div>
                  </div>
                  <div class="progress-bar-text fl">仅剩8件</div>
                </div>
                
              </div>
            </div>
          </div>
          <div class="detailsInfo-attrs">
            <div class="detailsInfo-attr clr">
              <p class="detailsInfo-attr-key fl">配送</p>
              <p class="detailsInfo-attr-values1 fl">请选择省市区<span class="iconfont icon-xiala1"></span></p>
            </div>
            <div class="detailsInfo-attr clr">
              <p class="detailsInfo-attr-key fl">运费</p>
              <p class="detailsInfo-attr-values2 fl">新会员专享首单满38元免邮（限唯品自营商品，部分商品不可用）</p>
            </div>
            <div class="detailsInfo-attr clr">
              <p class="detailsInfo-attr-key fl">颜色</p>
              <div class="detailsInfo-attr-values3 fl">
                <p>白色 <span class="xuanzhong"></span></p>
              </div>
            </div>
            <div class="detailsInfo-attr clr">
              <p class="detailsInfo-attr-key fl">尺码</p>
              <div class="detailsInfo-attr-values3 fl clr">
                <p class="fl">S<span class="xuanzhong"></span></p> 
                <p class="fl">M</p>
                <p class="fl">L</p>
              </div>
            </div>
            <div class="detailsInfo-attr attr5 clr">
              <p class="detailsInfo-attr-key fl">数量</p>
              <div class="detailsInfo-attr-values5 fl">
                <button class="numBtn1"> - </button>
                <span class="detailsInfo-attr-num"> 1 </span>
                <button class="numBtn2">+</button>
              </div>
            </div>
            <div class="detailsInfo-attr attr6 clr">
              <p class="detailsInfo-attr-key fl"></p>
              <div class="detailsInfo-attr-values6 fl clr">
                <div class="LowPrice fl">
                  <div class="Price-num">￥${goodsMsg.price.marketPrice}</div>
                  <div class="Price-txt">全网低价</div>
                </div>
                <div class="rush fl">
                  <div class="Price-num">￥${goodsMsg.price.salePrice}</div>
                  <div class="Price-txt">特卖价 抢<span class="iconfont icon-you"></span></div>
                </div>
                <div class="ball">
                  <img src="${goodsMsg.smallImage}" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="details-smallImgs clr">
        <div class="details-smallImg fl">
          <img src="${goodsMsg.smallImage}" alt="">
        </div>
        <div class="details-smallImg fl">
          <img src="${goodsMsg.smallImage}" alt="">
        </div>
        <div class="details-smallImg fl">
          <img src="${goodsMsg.smallImage}" alt="">
        </div>
        <div class="details-smallImg fl">
          <img src="${goodsMsg.smallImage}" alt="">
        </div>
        <div class="details-smallImg fl">
          <img src="${goodsMsg.smallImage}" alt="">
        </div>
      </div>
      <div class="details-sever clr">
        <div class="details-sever-left fl">
         <img src="//shop.vipstatic.com/img/detail/pc_xuanguan.png" alt="">
        </div>
        <div class="details-sever-right fl clr">
          <span class="detailsSeverTitle fl">服务</span>
          <div class="details-sever-info fl clr">
            <span class="iconSuccess fl"></span> 
            <p class="details-sever-info-txt fl">唯品会发货及售后</p>
            <span class="iconSuccess fl"></span> 
            <p class="details-sever-info-txt fl">顺丰配送</p>
            <span class="iconSuccess fl"></span> 
            <p class="details-sever-info-txt fl">7天无理由退货</p>
            <span class="iconSuccess fl"></span> 
            <p class="details-sever-info-txt fl">退换无忧</p><br>
            <span class="iconSuccess fl"></span> 
            <p class="details-sever-info-txt fl">7天可换</p>
          </div>
         </div>
        </div>`)
        node.appendTo(".details")
      },
      error:function(msg){
        console.log(msg)
      }
    })
  }
  function magnifying(){
    $(".details").on("mouseenter",".magnifying",function(){
      $(".bigimg,#mark").show();
    })
    $(".details").on("mouseleave",".magnifying",function(){
        $(".bigimg,#mark").hide();
      })
    $(".details").on("mousemove",".magnifying",function(){
        var ev = ev || window.event;
        var l = ev.pageX - $(this).offset().left-100;
        l = Math.max(0, l);
        l = Math.min(l, 220);
        var t = ev.pageY - $(this).offset().top-100;
        t = Math.max(0, t);
        t = Math.min(t, 220);
        $("#mark").css({
          left: l,
          top: t
        })
        $(".bigimg img").css({
          left: -2 * l,
          top: -2 * t
        })
      })
      
    $(".details").on("click",".details-smallImg",function(){
      $(".details-smallImg").css("border","1px solid transparent")
      $(this).css("border","1px solid #F10180")
    }) 
  }
  function valueByName(search, name){
		var start = search.indexOf(name + "=");
		if(start == -1){
			return null;
		}else{
			var end = search.indexOf("&", start);
			if(end == -1){
				end = search.length;
			}
			//提取出想要键值对 name=value
			var str = search.substring(start, end);
			var arr = str.split("=");
			return arr[1];
		}
	}
  function shoppingClick(){
    $(".details").on("click",".detailsInfo-attrs .rush",function(){
      $(".ball").show()
      $(".ball").css({
        left:0,
        top:0
      })
      var X = $(".aside-shopbag").offset().left - $(".ball").offset().left;
      var Y = $(".aside-shopbag").offset().top - $(".ball").offset().top;
      var bool = new Parabola({
        el:".ball",
        targeEl:null,
        offset: [X,Y],
        duration: 1000,
        curvature: 0.001,
        callback: function(){
          $(".ball").hide();
        }
      })
      bool.start();
      var num = $(".aside-shopbag-num").html()
      var num2 = $(".shopping-num").html()
      num++;
      num2++;
      $(".aside-shopbag-num").html(num)
      $(".shopping-num").html(num2)
    })
  }
  return{
    download,
    magnifying,
    shoppingClick,
  }
})