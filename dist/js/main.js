require.config({
  paths:{
    "jquery":"jquery-1.11.3",
    "jquery-cookie": "jquery.cookie",
    "parabola":"parabola",
    "index":"index",
    "trade":"trade",
    "other":"other"
  },
  shim:{
    "jquery-cookie":["jquery"],
    parabola:{ 
      exports:'_'
    }
  }
})
require(['index','trade','other'],function(index,trade,other){
  index.move();
  index.off();
  index.ceiling();
  index.footerlist();
  trade.tradeTab();
  index.navlist("../data/navJson1.json",".classify-a1");
  index.navlist("../data/navJson2.json",".classify-a2");
  index.navlist("../data/navJson3.json",".classify-a3");
  index.navlist("../data/navJson4.json",".classify-a4");
  index.navlist("../data/navJson5.json",".classify-a5");
  index.navlist("../data/navJson6.json",".classify-a6");
  index.navlist("../data/navJson7.json",".classify-a7");
  index.navlist("../data/navJson8.json",".classify-a8");
  index.navlist("../data/navJson9.json",".classify-a9");
  index.navlist("../data/navJson10.json",".classify-a10");
  index.navlist("../data/navJson11.json",".classify-a11");
  trade.wear("../data/wear.json",".women-wear");
  trade.wear("../data/bag.json",".shoes-bag");
  trade.wear("../data/boy.json",".boy-cloths");
  trade.wear("../data/sport.json",".sports");
  trade.wear("../data/ornament.json",".ornament");
  trade.wear("../data/beauty.json",".beauty");
  trade.wear("../data/infantMom.json",".infantMom");
  trade.wear("../data/home.json",".home");
  trade.wear2("../data/internation.json",".internation");
  trade.wear2("../data/live.json",".live");  
  other.shoppingClick();
})