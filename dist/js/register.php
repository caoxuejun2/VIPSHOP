<?php
  header("Content-type:text/html;charset=utf-8");
   //模拟官方的请求状态返回格式 eg:404notFound
   $responseData = array("code" => 0,"msg" => "");

   //取出我们提交过来的数据
   $username = $_POST['username'];
   $password = $_POST['password'];
   $repassword = $_POST['repassword'];
   $createtime = $_POST['createtime'];

   //我们需要对我们提交过来的数据，做一个简单的验证
  if(!$username){
    $responseData['code'] = 1;
    $responseData['msg'] = "手机号不能为空";
    echo json_encode($responseData);
    exit;
  }

  if(!$password){
    $responseData['code'] = 2;
    $responseData['msg'] = "密码不能为空";
    echo json_encode($responseData);
    exit;
  }

  if($password != $repassword){
    $responseData['code'] = 3;
    $responseData['msg'] = "两次密码输入不一致";
    echo json_encode($responseData);
    exit;
  }
   //1、链接数据库
   $link = mysql_connect("127.0.0.1", "root", "123456");

   //2、判断数据库是否链接成功
   if(!$link){
     echo "数据库链接失败";
     exit; //退出程序
   }
 
   //3、设置访问字符集
   mysql_set_charset("utf8");
 
   //4、选择我们要访问数据库
   mysql_select_db("db1");

   $sql1 = "SELECT * FROM user WHERE username = '$username'";

   $res = mysql_query($sql1);   //发送

   $row = mysql_fetch_assoc($res);  //取出一行数据

   if($row){
     $responseData['code'] = 4;
     $responseData['msg'] = "用户名已存在" ;
     echo json_encode($responseData);
     exit;
   }
   $str = md5(md5(md5($password).'qingdao')."qianfeng");

   $sql2 = "INSERT INTO user(username,password,createtime) VALUES('{$username}','{$str}',{$createtime})";

   $res2 = mysql_query($sql2);

   if(!$res2){ //<1> 检查sql  <2> 检查数据库字段
    $responseData['code'] = 5;
    $responseData['msg'] = "服务器忙";
    echo json_encode($responseData);
    exit;
  }
 
  $responseData['msg'] = "注册成功";
  echo json_encode($responseData);

  mysql_close($link);
?>