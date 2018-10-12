//全局变量区域
//起始函数区域
//键盘函数区域
//鼠标函数区域
//方法定义区域
//定义飞机走动的判断变量
var zd={
    left:false,//设置飞机对象右走动变量
    right:false,//设置飞机对象左走动变量
    top:false,//设置飞机对象上走动变量
    down:false,//设置飞机对象下走动变量
    //定义全部计时器启动的变量
    zd:false,//设置全局走动变量
    time:0,//设置时间变量初始值
    score:0,//设置分数变量初始值
    fuel:15,//设置燃料变量初始值
    fontText:16,//设置全局字体大小初始值
    music:false,//设置声音的初始开启状态
}//定义全局变量
//创建和获取游戏所需的元素div，例如行星，飞机，子弹等
var obj={
     box:document.getElementById('box'),//获取box对象
     Obg1:document.getElementById("bg1"),//获取第一张背景图对象
     Obg2:document.getElementById("bg2"),//获取第二张背景图对象
     backgroundPlanets:createDivs("backgroundPlanets",5,this.playArea,0),//创建并获取背景行星对象集合
     fj:document.getElementById("fj"),//获取玩家操作飞机对象
     bullet:createDivs("bullet",7,this.playArea,0),//创建并获取子弹对象集合
     enemyAircraft:createDivs("enemyAircraft",6,this.playArea,1),//创建并获取敌方飞机对象集合
     asteroid:createDivs("asteroid",3,this.playArea,2),//创建并获取小行星对象集合
     explosion:createDivs("explosion",5,this.playArea,0),//创建并获取爆炸图片对象集合
     friends:createDivs("friends",4,this.playArea,1),//创建并获取友军飞机
     fuel:createDivs("fuel",4,this.playArea,0),//创建并获取燃油
     EnemyMachineBullets:createDivs("Enemybullets",10,this.playArea),//创建并获取敌机子弹
     TimeIcon:document.getElementsByClassName('textGradient')[0],//获取时间图标
     ScoreIcon:document.getElementsByClassName('textGradient')[1],//获取分数图标
     PauseButton:document.getElementById('pauseBtn'),//获取暂停，继续按钮
     SoundOpen:document.getElementById('soundOpen'),//获取声音开启按钮
     SoundClose:document.getElementById('soundClose'),//获取声音关闭按钮
     fontAdd:document.getElementById('fontAdd'),//获取字体增加按钮
     fontDel:document.getElementById('fontDel'),//获取字体减少按钮
     textGradient:document.getElementsByClassName('textGradient')[2],//获取燃油计数器
     fueldiv:document.getElementById('fueldiv'),//获取显示的燃油div
     startGame:document.getElementById("startGame"),//获取开始游戏按钮
     gameRanking:document.getElementById("gameRanking"),//获取排行榜按钮
     Submit:document.getElementById('Submit'),//获取提交按钮
     submitdiv:document.getElementById('name'),//获取提交div对象
     desc:document.getElementById("desc"),//获取开始页面
     playArea:document.getElementById('playArea'),//获取游戏界面
     rank:document.getElementById("rank"),//获取排行榜页面
     gameover:document.getElementById("over"),//获取游戏结束页面
     carry:document.getElementById("carry"),//获取排行榜页面中继续按钮
     fontAdd:document.getElementById("fontAdd"),//获取字体增大按钮
     fontDel:document.getElementById("fontDel"),//获取字体减小按钮
     WiseArea:this.playArea.querySelectorAll('.game-controller > ul li'),//获取操控飞机的明智区域div集合
     BackgroundMusic:document.getElementById("bjmp3"),//获取背景音乐mp3对象
     enemyMusic:document.getElementById("gwmp3"),//获取怪物爆炸mp3对象
     bulletMusic:document.getElementById("zhidanmp3"),//获取子弹发射mp3对象
     Musicup:document.getElementById("soundOpen"),//获取声音开启按钮
     Musicdown:document.getElementById("soundClose"),//获取声音关闭按钮
}//定义全局对象
//定义开始按钮属性
obj.startGame.onclick=function(){
    obj.desc.className="desc board";//隐藏开始页面
    obj.playArea.className="board showBoard";//显示游戏页面
    GamesStart();//调用开始方法
};
//定义排行榜按钮点击事件

