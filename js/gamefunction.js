//背景走动方法
//参数1 对象 要走动的第一个背景
//参数2 对象 要走动的第二个背景
//参数3 数值 代表对象每次走动的值
//参数4 数值 代表对象走动后left的最大值
//参数5 数值 代表left到达最大后要移动到的地方
//参数6 布尔型变量 代表函数是否运行
function bgzd(Obg1,Obg2,l,maxl,yuan,zd){
    if(zd===true){//当zd变量是true时
        Obg1.style.left=Obg1.offsetLeft+l+"px";//第一张背景图走动
        Obg2.style.left=Obg2.offsetLeft+l+"px";//第二张背景图走动
        if(Obg1.offsetLeft<maxl){//判断第一背景对象是否到达指定区域
            Obg1.style.left=yuan+"px";//将第一背景图返回原位
        }
        if(Obg2.offsetLeft<maxl){//判断第二背景对象是否到达指定区域
            Obg2.style.left=yuan+"px";//将第二背景图返回原位
        }
    }
}//背景走动方法
//定义飞机走动判断方法
//参数1 json对象 用来获取所以方向值来进行判断
function fjzdpd(zd){
    if(zd.zd===true){//对象的zd为true时
        if(zd.top===true){//判断上变量是否启用
            fjzd(obj.fj,0,-2,900,520);//运行方法使飞机走动
        }
        if(zd.down===true){//判断下变量是否启用
            fjzd(obj.fj,0,2,900,520);//运行方法使飞机走动
        }
        if(zd.left===true){//判断右变量是否启用
            fjzd(obj.fj,2,0,900,520);//运行方法使飞机走动
        }
        if(zd.right===true){//判断左变量是否启用
            fjzd(obj.fj,-2,0,900,520);//运行方法使飞机走动
        }
    }
}//飞机走动判断方法
//定义飞机走动方法
//参数1 对象 代表需要走动的div
//参数2 数值 代表需要走动的left值
//参数3 数值 代表需要走动的top值
//参数4 数值 代表走动left的最大值
//参数5 数值 代表走动top的最大值
function fjzd(fj,l,t,lmax,tmax){
    var fjl=fj.offsetLeft+l,fjt=fj.offsetTop+t;//定义走动后飞机对象的left和top
    if(fjl>lmax && l>0 || fjl<0 && l<0 || fjt>tmax && t>0 || fjt<0 && t<0){
    }else{//进行判断，如果飞机走动后在屏幕里，就走动，如果在屏幕外，就不动
        fj.style.left=fjl+"px";//飞机走动
        fj.style.top=fjt+"px";//飞机走动
    }
}//飞机走动方法
//定义一个创建多个相同classdiv的方法
//参数1 字符串 定义了要创建div集合的className
//参数2 数值 定义了div集合中div的数量
//参数3 对象 定义了定义div集合的父级
//参数4 数值 定义了集合中每一个div的血量数值
function createDivs(name,max,body,y){
    for(var i=0;i<max;i++){//设置循环
        var div =document.createElement('div');//定义div
        if(name==="backgroundPlanets"){//判断是否需要赋予id
            div.id="planets"+(i+1);
        }
        div.className=name;//设置class
        div.x=false;//设置辨别屏幕里外的属性
        div.y=y;//设置血量
        body.appendChild(div);//插入到body
    }
    return document.getElementsByClassName(name);//返回创建好的div对象组
}//定义一个创建多个相同classdiv的方法
//定义子弹填充方法
//参数1 集合 代表要放入屏幕中的对象集合
//参数2 对象 代表要放入屏幕中的初始位置
//参数3 数值 代表要放入屏幕中的left添加值
//参数4 数值 代表要放入屏幕中的top添加值
//参数5 布尔型变量 代表函数是否运行
//参数6 布尔型变量 代表声音是否播放
function bulletAppears(bullet,fj,left,top,mp3,zd,muisc){
    if(zd===true){//当函数允许运行时
        for(var i=0;i<bullet.length;i++){//定义循环，获取集合中的每一个div
            if(bullet[i].x===false){//判断div是否在屏幕中
                bullet[i].x=true;////将div显示是否在屏幕中的变量改变为是
                bullet[i].style.left=fj.offsetLeft+left+"px";//将div移入屏幕中
                bullet[i].style.top=fj.offsetTop+top+"px";//将div移入屏幕中
                if(mp3!=null && muisc===true){
                    mp3.play();
                }
                break;//跳出循环
            }
        }
    }
}//子弹填充方法
//定义div走动方法
//参数1 集合 代表需要走动的div对象集合
//参数2 字符串 代表要走动的方向
//参数3 数值 代表要走动的top值
//参数4 数值 代表要走动的left值
//参数5 数值 代表走动top的最大值
//参数6 数值 代表走动left的最大值
//参数7 数值 代表消失后重生定义的血量
//参数8 布尔型变量 代表函数是否运行
function divzd(obj,direction,top,left,tmax,lmax,yuan,y,zd){
    if(zd===true){//当函数允许运行时
        for(var i=0;i<obj.length;i++){//定义循环，获取div集合每一个对象div
            if(obj[i].x===true){//判断对象是否在屏幕中
                if(direction==="left"){//进行方法判断，如果是向右
                    obj[i].style.left=obj[i].offsetLeft+left+"px";//div走动
                    if(obj[i].offsetLeft>lmax){//判断div是否到达终点
                        obj[i].x=false;//将div显示是否在屏幕中的变量改变为否
                        obj[i].style.left=yuan+"px";//将div移除屏幕
                        obj[i].style.top=yuan+"px";//将div移除屏幕
                    }
                }
                if(direction==="right"){//进行方法判断，如果是向左
                    obj[i].style.left=obj[i].offsetLeft+left+"px";//div走动
                    if(obj[i].offsetLeft<lmax){ //判断div是否到达终点
                        obj[i].y=y;//将div的血量返回
                        obj[i].x=false;//将div显示是否在屏幕中的变量改变为否
                        obj[i].style.left=yuan+"px";//将div移除屏幕
                        obj[i].style.top=yuan+"px";//将div移除屏幕
                    }
                }
                if(direction==="top"){//进行方向判断，如果是向下
                    obj[i].style.top=obj[i].offsetTop+top+"px";//div走动
                    if(obj[i].offsetTop>tmax){ //判断div是否到达终点
                        obj[i].y=y;//将div的血量返回
                        obj[i].x=false;//将div显示是否在屏幕中的变量改变为否
                        obj[i].style.left=yuan+"px";//将div移除屏幕
                        obj[i].style.top=yuan+"px";//将div移除屏幕
                    }

                }
            }
        }
    }
}//div走动方法
//指定的div出现，方向固定，位置随机的方法
//参数1 集合 代表要出现的div集合
//参数2 字符串 代表出现的方向
//参数3 数值 代表出现位置top的偏差值
//参数4 数值 代表出现位置left的偏差值
//参数5 布尔型变量 代表函数是否运行
function divAppear(obj,direction,l,t,zd){//指定的div出现，方向固定，位置随机的方法
    if(zd===true){//当方法允许运行时
        for(var i=0;i<obj.length;i++){//定义循环，获取div集合里的每一个div对象
            if(obj[i].x===false){//判断对象是否在屏幕中，如果不在就运行下面代码
                if(direction==="left"){//判断方法
                    obj[i].x=true;//将div显示是否在屏幕中的变量改变为是
                    obj[i].style.left=l+"px";//将div移入屏幕
                    obj[i].style.top=parseInt(Math.random()*t)+"px";//将div移入屏幕
                    break;//跳出循环
                }
                if(direction==="top"){//判断方法
                      obj[i].x=true;//将div显示是否在屏幕中的变量改变为是
                    obj[i].style.left=parseInt(Math.random()*l)+"px";//将div移入屏幕
                    obj[i].style.top=t+"px";//将div移入屏幕
                    break;//跳出循环
                }
            }
        }
    }
}//div出现方法
//div碰撞判断方法
//参数1 对象 要进行对比的div
//参数2 对象 要进行对比的div
function divCollideJudge(obj1,obj2){//指定两个div的碰撞判断
    var obj1Left=obj1.offsetLeft;//获取obj1的上左边距
    var obj1Width=obj1Left+obj1.offsetWidth;//获取obj1的右边距
    var obj1Top=obj1.offsetTop;//获取obj1的上边距
    var obj1Height=obj1Top+obj1.offsetHeight;//获取obj1的下边距

    var obj2Left=obj2.offsetLeft;//获取obj2的左边距
    var obj2Width=obj2Left+obj2.offsetWidth;//获取obj2的右边距
    var obj2Top=obj2.offsetTop;//获取obj2的上边距
    var obj2Height=obj2Top+obj2.offsetHeight;//获取obj2的下边距
    if(!(obj1Left>obj2Width || obj1Width<obj2Left || obj1Top>obj2Height || obj1Height<obj2Top) ){//判断四种没有碰撞到的情况，要么obj1在obj2的右边，要么obj1在obj2的左边，要么obj1在obj2的上边，要么obj1在obj2的下边，其余情况皆为碰撞到了
        return true;//如果碰撞到了，返回确定
    }
    return false;//如果没有碰撞到，返回错误
}//div碰撞判断方法
//两个div集合的碰撞判断
//参数1 集合 要进行对比的对象集合，只要碰撞到参数2就会消失
//参数2 集合 要进行对比的参数集合，碰撞到后扣除血量，到0后消失
//参数3 集合 当参数1的对象和参数2的对象消失后出现的div对象
//参数4 数值 代表参数2div原本的血量
//参数5 数值 代表参数1和参数2消失后的位置
//参数6 对象 代表分数div
//参数7 数值 代表分数的变化数值
//参数8 对象 代表要播放的音乐对象
//参数9 布尔型变量 代表函数是否运行
//参数10 布尔型变量 代表声音是否启用
function divCollide(obj1,obj2,obj3,y,yuan,rlobj,rl,mp3,yd,music){//两个div集合的碰撞判断
    if(yd===true){//当方法允许运行时
        for(var i=0;i<obj1.length;i++){//定义循环，获取obj1中的每一个对象
            if(obj1[i].x===true){//判断对象是否在屏幕中
                for(var j=0;j<obj2.length;j++){//定义循环，获取obj2中的每一个对象
                    if(obj2[j].x===true){//判断对象是否在屏幕中
                        var r=divCollideJudge(obj1[i],obj2[j]);//用函数进行位置判断
                        if(r===true){//如果相撞
                            obj2[j].y=obj2[j].y-1;//obj2的血量减1
                            if(obj2[j].y<=0){//如果obj2的血量小于等于0
                                zd.score=zd.score+rl;//对分数进行加减
                                rlobj.innerHTML="分数："+zd.score;//显示分数值
                                obj2[j].y=y;//将obj2的血量变回原来数值
                                obj2[j].x=false;//将div显示是否在屏幕中的变量改变为否
                                obj2[j].style.left=yuan+"px";//将obj2移出屏幕
                                obj2[j].style.top=yuan+"px";//将obj2移出屏幕
                                var obj=obj3;
                                bulletAppears(obj,obj1[i],0,0,mp3,yd,music);//调用方法，将obj3放入屏幕
                            }
                            obj1[i].x=false;//将div显示是否在屏幕中的变量改变为否
                            obj1[i].style.left=yuan+"px";//将obj1移出屏幕
                            obj1[i].style.top=yuan+"px";//将obj1移出屏幕
                        }
                    }
                }
            }
        }
    }
}//div集合间的碰撞判断方法
//将整个div集合移出屏幕的方法
//参数1 集合 代表要移出屏幕的div集合
//参数2 数值 代表div集合移出屏幕后的位置
//参数3 布尔型变量 代表函数是否运行
function divMoveOut(obj,yuan,zd){//将整个div集合移出屏幕的方法
    if(zd===true){//当方法允许运行时
        for(var i=0;i<obj.length;i++){//定义循环，获取集合中的每一个对象
            if(obj[i].x===true){//判断对象是否在屏幕中
                obj[i].x=false;//将对象显示是否在屏幕中的变量改变为否
                obj[i].style.left=yuan+"px";//将对象移出屏幕
                obj[i].style.top=yuan+"px";//将对象移出屏幕
            }
        }
    }
}
//创建飞机与各个其他div集合碰撞的方法
//参数1 对象 和参数2进行判断的对象
//参数2 集合 和参数1进行判断的集合
//参数3  集合 代表参数1和参数2碰撞后出现的div集合
//参数4 数值 代表碰撞后参数2要移动到的位置
//参数5 数组 代表燃油的加减值
//参数6 对象 代表燃油的变化div
//参数7 对象 代表燃油的字体div
//参数8 布尔型变量 代表函数是否运行
function CollisionOfAircraftSet(fjobj,connobj,bzobj,yuan,fuelzhi,fuelobj,fueldiv,yd){
    if(yd===true){//当方法允许运行时
        for(var i=0;i<connobj.length;i++){//定义循环，获取集合中的每一个div
            if(connobj[i].x===true){//判断div是否在屏幕中
                var r=divCollideJudge(fjobj,connobj[i]);//调用碰撞判断方法进行判断
                if(r===true){//如果返回的结果是true
                    connobj[i].x=false;//将对象显示是否在屏幕中的变量改变为否
                    connobj[i].style.left=yuan+"px";//将对象移出屏幕
                    connobj[i].style.top=yuan+"px";//将对象移出屏幕
                    zd.fuel=zd.fuel+fuelzhi;//修改燃油变量值
                    if(zd.fuel<0){
                        zd.fuel=0;
                    }
                    if(zd.fuel>30){
                        zd.fuel=30;
                    }
                    fuelobj.style.height=1.5*zd.fuel+"px";//修改燃油div大小
                    fuelobj.style.top=100-(zd.fuel*1.5)+"px";//修改燃油div位置
                    fueldiv.innerHTML="剩余燃油为 : "+zd.fuel;//显示fuel变量
                    if(bzobj!=null){//进行对参数3的判断
                        bulletAppears(bzobj,fjobj,0,0,null,yd,zd.music);//调用方法将爆炸图片放入屏幕
                    }
                }
            }
        }
    }
}
//创建改变全局走动变量的方法
//参数1 布尔型变量 代表要改变的值
//参数2 对象 代表要关闭的背景音乐
function Pause(obj,music){
    if(obj===true){//进行判断，如果zd为true
        if(music!=null){
            music.pause();//将声音停止
        }
        zd.zd=false;//修改zd为false
        return ;//跳出方法
    }
    if(obj===false){//进行判断，如果zd为false
        if(zd.music===true && music!=null){
            music.play();//播放声音
        }
        zd.zd=true;//修改zd为true
        return ;//跳出方法
    }
}
//创建计时方法
//参数1 对象 时间对象
//参数2 对象 燃油字体对象
//参数3 对象 燃油div对象
//参数4 布尔值对象 代表方法是否执行
function Timer(obj1,obj2,fuelobj,bl){
    if(bl===true){//判断方法是否执行
        zd.time=zd.time+1;//更改全局time变量
        zd.fuel=zd.fuel-1;//更改全局fuel变量
        if(zd.fuel<0){
            zd.fuel=0;
        }
        fuelobj.style.height=1.5*zd.fuel+"px";//修改燃油div大小
        fuelobj.style.top=100-(zd.fuel*1.5)+"px";//修改燃油div位置
        obj1.innerHTML="时间："+zd.time+"s";//显示time变量
        obj2.innerHTML="剩余燃油为 : "+zd.fuel;//显示fuel变量
    }
}
//创建背景行星出现方法
//参数1 集合 要出现的背景行星集合
//参数2 布尔型变量 代表方法是否运行
function PlanetsMoveAround(obj,zd){
    if(zd===true){//当方法允许运行时
        var i=parseInt(Math.random()*4);//获取一个0到4的随机整数
        if(obj[i].x===false){//判断是否在屏幕中，如果没有
            obj[i].x=true;//修改屏幕变量为是
            obj[i].style.left="960px";//移入屏幕
            obj[i].style.top=parseInt(Math.random()*500)+"px";//移入屏幕
        }
    }
}
//创建背景行星走动方法
//参数1 集合 要移动的背景行星集合
//参数2 布尔型变量 代表方法是否运行
function PlanetsMoveAroundzd(obj,zd){
    if(zd===true){//当方法允许运行
        var d=0;//定义初始走动值
        for(var i=0;i<obj.length;i++){//定义循环，获取集合中的每一个div
            if(obj[i].x===true){//当div在屏幕中
                switch(i){//i进行判断，对d进行赋值
                    case 0: d=-1;break;
                    case 1:d=-2;break;
                    case  2:d=-3;break;
                    case 3:d=-4;break;
                    case 4:d=-5;break;
                }
                obj[i].style.left=obj[i].offsetLeft+d+"px";//div走动
                if(obj[i].offsetLeft<d*100){//当div在屏幕外
                    obj[i].x=false;//修改div屏幕函数为否
                    obj[i].style.left="-1000px";//移出屏幕
                    obj[i].style.top="-1000px";//移出屏幕
                }
            }
        }
    }
}
//创建敌机子弹随机出现的函数
//参数1 对象集合 代表要出现的子弹集合
//参数2 对象集合 代表敌机集合
//参数3 布尔型变量 代表方法是否执行
function EnemyMachineBulletsAppear(obj,obj2,zd){
    if(zd===true){//当方法允许运行时
        for(var i=0;i<obj.length;i++){//获取循环中的每一个div
            if(obj[i].x===false){//当div在屏幕外时
                var j=parseInt(Math.random()*obj2.length);//定义一个随机数
                if(obj2[j].x===true){//当随机的obj2函数在屏幕中时
                    obj[i].x=true;//修改obj中div的屏幕函数为是
                    obj[i].style.left=obj2[j].offsetLeft+"px";//将div移入屏幕
                    obj[i].style.top=obj2[j].offsetTop+30+"px";//将div移入屏幕
                }
                break;//跳出循环
            }
        }
    }
}
//创建控制飞机明智区域的方法
//参数1 集合 代表要赋予属性的明智区域集合
function AircraftArea(obj){
    for(var i=0;i<obj.length;i++){//定义循环，获取集合中的每一额div对象
        switch(i){//进行判断
            case 0://如果是0
            obj[i].onmouseover=function(){//修改鼠标悬停时间
                WalkAround(false,false,false,true);//调用方法，改变全局走动变量
            };
            break;//跳出判断
            case 1://如果是1
            obj[i].onmouseover=function(){//修改鼠标悬停时间
                WalkAround(true,false,false,true);//调用方法，改变全局走动变量
            };
            break;//跳出判断
            case 2://如果是2
            obj[i].onmouseover=function(){//修改鼠标悬停时间
                WalkAround(true,false,false,false);//调用方法，改变全局走动变量
            };
            break;//跳出判断
            case 3://如果是3
            obj[i].onmouseover=function(){//修改鼠标悬停时间
                WalkAround(true,false,true,false);//调用方法，改变全局走动变量
            };
            break;//跳出判断
            case 4://如果是4
            obj[i].onmouseover=function(){//修改鼠标悬停时间
                WalkAround(false,false,true,false);//调用方法，改变全局走动变量
            };
            break;//跳出判断
            case 5://如果是5
            obj[i].onmouseover=function(){//修改鼠标悬停时间
                WalkAround(false,true,true,false);//调用方法，改变全局走动变量
            };
            break;//跳出判断
            case 6://如果是6
            obj[i].onmouseover=function(){//修改鼠标悬停时间
                WalkAround(false,true,false,false);//调用方法，改变全局走动变量
            };
            break;//跳出判断
            case 7://如果是7
            obj[i].onmouseover=function(){//修改鼠标悬停时间
                WalkAround(false,true,false,true);//调用方法，改变全局走动变量
            };
            break;//跳出判断

        }
        obj[i].onmouseout=function(){//设置鼠标离开事件
            WalkAround(false,false,false,false);//调用方法，改变全局走动变量
        }
    }


}
//创建修改全局走动变量的方法
//参数1 布尔型变量 代表top变量是否启用
//参数2 布尔型变量 代表down变量是否启用
//参数3 布尔型变量 代表left变量是否启用
//参数4 布尔型变量 代表right变量是否启用
function WalkAround(top,down,left,right){
    if(zd.zd===true){//当全局暂停变量没有启用时
        zd.top=top;//修改全局top变量
        zd.down=down;//修改全局down变量
        zd.left=left;//修改全局left变量
        zd.right=right;//修改全局right变量
    }
}
//创建修改字体的方法
//参数1 数值 代表要变化的字体值
//参数2 对象 代表要修改字体的div对象
//参数3 对象 代表要修改字体的div对象
//参数4 对象 代表要修改字体的div对象
function FontAddandDel(font,fuelobj,TimeIconobj,ScoreIconobj){
    fuelobj.style.fontSize=font+"px";//修改对象字体大小为指定的值
    TimeIconobj.style.fontSize=font+"px";//修改对象字体大小为指定的值
    ScoreIconobj.style.fontSize=font+"px";//修改对象字体大小为指定的值
}
//创建判断游戏结束的方法
//参数1 对象 游戏页面对象
//参数2 对象 游戏结束页面对象
function GameOver(game,over,mp3){
    if(zd.zd===true && zd.fuel<=0){//判断血量是否到0
        divMoveOut(obj.explosion,-300,zd.zd);//消除所以爆炸div
        zd.zd=null;//更改全局暂停值
        zd.music=null;//更改全局音乐值
        over.style.zIndex=2;//显示结束页面
        mp3.pause();//将声音关闭
    }
}
//定义给json排序的方法
//参数1 json集合 代表要修改的json集合
function Sucess(response) {
    var leijia =0;
    var num = 1;                                         //初始化排名数
    response.sort(paiming);                              //对数组进行排序
    for (var i = 0; i < response.length-1; i++) {
        var a=response[i],b=response[i+1];              //a为 当前数，b为下一位
        a.score-b.score==0&&a.time-b.time==0?(a.id=num,b.id=num,leijia++):(a.id=num,b.id = num+=leijia+1,leijia = 0);
      //对数组的排名进行赋值 如果 a和b的时间分数相同 就 排名一样， 累加值+1  不相同 a 的排名不变，b的排名为 num+leijia ,leijia 归零
    };
    return response;
}
function paiming (a,b) {                                //排名函数
    if (a.score === b.score) {                          //如果分数相等
        return b.time - a.time;                         //就判断时间
    }else{                                              //否则
        return b.score - a.score;                       //判断时间
    }
}


