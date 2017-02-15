// JavaScript Document
$(function() {

	  $('video').on('ended', function() {

        $(this).parent().addClass('end');
        this.currentTime = 70.687351;
        $(this).prop("controls", false);
        this.pause();
    });

	$('.u_content').on('click', '.video.end #js_video_btn',function() {
 		
        var video = $('.video.end').find('video');

	        $(this).parent().removeClass('end');
	        video[0].currentTime = 0;
	        video.prop("controls", 'controls');
	        video[0].play();
    })


	// for ie 8 9 

	var userAgent = window.navigator.userAgent.toLowerCase(),
        is_ie7 = /msie 7\.0/i.test(userAgent),
        is_ie8 = /msie 8\.0/i.test(userAgent),
        is_ie9 = /msie 9\.0/i.test(userAgent);

    if( is_ie8 || is_ie9 ) {
    	$('#version_box .dota2-version').hide();
		$('#monkey_new').addClass('forie');
		$('#version_newest').addClass('forie');
		$('#version_newest h2').hide();
    }

})