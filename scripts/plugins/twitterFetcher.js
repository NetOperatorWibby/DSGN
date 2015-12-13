// Twitter Post Fetcher 13.0
// Jason Mayes (http://www.jasonmayes.com/projects/twitterApi)

!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():t()}(this,function(){function e(e){if(null===w){for(var t=e.length,n=0,s=document.getElementById(i),a="";t>n;)a+=e[n],n++;a+="",s.innerHTML=a}else customCallbackfunction(e)}function t(e){return e.replace(/<b[^>]*>(.*?)<\/b>/gi,function(e,t){return t}).replace(/class=".*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,"")}function n(e){for(var t=e.getElementsByTagName("a"),n=t.length-1;n>=0;n--)t[n].setAttribute("target","_blank")}function s(e,t){for(var n=[],s=new RegExp("(^| )"+t+"( |$)"),a=e.getElementsByTagName("*"),i=0,l=a.length;l>i;i++)s.test(a[i].className)&&n.push(a[i]);return n}function a(e){if(void 0!==e){var t=e.innerHTML.match(/data-srcset="([A-z0-9%_\.-]+)/i)[0];return decodeURIComponent(t).split("'")[1]}}var i="",l=20,r=!0,o=[],c=!1,d=!0,m=!0,p=null,u=!0,h=!0,w=null,g=!0,f=!1,v=!0,b="en",y=!0,k={fetch:function(e){if(void 0===e.maxTweets&&(e.maxTweets=20),void 0===e.enableLinks&&(e.enableLinks=!0),void 0===e.showUser&&(e.showUser=!0),void 0===e.showTime&&(e.showTime=!0),void 0===e.dateFunction&&(e.dateFunction="default"),void 0===e.showRetweet&&(e.showRetweet=!0),void 0===e.customCallback&&(e.customCallback=null),void 0===e.showInteraction&&(e.showInteraction=!0),void 0===e.showImages&&(e.showImages=!1),void 0===e.linksInNewWindow&&(e.linksInNewWindow=!0),void 0===e.showPermalinks&&(e.showPermalinks=!0),c)o.push(e);else{c=!0,i=e.domId,l=e.maxTweets,r=e.enableLinks,m=e.showUser,d=e.showTime,h=e.showRetweet,p=e.dateFunction,w=e.customCallback,g=e.showInteraction,f=e.showImages,v=e.linksInNewWindow,y=e.showPermalinks;var t=document.createElement("script");t.src="https://cdn.syndication.twimg.com/widgets/timelines/"+e.id+"?&lang="+(e.lang||b)+"&callback=twitterFetcher.callback&suppress_response_codes=true&rnd="+Math.random(),document.getElementsByTagName("head")[0].appendChild(t)}},callback:function(i){var w=document.createElement("div");w.innerHTML=i.body,"undefined"==typeof w.getElementsByClassName&&(u=!1);var b=[],T=[],C=[],E=[],N=[],x=[],_=[],B=0;if(u)for(var I=w.getElementsByClassName("tweet");B<I.length;)N.push(I[B].getElementsByClassName("retweet-credit").length>0?!0:!1),(!N[B]||N[B]&&h)&&(b.push(I[B].getElementsByClassName("e-entry-title")[0]),x.push(I[B].getAttribute("data-tweet-id")),T.push(I[B].getElementsByClassName("p-author")[0]),C.push(I[B].getElementsByClassName("dt-updated")[0]),_.push(I[B].getElementsByClassName("permalink")[0]),E.push(void 0!==I[B].getElementsByClassName("inline-media")[0]?I[B].getElementsByClassName("inline-media")[0]:void 0)),B++;else for(var I=s(w,"tweet");B<I.length;)b.push(s(I[B],"e-entry-title")[0]),x.push(I[B].getAttribute("data-tweet-id")),T.push(s(I[B],"p-author")[0]),C.push(s(I[B],"dt-updated")[0]),_.push(I[B].getElementsByClassName("permalink")[0]),E.push(void 0!==s(I[B],"inline-media")[0]?s(I[B],"inline-media")[0]:void 0),N.push(s(I[B],"retweet-credit").length>0?!0:!1),B++;b.length>l&&(b.splice(l,b.length-l),T.splice(l,T.length-l),C.splice(l,C.length-l),N.splice(l,N.length-l),E.splice(l,E.length-l),_.splice(l,_.length-l));for(var A=[],B=b.length,L=0;B>L;){if("string"!=typeof p){var P=C[L].getAttribute("datetime"),R=new Date(C[L].getAttribute("datetime").replace(/-/g,"/").replace("T"," ").split("+")[0]),F=formatterfunction(R,P);if(C[L].setAttribute("aria-label",F),b[L].innerText)if(u)C[L].innerText=F;else{var M=document.createElement("p"),H=document.createTextNode(F);M.appendChild(H),M.setAttribute("aria-label",F),C[L]=M}else C[L].textContent=F}var U="";r?(v&&(n(b[L]),m&&n(T[L])),m&&(U+="<div class='user'>"+t(T[L].innerHTML)+"</div>"),U+="<span class='tweet'>"+t(b[L].innerHTML)+"</span>",d&&(U+=y?"<span class='timePosted'><a href='"+_[L]+"'>"+C[L].getAttribute("aria-label")+"</a></span>":"<span class='timePosted'>"+C[L].getAttribute("aria-label")+"</span>")):b[L].innerText?(m&&(U+="<span class='user'>"+T[L].innerText+"</span>"),U+="<span class='tweet'>"+b[L].innerText+"</span>",d&&(U+="<span class='timePosted'>"+C[L].innerText+"</span>")):(m&&(U+="<span class='user'>"+T[L].textContent+"</span>"),U+="<span class='tweet'>"+b[L].textContent+"</span>",d&&(U+="<span class='timePosted'>"+C[L].textContent+"</span>")),g&&(U+="<span class='interact'><a href='https://twitter.com/intent/tweet?in_reply_to="+x[L]+"' class='twitter_reply_icon'"+(v?" target='_blank'>":">")+"Reply</a><a href='https://twitter.com/intent/retweet?tweet_id="+x[L]+"' class='twitter_retweet_icon'"+(v?" target='_blank'>":">")+"Retweet</a><a href='https://twitter.com/intent/favorite?tweet_id="+x[L]+"' class='twitter_fav_icon'"+(v?" target='_blank'>":">")+"Favorite</a></span>"),f&&void 0!==E[L]&&(U+="<div class='media'><img src='"+a(E[L])+"' alt='Image from tweet'/></div>"),A.push(U),L++}e(A),c=!1,o.length>0&&(k.fetch(o[0]),o.splice(0,1))}};return window.twitterFetcher=k,k});