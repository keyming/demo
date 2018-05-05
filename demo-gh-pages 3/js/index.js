function collapseNavbar() {
	    var t = document.documentElement.scrollTop || document.body.scrollTop;
		 if($(".navbar").offset().Width > 768){
		$(".navbar-fixed-top").addClass(function(){
			$(".navbar-toggle").show();
		})
	}else{
		$(".navbar-fixed-top").removeClass(function(){
			$(".navbar-toggle").hide();
		})
	}
    if ($(".navbar").offset().top > 500) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
		$(".navbar-fixed-top").addClass(function(){
			$(".navbar-custom .nav li a ").show();
			$(".navbar-brand").show();

		});
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
			$(".navbar-fixed-top").removeClass(function(){
			$(".navbar-custom .nav li a ").hide();
			$(".navbar-brand").hide();

		});
    }
	if(t >20){
		$(".banner_text a").addClass("a1 a2")
	}else{
		$(".banner_text a").removeClass("a1 a2");
	}
    if (t >= 500) {
        $(".move3").addClass("move_up");
        $(".move2").addClass("move_up");
        $(".green").addClass("hr_green");
        $(".item").addClass("item_move_down");
    } else {
        $(".move3").removeClass("move_up");
        $(".move2").removeClass("move_up");
        $(".green").removeClass("hr_green");
        $(".item").removeClass("item_move_down");
    }
    if (t >= 900) {
        $(".moveimg1").addClass("moveimgone");
        $(".movetext1").addClass("movetextone");

    }
    else {
        $(".moveimg1").removeClass("moveimgone");
        $(".movetext1").removeClass("movetextone");
    }
    if (t >= 1500) {
        $(".cardh2").addClass("card2_cmh");
        $(".cardhr").addClass("cardhr2_cmh");
        $(".cardtext").addClass("cardtext2_cmh");
        $(".cardone").addClass("card1");
        $(".cardtow").addClass("card2");
        $(".cardthree").addClass("card3");
        $(".cardfour").addClass("card4");
    }
    else {
        $(".cardh2").removeClass("card2_cmh");
        $(".cardhr").removeClass("cardhr2_cmh");
        $(".cardtext").removeClass("cardtext2_cmh");
        $(".cardone").removeClass("card1");
        $(".cardtow").removeClass("card2");
        $(".cardthree").removeClass("card3");
        $(".cardfour").removeClass("card4");
    }
    if (t >= 2000) {

        $(".info-wrap>*").addClass("card3");
    }
    else {
        $(".info-wrap>*").removeClass("card3");
    }
    if (t >= 2400) {

        $(".wrap").addClass("card3");
    }
    else {
        $(".wrap").removeClass("card3");
    }
	if(t >=2100){
		$(".row a").addClass("a1 a2");
	}else{
		$(".row a").removeClass("a1 a2");
	}
	

}
$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);
