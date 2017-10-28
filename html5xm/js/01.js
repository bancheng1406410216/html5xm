var bgmusic = document.getElementById('2mp3');  
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
var maxwidth;//当前窗口的可以使用的大小
var maxheight;//当前窗口的可以使用的大小
var cshb;
var best=0;//最好成绩
var cj=0;//当前成绩
var yzgz=0;//当前已有数字的格子的个数
var dkd;
var xkd;
var map=[];
map[0]=[0,0,0,0,0];
map[1]=[0,0,0,0,0];
map[2]=[0,0,0,0,0];
map[3]=[0,0,0,0,0];
map[4]=[0,0,0,0,0];
var ys=[];
ys[0]=["ffffff"];
window.onload=function () {
    //在页面加载的时候执行
    var tx=0;
    maxwidth=window.innerWidth/100*90;//在保证页面不会出现滚动条的情况下，使canvas的可以使用的范围最大
    maxheight=window.innerHeight/100*90;
    //上面的方法即可以在视网膜屏上使用，也可以在普通的电脑屏幕上使用。
    //因为：如果通过css固定canvas的大小，那么：
    //1.无法使canvas的大小自相应2.在视网膜屏上，canvas的实际像素大小是css的像素大小的2倍
    if (maxwidth<360)
    {
        tx=1;
    }
    if (maxheight<400)
    {
        tx=1;
    }
    if (tx==1)
    {
        alert("窗口太小，请拉大！");
    }
    tzfbl();
    szcanvasdx();
    hq();
    yx();
    if (localStorage.getItem("best")==null)
    {
        localStorage.setItem("best",0);
    }
    best=localStorage.getItem("best");
    window.addEventListener('keydown', hqaj, true);
}
window.onresize = function(){
    //当人为地调整大小后，重新加载页面
    if (yzgz<2) {  
        location.reload(true);
   }  
   else {  
    if (confirm("你确定重新加载吗？")) {  
        location.reload(true);
    }  
    else {  
    }
    }  
}
function tzfbl() {
    //调整大小
    for (;1==1;)
    {
        if (maxheight/1000*800<(maxwidth-10))
        {
            return;
        }
        else
        {
            maxheight--;
        }
    }
}
function szcanvasdx()
{
    var myCanvas = document.getElementById("myCanvas");
    myCanvas.setAttribute("width", maxwidth);
    myCanvas.setAttribute("height", maxheight);
    myCanvas.setAttribute("id", "myCanvas");
    document.body.appendChild(myCanvas);
}
function hq() {
    var c=document.getElementById("myCanvas");
    if (c.getContext){
      } else {
          alert("此浏览器不支持html5的canvas元素。\n请更新浏览器版本到最新版或更换浏览器。\n推荐的浏览器为：\nchrome的最新版\n推荐的操作系统为：macOS High Sierra (10.13)\n");
          return;
      }
    ctx=c.getContext("2d");
    ctx.rotate(2.3*Math.PI/180);
}
function hzbj() {
    ctx.fillStyle="#ffdab9";
    ctx.fillRect(0,0,maxwidth,maxheight);
}
function hzyjjx(x,y,k,g,bj) {
    //绘制带有圆角的矩形
    ctx.beginPath();
    ctx.moveTo(x+bj,y);
    ctx.lineTo(x+k-bj,y);
    ctx.arcTo(x+k,y,x+k,y+bj,bj);
    ctx.lineTo(x+k,y+g-bj);
    ctx.arcTo(x+k,y+g,x+k-bj,y+g,bj);
    ctx.lineTo(x+bj,y+g);
    ctx.arcTo(x,y+g,x,y+g-bj,bj);
    ctx.lineTo(x,y+bj);
    ctx.arcTo(x,y,x+bj,y,bj);
    ctx.fill();
    return 1;
}
function hzsz2048() {
    ctx.font=" 40px myPingFangSC-Semibold";
    ctx.fillStyle="rgb(98,98,98)";
    ctx.textAlign="center";
    ctx.fillText("2048",maxwidth/2-(maxheight/1000*800/2)/2-10,40,((maxheight/1000*800/2)/2-10)*2);
    ctx.textAlign="start";
}
function hzscore() {
    ctx.fillStyle="rgb(153,103,0)";
    ctx.globalAlpha=0.3;
    hzyjjx(maxwidth/2,5,80,45,20);
    ctx.globalAlpha=1;
    ctx.font=" 20px myPingFangSC-Semibold";
    ctx.fillStyle="rgb(244,244,244)";
    ctx.fillText("score",maxwidth/2+10,20,80);
}
function hzbest() {
    ctx.fillStyle="rgb(153,103,0)";
    ctx.globalAlpha=0.3;
    hzyjjx(maxwidth/2+90,5,80,45,20);
    ctx.globalAlpha=1;
    ctx.font=" 20px myPingFangSC-Semibold";
    ctx.fillStyle="rgb(244,244,244)";
    ctx.fillText("best",maxwidth/2+108,20,80);
}
function hzsc(fs) {
    ctx.font=" 20px myPingFangSC-Semibold";
    ctx.fillStyle="rgb(255,255,255)";
    ctx.textAlign="center";
    ctx.fillText(fs,maxwidth/2+35,40,80);
}
function hzbe(fs) {
    ctx.font=" 20px myPingFangSC-Semibold";
    ctx.fillStyle="rgb(255,255,255)";
    ctx.textAlign="center";
    ctx.fillText(fs,maxwidth/2+128,40,80);
}
function hzbzwb() {
    ctx.font=" 20px myPingFangSC-Semibold";
    ctx.fillStyle="rgb(119,110,100)";
    ctx.textAlign="center";
    ctx.fillText("请按“h”键获取帮助",maxwidth/2,70,200);
}
function hz2048gz() {
    ctx.fillStyle="rgb(153,103,0)";
    var a=ctx.shadowColor;
    ctx.shadowColor="black";
    var b=ctx.shadowBlur;
    ctx.shadowBlur=25;
    var c=ctx.shadowOffsetX;
    ctx.shadowOffsetX=-20;
    var d=ctx.shadowOffsetY;
    ctx.shadowOffsetY=-20;
    ctx.globalAlpha=0.2;
    hzyjjx(maxwidth/2-(maxheight/1000*800/2),75,maxheight/1000*800,maxheight/1000*800,20);
    ctx.shadowColor=a;
    ctx.shadowBlur=b;
    ctx.shadowOffsetX=c;
    ctx.shadowOffsetY=d;
    ctx.globalAlpha=1.0;
}
function hzgz() {
    ctx.fillStyle="rgb(145,95,0)";
    dkd=(maxheight/1000*800)/5;
    xkd=dkd/5;
    var csx=maxwidth/2-(maxheight/1000*800/2);
    var csy=75;
    var i=0;
    var j=0;
    var gg=0;
    var hh=0;
    for (i=1;i<5;i++)
    {
        for (j=1;j<5;j++)
        {
            hzyjjx(csx+xkd*i+gg,csy+xkd*j+hh,dkd,dkd,5);
            hh=dkd*j;
        }
        hh=0;
        gg=dkd*i;
    }
}
function sjs(min,max) {
    return  Math.ceil(Math.random()*(max-min)+min);
    //生成随机数
}
function szsz(xx,yy,sz) {
    //根据位置及数字在页面上画数字
    var x=maxwidth/2-(maxheight/1000*800/2)+xkd;
    var y=75+xkd;
    if (xx>1)
    {
        xx--;
        x=x+(dkd+xkd)*xx;
    }
    if (yy>1)
    {
        yy--;
        y=y+(dkd+xkd)*yy;
    }
    x=x+dkd/2;
    y=y+dkd-Math.floor(dkd)/100000*14423;
    ctx.font=" "+Math.floor(dkd)+"px myPingFangSC-Semibold";
    ctx.textAlign="center";
    ctx.fillStyle="ffffff";
    ctx.fillText(sz,x,y,dkd/2);
}
function fsz(sz) {
    //在随机的位置上生成“2”这个数字
    if (yzgz==16)
    {
        alert("游戏结束！\n请按“n”键开始新游戏\n");
        return;
    }
    yzgz=yzgz+1;
    var x=sjs(0,5);
    var y=sjs(0,5);
    var tj=1;
    for (;tj==1;)
    {
        if (x<1)
        {
            x=1;
        }
        if (x>4)
        {
            x=4;
        }
        if (y<1)
        {
            y=1;
        }
        if (y>4)
        {
            y=4;
        }
        if (map[x][y]==0)
        {
            map[x][y]=sz;
           
            tj=0;
        }
        else
        {
        x=sjs(0,5);
        y=sjs(0,5);
        }
    }
    hhmap();
    return map[x][y];
}
function yx()
{
    hzbj();
    hzsz2048();
    hzscore();
    hzbest();
    hzbzwb();
  hz2048gz();
    hzgz();
    cshb=ctx.getImageData(0,0,maxwidth,maxheight);
    hzsc(0);
    if (localStorage.best)
    {
    }
  else
    {
    localStorage.best=0;
    }
    best=Number(localStorage.best);
    hzbe(best);
    //alert(sjs(1,4));//1~4
    ctx.fillStyle="rgb(255,255,255)";
    fsz(2);
   // ctx.putImageData(cshb,0,0,0,0,maxwidth,maxheight);
}
function hp() {
    alert("帮助：\nh键——显示本帮助；\nwasd键及上下左右键——控制方向；\nn键——开始新游戏；\nv键——显示版本信息；");
}
function hhmap() {
    if (cj>best)
    {
        best=cj;
        if (localStorage.best)
        {
            if (localStorage.best>best)
            {
                best=Number(localStorage.best);
            }
            else
            {
                localStorage.best=Number(best);
            }
        }
      else
        {
        localStorage.best=Number(best);
        }
    }
    localStorage.setItem("best",best);
    ctx.putImageData(cshb,0,0,0,0,maxwidth,maxheight);
    hzsc(cj);
    hzbe(best);
    var i=1;
    var j=1;
    for (i=1;i<5;i++)
    {
        for (j=1;j<5;j++)
        {
            if (map[i][j]>0)
            {
            szsz(i,j,map[i][j]);
            }
        }
    }
}