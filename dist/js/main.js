require.config({
  paths:{
    "jquery":"jquery-1.11.3",
    "jquery-cookie": "jquery.cookie",
    "parabola":"parabola",
    "index":"index"
  },
  shim:{
    "jquery-cookie":["jquery"],
    parabola:{ 
      exports:'_'
    }
  }
})
require(['index'],function(index){
  // index.download();
})