(function($) {
	$(document).ready(function() {
		
		
		
		$('.owl-carousel').owlCarousel({
			margin: 10,
			loop: true,
			nav:true,
			items:1,
			dots: false,
			navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
		});
				
		var prevScrollpos = window.pageYOffset;
		window.onscroll = function() {
			var currentScrollPos = window.pageYOffset;
			if (prevScrollpos > currentScrollPos) {
				document.getElementById("site-navigation").style.top = "0";
			} 
			else {
				document.getElementById("site-navigation").style.top = "-100px";
			}
			prevScrollpos = currentScrollPos;

			scrollFunction()
		};


		function scrollFunction() {
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				document.getElementById("topButton").style.display = "block";
			} else {
				document.getElementById("topButton").style.display = "none";
			}
		}

		function topFunction() {
			(function($) {
				$("html, body").animate({ scrollTop: "0px" },500, "easeInOutCirc");
			})(jQuery);
		}
		
		var wpcf7Elm = document.querySelector( '.wpcf7' );
		
		if (wpcf7Elm)
		{
			wpcf7Elm.addEventListener( 'wpcf7mailfailed', function( event ) {
				jQuery(function($) {
					//if($("select[name=attendance]").val() == "Yes, I'll gladly come to your wedding"){
						post(urlRoot+'/qr-code-generator/', {_email: $("input[name=your-email]").val(), 
															_GuestName:$("input[name=your-name]").val(),
															_attendance:$("select[name=attendance]").val()},'post');
					//}
				})
			}, false );

			wpcf7Elm.addEventListener( 'wpcf7mailsent', function( event ) {
				jQuery(function($) { 	
					//if($("select[name=attendance]").val() == "Yes, I'll gladly come to your wedding"){
						post(urlRoot+'/qr-code-generator/', {_email: $("input[name=your-email]").val(), 
															_GuestName:$("input[name=your-name]").val(),
															_attendance:$("select[name=attendance]").val()},'post');
					//}
				})
			}, false );
		}
		
		/**
		 * sends a request to the specified url from a form. this will change the window location.
		 * @param {string} path the path to send the post request to
		 * @param {object} params the paramiters to add to the url
		 * @param {string} [method=post] the method to use on the form
		 */

		function post(path, params, method='post') {

		  // The rest of this code assumes you are not using a library.
		  // It can be made less wordy if you use one.
		  const form = document.createElement('form');
		  form.method = method;
		  form.action = path;

		  for (const key in params) {
			if (params.hasOwnProperty(key)) {
			  const hiddenField = document.createElement('input');
			  hiddenField.type = 'hidden';
			  hiddenField.name = key;
			  hiddenField.value = params[key];

			  form.appendChild(hiddenField);
			}
		  }

		  document.body.appendChild(form);
		  form.submit();
		}

		
		
		
		document.getElementById("loader").style.display = "none";
		document.getElementById("page").style.display = "block";
		
	})
	
$.holdReady(true);
    setTimeout(function(){
$.holdReady(false);
    }, 10000);
	
	
	
})(jQuery);


(function($) {
	
})(jQuery);