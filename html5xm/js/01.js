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
