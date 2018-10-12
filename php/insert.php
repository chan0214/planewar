<?php
$name=$_GET['name'];
$time=$_GET['time'];
$score=$_GET['score'];

//echo $name,$time,$fraction;

 $link = mysqli_connect(
              'localhost:3306', /* The host to connect to 连接MySQL地址 */
              'root',   /* The user to connect as 连接MySQL用户名 */
              '123456'
             /* The password to use 连接MySQL密码 */
              );  /* The default database to query 连接数据库名称*/

            if (!$link) {
              printf("Can't connect to MySQL Server. Errorcode: %s ", mysqli_connect_error());
              exit;
            }else{
            }
            mysqli_select_db($link,'ranking');
            $sql ="insert into phb (name,time,score) values('".$name."',".$time.",".$score.")";
            $r = mysqli_query($link,$sql);
?>