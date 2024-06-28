/*! For license information please see icfpc2024.506e54ba24c7471fa51a.js.LICENSE.txt */
(()=>{var e={511:function(e,t,a){var n;(function(){var r,o,s,i,l;s=/^-?[£$¤]?[\d,.]+%?$/,l=/^\s+|\s+$/g,o=["click"],"ontouchstart"in document.documentElement&&o.push("touchstart"),r=function(e,t,a){return null!=e.addEventListener?e.addEventListener(t,a,!1):e.attachEvent("on"+t,a)},i={init:function(e){var t,a,n,r,o;for(null==e&&(e={}),null==e.selector&&(e.selector="table[data-sortable]"),o=[],n=0,r=(a=document.querySelectorAll(e.selector)).length;r>n;n++)t=a[n],o.push(i.initTable(t));return o},initTable:function(e){var t,a,n,r,o,s;if(1===(null!=(s=e.tHead)?s.rows.length:void 0)&&"true"!==e.getAttribute("data-sortable-initialized")){for(e.setAttribute("data-sortable-initialized","true"),t=r=0,o=(n=e.querySelectorAll("th")).length;o>r;t=++r)"false"!==(a=n[t]).getAttribute("data-sortable")&&i.setupClickableTH(e,a,t);return e}},setupClickableTH:function(e,t,a){var n,s,l,c,u,d;for(l=i.getColumnType(e,a),s=function(n){var r,o,s,c,u,d,p,m,h,f,g,v,b,$,y,w,x,C,k,S,T,A,j,D;if(!0===n.handled)return!1;for(n.handled=!0,p="true"===this.getAttribute("data-sorted"),m=this.getAttribute("data-sorted-direction"),s=p?"ascending"===m?"descending":"ascending":l.defaultSortDirection,b=0,x=(f=this.parentNode.querySelectorAll("th")).length;x>b;b++)(t=f[b]).setAttribute("data-sorted","false"),t.removeAttribute("data-sorted-direction");if(this.setAttribute("data-sorted","true"),this.setAttribute("data-sorted-direction",s),h=e.tBodies[0],d=[],p){for(w=0,S=(D=h.rows).length;S>w;w++)o=D[w],d.push(o);for(d.reverse(),A=0,T=d.length;T>A;A++)u=d[A],h.appendChild(u)}else{for(v=null!=l.compare?l.compare:function(e,t){return t-e},r=function(e,t){return e[0]===t[0]?e[2]-t[2]:l.reverse?v(t[0],e[0]):v(e[0],t[0])},c=$=0,C=(j=h.rows).length;C>$;c=++$)u=j[c],g=i.getNodeValue(u.cells[a]),null!=l.comparator&&(g=l.comparator(g)),d.push([g,u,c]);for(d.sort(r),y=0,k=d.length;k>y;y++)u=d[y],h.appendChild(u[1])}return"function"==typeof window.CustomEvent&&"function"==typeof e.dispatchEvent?e.dispatchEvent(new CustomEvent("Sortable.sorted",{bubbles:!0})):void 0},d=[],c=0,u=o.length;u>c;c++)n=o[c],d.push(r(t,n,s));return d},getColumnType:function(e,t){var a,n,r,o,s,l,c,u,d,p,m;if(null!=(n=null!=(d=e.querySelectorAll("th")[t])?d.getAttribute("data-sortable-type"):void 0))return i.typesObject[n];for(s=0,c=(p=e.tBodies[0].rows).length;c>s;s++)for(a=p[s],r=i.getNodeValue(a.cells[t]),l=0,u=(m=i.types).length;u>l;l++)if((o=m[l]).match(r))return o;return i.typesObject.alpha},getNodeValue:function(e){var t;return e?null!==(t=e.getAttribute("data-value"))?t:void 0!==e.innerText?e.innerText.replace(l,""):e.textContent.replace(l,""):""},setupTypes:function(e){var t,a,n,r;for(i.types=e,i.typesObject={},r=[],a=0,n=e.length;n>a;a++)t=e[a],r.push(i.typesObject[t.name]=t);return r}},i.setupTypes([{name:"numeric",defaultSortDirection:"descending",match:function(e){return e.match(s)},comparator:function(e){return parseFloat(e.replace(/[^0-9.-]/g,""),10)||0}},{name:"date",defaultSortDirection:"ascending",reverse:!0,match:function(e){return!isNaN(Date.parse(e))},comparator:function(e){return Date.parse(e)||0}},{name:"alpha",defaultSortDirection:"ascending",match:function(){return!0},compare:function(e,t){return e.localeCompare(t)}}]),setTimeout(i.init,0),void 0===(n=function(){return i}.call(t,a,t,e))||(e.exports=n)}).call(this)},579:()=>{window.SimpleCountdown={callback:null,callbackZero:null,computeTimeRemaining:function(e){var t=Date.parse(e)-Date.parse(new Date);return{seconds:t>0?Math.floor(t/1e3%60):0,minutes:t>0?Math.floor(t/1e3/60%60):0,hours:t>0?Math.floor(t/36e5%24):0,days:t>0?Math.floor(t/864e5):0}},isFinished:function(e){return 0==e.days&&0==e.hours&&0==e.minutes&&0==e.seconds},themes:{raw:{content:{title:"My countdown"},style:{container:".sc-container{}",title:".sc-title{}",brick:".sc-brick{padding: 10px;display:inline-block;}",number:".sc-number{}",legend:".sc-legend{display: block;}"}}},addTheme:function(e,t,a){for(p in e)e.hasOwnProperty(p)&&(this.themes[p]=e[p]);t&&(this.callback=t),a&&(this.callbackZero=a)},loadCSS:function(e){var t=document.createElement("div");t.innerHTML="<style>"+this.themes[e].style.title+this.themes[e].style.container+this.themes[e].style.brick+this.themes[e].style.number+this.themes[e].style.legend+(this.themes[e].style.custom||"")+"</style>",document.getElementsByTagName("head")[0].appendChild(t.childNodes[0])},display:function(e,t,a,n){a=a||"raw",n||this.loadCSS(a);var r=this.computeTimeRemaining(t);n||(document.getElementById(e).className+=" sc-container",document.getElementById(e).innerHTML='<div class="sc-title">'+this.themes[a].content.title+'</div><div id="sc-countdown"></div><div class="sc-custom">'+(this.themes[a].content.custom||"")+"</div>"),document.getElementById("sc-countdown").innerHTML='<div class="sc-brick"><span class="sc-number">'+r.days+'</span><span class="sc-legend">Days</span></div><div class="sc-brick"><span class="sc-number">'+r.hours+'</span><span class="sc-legend">Hours</span></div><div class="sc-brick"><span class="sc-number">'+r.minutes+'</span><span class="sc-legend">Minutes</span></div><div class="sc-brick"><span class="sc-number">'+r.seconds+'</span><span class="sc-legend">Seconds</span></div>',!n&&this.callback&&this.callback(),this.isFinished(r)&&this.callbackZero()},autoDisplay:function(e,t,a){this.display(e,t,a,!1),setInterval((function(){SimpleCountdown.display(e,t,a,!0)}),1e3)}}}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,a),o.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=a(511),t=a.n(e);function n(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)e[n]=a[n]}return e}var r=function e(t,a){function r(e,r,o){if("undefined"!=typeof document){"number"==typeof(o=n({},a,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var i in o)o[i]&&(s+="; "+i,!0!==o[i]&&(s+="="+o[i].split(";")[0]));return document.cookie=e+"="+t.write(r,e)+s}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var a=document.cookie?document.cookie.split("; "):[],n={},r=0;r<a.length;r++){var o=a[r].split("="),s=o.slice(1).join("=");try{var i=decodeURIComponent(o[0]);if(n[i]=t.read(s,i),e===i)break}catch(e){}}return e?n[e]:n}},remove:function(e,t){r(e,"",n({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,n({},this.attributes,t))},withConverter:function(t){return e(n({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(a)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});a(579);const o="https://boundvariable.space",s="apitoken",i="course";function l(e){var t=$("<div>");t.addClass("alert"),t.addClass("alert-danger"),t.text(e),$("#loginform").append(t)}function c(e){r.set(s,e,{expires:31}),window.location.href="team.html"}function u(e){e.preventDefault(),$("#loginbutton").prop("disabled",!0),$.ajax({type:"POST",url:o+"/login",data:JSON.stringify({email:$("#email").val(),password:$("#password").val()}),success:c,error:function(e){$("#loginbutton").prop("disabled",!1),401==e.status?l("Email/password combination not found"):l("Unknown login error: "+e.status)}})}function d(e){e.preventDefault(),$("#updatebutton").prop("disabled",!0);var t=r.get(s),a=$("#cur-password").val();if(a){var n=$("#new-password").val(),i=$("#email").val(),l=$("#name").val();$.ajax({type:"POST",url:o+"/team/update",data:JSON.stringify({email:i,name:l,password:a,newpassword:n||void 0}),headers:{Authorization:"Bearer "+t},error:function(e){401==e.status?p("Invalid password","alert-danger"):p("Updating details failed","alert-danger"),$("#updatebutton").prop("disabled",!1)},success:function(){p("Team details updated","alert-success"),$("#teamname").text(l+" ("+i+")"),$("#updatebutton").prop("disabled",!1)}})}else p("Current password must be given","alert-danger")}function p(e,t){var a=$("<div>");a.addClass("alert"),a.addClass(t),a.text(e),$("#updateform").append(a)}function m(e){e.preventDefault(),$("#codesubmit").prop("disabled",!0);var t=r.get(s);$.ajax({type:"POST",url:o+"/codesubmit",data:JSON.stringify({url:$("#url").val(),language:$("#language").val(),juryprize:$("#jury-prize").val()}),headers:{Authorization:"Bearer "+t},error:function(e){h("Code submission failed","alert-danger")},success:function(){h("Submission was saved","alert-success")}})}function h(e,t){var a=$("<div>");a.addClass("alert"),a.addClass(t),a.text(e),$("#codesubmitform").append(a)}function f(e){$(e).html('Please <a href="login.html">log in</a> first.')}function g(e){e.preventDefault(),$("#registerbutton").prop("disabled",!0),$.ajax({type:"POST",url:o+"/register",data:JSON.stringify({email:$("#email").val(),password:$("#password").val(),name:$("#name").val()}),success:c,error:function(e){var t,a;$("#registerbutton").prop("disabled",!1),t=e.responseText,(a=$("<div>")).addClass("alert"),a.addClass("alert-danger"),a.text(t),$("#registerform").append(a)}})}function v(){void 0!==r.get(s)?($("#loginlink").text("Team"),$("#loginlink").attr("href","team.html")):($("#loginlink").text("Log in"),$("#loginlink").attr("href","login.html"))}function b(e=1){var t=r.get(s);$.ajax({url:o+"/team/history",headers:{Authorization:"Bearer "+t},data:{page:e},success:function(t){var a=$("<table>"),n=$("<thead>"),r=$("<tr>");for(var o of["Date/time","Request hash","Response hash"]){var s=$("<th>");s.text(o),r.append(s)}n.append(r),a.append(n);var i=$("<tbody>");for(var l of t){var c=$("<tr>"),u=$("<td>");u.text(l.createdAt),c.append(u);var d=$("<td>");d.text(l.request),c.append(d);var p=$("<td>");p.text(l.response),c.append(p);var m=$("<td>"),h=$("<a>");h.attr("href","#"),h.on("click",{uuid:l.uuid},y),h.text("Load"),m.html(h),c.append(m),i.append(c)}a.append(i),$("#history").html(a);var f=$("<a>");f.addClass("paper-btn"),f.html("&larr; Previous page"),e>1?f.on("click",{page:e-1},(function(e){b(e.data.page)})):f.addClass("disabled"),$("#history").append(f),$("#history").append(" ");var g=$("<a>");g.addClass("paper-btn"),g.html("Next page &rarr;"),t.length>=100?g.on("click",{page:e+1},(function(e){b(e.data.page)})):g.addClass("disabled"),$("#history").append(g)}})}function y(e){var t=r.get(s);$.ajax({url:o+"/team/history/"+e.data.uuid+"/request",headers:{Authorization:"Bearer "+t},success:function(e){$("#input").val(e)}}),$.ajax({url:o+"/team/history/"+e.data.uuid+"/response",headers:{Authorization:"Bearer "+t},success:function(e){w(e)},error:function(e){$("#output").text("Response could not be loaded")}})}function w(e){var t=$("<pre>"),a=$("<code>");a.text(e),t.html(a),$("#output").html(t)}function x(){var e=r.get(s);e?($("#communicateform").on("submit",(function(t){t.preventDefault(),$("#communicate").prop("disabled",!0),$.ajax({type:"POST",url:o+"/communicate",headers:{Authorization:"Bearer "+e},data:$("#input").val(),success:function(e){console.log("Response:",e),$("#communicate").prop("disabled",!1),w(e)},error:function(e){console.log("Error:",e)}})})),b()):f("#communicatepage")}$(document).ready((function(){v();var e=$("#loginform");e.length&&e.on("submit",u);var a,n=$("#registerform");n.length&&n.on("submit",g),$("#taskpage").length&&$.ajax({url:o+"/task",success:function(e){$("#taskpage").html(e)},error:function(e){var t=$.parseJSON(e.responseText);t.contestStart&&(console.log("Counting down to",t.contestStart),SimpleCountdown.addTheme({icfpc2024Theme:{content:{title:"ICFPC 2024 starts in:",custom:"This page will automatically refresh at the start of the contest."},style:SimpleCountdown.themes.raw.style}},(function(){}),(function(){location.reload()})),console.log(),SimpleCountdown.autoDisplay("countdown",t.contestStart,"icfpc2024Theme"))}}),$("#languagepage").length&&$.ajax({url:o+"/language",success:function(e){$("#languagepage").html(e)}}),$("#teampage").length&&((a=r.get(s))?$.ajax({url:o+"/team",headers:{Authorization:"Bearer "+a},success:function(e){$("#teamname").text(e.name+" ("+e.email+")"),$("#teamtoken").text("Authorization: Bearer "+a),$("#logout").on("click",(function(){r.remove(s),$("#teampage").text("You are now logged out."),v()})),$("#refreshapitoken").on("click",(function(){confirm("This will invalidate all sessions, are you sure?")&&function(){var e=r.get(s);$.ajax({type:"POST",url:o+"/team/refresh_token",headers:{Authorization:"Bearer "+e},success:c,error:()=>f("#teampage")})}()})),$("#name").val(e.name),$("#email").val(e.email),$("#updateform").on("submit",d),$("#codesubmitform").on("submit",m)},error:()=>f("#teampage")}):f("#teampage")),$("#scoreboard").length&&function(){$("<link>").appendTo("head").attr({type:"text/css",rel:"stylesheet",href:"css/sortable-theme-minimal.css"});var e=new URLSearchParams(window.location.search),a=e.has(i)?e.get(i):null;let n=a?"/scoreboard/"+a:"/scoreboard";var l={},c=r.get(s);c&&(l.Authorization="Bearer "+c),$.ajax({url:o+n,headers:l,success:e=>function(e,a){var n=$("<div>");if(e)$("#scoreboard-title").text("Scoreboard for "+e),n.append('<a class="paper-btn" href="scoreboard.html">&larr; Back to global scoreboard</a>');else{var r=a.columns.slice(2);for(const e of r)n.append('<a class="paper-btn" href="scoreboard.html?'+i+"="+e+'">'+e+"</a> ")}var o=$("<table data-sortable>");o.addClass("table-hover"),o.addClass("paper"),o.addClass("container");var s=$("<thead>"),l=$("<tr>");for(const e of a.columns){var c=$("<th>");c.attr("data-sortable-type","team"==e?"alpha":"numeric"),c.text(e),l.append(c)}s.append(l);var u=$("<tbody>");for(const e of a.rows){var d=$("<tr>");e.isYou&&d.addClass("background-secondary");for(const t of e.values){var p=$("<td>");null==t?p.attr("data-value",9999999):p.text(t),d.append(p)}u.append(d)}o.append(s),o.append(u),$("#scoreboard").html(n),$("#scoreboard").parent().parent().append(o),t().init()}(a,e)})}(),$("#communicatepage").length&&x()}))})()})();