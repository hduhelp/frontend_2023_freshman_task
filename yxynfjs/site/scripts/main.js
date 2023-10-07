var data;
var page;
var item;
var select = new Array();

function init() {
    data = localStorage.getItem("data");
    if (data == null) {
        data = initdata;
        localStorage.setItem("data", JSON.stringify(data));
    } else {
        data = JSON.parse(data);
    }
    item = data.length;
    page = 1;
    for (var i = 0; i < item; i++) {
        select[i] = 0;
    }
}

function display() {
    for (var i = 0; i < 10; i++) {
        var p = i + (page - 1) * 10;
        if (p < item) {
            var tmp = data[p];
            var txt = "";
            if (select[p] == 0) {
                txt += "<td><input type=\"checkbox\"></td>"
            } else {
                txt += "<td><input type=\"checkbox\" checked></td>"
            }
            txt += "<td>" + (p + 1) + "</td>";
            txt += "<td>" + tmp.id + "</td>";
            txt += "<td>" + tmp.name + "</td>";
            txt += "<td>" + tmp.school + "</td>";
            txt += "<td>" + tmp.major + "</td>";
            txt += "<td>" + tmp.grade + "</td>";
            txt += "<td>" + tmp.class + "</td>";
            txt += "<td>" + tmp.age + "</td>";
            txt += "<td><button class=\"center red check\">查看</button><button class=\"center red change\">修改</button></td>";
            $("tbody>tr:nth-child(" + (i + 1) + ")").empty().append(txt);
        } else {
            $("tbody>tr:nth-child(" + (i + 1) + ")").empty();
        }
    }
    $("#info").empty().text("第" + page + "页,共" + item + "条,(每页显示10条)");
    
    $(".check").click(function(){
        $("#check .num").val($(this).parent().parent().children().eq(1).text());
        $("#check .id").val($(this).parent().parent().children().eq(2).text());
        $("#check .name").val($(this).parent().parent().children().eq(3).text());
        $("#check .school").val($(this).parent().parent().children().eq(4).text());
        $("#check .major").val($(this).parent().parent().children().eq(5).text());
        $("#check .grade").val($(this).parent().parent().children().eq(6).text());
        $("#check .class").val($(this).parent().parent().children().eq(7).text());
        $("#check .age").val($(this).parent().parent().children().eq(8).text());
        $("#light").show();
        $("#check").show();
    });
    $(".change").click(function(){
        $("#change .num").val($(this).parent().parent().children().eq(1).text());
        $("#change .id").val($(this).parent().parent().children().eq(2).text());
        $("#change .name").val($(this).parent().parent().children().eq(3).text());
        $("#change .school").val($(this).parent().parent().children().eq(4).text());
        $("#change .major").val($(this).parent().parent().children().eq(5).text());
        $("#change .grade").val($(this).parent().parent().children().eq(6).text());
        $("#change .class").val($(this).parent().parent().children().eq(7).text());
        $("#change .age").val($(this).parent().parent().children().eq(8).text());
        $("#light").show();
        $("#change").show();
    });
    $("tbody input").click(function(){
        select[$(this).parent().parent().children().eq(1).text() - 1] ^= 1;
    })
}

$(document).ready(function(){
    init();
    display();
    $("#last").click(function(){
        if (page > 1) {
            page--;
            display();
        }
    });
    $("#next").click(function(){
        if (page < item / 10) {
            page++;
            display();
        }
    });
    $("#check .exit").click(function(){
        $("#light").hide();
        $("#check").hide();
    });
    $("#change .confirm").click(function(){
        var n = $("#change .num").val() - 1;
        data[n].id = $("#change .id").val();
        data[n].name = $("#change .name").val();
        data[n].school = $("#change .school").val();
        data[n].major = $("#change .major").val();
        data[n].grade = $("#change .grade").val();
        data[n].class = $("#change .class").val();
        data[n].age = $("#change .age").val();
        localStorage.setItem("data", JSON.stringify(data));
        $("#light").hide();
        $("#change").hide();
        display();
    });
    $("#change .exit").click(function(){
        $("#light").hide();
        $("#change").hide();
    });
    $(".add").click(function(){
        $("#light").show();
        $("#add").show();
    });
    $("#add .confirm").click(function(){
        var tmp = new Object();
        tmp.id = $("#add .id").val();
        tmp.name = $("#add .name").val();
        tmp.school = $("#add .school").val();
        tmp.major = $("#add .major").val();
        tmp.grade = $("#add .grade").val();
        tmp.class = $("#add .class").val();
        tmp.age = $("#add .age").val();
        data.push(tmp);
        select.push(0);
        item++;
        localStorage.setItem("data", JSON.stringify(data));
        $("#light").hide();
        $("#add").hide();
        display();
    });
    $("#add .exit").click(function(){
        $("#light").hide();
        $("#add").hide();
    });
    $(".del").click(function(){
        var tdata = new Array();
        for (var i = 0; i < item; i++) {
            if (select[i] == 0) {
                tdata.push(data[i]);
            }
        }
        data = tdata;
        item = data.length;
        select = new Array();
        for (var i = 0; i < item; i++) {
            select[i] = 0;
        }
        localStorage.setItem("data", JSON.stringify(data));
        display();
    });
});