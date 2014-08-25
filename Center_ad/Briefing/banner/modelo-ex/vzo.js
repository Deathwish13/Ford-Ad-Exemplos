
if(typeof(sasGlobalClickURL)=="undefined") { jQuery("head").append("<link href='vzo.css' rel='stylesheet' type='text/css'/>"); };

function vzoHTMLAppend(){
if (typeof(sasGlobalImgBaseURL)=="undefined") { sasGlobalImgBaseURL = ''; };
	jQuery("#vz0-bar").html("\
		<div id='vzo-group'>\
			<div id='vzo-f'>\
				<img src='imgs_barra/wup-bar-bg.png' id='bg-wup' />\
			</div>\
			<div id='vzo-t'>\
				<div id='overlay_wup'>\
					<div class='close_wup' style='opacity: 0;margin-left: 85px;width: 50px;position: absolute;height: 34px;line-height: 60px;top: 37px;float: left;color: rgb(255, 255, 255);font-size: 24px;font-weight: bold;text-align: right;cursor: pointer;z-index: 9999 !important;'><img src='images/barra/close_wup.png'></div>\
					<div id='call_leed-wup'>\
						<div id='videoContent'></div>\
				</div>\
			</div>\
		</div>\
	");  
};

function vzoAdStart(){
	
	
	vzoHTMLAppend();
	
	vzoPrintEvents();
	
	vzoMouseEvents();
	
	setTimeout(function(){jQuery("#bg-wup").animate({opacity:1,bottom:0},1000);},500)
		
			
	
	jQuery(".close_wup").click(function(){
		jQuery("#videoContent").empty();
		criado = "false";
		//if(isExpanded){
			vzoResetAnimation();
			if (typeof(sasAccountClose)!="undefined") { 
				// safe to use the function
				sasAccountClose();
			}
		//}
	})
	
}




function vzoBottomAnimate2(){
	setTimeout(function(){jQuery("#patro1-wup").animate({opacity:0})},100);
	setTimeout(function(){jQuery("#txt1-wup").animate({opacity:0})},100);
	setTimeout(function(){jQuery("#txt2-wup").animate({opacity:0})},100);
	
	setTimeout(function(){jQuery("#patro2-wup").animate({opacity:1},"slow",function(){jQuery(this).animate({opacity:1})});},200);
	
	
	
}

	criado = "false";
function vzoMouseEvents(){
	jQuery("#vzo-group").unbind("mouseenter");
	jQuery("#vzo-group").unbind("mouseleave");
	jQuery("#vzo-f").unbind("click");
	jQuery("#vzo-t").unbind("click");
	 
	
	jQuery("#vzo-f").mouseenter(function(){
			jQuery("#vzo-t").stop().animate({opacity:1,bottom:-4},"slow",function(){
				jQuery("#overlay_wup").show();
				vzoStartTopAnimation();
				jQuery("#vzo-group").unbind("mouseenter");
				jQuery("#vzo-group").unbind("mouseleave");
				if (typeof(sasAccountExpand)!="undefined") {
					// safe to use the function
					sasAccountExpand();
				}
			});

			if(criado == 'false'){
				criado = "true";
				function setVideo(){
					var videoID = document.createElement("iframe");
					videoID.id = "video_wup";
					videoID.frameBorder = "0";
					videoID.src = "http://www.youtube.com/embed/s1ur5MKma_Q?autoplay=1";
					var getSize = screen.width;
					if(getSize <= "1366"){
						videoID.style.width = "589px";
						videoID.style.height = "334px";
						jQuery(".close_wup").css({marginTop: "120px"});
						// width='589' height='334'
					}else{
						videoID.style.width = "589px";
						videoID.style.height = "334px";
						videoID.style.marginRight = "82px";
						jQuery(".close_wup").css({marginTop: "145px"});
					}

					jQuery("#videoContent").append(videoID);

				}
				jQuery(document).ready(function(){
					setVideo();
				});
				
			}
			else{
				return false;
			}

		});
	
	jQuery("#vzo-f").click(function(){
			vzoClickEvent(false);
	});
	jQuery(".close_wup").click(function(){
		jQuery("#overlay_wup").hide();	
		jQuery("#vzo-t").css("bottom","-454px");	
		jQuery("#overlay_wup").css("opacity","0");	
	});
}


function vzoStartTopAnimation(){
	setTimeout(function(){reloader();},100);
	
	setTimeout(function(){jQuery("#overlay_wup").animate({opacity:1},"slow");},100);
	setTimeout(function(){jQuery("#call_leed-wup").animate({opacity:1},900);},1000);
	
	setTimeout(function(){jQuery(".close_wup").animate({opacity:1},"slow");},4200);

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
	clearTimeout(vzo_6);
	clearTimeout(vzo_7);
	clearTimeout(vzo_9);
	
	
	jQuery("#vzo-t").animate({opacity:0,bottom:-700});
	jQuery("#chamada2-wup").animate({opacity:0});		
	jQuery("#chamada0-wup").animate({opacity:0,top:100,width:223,height:92,marginLeft:-150});		
	jQuery("#chamada1-wup").animate({opacity:0});		
	jQuery("#chamada3-wup").animate({opacity:0});		
	jQuery("#chamada4-wup").animate({opacity:0});	
	jQuery("#botao2-wup").animate({opacity:0,top:400,zIndex:0});		
	jQuery("#botao-wup").animate({opacity:0,top:400,zIndex:0});		
	jQuery("#close-wup").animate({opacity:0,marginLeft:220},0);
	
	vzoMouseEvents();
	
	
}
vzoAdStart();

