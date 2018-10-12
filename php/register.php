
<?php
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

            $r = mysqli_query($link,"select * from phb");
              $datarow = mysqli_num_rows($r);
               //长度
               $json= array();
                        //循环遍历出数据表中的数据
                        for($i=0;$i<$datarow;$i++){
                            $sql_arr = mysqli_fetch_assoc($r);
                            $json[$i]=$sql_arr;
                        }
                        $rg=json_encode($json);
                        echo $rg;
?>