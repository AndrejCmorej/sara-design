// source --> //demo.elusivethemes.com/outlaw/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js?ver=2.5.3
// source --> http://demo.elusivethemes.com/outlaw/wp-content/plugins/js_composer/assets/js/vendors/woocommerce-add-to-cart.js?ver=4.10
window.jQuery( document ).ready( function ( $ ) {
	$( 'body' ).on( 'adding_to_cart', function ( event, $button, data ) {
		$button && $button.hasClass( 'vc_gitem-link' ) && $button
			.addClass( 'vc-gitem-add-to-cart-loading-btn' )
			.parents( '.vc_grid-item-mini' )
			.addClass( 'vc-woocommerce-add-to-cart-loading' )
			.append( $( '<div class="vc_wc-load-add-to-loader-wrapper"><div class="vc_wc-load-add-to-loader"></div></div>' ) );
	} ).on( 'added_to_cart', function ( event, fragments, cart_hash, $button ) {
		if ( 'undefined' === typeof($button) ) {
			$button = $( '.vc-gitem-add-to-cart-loading-btn' );
		}
		$button && $button.hasClass( 'vc_gitem-link' ) && $button
			.removeClass( 'vc-gitem-add-to-cart-loading-btn' )
			.parents( '.vc_grid-item-mini' )
			.removeClass( 'vc-woocommerce-add-to-cart-loading' )
			.find( '.vc_wc-load-add-to-loader-wrapper' ).remove();
	} );
} );
// source --> http://demo.elusivethemes.com/outlaw/wp-content/plugins/yith-woocommerce-popup/assets/js/jquery.cookie.min.js?ver=1.0.2
(function(h){if("function"===typeof define&&define.amd)define(h);else if("object"===typeof exports)module.exports=h();else{var l=window.Cookies,f=window.Cookies=h(window.jQuery);f.noConflict=function(){window.Cookies=l;return f}}})(function(){function h(){for(var f=0,b={};f<arguments.length;f++){var a=arguments[f],c;for(c in a)b[c]=a[c]}return b}function l(f){function b(a,c,e){var g;if(1<arguments.length){e=h({path:"/"},b.defaults,e);if("number"===typeof e.expires){var k=new Date;k.setMilliseconds(k.getMilliseconds()+
864E5*e.expires);e.expires=k}try{g=JSON.stringify(c),/^[\{\[]/.test(g)&&(c=g)}catch(l){}c=encodeURIComponent(String(c));c=c.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent);a=encodeURIComponent(String(a));a=a.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent);a=a.replace(/[\(\)]/g,escape);return document.cookie=[a,"=",c,e.expires&&"; expires="+e.expires.toUTCString(),e.path&&"; path="+e.path,e.domain&&"; domain="+e.domain,e.secure&&"; secure"].join("")}a||
(g={});for(var k=document.cookie?document.cookie.split("; "):[],p=/(%[0-9A-Z]{2})+/g,m=0;m<k.length;m++){var d=k[m].split("="),n=d[0].replace(p,decodeURIComponent),d=d.slice(1).join("=");'"'===d.charAt(0)&&(d=d.slice(1,-1));d=f&&f(d,n)||d.replace(p,decodeURIComponent);if(this.json)try{d=JSON.parse(d)}catch(q){}if(a===n){g=d;break}a||(g[n]=d)}return g}b.get=b.set=b;b.getJSON=function(){return b.apply({json:!0},[].slice.call(arguments))};b.defaults={};b.remove=function(a,c){b(a,"",h(c,{expires:-1}))};
b.withConverter=l;return b}return l()});
// source --> http://demo.elusivethemes.com/outlaw/wp-content/plugins/yith-woocommerce-popup/assets/js/jquery.yitpopup.min.js?ver=1.0.2
(function(b,c,k){b.yit_popup=function(l,e){var m={popup_class:"ypop",content:"",delay:0,position:"center",mobile:!1},a=this;a.settings={};var d=b(l);a.init=function(){a.settings=b.extend({},m,e);0==b("body").find(".ypop-modal").length?a.bigwrapper=b("<div />",{"class":"ypop-modal"}).prependTo("body"):a.bigwrapper=b("body").find(".ypop-modal");0==a.bigwrapper.find(".ypop-overlay").length?a.overlay=b("<div />",{"class":"ypop-overlay"}).appendTo(a.bigwrapper):a.overlay=a.bigwrapper.find(".ypop-overlay");
0==a.bigwrapper.find(".ypop-wrapper").length?a.popup=b("<div />",{"class":"ypop-wrapper "+a.settings.popup_class}).appendTo(a.bigwrapper):a.popup=a.bigwrapper.find(".ypop-wrapper");0==a.popup.find(".close").length?a.close=b("<a />",{"class":"close"}).appendTo(a.popup):a.close=a.popup.find(".close");n()};var n=function(){b(k).on("touchstart click",".ypop-overlay",function(a){(b(a.target).hasClass("close")||0==b(a.target).parents(".ypop-overlay").length)&&f()}).on("keyup",function(a){27==a.keyCode&&
f()}).on("click",".ypop-wrapper a.close",function(){f()});b(c).on("resize",function(){g()});b("html").removeClass("yit-opened");p()},g=function(){var b=a.popup.outerWidth();a.popup.outerHeight();if(a.settings.mobile){if(a.popup.outerHeight()>jQuery(c).height()-120||a.popup.outerWidth()>jQuery(c).width()-60)b=jQuery(c).width()-60;a.popup.css({width:b+"px",height:"auto"})}"center"==a.settings.position?a.popup.css({position:"fixed",top:Math.max(0,(jQuery(c).height()-a.popup.outerHeight())/2-50)+"px",
left:Math.max(0,(jQuery(c).width()-b)/2)+"px"}):"left-top"==a.settings.position?a.popup.css({position:"fixed",top:" 0px",left:"0px"}):"left-bottom"==a.settings.position?a.popup.css({position:"fixed",bottom:" 0px",left:"0px"}):"right-bottom"==a.settings.position?a.popup.css({position:"fixed",bottom:" 0px",right:"0px"}):"right-top"==a.settings.position&&a.popup.css({position:"fixed",top:" 0px",right:"0px"})},p=function(){0<a.settings.delay?setInterval(function(){h();b(".ypop-modal").addClass("open");
g()},a.settings.delay):(h(),b(".ypop-modal").addClass("open"),g())},f=function(){d.trigger("close.ypop");b(".ypop-modal").removeClass("open");a.popup.remove();a.overlay.remove()},h=function(){""!=a.settings.content?a.popup.html(a.settings.content):d.data("container")?a.popup.html(b(d.data("container")).html()):d.data("content")?a.popup.html(d.data("content")):d.attr("title")?a.popup.html(d.attr("title")):a.popup.html("");a.popup.find("form, input, label, a").each(function(){if("undefined"!=typeof b(this).attr("id")){var a=
b(this).attr("id")+"_ypop";b(this).attr("id",a)}"undefined"!=typeof b(this).attr("for")&&(a=b(this).attr("for")+"_ypop",b(this).attr("for",a))});0==a.overlay.find(".close").length?a.close=b("<a />",{"class":"close"}).appendTo(a.popup):a.close=a.overlay.find(".close")};a.init()};b.fn.yit_popup=function(c){return this.each(function(){if(void 0===b(this).data("yit_popup")){var e=new b.yit_popup(this,c);b(this).data("yit_popup",e)}})}})(jQuery,window,document);