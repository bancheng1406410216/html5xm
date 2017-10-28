var bgmusic = document.getElementById('1mp3');  
bgmusic.addEventListener('canplay', function(){  
    this.play();  
}, false);  
window.addEventListener('load', function(){  
    window.addEventListener('touchstart', once, false);  
}, false);  
function once(){  
    bgmusic.play();  
    window.removeEventListener('touchstart', once, false);  
}
var ctx;
var mapdq=[];//存放地图数据
var mapdqdx=[];//用来存放地图的大小
var dqgs=0;//保存当前的关数
var tph=20;
var tps=20;
var csh=0;
var css=0;
var rh=0;//玩家的当前位置
var rs=0;//玩家的当前位置
var ch=0;//迷宫的出口的位置
var cs=0;//迷宫的出口的位置
var wc=false;//是否完成了当前关卡
var max=3;//与最大关数有关
var kyky=0;
window.onload=function () {
    kyky=0;
    dqgs=0;
    szcanvasdx();
    hqhb();
    if (kyky==1)
    {
        return;
    }
    hmap();//绘制地图
    window.addEventListener('keydown', hqaj, true);
}
function szcanvasdx()
{
    //设置html中的canvas元素的大小
    var myCanvas = document.getElementById("myCanvas");
    myCanvas.setAttribute("width", screen.availWidth);
    myCanvas.setAttribute("height", screen.availHeight);
    myCanvas.setAttribute("id", "myCanvas");
    document.body.appendChild(myCanvas);
}
function hqhb()
{
    //获取canvas的js的对象
    var c=document.getElementById("myCanvas");
    if (c.getContext){} 
    else 
    {
        alert("此浏览器不支持html5的canvas元素。\n请更新浏览器版本到最新版或更换浏览器。\n推荐的浏览器为：\nchrome的最新版\n推荐的操作系统为：macOS High Sierra (10.13)\n");
        return;
    }
    ctx=c.getContext("2d"); 
    kyky=1;
    alert("通过方向键使移动绿色的小球到红球的位置");  
}