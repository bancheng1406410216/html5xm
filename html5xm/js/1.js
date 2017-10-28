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