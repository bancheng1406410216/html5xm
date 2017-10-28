        function yx() {
            var i=1;
            if (navigator.platform=="MacIntel")
            {
             if (window.devicePixelRatio=="2")
            {
            ;
            }
            else
            {
             alert("本网站建议在以下设备上浏览：拥有视网膜屏的imac或macbook pro或imac pro");
            }
            ;
            }
            else
            {
             alert("本网站建议在以下设备上浏览：拥有视网膜屏的imac或macbook pro或imac pro");
            }
            for (;i==1;)
            {
                var xz = prompt("请输入你要玩的游戏的数字。\n1\t\t走迷宫游戏\n2\t\t2048游戏。\n3\t其它一些内容。", "");
                if (xz)
                {
                    if(xz==1)
                    {
                        i=0;
                        top.location="1.html";
                    }
                    else
                    {
                        if(xz==2)
                        {
                            i=0;
                            top.location="01.html";
                        }
                        else
                        {
                            if(xz==3)
                            {
                                i=0;
                                top.location="gn.html";
                            }
                            else
                            {
                                i=1;
                                alert("输入错误！\n请重新输入！");
                            }
                        }
                    }
                }
                else
                {
                    i=0;
                    window.close();
                }
            }
    }
    yx();