$(document).ready(function () {
    //隐藏其他三副图片
    $(".firstFigure").eq(0).siblings().css({ "display": "none" });

    showTime();

    $("#leftHand").click(function () {
        alert("2")
    })

    //定义 $parent 为每个列表的子元素li
    var $parent = $("#navName a").parent();

    //当鼠标悬停时，调用显示函数
    $("#navName a").hover(function () {
        return show(this);
    })

    //当鼠标离开时，调用隐藏函数
    $parent.mouseleave(function () {
        return hide(this);
    })


    $("#figure").mouseover(function () {
        clearInterval(timer);
    })

    $("#figure").mouseout(function () {
        showTime();
    })

    $("#button span").eq(0).hover(function () {
        $("#figurePicture img").eq(0).siblings().css({ "display": "none" });
        $("#figurePicture img").eq(0).css({ "display": "block" });
    })

    $("#button span").eq(1).hover(function () {
        $("#figurePicture img").eq(1).siblings().css({ "display": "none" });
        $("#figurePicture img").eq(1).css({ "display": "block" });
    })
    $("#button span").eq(2).hover(function () {
        $("#figurePicture img").eq(2).siblings().css({ "display": "none" });
        $("#figurePicture img").eq(2).css({ "display": "block" });
    })
    $("#button span").eq(3).hover(function () {
        $("#figurePicture img").eq(3).siblings().css({ "display": "none" });
        $("#figurePicture img").eq(3).css({ "display": "block" });
    })
    
})
var i = 1;   //定义全局变量，用以记录当前轮播图片
var timer;   //定义计时器，以设置定时切换图片

//创建show()函数，以显示当前首页轮播图片
function Show() {
    $(".firstFigure").eq(i).css({ "display": "block" });
    $(".firstFigure").eq(i).css({ "z-index": "1" });
    $(".firstFigure").eq(i).siblings().css({ "display": "none" });
    $(".firstFigure").eq(i).siblings().css({ "z-index": "0" });
}

//创建一个定时器函数
function showTime() {
    timer = setInterval(function () {
        Show();
        i++;
        //图片切换到最后一张时，重置i指向第一张图片
        if (i == 4) {
            i = 0;
        }
    },2000)
}





//显示函数（二级菜单）
function show(aNode) {
    var $ulOutside = $(aNode).parent();
    var $ulInside = $ulOutside.find("ul");
    $ulInside.css({ display: "inline" });
}

//隐藏函数（二级菜单）
function hide(parent) {
    var $ulIn = $(parent).find("ul");
    $ulIn.css({ display: "none" });
}

//屏幕下滑时出现aside
$(function () {
    showScroll();
    function showScroll() {
        $(window).scroll(function () {
            var scrollValue = $(window).scrollTop();
            scrollValue > 300 ? $("#aside").css({ "display": "block" }) : $("#aside").css({ "display": "none" });
            scrollValue > 100 ? $("#article").css({ "display": "block" }) : $("#aside").css({ "display": "none" });
            scrollValue > 350 ? $(".word1").fadeIn("slow") : $(".word1").fadeOut();
            scrollValue > 450 ? $(".word2").fadeIn("slow") : $(".word2").fadeOut();
            scrollValue > 650 ? $(".Photo2").fadeIn("slow") : $(".Photo2").fadeOut();
            scrollValue > 650 ? $(".Border2").fadeIn("slow") : $(".Border2").fadeOut();
            scrollValue > 900 ? $(".word3").fadeIn("slow") : $(".word3").fadeOut();
            scrollValue > 1000 ? $(".word4").fadeIn("slow") : $(".word4").fadeOut();
        })
    }
})
