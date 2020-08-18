$(document).ready(function() {

	$('#tipue_search_input').tipuesearch();

	function isCookieSet(cookieName) {
		return document.cookie.split(';').filter(item => item.trim().startsWith(cookieName + '=')).length > 0;
	}

	function setCookie(cookieName, intMonth) {
		var expiryDate = new Date();
		expiryDate.setMonth(expiryDate.getMonth() + intMonth);
		document.cookie = cookieName + '=accepted; expires=' + expiryDate + '; path=/';
	}

	// Browser recommendation

	if((navigator.userAgent.indexOf('Chrome') < 0) && !isCookieSet('bg__browser-recommendation')) {
		$("#browser-recommendation").toast('show');
	};

	$('#browser-recommendation').on('hidden.bs.toast', function () {
		setCookie('bg__browser-recommendation', 1);
	  $("#browser-recommendation").toast('dispose');
	});

	// User consent

	$('#menu_login a.nav-link').click(function(e) {
    e.preventDefault();

    if (!isCookieSet('bg__user-consent')) {
    	$('#user-consent').modal('show');
    } else {
    	window.location = $(this).attr('href');
    };
  });

  $('#btn-accept-user-consent').click(function(e) {
    e.preventDefault();

    setCookie('bg__user-consent', 6);

    var href = $('#menu_login a.nav-link').attr('href');
    window.location = href;
  });

});