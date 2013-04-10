/* ------------------------------------------------------------------------
	Class: prettyPhoto
	Use: Lightbox clone for jQuery
	Author: Stephane Caron (http://www.no-margin-for-errors.com)
	Version: 2.3.1
------------------------------------------------------------------------- */

var $pp_pic_holder;var $ppt;(function(A){A.fn.prettyPhoto=function(V){var E=true;var N=[];var D=0;var Q;var R;var U;var X;var F="image";var Y;var L=G();A(window).scroll(function(){C();L=G()});A(window).resize(function(){C();T()});A(document).keypress(function(a){switch(a.keyCode){case 37:if(D==1){return }M("previous");break;case 39:if(D==setCount){return }M("next");break;case 27:K();break}});V=jQuery.extend({animationSpeed:"normal",padding:40,opacity:0.8,showTitle:true,allowresize:true,counter_separator_label:"/",theme:"light_rounded",callback:function(){}},V);A(this).each(function(){var c=false;var b=false;var d=0;var a=0;N[N.length]=this;A(this).bind("click",function(){I(this);return false})});function I(a){Y=A(a);theRel=Y.attr("rel");galleryRegExp=/\[(?:.*)\]/;theGallery=galleryRegExp.exec(theRel);isSet=false;setCount=0;for(i=0;i<N.length;i++){if(A(N[i]).attr("rel").indexOf(theGallery)!=-1){if(Y.attr("href").indexOf(".mov")!=-1){F="quicktime"}else{if(Y.attr("href").indexOf(".swf")!=-1){F="flash"}else{F="image"}}setCount++;if(setCount>1){isSet=true}if(A(N[i]).attr("href")==Y.attr("href")){D=setCount;arrayPosition=i}}}W();$pp_pic_holder.find("p.currentTextHolder").text(D+V.counter_separator_label+setCount);C();A("#pp_full_res").hide();$pp_pic_holder.find(".pp_loaderIcon").show()}showimage=function(d,a,g,f,e,b,c){A(".pp_loaderIcon").hide();if(A.browser.opera){windowHeight=window.innerHeight;windowWidth=window.innerWidth}else{windowHeight=A(window).height();windowWidth=A(window).width()}$pp_pic_holder.find(".pp_content").animate({height:e},V.animationSpeed);projectedTop=L.scrollTop+((windowHeight/2)-(f/2));if(projectedTop<0){projectedTop=0+$pp_pic_holder.find(".ppt").height()}$pp_pic_holder.animate({top:projectedTop,left:((windowWidth/2)-(g/2)),width:g},V.animationSpeed,function(){$pp_pic_holder.width(g);$pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(a).width(d);$pp_pic_holder.find("#pp_full_res").fadeIn(V.animationSpeed,function(){A(this).find("object,embed").css("visibility","visible")});H();if(c){A("a.pp_expand,a.pp_contract").fadeIn(V.animationSpeed)}})};function H(){if(isSet&&F=="image"){$pp_pic_holder.find(".pp_hoverContainer").fadeIn(V.animationSpeed)}else{$pp_pic_holder.find(".pp_hoverContainer").hide()}$pp_pic_holder.find(".pp_details").fadeIn(V.animationSpeed);if(V.showTitle&&hasTitle){$ppt.css({top:$pp_pic_holder.offset().top-22,left:$pp_pic_holder.offset().left+(V.padding/2),display:"none"});$ppt.fadeIn(V.animationSpeed)}}function P(){$pp_pic_holder.find(".pp_hoverContainer,.pp_details").fadeOut(V.animationSpeed);$pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility","hidden");$pp_pic_holder.find("#pp_full_res").fadeOut(V.animationSpeed,function(){A(".pp_loaderIcon").show();Z()});$ppt.fadeOut(V.animationSpeed)}function M(a){if(a=="previous"){arrayPosition--;D--}else{arrayPosition++;D++}if(!E){E=true}P();A("a.pp_expand,a.pp_contract").fadeOut(V.animationSpeed,function(){A(this).removeClass("pp_contract").addClass("pp_expand")})}function K(){$pp_pic_holder.find("object,embed").css("visibility","hidden");A("div.pp_pic_holder,div.ppt").fadeOut(V.animationSpeed);A("div.pp_overlay").fadeOut(V.animationSpeed,function(){A("div.pp_overlay,div.pp_pic_holder,div.ppt").remove();if(A.browser.msie&&A.browser.version==6){A("select").css("visibility","visible")}V.callback()});E=true}function J(){if(D==setCount){$pp_pic_holder.find("a.pp_next").css("visibility","hidden");$pp_pic_holder.find("a.pp_arrow_next").addClass("disabled").unbind("click")}else{$pp_pic_holder.find("a.pp_next").css("visibility","visible");$pp_pic_holder.find("a.pp_arrow_next.disabled").removeClass("disabled").bind("click",function(){M("next");return false})}if(D==1){$pp_pic_holder.find("a.pp_previous").css("visibility","hidden");$pp_pic_holder.find("a.pp_arrow_previous").addClass("disabled").unbind("click")}else{$pp_pic_holder.find("a.pp_previous").css("visibility","visible");$pp_pic_holder.find("a.pp_arrow_previous.disabled").removeClass("disabled").bind("click",function(){M("previous");return false})}$pp_pic_holder.find("p.currentTextHolder").text(D+V.counter_separator_label+setCount);Y=(isSet)?A(N[arrayPosition]):Y;if(Y.attr("title")){$pp_pic_holder.find(".pp_description").show().html(unescape(Y.attr("title")))}else{$pp_pic_holder.find(".pp_description").hide().text("")}if(Y.find("img").attr("alt")&&V.showTitle){hasTitle=true;$ppt.html(unescape(Y.find("img").attr("alt")))}else{hasTitle=false}}function O(b,a){hasBeenResized=false;S(b,a);imageWidth=b;imageHeight=a;windowHeight=A(window).height();windowWidth=A(window).width();if(((X>windowWidth)||(U>windowHeight))&&E&&V.allowresize){hasBeenResized=true;notFitting=true;while(notFitting){if((X>windowWidth)){imageWidth=(windowWidth-200);imageHeight=(a/b)*imageWidth}else{if((U>windowHeight)){imageHeight=(windowHeight-200);imageWidth=(b/a)*imageHeight}else{notFitting=false}}U=imageHeight;X=imageWidth}S(imageWidth,imageHeight)}return{width:imageWidth,height:imageHeight,containerHeight:U,containerWidth:X,contentHeight:Q,contentWidth:R,resized:hasBeenResized}}function S(b,a){$pp_pic_holder.find(".pp_details").width(b).find(".pp_description").width(b-parseFloat($pp_pic_holder.find("a.pp_close").css("width")));Q=a+$pp_pic_holder.find(".pp_details").height()+parseFloat($pp_pic_holder.find(".pp_details").css("marginTop"))+parseFloat($pp_pic_holder.find(".pp_details").css("marginBottom"));R=b;U=Q+$pp_pic_holder.find(".ppt").height()+$pp_pic_holder.find(".pp_top").height()+$pp_pic_holder.find(".pp_bottom").height();X=b+V.padding}function C(){if($pp_pic_holder){if($pp_pic_holder.size()==0){return }}else{return }if(A.browser.opera){windowHeight=window.innerHeight;windowWidth=window.innerWidth}else{windowHeight=A(window).height();windowWidth=A(window).width()}if(E){$pHeight=$pp_pic_holder.height();$pWidth=$pp_pic_holder.width();$tHeight=$ppt.height();projectedTop=(windowHeight/2)+L.scrollTop-($pHeight/2);if(projectedTop<0){projectedTop=0+$tHeight}$pp_pic_holder.css({top:projectedTop,left:(windowWidth/2)+L.scrollLeft-($pWidth/2)});$ppt.css({top:projectedTop-$tHeight,left:(windowWidth/2)+L.scrollLeft-($pWidth/2)+(V.padding/2)})}}function Z(){J();if(F=="image"){imgPreloader=new Image();nextImage=new Image();if(isSet&&D>setCount){nextImage.src=A(N[arrayPosition+1]).attr("href")}prevImage=new Image();if(isSet&&N[arrayPosition-1]){prevImage.src=A(N[arrayPosition-1]).attr("href")}$pp_pic_holder.find(".pp_content").css("overflow","hidden");$pp_pic_holder.find("#fullResImage").attr("src",Y.attr("href"));imgPreloader.onload=function(){var a=O(imgPreloader.width,imgPreloader.height);imgPreloader.width=a.width;imgPreloader.height=a.height;showimage(imgPreloader.width,imgPreloader.height,a.containerWidth,a.containerHeight,a.contentHeight,a.contentWidth,a.resized)};imgPreloader.src=Y.attr("href")}else{if(F=="quicktime"){movie_width=parseFloat(B("width",Y.attr("href")));movie_height=parseFloat(B("height",Y.attr("href")))+12;pp_typeMarkup='<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="'+movie_height+'" width="'+movie_width+'"><param name="src" value="'+Y.attr("href")+'"><param name="autoplay" value="true"><param name="type" value="video/quicktime"><embed src="'+Y.attr("href")+'" height="'+movie_height+'" width="'+movie_width+'" autoplay="true" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>';$pp_pic_holder.find("#pp_full_res")[0].innerHTML=pp_typeMarkup;S(movie_width,movie_height);showimage(movie_width,movie_height,X,U,Q,R,false)}else{if(F=="flash"){movie_width=parseFloat(B("width",Y.attr("href")));movie_height=parseFloat(B("height",Y.attr("href")));flash_vars=Y.attr("href");flash_vars=flash_vars.substring(Y.attr("href").indexOf("flashvars")+10,Y.attr("href").length);filename=Y.attr("href");filename=filename.substring(0,filename.indexOf("?"));pp_typeMarkup='<object width="'+movie_width+'" height="'+movie_height+'"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="'+filename+"?"+flash_vars+'" /><embed src="'+filename+"?"+flash_vars+'" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="'+movie_width+'" height="'+movie_height+'"></embed></object>';$pp_pic_holder.find("#pp_full_res")[0].innerHTML=pp_typeMarkup;S(movie_width,movie_height);showimage(movie_width,movie_height,X,U,Q,R,false)}}}}function G(){if(self.pageYOffset){scrollTop=self.pageYOffset;scrollLeft=self.pageXOffset}else{if(document.documentElement&&document.documentElement.scrollTop){scrollTop=document.documentElement.scrollTop;scrollLeft=document.documentElement.scrollLeft}else{if(document.body){scrollTop=document.body.scrollTop;scrollLeft=document.body.scrollLeft}}}return{scrollTop:scrollTop,scrollLeft:scrollLeft}}function T(){A("div.pp_overlay").css({height:A(document).height(),width:A(window).width()})}function W(){toInject="";toInject+="<div class='pp_overlay'></div>";if(F=="image"){pp_typeMarkup='<img id="fullResImage" src="" />'}else{pp_typeMarkup=""}toInject+='<div class="pp_pic_holder"><div class="pp_top"><div class="pp_left"></div><div class="pp_middle"></div><div class="pp_right"></div></div><div class="pp_content"><a href="#" class="pp_expand" title="Expand the image">Expand</a><div class="pp_loaderIcon"></div><div class="pp_hoverContainer"><a class="pp_next" href="#">next</a><a class="pp_previous" href="#">previous</a></div><div id="pp_full_res">'+pp_typeMarkup+'</div><div class="pp_details clearfix"><a class="pp_close" href="#">Close</a><p class="pp_description"></p><div class="pp_nav"><a href="#" class="pp_arrow_previous">Previous</a><p class="currentTextHolder">0'+V.counter_separator_label+'0</p><a href="#" class="pp_arrow_next">Next</a></div></div></div><div class="pp_bottom"><div class="pp_left"></div><div class="pp_middle"></div><div class="pp_right"></div></div></div>';toInject+='<div class="ppt"></div>';A("body").append(toInject);$pp_pic_holder=A(".pp_pic_holder");$ppt=A(".ppt");A("div.pp_overlay").css("height",A(document).height()).bind("click",function(){K()});$pp_pic_holder.css({opacity:0}).addClass(V.theme);A("a.pp_close").bind("click",function(){K();return false});A("a.pp_expand").bind("click",function(){$this=A(this);if($this.hasClass("pp_expand")){$this.removeClass("pp_expand").addClass("pp_contract");E=false}else{$this.removeClass("pp_contract").addClass("pp_expand");E=true}P();$pp_pic_holder.find(".pp_hoverContainer, #pp_full_res, .pp_details").fadeOut(V.animationSpeed,function(){Z()});return false});$pp_pic_holder.find(".pp_previous, .pp_arrow_previous").bind("click",function(){M("previous");return false});$pp_pic_holder.find(".pp_next, .pp_arrow_next").bind("click",function(){M("next");return false});$pp_pic_holder.find(".pp_hoverContainer").css({"margin-left":V.padding/2});if(!isSet){$pp_pic_holder.find(".pp_hoverContainer,.pp_nav").hide()}if(A.browser.msie&&A.browser.version==6){A("body").addClass("ie6");A("select").css("visibility","hidden")}A("div.pp_overlay").css("opacity",0).fadeTo(V.animationSpeed,V.opacity,function(){$pp_pic_holder.css("opacity",0).fadeIn(V.animationSpeed,function(){$pp_pic_holder.attr("style","left:"+$pp_pic_holder.css("left")+";top:"+$pp_pic_holder.css("top")+";");Z()})})}};function B(E,D){E=E.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var C="[\\?&]"+E+"=([^&#]*)";var G=new RegExp(C);var F=G.exec(D);if(F==null){return""}else{return F[1]}}})(jQuery);