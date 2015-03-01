// Fluidbox 1.4.3
// Terry Mun (http://terrymun.com)

// jQuery debounced resize event
!function(n,r){var t=function(n,r,t){var e;return function(){function i(){t||n.apply(u,a),e=null}var u=this,a=arguments;e?clearTimeout(e):t&&n.apply(u,a),e=setTimeout(i,r||100)}};jQuery.fn[r]=function(n){return n?this.bind("resize",t(n)):this.trigger(r)}}(jQuery,"smartresize");

// CSS animation callback
function whichTransitionEvent(){var n,i=document.createElement("fakeelement"),t={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(n in t)if(void 0!==i.style[n])return t[n]}var customTransitionEnd=whichTransitionEvent();

// Plugin
!function(t){var e=0;t.fn.fluidbox=function(i){var a=t.extend(!0,{viewportFill:.95,debounceResize:!0,stackIndex:1e3,stackIndexDelta:10,closeTrigger:[{selector:".fluidbox-overlay",event:"click"},{selector:"document",event:"keyup",keyCode:27}],immediateOpen:!1,loadingEle:!0},i),d=["keyup","keydown","keypress"];a.stackIndex<a.stackIndexDelta&&(a.stackIndexDelta=a.stackIndex),$fbOverlay=t("<div/>",{"class":"fluidbox-overlay",css:{"z-index":a.stackIndex}});var o,n=this,s=t(window),l=function(e){t(e+".fluidbox-opened").trigger("click")},r=function(e,i){var d=e.find("img").first(),n=e.find(".fluidbox-ghost"),l=e.find(".fluidbox-loader"),r=e.find(".fluidbox-wrap"),c=e.data(),f=0,g=0;d.data().imgRatio=c.natWidth/c.natHeight,o>d.data().imgRatio?(f=c.natHeight<s.height()*a.viewportFill?c.natHeight:s.height()*a.viewportFill,c.imgScale=f/d.height(),c.imgScaleY=c.imgScale,c.imgScaleX=c.natWidth*(d.height()*c.imgScaleY/c.natHeight)/d.width()):(g=c.natWidth<s.width()*a.viewportFill?c.natWidth:s.width()*a.viewportFill,c.imgScale=g/d.width(),c.imgScaleX=c.imgScale,c.imgScaleY=c.natHeight*(d.width()*c.imgScaleX/c.natWidth)/d.height());var h=s.scrollTop()-d.offset().top+.5*d.data("imgHeight")*(d.data("imgScale")-1)+.5*(s.height()-d.data("imgHeight")*d.data("imgScale")),u=.5*d.data("imgWidth")*(d.data("imgScale")-1)+.5*(s.width()-d.data("imgWidth")*d.data("imgScale"))-d.offset().left,p=parseInt(1e3*c.imgScaleX)/1e3+","+parseInt(1e3*c.imgScaleY)/1e3;n.add(l).css({transform:"translate("+parseInt(10*u)/10+"px,"+parseInt(10*h)/10+"px) scale("+p+")",top:d.offset().top-r.offset().top,left:d.offset().left-r.offset().left}),n.one(customTransitionEnd,function(){t.each(i,function(t,i){e.trigger(i)})})},c=function(t){function e(){r.imgWidth=i.width(),r.imgHeight=i.height(),r.imgRatio=i.width()/i.height(),d.add(n).css({width:i.width(),height:i.height(),top:i.offset().top-l.offset().top+parseInt(i.css("borderTopWidth"))+parseInt(i.css("paddingTop")),left:i.offset().left-l.offset().left+parseInt(i.css("borderLeftWidth"))+parseInt(i.css("paddingLeft"))}),r.imgScale=o>r.imgRatio?s.height()*a.viewportFill/i.height():s.width()*a.viewportFill/i.width()}if(o=s.width()/s.height(),t.hasClass("fluidbox")){var i=t.find("img").first(),d=t.find(".fluidbox-ghost"),n=t.find(".fluidbox-loader"),l=t.find(".fluidbox-wrap"),r=i.data();e(),i.load(e)}},f=function(e){if(t(this).hasClass("fluidbox")){var i=t(this),d=t(this).find("img").first(),o=t(this).find(".fluidbox-ghost"),n=t(this).find(".fluidbox-loader"),s=t(this).find(".fluidbox-wrap"),l=encodeURI(i.attr("href")),c={},f=function(){i.trigger("openstart"),i.append($fbOverlay).data("fluidbox-state",1).removeClass("fluidbox-closed").addClass("fluidbox-opened"),c.close&&window.clearTimeout(c.close),c.open=window.setTimeout(function(){t(".fluidbox-overlay").css({opacity:1})},10),t(".fluidbox-wrap").css({zIndex:a.stackIndex-a.stackIndexDelta-1}),s.css({"z-index":a.stackIndex+a.stackIndexDelta}),t(".nav-wrapper").css("opacity","0")},g=function(){i.trigger("closestart"),i.data("fluidbox-state",0).removeClass("fluidbox-opened fluidbox-loaded fluidbox-loading").addClass("fluidbox-closed"),c.open&&window.clearTimeout(c.open),c.close=window.setTimeout(function(){t(".fluidbox-overlay").remove(),s.css({"z-index":a.stackIndex-a.stackIndexDelta})},10),t(".fluidbox-overlay").css({opacity:0}),o.add(n).css({transform:"translate(0,0) scale(1,1)",opacity:0,top:d.offset().top-s.offset().top+parseInt(d.css("borderTopWidth"))+parseInt(d.css("paddingTop")),left:d.offset().left-s.offset().left+parseInt(d.css("borderLeftWidth"))+parseInt(d.css("paddingLeft"))}),o.one(customTransitionEnd,function(){i.trigger("closeend")}),d.css({opacity:1}),t(".nav-wrapper").css("opacity","1")};0!==t(this).data("fluidbox-state")&&t(this).data("fluidbox-state")?g():(i.addClass("fluidbox-loading"),d.css({opacity:0}),o.css({"background-image":"url("+d.attr("src")+")",opacity:1}),a.immediateOpen?(i.data("natWidth",d[0].naturalWidth).data("natHeight",d[0].naturalHeight),f(),r(i,["openend"]),t("<img/>",{src:l}).load(function(){i.trigger("imageloaddone").trigger("delayedloaddone").removeClass("fluidbox-loading").addClass("fluidbox-loaded").data("natWidth",t(this)[0].naturalWidth).data("natHeight",t(this)[0].naturalHeight),o.css({"background-image":"url("+l+")"}),r(i,["delayedreposdone"])}).error(function(){i.trigger("imageloadfail"),g()})):t("<img/>",{src:l}).load(function(){i.trigger("imageloaddone").removeClass("fluidbox-loading").addClass("fluidbox-loaded").data("natWidth",t(this)[0].naturalWidth).data("natHeight",t(this)[0].naturalHeight),o.css({"background-image":"url("+l+")"}),f(),r(i,["openend"])}).error(function(){i.trigger("imageloadfail"),g()})),e.preventDefault()}},g=function(e){e?c(e):n.each(function(){c(t(this))});var i=t("a.fluidbox.fluidbox-opened");i.length>0&&r(i,["resizeend"])};return a.debounceResize?t(window).smartresize(function(){g()}):t(window).resize(function(){g()}),n.each(function(){if(t(this).is("a")&&1===t(this).children().length&&t(this).children().is("img")&&"none"!==t(this).css("display")&&"none"!==t(this).parents().css("display")){var i=t("<div/>",{"class":"fluidbox-wrap",css:{"z-index":a.stackIndex-a.stackIndexDelta}}),o=t("<div/>",{"class":"fluidbox-loader"});e+=1;var n=t(this);n.addClass("fluidbox fluidbox-closed").attr("id","fluidbox-"+e).wrapInner(i).find("img").first().css({opacity:1}).after('<div class="fluidbox-ghost"/>').each(function(){var e=t(this);e.width()>0&&e.height()>0?(c(n),n.click(f)):e.load(function(){c(n),n.click(f),n.trigger("thumbloaddone")}).error(function(){n.trigger("thumbloadfail")})}),a.loadingEle&&n.find(".fluidbox-ghost").after(o),t(this).on("recompute",function(){g(t(this)),t(this).trigger("recomputeend")});var r="#fluidbox-"+e;a.closeTrigger&&t.each(a.closeTrigger,function(e){var i=a.closeTrigger[e];"window"!=i.selector?"document"==i.selector&&(i.keyCode&&d.indexOf(i.event)>-1?t(document).on(i.event,function(t){t.keyCode==i.keyCode&&l(r)}):t(document).on(i.event,r,function(){l(r)})):s.on(i.event,function(){l(r)})})}}),n}}(jQuery);