obj.carry.onclick=function(){
    var tbody=document.getElementById("tbody1");//获取原先的排行榜页面的排行榜
    var ta=document.getElementById("ta");//获取排行榜页面中的表格父级
    ta.removeChild(tbody);//删除排行榜
    obj.rank.className="rank board";//隐藏排行榜页面
    zd.fuel=15;//将燃油返回初始的值
    zd.music=true;//将声音返回开始的值
    zd.score=0;//将分数返回初始的值
    zd.time=0;//将声音返回开始的值
    obj.fj.style.top="0px";//将飞机放回原来的位置
    obj.fj.style.left="0px";//将飞机放回原来的位置
    divMoveOut(obj.bullet,-300,true);//将子弹移出屏幕
    divMoveOut(obj.friends,-300,true);//将友军移出屏幕
    divMoveOut(obj.enemyAircraft,-300,true);//将敌机移出屏幕
    divMoveOut(obj.EnemyMachineBullets,-300,true);//将敌机子弹移出屏幕
    divMoveOut(obj.asteroid,-300,true);//将小行星移出屏幕
    divMoveOut(obj.backgroundPlanets,-500,true);//将背景行星移出屏幕
    divMoveOut(obj.fuel,-300,true);//将燃油移出屏幕
    zd.zd=true;//将走动变量开启
    obj.ScoreIcon.innerHTML="分数："+zd.score;//显示分数
    obj.TimeIcon.innerHTML="时间："+zd.time;//显示时间
    obj.textGradient.innerHTML="剩余燃油为 "+zd.fuel;//显示燃油数
    obj.fueldiv.style.height=1.5*zd.fuel+"px";//修改燃油div大小
    obj,fueldiv.style.top=100-(zd.fuel*1.5)+"px";//修改燃油div位置

    obj.BackgroundMusic.currentTime = 0.0;//将声音返回最开始的时候
    obj.BackgroundMusic.play();//开启背景音乐
    obj.playArea.className="board showBoard";//显示游戏页面
}
//创建游戏开始方法
function GamesStart(){
    zd.zd=true;//启用全局暂停变量
    zd.music=true;//启用全局音乐变量
    obj.BackgroundMusic.play();//开启背景音乐
    var bgzd_Time=setInterval("bgzd(obj.Obg1,obj.Obg2,-1,-955,960,zd.zd)",5);//背景图片走动时间
    var fjzd_Time=setInterval("fjzdpd(zd)",7);//飞机走动时间
    var bulletzd_Time=setInterval("divzd(obj.bullet,'left',0,2,0,960,-300,0,zd.zd)",5);//子弹走动时间
    var enemyAircraftAppear_Time=setInterval("divAppear(obj.enemyAircraft,'left',960,500,zd.zd)",800);//敌方飞机出现时间
    var enemyAircraftZd_Time=setInterval("divzd(obj.enemyAircraft,'right',0,-3,0,-50,-300,1,zd.zd)",10);//敌方飞机走动时间
    var asteroidAppear_Time=setInterval("divAppear(obj.asteroid,'left',960,500,zd.zd)",3000);//小行星出现时间
    var asteroidZd_Time=setInterval("divzd(obj.asteroid,'right',0,-4,0,-200,-300,2,zd.zd)",10);//小行星走动时间
    var friendsAppear_Time=setInterval("divAppear(obj.friends,'left',960,500,zd.zd)",5000);//友军飞机出现时间
    var friendsZd_Time=setInterval("divzd(obj.friends,'right',0,-4,0,-200,-300,1,zd.zd)",10);//友军飞机走动时间
    var fuelAppear_Time=setInterval("divAppear(obj.fuel,'top',960,-40,zd.zd)",7000);//燃油出现时间
    var fuelZd_Time=setInterval("divzd(obj.fuel,'top',4,0,600,0,-300,0,zd.zd)",20);//燃油移动时间
    var backgroundPlanetsAppear_Time=setInterval("PlanetsMoveAround(obj.backgroundPlanets,zd.zd)",8000);//背景行星出现时间
    var backgroundPlanetszd_Time=setInterval("PlanetsMoveAroundzd(obj.backgroundPlanets,zd.zd)",5);//背景行星走动时间
    var EnemybulletsAppear_Time=setInterval("EnemyMachineBulletsAppear(obj.EnemyMachineBullets,obj.enemyAircraft,zd.zd)",500);//敌机子弹出现时间
    var Enemybulletszd_Time=setInterval("divzd(obj.EnemyMachineBullets,'right',0,-3,0,-200,-300,0,zd.zd)",7);//敌机子弹走动时间
     var bulletAndEnemyAircraft_Time=setInterval("divCollide(obj.bullet,obj.enemyAircraft,obj.explosion,1,-300,obj.ScoreIcon,5,obj.enemyMusic,zd.zd,zd.music)",100);//子弹与敌机的碰撞判断时间
    var bulletAndAsteroid_Time=setInterval("divCollide(obj.bullet,obj.asteroid,obj.explosion,2,-300,obj.ScoreIcon,10,obj.enemyMusic,zd.zd,zd.music)",100);//子弹与小行星的碰撞判断时间
    var bulletAndFriends_Time=setInterval("divCollide(obj.bullet,obj.friends,obj.explosion,1,-300,obj.ScoreIcon,-10,obj.enemyMusic,zd.zd,zd.music)",100);//子弹与友军飞机的碰撞判断时间
    var aircraftAndEnemyAircraft_Time=setInterval("CollisionOfAircraftSet(obj.fj,obj.enemyAircraft,obj.explosion,-300,-15,obj.fueldiv,obj.textGradient,zd.zd)",5);//飞机与敌机的碰撞判断时间
    var aircraftAndFriendlyAircraft_Time=setInterval("CollisionOfAircraftSet(obj.fj,obj.friends,obj.explosion,-300,-15,obj.fueldiv,obj.textGradient,zd.zd)",5);//飞机与友军飞机的碰撞判断时间
    var aircraftAndAsteroid_Time=setInterval("CollisionOfAircraftSet(obj.fj,obj.asteroid,obj.explosion,-300,-15,obj.fueldiv,obj.textGradient,zd.zd)",5);//飞机与小行星的碰撞判断时间
    var aircraftAndFuel_Time=setInterval("CollisionOfAircraftSet(obj.fj,obj.fuel,null,-300,15,obj.fueldiv,obj.textGradient,zd.zd)",5);//飞机与燃油的碰撞判断时间
    var aircraftAndEnemyMachineBullets_Time=setInterval("CollisionOfAircraftSet(obj.fj,obj.EnemyMachineBullets,obj.explosion,-300,-15,obj.fueldiv,obj.textGradient,zd.zd)",5);//飞机与敌机子弹的碰撞判断时间
     var RemoveTheExplosion_Time=setInterval("divMoveOut(obj.explosion,-300,zd.zd)",1000);//爆炸图片消失时间
     var Timer=setInterval("Timer(obj.TimeIcon,obj.textGradient,obj.fueldiv,zd.zd)",1000);//计时器
     var GameOverTime=setInterval("GameOver(obj.playArea,obj.gameover,obj.BackgroundMusic)",500);//设置游戏介绍计时器
     obj.PauseButton.onclick=function(){
        Pause(zd.zd,obj.BackgroundMusic);//调用方法
     }//设置游戏暂停/继续按钮方法
     obj.fontAdd.onclick=function(){//设置点击事件
        zd.fontText=zd.fontText+1;//修改全局font变量
        FontAddandDel(zd.fontText,obj.textGradient,obj.TimeIcon,obj.ScoreIcon);//调用方法，修改字体大小
     }//设置字体增大按钮
     obj.fontDel.onclick=function(){//设置点击事件
        zd.fontText=zd.fontText-1;//修改全局font变量
        FontAddandDel(zd.fontText,obj.textGradient,obj.TimeIcon,obj.ScoreIcon);//调用方法，修改字体大小
     }//设置字体减少按钮
     obj.Musicup.onclick=function(){//设置声音开启按钮
        zd.music=true;//修改全局music变量为开启
         if(zd.zd===true ){//判断暂停键是否启用和全局music变量是否启用
             obj.BackgroundMusic.play();//播放声音
            }
     }
     obj.Musicdown.onclick=function(){//设置声音关闭按钮
            zd.music=false;//修改全局music变量
            obj.BackgroundMusic.currentTime = 0.0;//将声音返回最开始的时候
            obj.BackgroundMusic.pause();//将声音停止
     }
     //设置提交按钮点击事件
     obj.submitdiv.onkeyup=function(){
        if(obj.submitdiv.value!=""){
            obj.Submit.removeAttribute('disabled');
        }else{
            obj.Submit.setAttribute('disabled',true);
        }
     }
     obj.Submit.onclick=function(){
        var rs=obj.submitdiv.value;//获取提交数据div的值
        if(rs!="" && rs!=null){//当有输入名字时
            var a = ajax({
            url: "../php/insert.php",              //请求地址
            type: "get",                      //请求方式
            async: true,                       //是否异步，默认为true(异步)，false（同步）
            data: {//请求参数
                name: rs,
                time:zd.time,
                score:zd.score
            },
            //请求成功后要执行的内容
            success: function (response) {
                // 此处放成功后执行的代码
                 alert('录入成功！！');
                    obj.gameover.style.zIndex=-3;//隐藏录入页面
                    obj.rank.className="rank board showBoard";//显示排行榜页面
                    var a = ajax({
                        url: "../php/register.php",              //请求地址
                        type: "get",                      //请求方式
                        async: true,                       //是否异步，默认为true(异步)，false（同步）
                        data: {//请求参数
                            mode: "get123,449e3750-cf7e-11e7-9e5e-1866da443c9c"
                        },
                        //请求成功后要执行的内容
                        success: function (response) {
                            // 此处放成功后执行的代码
                          var r=Sucess(response);
                          var tbody=document.createElement("tbody");
                            tbody.id="tbody1";
                            document.getElementById('ta').appendChild(tbody);//创建tbody在table中
                         for(var a=0;a<r.length;a++){//用forin解析json
                               var tr=document.createElement('tr');
                               tr.id="'tr"+a+"'";
                               tbody.appendChild(tr);//将tr插入创建好的tbody
                                for(var b in r[a]){
                                    var td=document.createElement('td');
                                    if(r[a].id===1){
                                        r[a].id="1st";
                                    }
                                    if(r[a].id===2){
                                        r[a].id="2se";
                                    }
                                    if(r[a].id===3){
                                        r[a].id="3th";
                                    }
                                    td.innerHTML=r[a][b];//创建一个td在tr中
                                    document.getElementById("'tr"+a+"'").appendChild(td);
                            }
                          }
                        },
                        //请求失败后要执行的内容
                        error: function (status) {
                            // 此处放失败后执行的代码
                        }
                    });//调用ajax获取排行榜数据

            },
            //请求失败后要执行的内容
            error: function (status) {
                // 此处放失败后执行的代码
            }
        });
        }else{//当没有输入名字时
            obj.Submit.setAttribute('disabled',true);
        }
     }
}//游戏开始函数



