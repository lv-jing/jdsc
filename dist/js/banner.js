$(function(){for(var i=$("#list li").size(),s=1;s<=i;s++){var l="<li>"+s+"</li>";$("#btns").append(l)}$("#list li").eq(0).show(),$("#btns li").eq(0).addClass("oli"),$("#btns li").mouseover(function(){$(this).addClass("oli").siblings().removeClass("oli");var i=$(this).index();s=i,$("#list li").eq(s).fadeIn(300).siblings().fadeOut(300)});s=0;var n=setInterval(e,3e3);function e(){++s==i&&(s=0),$("#btns li").eq(s).addClass("oli").siblings().removeClass("oli"),$("#list li").eq(s).fadeIn(300).siblings().fadeOut(300)}$("#banner").hover(function(){clearInterval(n)},function(){n=setInterval(e,3e3)}),$("#btn span").eq(0).click(function(){-1==--s&&(s=i-1),$("#btns li").eq(s).addClass("oli").siblings().removeClass("oli"),$("#list li").eq(s).fadeIn(300).siblings().fadeOut(300)}),$("#btn span").eq(1).click(function(){e()})});