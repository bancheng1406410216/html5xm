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