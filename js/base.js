var get = function(el) {
	return document.querySelector(el);
};

var getAll = function(el) {
	return document.querySelectorAll(el);
};

var getTag = function(el, i) {
	return document.getElementsByTagName(el)[i];
};

var toggleDisplay = function(el, display, class_el) {
	var EL = get(el);
	if(EL.style.display == display) {
		EL.style.display = 'none';
		if(class_el)
			EL.classList.add(class_el);
	}
	else {
		EL.style.display = display;
		if(class_el)
			EL.classList.add(class_el);
	}
};

var script = function(src) {
	var s = document.createElement('script');
	s.src = src;
	s.type = 'text/javascript';
	s.async = 'true';
	getTag('head', 0).appendChild(s);
};

var WebFontConfig = {
	custom: { families: ['Roboto', 'Fira Mono', 'Arimo'],
	urls: [ 'http://localhost/project/bits/fonts.css' ] }
};

var shareScroll = function(el, ul, ll, cl) {

	var EL = get(el),
		UL = get(ul),
		LL = get(ll);
	if(EL && UL && LL && (screen.availWidth>=1024)) {
		EL.style.width = EL.parentNode.clientWidth + 'px';
		window.addEventListener("orientationchange", function() {
			EL.style.width = EL.parentNode.clientWidth + 'px';
		}, false);

		window.addEventListener( 'scroll', function() {
			if(window.scrollY > UL.offsetTop && window.scrollY < LL.offsetTop-500)
				EL.classList.add(cl);
			else
				EL.classList.remove(cl);
		} );
	} else
		return false;

};

var loadComments = function(el) {
	var EL = get(el),
		DL = false;
	if(EL) {
		window.addEventListener( 'scroll', function() {
			if(!DL && window.scrollY>200) {
				script("http://w3bits.disqus.com/embed.js");
				DL = true;
			} else
				return false;
		} );
	}
	if(screen.availWidth>=1024) {
		script("//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.3");
		script("//apis.google.com/js/plusone.js");
	}
}