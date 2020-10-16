<?php
  header("Content-type:text/html;charset=utf-8");
  $responseData = array("code" => 0, "msg" => "");

  //取出我们提交过来的数据
  $username = $_POST['username'];
  $password = $_POST['password'];
  if(!$username){
   $responseData['code'] = 1;
   $responseData['msg'] = "用户名不能为空";
   echo json_encode($responseData);
   exit;
  }
  if(!$password){
   $responseData['code'] = 2;
   $responseData['msg'] = "密码不能为空";
   echo json_encode($responseData);
   exit;
  }
  $link = mysql_connect("127.0.0.1", "root", "123456");
  if(!$link){
    echo "数据库链接失败";
    exit; //退出程序
  }
  mysql_set_charset("utf8");
  mysql_select_db("db1");
  $str = md5(md5(md5($password).'qingdao')."qianfeng");
  $sql = "SELECT * FROM user WHERE username='{$username}' AND password='{$str}'";
  $res = mysql_query($sql);
  $row = mysql_fetch_assoc($res);
  if(!$row){
    $responseData['code'] = 3;
    $responseData['msg'] = "用户名或密码错误";
    echo json_encode($responseData);
    exit;
  }
  $responseData['msg'] = "登陆成功";
  echo json_encode($responseData);
  mysql_close($link);
?>