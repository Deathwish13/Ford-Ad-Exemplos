 
if(typeof(sasGlobalClickURL)=="undefined") { jQuery("head").append("<link href='vzo.css' rel='stylesheet' type='text/css'/>"); };

function vzoHTMLAppend(){
if (typeof(sasGlobalImgBaseURL)=="undefined") { sasGlobalImgBaseURL = ''; };
	jQuery("#vz0-bar").html("\
		<div id='vzo-group'>\
			<div id='vzo-f'>\
				<img src='imgs/wup-barra-01.png' id='bg-wup' />\
				<img src='imgs/wup-1.png' id='img1-wup' />\
				<img src='imgs/wup-2.png' id='img2-wup' />\
				<img src='imgs/wup-3.png' id='img3-wup' />\
			</div>\
			<a href='http://agwakeup.com' target='_blank'><img src='http://serverwup.com//adswup/2014/Tok%26Stok/imgs/wakeup.png' id='wakeup' /></a>\
			<div id='vzo-t'>\
				<div id='chamada0-wup'></div>\
				<div id='chamada1-wup'></div>\
				<div id='chamada2-wup'></div>\
				<div id='chamada3-wup'></div>\
			</div>\
			<img src='http://serverwup.com//adswup/2014/Tok%26Stok/imgs/close-wup.png' id='close-wup'/>\
		</div>\
	");  
}

;

function vzoAdStart(){
	vzoHTMLAppend();
	
	vzoPrintEvents();
	
	vzoMouseEvents();
	
	
	setTimeout(function(){jQuery("#bg-wup").animate({opacity:1,bottom:0},"slow",function(){jQuery(this).animate({opacity:1,bottom:0})});},0);
	setTimeout(function(){jQuery("#wakeup").animate({opacity:1});},200);
	setTimeout(function(){jQuery("#img1-wup").animate({opacity:1});},200);
	setTimeout(function(){rotationAnim();},500);
	
	function rotationAnim(){
		
		setTimeout(function(){jQuery("#img2-wup").animate({opacity:1,bottom:0});},0);
		setTimeout(function(){jQuery("#img2-wup").animate({opacity:0,bottom:-100});},3000);
		
		setTimeout(function(){jQuery("#img3-wup").animate({opacity:1,bottom:10});},3000);
		setTimeout(function(){jQuery("#img3-wup").animate({opacity:0,bottom:-100});},6000);
		
		setTimeout(function(){rotationAnim();},6100);
	
	}
	


	jQuery("#close-wup").click(function(){
		jQuery("#chamada0-wup").css("height","0");
		jQuery("#chamada1-wup").css("width","0");
		jQuery("#chamada2-wup").css("width","0");
		jQuery("#chamada3-wup").css("height","0");
		//if(isExpanded){
			vzoResetAnimation();
			if (typeof(sasAccountClose)!="undefined") { 
				// safe to use the function
				sasAccountClose();
			}
		//}
		jQuery("#close-wup").hide();
	});

	

}



function vzoMouseEvents(){
	jQuery("#vzo-group").unbind("mouseenter");
	jQuery("#vzo-group").unbind("mouseleave");
	jQuery("#vzo-f").unbind("click");
	jQuery("#vzo-t").unbind("click");
	 
	
	jQuery("#vzo-group").mouseenter(function(){
			jQuery("#vzo-t").stop().animate({opacity:1,bottom:60},"slow",function(){
				vzoStartTopAnimation();
				jQuery("#vzo-group").unbind("mouseenter");
				jQuery("#vzo-group").unbind("mouseleave");
				if (typeof(sasAccountExpand)!="undefined") { 
					// safe to use the function
					sasAccountExpand();
				}
			});
		});
	
	jQuery("#vzo-f").click(function(){
			vzoClickEvent(false);
	});
	jQuery("#vzo-t").click(function(){
			vzoClickEvent(false);
	});
}


function vzoStartTopAnimation(){
	  
	  
	function carregaBanner(){
	vzo_1 = setTimeout(function(){jQuery("#chamada0-wup").animate({opacity:1,height:350, top:42},"slow");},10);	
    vzo_2 = setTimeout(function(){jQuery("#chamada1-wup").animate({opacity:1,width:112},"slow");},1000);
	vzo_3 = setTimeout(function(){jQuery("#chamada2-wup").animate({opacity:1,width:185},"slow");},1500);

	vzo_4 = setTimeout(function(){jQuery("#chamada3-wup").animate({opacity:1, height:350, top:42},"slow");},4000);
	

	setTimeout(function(){carregaBanner();},15000);
	}
	jQuery("#close-wup").show();
	setTimeout(function(){carregaBanner();},0);
	
		
    vzo_5 = setTimeout(function(){jQuery("#close-wup").animate({opacity:1,marginLeft:266},"slow");},2000);


	
}


function vzoPrintEvents(){}

function vzoClickEvent(rodape){
	var vzo_url_click = '';
	if (typeof(sasGlobalClickURL)!="undefined") { 
		if(rodape){
			if(sasGlobalClickURL_rodape!=''){ 
				var cpx = new Image(); 
				cpx.src = sasGlobalClickURL;
				vzo_url_click = sasGlobalClickURL_rodape;
			}else{
				vzo_url_click = sasGlobalClickURL;
			}
		}else{
			vzo_url_click = sasGlobalClickURL;
		}
	};
	window.open(vzo_url_click);	
	vzoResetAnimation();
	
}

function vzoResetAnimation(){
	clearTimeout(vzo_1);
	clearTimeout(vzo_2);
	clearTimeout(vzo_3);
	clearTimeout(vzo_4);
	clearTimeout(vzo_5);


	jQuery("#vzo-t").animate({opacity:0,bottom:-700});
			
	jQuery("#close-wup").animate({opacity:0});
	jQuery("#chamada0-wup").animate({opacity:0});
	jQuery("#chamada1-wup").animate({opacity:0});
	jQuery("#chamada2-wup").animate({opacity:0});
	jQuery("#chamada3-wup").animate({opacity:0});

	
	
	
	vzoMouseEvents();
}
vzoAdStart();