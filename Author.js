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

    //鼠标悬停在星星图标上，显示作品
    $("#show1").hover(function () {
        $("#firstShow").css({ "display": "block" });
        $("#shadow1").css({ "display": "block" });
    }, function () {
        $("#firstShow").css({ "display": "none" });
        $("#shadow1").css({ "display": "none" });
    })

    $("#show2").hover(function () {
        $("#secondShow").css({ "display": "block" });
        $("#shadow2").css({ "display": "block" });
    }, function () {
        $("#secondShow").css({ "display": "none" });
        $("#shadow2").css({ "display": "none" });
    })

    $("#show3").hover(function () {
        $("#thirdShow").css({ "display": "block" });
        $("#shadow3").css({ "display": "block" });
    }, function () {
        $("#thirdShow").css({ "display": "none" });
        $("#shadow3").css({ "display": "none" });
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