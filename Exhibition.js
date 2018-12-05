$(document).ready(function () {
    //nav 下拉菜单：
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

    // 设置是否喜爱作品
    $(".like img").click(function () {
        if ($(this).attr("src") == "Exhibition/images/like2.png") {
            $(this).attr("src", "Exhibition/images/like.png");
        }
        else {
            $(this).attr("src", "Exhibition/images/like2.png");
        }        
    })

    $(".like2 img").click(function () {
        if ($(this).attr("src") == "Exhibition/images/like2.png") {
            $(this).attr("src", "Exhibition/images/like.png");
        }
        else {
            $(this).attr("src", "Exhibition/images/like2.png");
        }
    })

    $(".like3 img").click(function () {
        if ($(this).attr("src") == "Exhibition/images/like2.png") {
            $(this).attr("src", "images/like.png");
        }
        else {
            $(this).attr("src", "Exhibition/images/like2.png");
        }
    })

    //查看图片放大显示
    $(".picture").click(function () {
        $("#max").css({ "display": "block"});
        $(this).children("img.copy").css({ "display": "block", "width": "500px", "z-index": "3", "height": "auto", "position": "fixed", "top": "110px", "left": "400px" });
    })

    $(".picture2").click(function () {
        $("#max").css({ "display": "block"});
        $(this).children("img.copy").css({ "display": "block", "width": "500px", "z-index": "3", "height": "auto", "position": "fixed", "top": "110px", "left": "400px" });
        $(this).children("img.copy2").css({ "display": "block", "width": "500px", "z-index": "3", "height": "auto", "position": "fixed", "top": "460px", "left": "400px" });

    })

    $(".picture3").click(function () {
        $("#max").css({ "display": "block"});
        $(this).children("img.copy").css({ "display": "block", "width": "500px", "z-index": "3", "height": "auto", "position": "fixed", "top": "110px", "left": "400px" });
        $(this).children("img.copy2").css({ "display": "block", "width": "500px", "z-index": "3", "height": "auto", "position": "fixed", "top": "460px", "left": "400px" });

    })

    //关闭放大框
    $("#max img").click(function () {
        $("#max").css({ "display": "none" });
        $(".picture").children("img.copy").css({ "display": "none" });
        $(".picture2").children("img.copy2").css({ "display": "none" });
        $(".picture2").children("img.copy").css({ "display": "none" });
        $(".picture3").children("img.copy2").css({ "display": "none" });
        $(".picture3").children("img.copy").css({ "display": "none" });
    })
})

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