/*onload=function(){

	
				/*var oDiv=document.getElementById("M_ad");
				var oPrev=document.getElementById("prev");
				var oNext=document.getElementById("next");
				var aImg=document.getElementById("img");
				
				
				var addoImg=["img/ad/head.jpg","img/ad/head2.jpg"];
				var num=0;
				function update(){
					aImg.src=addoImg[num];
				}
				update();
				setInterval(update,2000);
				
				oNext.onclick=function(){
						num++;
					if(num==addoImg.length){
						num=0;
					}
					update();
				}
				oPrev.onclick=function(){
					num--;
					if(num==-1){
						num=addoImg.length-1;
					}
					update();
				}
				
				var timer=true;
				oDiv.onmouseover=function(){
					clearInterval(timer);
				}
				oDiv.onmouseout=function(){
					timer=setInterval(oNext.onclick,2000);
				}
		
				
			
		var i=0;
			var oDate=document.getElementById("date");
			var oImg=oDate.getElementsByTagName("img");
			setInterval(iTimer,1000);
			iTimer();
			function iTimer(){
				var d=new Date();
				var str=oTwo(d.getHours())+oTwo(d.getMinutes())+oTwo(d.getSeconds());
				oImg.innerHTML=str;
				for(i=0;i<str.length;i++){
					oImg[i].src="img/date/"+str.charAt(i)+'.png';
				}
				
			}
			
				
			
}
		
function oTwo(n){return n<10?"0"+n:""+n;}
			
*/
			
$(function(){
	//menu 事件
	(function(){
			$('.main_menu li').hover(function() { 
			$(this).find('.sub_menu').css('display', 'block'); 
			}, function() { 
			$(this).find('.sub_menu').css('display', 'none'); 
			}); 
	})();
	//form
	(function(){
		var aBtn=$('.form .btn');
		var  aText=$('.form .text');
		aText.click(function(){
			$(this).val('');
		});
		aText.blur(function(){
			if($(this).val()==''){
				$(this).val('舒芙蕾|提拉米苏');
			}else{
			  return false;
			}
		})
		aBtn.click(function(){
			alert('抱歉！ 数据更新中');
		})
	})();
	//广告图片
	(function(){
			var oMad=$('#M_ad');
			var oPrev=oMad.find('.prev');
			var oNext=oMad.find('.next');
			var aImg=oMad.find('img');
			
			var arr=['img/ad/head.jpg','img/ad/head2.jpg'];
			var Now=0;
			var timer=null;
			ImgPlay();
			function ImgPlay(){
				aImg.attr('src',arr[Now]);
			}
			oNext.click(function(){
				Now++;
				if(Now==arr.length){
					Now=0;
				}
				ImgPlay();
			})
			oPrev.click(function(){
				Now--;
				if(Now==-1){
					Now=arr.length-1;
				}
				ImgPlay();
			})
			oMad.hover(function(){clearInterval(timer)},update);
			update();
			function update(){
				timer=setInterval(function(){
					Now++;
					Now%=arr.length;
					ImgPlay();
				},2000);
			}
			
	})();
	//Nav选项
	(function(){
			fnTab($('.tabNav1'),$('.tabCon1'),'click');
			fnTab($('.tabNav2'),$('.tabCon2'),'mouseover');
			fnTab($('.tabNav3'),$('.tabCon3'),'mouseover');
			function fnTab(oNav,aCon,aEvent){
				var sElem=oNav.children();
				aCon.hide().eq(0).show();
				
				sElem.each(function(index){
					
					$(this).on(aEvent,function(){
						
							sElem.removeClass('active').addClass('gradient');
							$(this).removeClass('gradient').addClass('active');
							sElem.find('a').attr('class','triangle_down_gray');
							$(this).find('a').attr('class','triangle_down_red');
							
							aCon.hide().eq(index).show();
					});
					
				});
			}
	})();
	//date
	(function(){
		var strImg=$('#date img');
		setInterval(fnTimer,1000);
		fnTimer();
		
	function fnTimer(){
		var D=new Date();
		var str=oTwo(D.getHours())+oTwo(D.getMinutes())+oTwo(D.getSeconds());
			strImg.html(str);
			for(var i=0;i<str.length;i++){
				strImg.eq(i).attr('src','img/date/'+str.charAt(i)+'.png' );
			}
	}
	function oTwo(n){return n<10? '0'+n:''+n;}
	})();
	//calendar
	(function(){
		var aSpan=$('.calendar h3 span');
		var zImg=$('.calendar .img');
		var aPrompt=$('.today_info');
		var sImg=aPrompt.find('img');
		var sStrong=aPrompt.find('strong');
		var sP=aPrompt.find('p');
		
		zImg.hover(function(){
			var iTop=$(this).parent().position().top-33;
			var iLeft=$(this).parent().position().left+55;
			var index=$(this).parent().index()%aSpan.size();
			
			aPrompt.show().css({'top':iTop,'left':iLeft});
			sP.text($(this).attr('info'));
			sImg.attr('src',$(this).attr('src'));
			sStrong.text(aSpan.eq(index).text());
			
		},function(){
			aPrompt.hide();
		});
	})();
//RECOMMDNE 相册播放
	(function(){
		var oDiv=$('#fade')
		var aUl=oDiv.find('ul li');
		var aOl=oDiv.find('ol li');
		var aP=oDiv.find('p');
		var arr=['芒果鳕鱼','提拉米苏','牛排威林顿配红酒巧克力酱'];
		var Now=0;
		var timer=null;
		fnFade();
		
		aOl.click(function(){
			Now=$(this).index();
			fnFade();
		});
		oDiv.hover(function(){clearInterval(timer);},fnPlay);
		
		function fnPlay(){
			timer=setInterval(function(){
				Now++;
				Now%=arr.length;
				fnFade();
			},2000);
		}
		fnPlay();
		function fnFade(){
			aUl.each(function(i){
				if(i!=Now){
					aUl.eq(i).fadeOut().css('zIndex',1);
					aOl.eq(i).removeClass('active');
				}else{
					aUl.eq(i).fadeIn().css('zIndex',2);
					aOl.eq(i).addClass('active');
				}
			aP.text(arr[Now]);
			});
		}	
	})();
	//
	(function (){
		var arr = [
			'',
			'蔡依林<br />歌手',
			'杨紫琼<br /> 演员',
			'舒淇<br />演员',
			'甄子丹<br />演员',
			'阮经天<br />演员',
			'张曼玉<br />演员',
			'Twins<br />歌手',
			'萧敬腾<br />歌手',
			'吴君如<br />演员',
			'曾志伟<br />演员'
		];
		$('.hot_area li').mouseover(function (){
			
			if ( $(this).index() == 0 ) return;
			
			$('.hot_area li p').remove();
			
			$(this).append('<p style="width:'+ ($(this).width()-12) +'px; height:'+ ($(this).height()-12) +'px;">'+ arr[$(this).index()] +'</p>');
		});
	})();
});
