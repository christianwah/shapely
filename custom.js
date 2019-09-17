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
						var attendance = $("select[name=attendance]").val();
						var name = $("input[name=your-name]").val();
						var pnumber = $("input[name=number-of-attendee]").val();
						var address = $("input[name=address]").val();
						var checkedBox ="";
						$("input[type=checkbox]").each(function(){checkedBox = checkedBox + ", " +$(this).val()});
						post(urlRoot+'/qr-code-generator/', {_email: $("input[name=your-email]").val(), _GuestName:$("input[name=your-name]").val(), _attendance:$("select[name=attendance]").val(), _attending:checkedBox, _attendanceNo:$("input[name=number-of-attendee]").val(), _phone:$("input[name=phone]").val(), _inviteReq:$("input[name=invitation-card]").val(), _address:$("textarea[name=address]").val(), _feedback:$("textarea[name=feedback]").val()},'post');
					//}
				})
			}, false );

			wpcf7Elm.addEventListener( 'wpcf7mailsent', function( event ) {
				jQuery(function($) { 	
					//if($("select[name=attendance]").val() == "Yes, I'll gladly come to your wedding"){
						var attendance = $("select[name=attendance]").val();
						var checkedBox ="";
						$("input[type=checkbox]").each(function(){checkedBox = checkedBox + " " +$(this).val()});
						post(urlRoot+'/qr-code-generator/', {_email: $("input[name=your-email]").val(), _GuestName:$("input[name=your-name]").val(), _attendance:$("select[name=attendance]").val(), _attending:checkedBox, _attendanceNo:$("input[name=number-of-attendee]").val(), _phone:$("input[name=phone]").val(), _inviteReq:$("input[name=invitation-card]").val(), _address:$("textarea[name=address]").val(), _feedback:$("textarea[name=feedback]").val()},'post');
					//}
				})
			}, false );
		}
		



	})
		
	$.holdReady(true);
	setTimeout(function(){
		$.holdReady(false);
	}, 10);
	
	
	
})(jQuery);


(function($) {
	function ipLookUp () {
		$.ajax('https://ipinfo.io/json?token=cac482689b6e66')
		.then(
			function success(response) {
				console.log('User\'s Location Data is ', response);
				console.log('User\'s Country', response.country);
				if (response.country == "ID") {
					$(".en").hide();
					$(".id").show();
				}
			},

			function fail(data, status) {
				console.log('Request failed.  Returned status of',
							 status);
				ipLookUp2();
			}
		);
	}
	function ipLookUp2 () {
		$.ajax('https://ipapi.co/country/')
		.then(
			function success(response) {
				console.log('User\'s Country', response);
				if (response == "ID") {
					$(".en").hide();
					$(".id").show();
				}
			},

			function fail(data, status) {
				console.log('Request failed.  Returned status of',
							 status);
			}
		);
	}
	

	function increaseFontSize(){
		var prev;
		$('*').each(function(){
			var k =  parseInt($(this).css('font-size')); 
			if (typeof k !== "undefined" && k != prev) {
				prev = k;
				var redSize = ((k*1.2)) ; //here, you can give the percentage( now it is reduced to 90%)
				$(this).css('font-size',redSize);  
			}
			else
			{
				var redSize = 11 ; //here, you can give the percentage( now it is reduced to 90%)
				$(this).css('font-size',redSize);  
			}
		});
	}
	function decreaseFontSize(){
		var prev;
		$('*').each(function(){
			var k =  parseInt($(this).css('font-size')); 
			if (typeof k !== "undefined" && k != prev) {
				prev = k;
				var redSize = ((k*0.83)) ; //here, you can give the percentage( now it is reduced to 90%)
				$(this).css('font-size',redSize);  
			}
			else
			{
				var redSize = 11 ; //here, you can give the percentage( now it is reduced to 90%)
				$(this).css('font-size',redSize);  
			}
		});
	}
	$(document).ready(function() {
		
		$(".id").hide();
		ipLookUp();
		$("#plus-font-size-btn").click(increaseFontSize);
		$("#minus-font-size-btn").click(decreaseFontSize);
		$(window).load(function() {
			setTimeout(function(){ 
				$(".skyscanner-search-widget").attr('style', 'margin-bottom: 86.1px;');
				$(".skyscanner-search-widget").attr('style', 'margin-top: 86.1px;');
			}, 3000);
		});
	})
})(jQuery);

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
	if (document.getElementById('top-button') !== null)
	{
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			document.getElementById("top-button").style.display = "block";
		} else {
			document.getElementById("top-button").style.display = "none";
		}
	}
}	

window.onload = function() {
	if (document.getElementById('loader') !== null)
	{
		document.getElementById("loader").style.display = "none";
	}
	if (document.getElementById('page') !== null)
	{
		document.getElementById("page").style.display = "block";
	}
}






