define(["jquery","jquery-cookie"],function($){
  function download(){
    $.ajax({
      url:"../data/data.json",
      success:function(arr){
        var str = ``;
        for(var i=0;i<arr.length;i++){
          str += ``
        }
        // $("").html(str)
      },
      error:function(msg){
        console.log(msg)
      }
    })
  }
  return{
    download,
  }
})