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
function hmap()
{
    ctx.clearRect(0,0,csh+(tph*mapdx[dqgs][1]+100),css+(tps*mapdx[dqgs][0]+100));
    mapdq=map[dqgs];//从地图文件中获取当前地图数据
    mapdqdx=mapdx[dqgs];//从地图文件中获取当前地图的大小
    var h=0;
    var s=0;
    var wzh=csh;
    var wzs=css;
    for (h=0;h<mapdqdx[0];h++)
    {
        wzh=csh;
        for (s=0;s<mapdqdx[1];s++)
        {
            
            switch (mapdq[h][s]) {
                case 1:
                ctx.fillStyle="#191970";
                ctx.fillRect(wzh,wzs,tph,tps);
                break;
                case 0:
                ctx.fillStyle="#ffffff";
                ctx.fillRect(wzh,wzs,tph,tps);
                break;
                case 3:
                ctx.fillStyle="#008000";
                ctx.beginPath();
                ctx.arc(wzh+tph/2,wzs+tph/2,tph/2,0,2*Math.PI);
                ctx.stroke();
                ctx.fill();
                rh=h;
                rs=s;
                break;
                case 4:
                ctx.fillStyle="#ff0000";
                ctx.beginPath();
                ctx.arc(wzh+tph/2,wzs+tph/2,tph/2,0,2*Math.PI);
                ctx.stroke();
                ctx.fill();
                ch=h;
                cs=s;
                break;
                default:
                break;
            }
            wzh=wzh+tph;
        }
        wzs=wzs+tps;
    }
}
function pd(a,b) {
    //判断是否可以移动到那个位置
    if (mapdq[a][b]==0)
    {
        return true;
    }
    if (mapdq[a][b]==1)
    {
        return false;
    }
    if (mapdq[a][b]==4)
    {
        wc=true;
        return true;
    }
    return false;
}
function hqaj(e){
    var keyID = e.keyCode ? e.keyCode :e.which;
    switch (keyID) {
        case 37:
        break;
        case 38:
        break;
        case 39:
        break;
        case 40:
        break;
        default:
        return;
        break;
    }
    if (wc)
    {
        ctx.clearRect(0,0,csh+(tph*mapdx[dqgs][1]+100),css+(tps*mapdx[dqgs][0]+100));
        dqgs++;
        wc=false;
        hmap();
    }
    else
    {
        hmap();
    }
}