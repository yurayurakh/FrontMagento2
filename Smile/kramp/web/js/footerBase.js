!function(b){var a=function(d,c){this.init("popoverAjax",d,c)};a.prototype=b.extend({},b.fn.popover.Constructor.prototype,{constructor:a,hasContent:function(){return true},getContent:function(){this.hideOnTouch();this.closeDropDowns();if(!this.options.getContentWithAjax){return b.proxy(b.fn.popover.Constructor.prototype.getContent,this)()}if(this.options.cacheAjaxResponse&&this.cachedAjaxResponse!=null){return this.cachedAjaxResponse}if(this.ajaxResponse!=null){return this.ajaxResponse}this.loadContent();return this.getLoadIndicator()},getLoadIndicator:function(){return"loading..."},loadContent:function(){if(typeof this.options.ajaxTarget=="object"){var c=this.options.ajaxTarget.url;var d=this.options.ajaxTarget.params}else{if(typeof this.options.ajaxTarget=="string"){var c=this.options.ajaxTarget;var d={}}else{if(typeof this.options.ajaxTarget=="function"){var c=this.options.ajaxTarget(this)}}}b.get(c,d,b.proxy(function(e){if(this.options.responseProcessor!=null){e=this.options.responseProcessor(e)}this.cachedAjaxResponse=this.ajaxResponse=e;this.show();this.ajaxResponse=null;this.tip().trigger("eventModel:pageFragmentLoad",{targetElement:this.tip()})},this))},hideOnTouch:function(){this.$element.unbind("touchstart");b("body").unbind("touchstart");var c=false;this.$element.bind("touchstart",b.proxy(function(d){d.stopPropagation()},this));b("body").bind("touchstart",b.proxy(function(f){var d=b(".clickover");if(d.has(f.target).length===0&&d.is(":visible")){if(!c){this.$element.removeAttr("data-clickover-open");this.clickery()}else{c=false}}},this))},closeDropDowns:function(){if(this.options.closeDropdownMenues){b("[data-toggle=dropdown]").each(function(){b(this).parent().removeClass("open")})}}}),b.fn.popoverAjax=function(c){return this.each(function(){var f=b(this),e=f.data("popoverAjax"),d=typeof c=="object"&&c;if(!e){f.data("popoverAjax",(e=new a(this,d)))}if(typeof c=="string"){e[c]()}})};b.fn.popoverAjax.Constructor=a;b.fn.popoverAjax.defaults=b.extend({},b.fn.popover.defaults,{getContentWithAjax:true,cacheAjaxResponse:false,ajaxTarget:null,responseProcessor:null,closeDropdownMenues:false})}(window.jQuery);!function(b){var a=function(d,c){this.cinit("clickover",d,c)};a.prototype=b.extend({},b.fn.popoverAjax.Constructor.prototype,{constructor:a,cinit:function(e,d,c){this.attr={};this.attr.me=((Math.random()*10)+"").replace(/\D/g,"");this.attr.click_event_ns="click."+this.attr.me;if(!c){c={}}c.trigger="manual";this.init(e,d,c);this.$element.on("click",this.options.selector,b.proxy(this.clickery,this))},clickery:function(d){if(d){d.preventDefault();d.stopPropagation()}this.options.width&&this.tip().find(".popover-inner").width(this.options.width);this.options.height&&this.tip().find(".popover-inner").height(this.options.height);this.options.tip_id&&this.tip().attr("id",this.options.tip_id);this.options.class_name&&this.tip().addClass(this.options.class_name);this.toggle();if(this.isShown()){var c=this;this.options.global_close&&b("body").on(this.attr.click_event_ns,function(f){if(!c.tip().has(f.target).length){c.clickery()}});this.options.esc_close&&b(document).bind("keyup.clickery",function(f){if(f.keyCode==27){c.clickery()}return});!this.options.allow_multiple&&b("[data-clickover-open=1]").each(function(){b(this).data("clickover")&&b(this).data("clickover").clickery()});this.$element.attr("data-clickover-open",1);this.tip().on("click",'[data-dismiss="clickover"]',b.proxy(this.clickery,this));if(this.options.auto_close&&this.options.auto_close>0){this.attr.tid=setTimeout(b.proxy(this.clickery,this),this.options.auto_close)}typeof this.options.onShown=="function"&&this.options.onShown.call(this)}else{this.$element.removeAttr("data-clickover-open");this.options.esc_close&&b(document).unbind("keyup.clickery");b("body").off(this.attr.click_event_ns);if(typeof this.attr.tid=="number"){clearTimeout(this.attr.tid);delete this.attr.tid}typeof this.options.onHidden=="function"&&this.options.onHidden.call(this)}},isShown:function(){return this.tip().hasClass("in")},resetPosition:function(){var g,c,i,e,h,d,f;if(this.hasContent()&&this.enabled){g=this.tip();d=typeof this.options.placement=="function"?this.options.placement.call(this,g[0],this.$element[0]):this.options.placement;c=/in/.test(d);i=this.getPosition(c);e=g[0].offsetWidth;h=g[0].offsetHeight;switch(c?d.split(" ")[1]:d){case"bottom":f={top:i.top+i.height,left:i.left+i.width/2-e/2};break;case"top":f={top:i.top-h,left:i.left+i.width/2-e/2};break;case"left":f={top:i.top+i.height/2-h/2,left:i.left-e};break;case"right":f={top:i.top+i.height/2-h/2,left:i.left+i.width};break}g.offset(f)}},debughide:function(){var c=new Date().toString();console.log(c+": clickover hide");this.hide()},destroy:function(){b.proxy(b.fn.popoverAjax.Constructor.prototype.destroy,this)();this.$element.off("click",this.options.selector!=false?this.options.selector:null,b.proxy(this.clickery,this))}});b.fn.clickover=function(c){return this.each(function(){var f=b(this),e=f.data("clickover"),d=typeof c=="object"&&c;if(!e){f.data("clickover",(e=new a(this,d)))}if(typeof c=="string"){e[c]()}})};b.fn.clickover.Constructor=a;b.fn.clickover.defaults=b.extend({},b.fn.popoverAjax.defaults,{trigger:"manual",auto_close:0,global_close:1,esc_close:1,onShown:null,onHidden:null,width:null,height:null,tip_id:null,class_name:"clickover",allow_multiple:0})}(window.jQuery);$(window).load(function(){var a=$(".fixedHeader").height();$(".mainContent").css("padding-top",a+"px")});
