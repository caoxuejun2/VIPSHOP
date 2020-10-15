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
                <div class="rush fl" id = '${goodsMsg.productId}'>
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
    sc_num();
    sc_msg()
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
      var id = this.id;
      var first = !($.cookie("goods"));
      if(first){
        $.cookie("goods", JSON.stringify([{id:id,num:1}]), {
          expires: 7
        });
      }else{
        //2、不是第一次，判定之前是否添加过
        var cookieArr = JSON.parse($.cookie("goods"));
        var same = false; 
        for(var i = 0; i < cookieArr.length; i++){
          if(cookieArr[i].id == id){
            same = true;
            break;
          }
        }
        same ? cookieArr[i].num++ : cookieArr.push({id:id, num: 1});
        $.cookie("goods", JSON.stringify(cookieArr), {
          expires: 7
        })
      }
      sc_num();
      sc_msg();
    })
    $(".shopBagTrades").on("click", ".shopBagTrades-btn", function(){
      var id = $(this).closest(".shopBagTrade-item").attr("id");
      var cookieArr = JSON.parse($.cookie("goods"));
      for(var i = 0; i < cookieArr.length; i++){
        if(cookieArr[i].id == id){
          break;
        }
      }
      if(this.innerHTML == "+"){
        cookieArr[i].num++;
      }else{
        cookieArr[i].num == 1 ? alert("数量为1，不能减少") : cookieArr[i].num--;
      }
      $.cookie("goods", JSON.stringify(cookieArr), {
        expires: 7
      })
      //修改页面上的数量
      $(this).siblings(".shopBagTrades-num").html(`${cookieArr[i].num}`);
      sc_num();
      sc_msg();
    })
    $(".shopBagTrades").on("click", ".delete", function(){
      var id = $(this).closest(".shopBagTrade-item").remove().attr("id");
      var cookieArr = JSON.parse($.cookie("goods"));
      for(var i = 0; i < cookieArr.length; i++){
        if(cookieArr[i].id == id){
          cookieArr.splice(i, 1);
          break;
        }
      }
      if(cookieArr.length){
        $.cookie("goods", JSON.stringify(cookieArr), {
          expires: 7
        })
      }else{
        $.cookie("goods", null);
      }
      //更新数据数量
      sc_num();
      sc_msg();
    })
  }
  function sc_num(){
    var cookieStr = $.cookie("goods");
    var sum = 0;
    if(cookieStr){
      var cookieArr = JSON.parse(cookieStr);
      for(var i = 0; i < cookieArr.length; i++){
        sum += cookieArr[i].num;
      }
    }
    $(".aside-shopbag-num").html(sum);
    $(".shopping-num").html(sum);
  }
  function sc_msg(){
    var cookieStr = $.cookie("goods");
    if(!cookieStr){
      return;
    }
    //下载所有的商品数据
    $.ajax({
      url: "../data/list.json",
      success: function(arr){
        var products = arr.data.products
        var cookieArr = JSON.parse(cookieStr);
        var newArr = [];
        for(var i = 0; i < products.length; i++){
          for(var j = 0; j < cookieArr.length; j++){
            if(cookieArr[j].id == products[i].productId){
              products[i].num = cookieArr[j].num;
              newArr.push(products[i]);
              break;
            }
          }
        }
        //购物袋数据
        var str = ``;
        var str1 =``;
        var sum1 =0 ;
        var sum2 =0 ;
        for(var i = 0; i < newArr.length; i++){
          // console.log(i)
          str += `<div class="shopBagTrade-item" id="${newArr[i].productId}">
          <div class="shopBagTrades-infor clr">
            <img src="${newArr[i].smallImage}" alt="" class="fl">
            <p class="fl shopBagTrades-infor-title">${newArr[i].title}<br><span>尺码 L</span></p>
          </div>
          <div class="shopBagTrades-attr">
            <p>￥${newArr[i].price.salePrice}</p>
            <p><span class="shopBagTrades-btn">-</span><span class="shopBagTrades-num">${newArr[i].num}</span><span class="shopBagTrades-btn">+</span></p>
            <a href="javascript:;" class="delete">删除</a>
          </div>
          </div>`;
          sum1 += newArr[i].num
          sum2 +=newArr[i].price.salePrice*newArr[i].num
        }
        $(".shoppingBag-main .shopBagTrades").html(str);
          str1 += `<p>共<span class="trades-num">${sum1}</span>件商品  商品金额<span class="totalPrice">￥${sum2}</span></p>
          <p>总金额 (未含运费)<span class="grossPrice">￥${sum2}</span></p>`; 
        $(".shoppingBag-main .settleAccounts-price").html(str1)
      },
      error: function(msg){
        console.log(msg);
      }
    })
  }
  function loginTab(){
    $("#account").click(function(){
      $(".tab-content").hide();
      $(".tab-content2").show();
      $("#account").css("color","#EE007C");
      $("#besom").css("color","#666")
    })
    $("#besom").click(function(){
      $(".tab-content2").hide();
      $(".tab-content").show();
      $("#besom").css("color","#EE007C");
      $("#account").css("color","#666")
    })
    $(".tab2").click(function(){
      $(".content2-1").hide();
      $(".content2-2").show();
      $(".tab2").html("密码验证登录")
      $(".tab2-delete").hide();
      $(".tab2").click(function(){
        $(".content2-2").hide();
        $(".content2-1").show();
        $(".tab2").html("短信验证登录")
        $(".tab2-delete").show();
      })
    })
  }
  function verify(){
    $("#user").blur(function(){
      var value = $(this).val()
      if(value==0){
        $(".warning").html("请输入登录名");
        $("#user").css("border","1px solid red")
      }else if(!/^\d{11}$/.test(value)){
        $(".warning").html("用户名有误");
        $("#user").css("border","1px solid red")
      }else{
        $(".warning").html("");
        $("#user").css("border","1px solid #b2b2b2")
      }
    })
    $("#password").blur(function(){
      var value = $(this).val()
      if(value==0){
        $(".warning2").html("请输入密码");
        $("#password").css("border","1px solid red")
      }else{
        $(".warning2").html("");
        $("#password").css("border","1px solid #b2b2b2")
      }
    })
  }
  return{
    download,
    magnifying,
    shoppingClick,
    sc_msg,
    loginTab,
    verify,
  }
})