$(function(){
	setTimeout(onWidthChange,10);
	/*AboutMe*/
	$("#Am2").hover(function(){
		$("#Am-tip").show();
	},function(){
		$("#Am-tip").hide();
	})

	/*Skill*/
	$("#skill_name li").hover(function(){
		$(this).css("background-color","#f0ad4e");
		var name=$(this).attr("id");
		var levelList = new Array('70%','70%','50%','50%','50%','30%','70%','30%','50%','30%');
		$("#skill_level_bar #"+name+"_bar .progress div").css("width",levelList[name]);
	},function(){
		$(this).css("background-color","#fff");
	});

});
function onWidthChange(){
	/*ABoutMe*/
	var basic_w=$("#AboutMe .row .col-md-2").width();
	$("#AboutMe .row .img-box").width(basic_w*0.8);
	$("#AboutMe .row .img-box").height(basic_w*0.8);
	var img_h=$("#AboutMe .row .img-box img").height();
	var line_h=(basic_w/2)-(img_h/2)-10;
	$("#About .row .img-box img").css("margin-top",line_h);

	/*Skill*/
	var row_w=$("#Skill .container").width();
	$("#skill_level").width(row_w*0.8);
	$("#Skill .level").width(row_w*0.8/5-2);
	$("#Skill #skill_name").width(row_w*0.2);
	$("#Skill #skill_level_bar").width(row_w*0.8-2);


}

