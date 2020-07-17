$(document).ready(function() {

	// Browser recommendation

	const isChrome = () => navigator.userAgent.indexOf('Chrome') > -1;
	const cookieExists = (cookieName) => !!document.cookie.split(';').filter((item) => item.trim().startsWith(cookieName + '=')).length;
	const setCookies = (cookieName) => {
		const expiryDate = new Date();
		expiryDate.setMonth(expiryDate.getMonth() + 1);
		document.cookie = cookieName + '=accepted; expires=' + expiryDate;
	};

	if(!isChrome() && !cookieExists('bg__browser-recommendation')) {
		$("#browser-recommendation").toast('show');
	};

	$('#browser-recommendation').on('hidden.bs.toast', function () {
		setCookies('bg__browser-recommendation');
	  $("#browser-recommendation").toast('dispose');
	});

});