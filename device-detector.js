function deviceDetector() {
	var size = {
		w: 'wide',
                d: 'desktop',
                l: 'landscape',
                p: 'potrait',
                m: 'mobile'
        };
        
	if (window.matchMedia("(max-width: 380px)").matches) {
		device = size.m;
	} else if (window.matchMedia("(max-width: 767px)").matches) {
		device = size.m;
	} else if (window.matchMedia("(min-width: 768px) and (max-width: 979px)").matches) {
		device = size.p;
	} else if (window.matchMedia("(min-width: 980px) and (max-width: 1279px)").matches) {
		device = size.l;
	} else if (window.matchMedia("(min-width:1280px) and (max-width:1800px)").matches) {
		device = size.d;
	} else {
		device = size.w;//extra large
	}
	return device;
}

jQuery(window).on('load resize', function(e) {
    var $body = $('body'),
        device = deviceDetector();
        
    $body.attr({
	'class': function(i, c){
              	return c.replace(/(^|\s)dev-\S+/g,'dev-'+ device);
	},
	'data-device':device
     });
   console.log(device);
});
