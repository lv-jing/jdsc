$(function(){$(".header").load("header1.html",function(){$("#bt").bind("input property",function(){$.getJSON("https://suggest.taobao.com/sug?code=utf-8&q="+$("#bt").val()+"&callback=?",function(t){var a="";(t=t.result).forEach(function(t){a+="<li>"+t[0]+"</li>",$(".search").show().html(a)})})}),$(".search").on("mouseover","li",function(){$(this).css({background:"#ccc"}).siblings().css({background:"#fff"})}),$(".search").on("click","li",function(){var t=$(this).html();$("#bt").val(t),$(".search").css("display","none")})}),$(".shoppcart-footer").load("footer.html");var e="";function i(t){for(var a=document.cookie.split("; "),c=0;c<a.length;c++){var e=a[c].split("=");if(e[0]===t)return e[1]}}function p(t,a,c){var e=new Date;e.setDate(e.getDate()+c),document.cookie=t+"="+a+";expires="+e+";path=/"}var l=i("nam");function n(){var t=$(".cartul #check"),a=0,c=0;t.each(function(t){$(this).is(":checked")&&(a+=parseInt($(this).parent().find(".tex").val()),c+=parseInt($(this).parent().find(".cartmoney").html().split("￥")[1])),$(this).parent().parent().next().find($(".span1")).html(a+"件"),$(this).parent().parent().next().find($(".span2")).html("￥"+c.toFixed(2)),$(".coun").html(a)})}l=JSON.parse(l),$(".cartul").on("click",".add",function(){var t=$(this).prev().val(),a=$(this).prev().prev().prev().html();nu=a.split("￥")[1],t++,$(this).prev().val(t);var c=(nu*t).toFixed(2);$(this).next().html("￥"+c);var e=$(this).parent().attr("data-url");for(var n in i("name"),l)e===n&&(l[n]=t);p("nam",JSON.stringify(l),7)}),$(".cartul").on("click",".sub",function(){var t=$(this).next().val(),a=$(this).prev().html();nu=a.split("￥")[1],t<=1?t=1:t--,$(this).next().val(t);var c=(nu*t).toFixed(2);$(this).next().next().next().html("￥"+c);var e=$(this).parent().attr("data-url");for(var n in i("name"),l)e===n&&(l[n]=t);p("nam",JSON.stringify(l),7)}),$("#checkAll").click(function(){$(".cartul input").prop("checked",$(this).prop("checked"))}),$(".cartul").on("click","#check",function(){$("#check:checked").length==$(".cartul #check").length?$("#checkAll").prop("checked",!0):$("#checkAll").prop("checked",!1)}),$("#checkA").click(function(){$(".cartul input").prop("checked",$(this).prop("checked"))}),$(".cartul").on("click","#check",function(){$("#check:checked").length==$(".cartul #check").length?$("#checkA").prop("checked",!0):$("#checkA").prop("checked",!1)}),$(".cart").on("click","input",function(){n()}),$(".cartul").on("click",".cartdelt",function(){var t=$(this).parent().attr("data-url");for(var a in i("name"),l)t===a&&delete l[a];$(this).parent().remove(),p("nam",JSON.stringify(l),7),n(),0===$(".cartul li").length&&($(".span1").html("0件"),$(".span2").html("￥0.00"),$(".coun").html("0"))}),function(){for(var t=0,a=["https://ai.jd.com/General?app=Bi&action=get_sku&groupId=00725585&callback=?","https://ai.jd.com/General?app=Bi&action=get_sku&groupId=00725321&callback=?","https://ai.jd.com/General?app=Bi&action=get_sku&groupId=00718507&callback=?","https://ai.jd.com/General?app=Bi&action=get_sku&groupId=00717303&callback=?","https://ai.jd.com/General?app=Bi&action=get_sku&groupId=00717307&callback=?","https://ai.jd.com/General?app=Bi&action=get_sku&groupId=00717320&callback=?","https://ai.jd.com/General?app=Bi&action=get_sku&groupId=00717324&callback=?","https://ai.jd.com/General?app=Bi&action=get_sku&groupId=00717449&callback=?","https://ai.jd.com/General?app=Bi&action=get_sku&groupId=00717308&callback=?","https://ai.jd.com/General?app=Bi&action=get_sku&groupId=00717326&callback=?","https://ai.jd.com/General?app=Bi&action=get_sku&groupId=00717317&callback=?","https://www.3.cn/bup/index_new.php?app=Bi&action=get_sku&groupId=00717328&callback=?","https://ai.jd.com/General?app=Bi&action=get_sku&groupId=00717331&callback=?","https://ai.jd.com/General?app=Bi&action=get_sku&groupId=00717365&callback=?","https://ai.jd.com/General?app=Bi&action=get_sku&groupId=00717366&callback=?","https://www.3.cn/bup/index_new.php?app=Bi&action=get_sku&groupId=00717396&callback=?","https://ai.jd.com/General?app=Bi&action=get_sku&groupId=00717442&callback=?","https://ai.jd.com/General?app=Bi&action=get_sku&groupId=00717443&callback=?","https://ai.jd.com/General?app=Bi&action=get_sku&groupId=00717445&callback=?","https://ai.jd.com/General?app=Bi&action=get_sku&groupId=00717447&callback=?"],c=0;c<a.length;c++)t++,$.getJSON(a[c],function(t){t=t.DATA.data[0].skuData;for(var a=0;a<t.length;a++)for(var c in l)t[a].skuId==c&&(e+="<li data-url="+t[a].skuId+'><input type="checkbox" id="check" checked="checked"/><img src='+t[a].image+'><p class="carnam">'+t[a].name+'</p><p class="carmone">￥'+parseInt(t[a].pcpPrice).toFixed(2)+'</p><input type="button" value="-" class="sub"><input type="text" value='+l[c]+' class="tex"><input type="button" value="+" class="add"><p class="cartmoney">￥'+parseInt(t[a].pcpPrice*l[c]).toFixed(2)+'</p><p class="cartdelt">删除</p></li>',l[c].delete);$(".cartul").html(e),n()}),t==a.length&&n()}()});