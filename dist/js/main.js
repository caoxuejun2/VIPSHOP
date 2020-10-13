require.config({
  paths:{
    "jquery":"jquery-1.11.3",
    "jquery-cookie": "jquery.cookie",
    "parabola":"parabola",
    "index":"index",
    "trade":"trade"
  },
  shim:{
    "jquery-cookie":["jquery"],
    parabola:{ 
      exports:'_'
    }
  }
})
require(['index','trade'],function(index,trade){
  index.move();
  index.off();
  index.ceiling();
  index.footerlist();
  trade.tradeTab();
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
})