//开始设置后台交互方法
//设置与后台交互的ajax方法
//参数1 集合 带表和后台交互的所有数据
function ajax(obj) {
        obj.type = obj.type || "get"; //指定提交方式的默认值
        obj.data = obj.data || null; //设置数据的默认值
        var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"); // 创建XMLHttpRequest对象
        var callback = function (xhr) {
            if (xhr.readyState == 4) {//判断状态码为4时，表示请求完毕可执行内容。
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {//如果状态值为200在300之间，或者是读取缓存中的内容成功时，执行内容。
                    //这里必须要try  catch。即使这里mysql报错，也不会影响到程序的使用。
                    try {
                        obj.success && obj.success(eval(xhr.responseText));
                    }
                    catch (e) {//如果错误，把错误输出到控制台。
                        console.log(xhr.responseText);
                    }
                } else {//如果状态值不是200到300之间，或者不是304表示请求失败，执行失败的内容。
                    obj.error && obj.error();
                }
            }
        }
        var toData = function (obj) { //格式化参数
            if (obj == null) {
                return obj;
            }
            var arr = [];
            for (var i in obj) {
                var str = i + "=" + obj[i];
                arr.push(str);
            }
            return arr.join("&");
        }
        if (obj.type == "post") {//判断是get还是post请求
            xhr.open(obj.type, obj.url, obj.async);//打开连接，参数是：请求方式、请求地址、是否异步
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//如果是post请求，设置请求头信息。设置表单提交时的内容类型
            var data = toData(obj.data);//格式化参数
            xhr.send(data);//发送请求
            obj.async == false && callback(xhr);
        } else{ //get test.php?xx=xx&aa=xx
            var url = obj.url + "?" + toData(obj.data);//格式化yrl参数
            xhr.open(obj.type, url, obj.async);//打开链接
            xhr.send();//发送请求，因为是get请求，所以send（）不填参数
        }
        xhr.onreadystatechange = function () {//每次状态改变时执行的函数
            callback(xhr);
        }
    }
