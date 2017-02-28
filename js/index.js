$(function(){
	setTimeout(onWidthChange,10);
	$("header .nav li").hover(function(){
		$(this).addClass("active");
	},function(){
		$(this).removeClass("active");
	});
	/***************header*****************/
	$('header a[href*=#]').click(function() {
	    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	      var $target = $(this.hash);
	      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
	      if ($target.length) {
	        var targetOffset = $target.offset().top;
	        $('html,body').animate({
	          scrollTop: targetOffset
	        },
	        300);
	        return false;
	      }
	    }
	});
	/**************section2*****************/
	$("#basic2").hover(function(){
		$("#basic2_tip").show();
	},function(){
		$("#basic2_tip").hide();
	})
	$("#section_pop #randomBtn").click(function(){
		var random=parseInt(360*Math.random());
		$("#section_pop img").css({"transform":"rotate("+random+"deg)"
			,"-moz-transform":"rotate("+random+"deg)"
			,"-webkit-transform":"rotate("+random+"deg)"
			,"-o-transform":"rotate("+random+"deg)"});
		var animal;
		if(random>=0&&random<30){animal="RAT";}
		if(random>=30&&random<60){animal="OX";}
		if(random>=60&&random<90){animal="TIGER";}
		if(random>=90&&random<120){animal="RABBIT";}
		if(random>=120&&random<150){animal="DRAGON";}
		if(random>=150&&random<180){animal="SNAKE";}
		if(random>=180&&random<210){animal="HORSE";}
		if(random>=210&&random<240){animal="SHEEP";}
		if(random>=240&&random<270){animal="MONKEY";}
		if(random>=270&&random<300){animal="ROOSTER";}
		if(random>=300&&random<330){animal="DOG";}
		if(random>=360){animal="PIG";}
		$("#animalSign").show();
		$("#animalSign").text("This animal sign is:"+animal);
	});
	/**************section3*****************/
	$("#skill_name li").hover(function(){
		$(this).css("background-color","#f0ad4e");
		var name=$(this).attr("id");
		var levelList = new Array('70%','70%','50%','50%','50%','30%','70%','30%','50%','30%');
		$("#skill_level_bar #"+name+"_bar .progress div").css("width",levelList[name]);
	},function(){
		$(this).css("background-color","#fff");
	});
	/**************section7*****************/
	$("#send").click(function(){
		/*$.ajax({
			type:"POST",
			url:"js/message.php",
			//dataType:"json",
			data:{
				name:$("#con_name").val(),
				text:$("#con_text").val(),
				email:$("#con_mail").val(),
				phone:$("#con_phone").val()
			},
			error: function(jqXHR){     
			   alert("发生错误：" + jqXHR.status);
			},
		})*/
		alert("建设中...");
	});
});
function onWidthChange(){
   	var vw=$(window).width();
   	var vh=$(window).height();
   	/*****************section1*******************/
	if(vw>1280){
		$("#section1").css("background-size","100%");
	}else{
		$("#section1").css("background-size","");
	}
	/*****************section2*******************/
	/*var basic_w=$("#section2 .row .imgBox").width();
	$("#section2 .row .imgBox").height(basic_w);*/
	var basic_w=$("#section2 .row .col-md-2").width();
	$("#section2 .row .imgBox").width(basic_w*0.8);
	$("#section2 .row .imgBox").height(basic_w*0.8);
	var img_h=$("#section2 .row .imgBox img").height();
	var line_h=(basic_w/2)-(img_h/2)-10;
	$("#section2 .row .imgBox img").css("margin-top",line_h);
	/*****************sectionpop*******************/
	var pop_w=vw/2;
	$("#section_pop").css({"width":pop_w
		,"height":pop_w
		,"margin-top":(-pop_w*0.46)
		,"margin-left":(-pop_w/2)})
	$("#randomBtn").css({"width":pop_w*0.08
		,"height":pop_w*0.035
		,"margin-top":0
		,"margin-left":0});
	$("#arrow").css({"height":pop_w/3
		,"left":pop_w/2});
	/*****************section3*******************/
	var row_w=$("#section3 .container").width();
	$("#skill_level").width(row_w*0.8);
	$("#section3 .level").width(row_w*0.8/5-2);
	$("#section3 #skill_name").width(row_w*0.2);
	$("#section3 #skill_level_bar").width(row_w*0.8-2);
	/*****************section7*******************/
	var input_w=$("#section7 input").width();
	var container_w=$("#section7 .container").width();
	$("#section7 input").height(input_w/13);
	$("#section7 textarea").height(container_w/4);
	var btnLeft=container_w/2-input_w/3/2;
	$("#section7 button").css({"width":input_w/3
		,"height":input_w/3
		,"margin-left":btnLeft});
	$("#section7 #code").height($("#section7 #code").width());
    setTimeout(onWidthChange,10);
}
function showBG(){
        var bw=$(document).width();
        var bh=$(document).height();
        $("#pop_bg").css({
            "height":bh,
            "width":bw,
            "display":"block"   
        });
        $("#section_pop").show();
        $("header").hide();
}
function closeBG(){
    $("#pop_bg,#section_pop").hide();
    $("header").show();
}