//设置键盘点击事件,e为键盘事件的变量
//参数1 整数类型
document.onkeydown=function(e){
    // alert(e.keyCode);//87top,83down,68left,65right,32konge
    switch(e.keyCode){
        case 87:
        zd.top=true;//启用飞机上变量
        break;//跳出判断
        case 83:
        zd.down=true;//启用飞机下变量
        break;//跳出判断
        case 68:
        zd.left=true;//启用飞机右变量
        break;//跳出判断
        case 65:
        zd.right=true;//启用飞机左变量
        break;//跳出判断
        case 80:
        Pause(zd.zd,obj.BackgroundMusic);//调用暂停方法
        break;//跳出判断
    }
}
document.onkeyup=function(e){//设置键盘离开事件
    // alert(e.keyCode);//87top,83down,68left,65right,32konge
    switch(e.keyCode){
        case 87:
        zd.top=false;//停用飞机上变量
        break;//跳出判断
        case 83:
        zd.down=false;//停用飞机下变量
        break;//跳出判断
        case 68:
        zd.left=false;//停用飞机右变量
        break;//跳出判断
        case 65:
        zd.right=false;//停用飞机左变量
        break;//跳出判断
        case 32:
        bulletAppears(obj.bullet,obj.fj,54,15,obj.bulletMusic,zd.zd,zd.music);//调用子弹发射函数
        break;//跳出判断
    }
}
//游戏明智区域设置

AircraftArea(obj.WiseArea);//调用方法，设置明智区域
