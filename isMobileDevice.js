/* 

	isMobileDevice.js

	https://github.com/code-for-coffee
	Last Updated 1/21/13

	Released under GPL.

	We want to make sure that we only display certain fields.
	This script will detect if a user is on a mobile device.

	Include this function in overall_header.tpl's <body onload="isMobileDevice();">

*/

	var userAgentOnMobile = false;
	var browser = navigator.UserAgent;

	function isMobileDevice() {
	// test window widght/height first
	if(window.innerWidth <= 1024 && window.innerHeight <= 800) {
		// user is on a low resolution device
		// Check type of device
		if (browser.match(/Android/i) || 
			browser.match(/BlackBerry/i) || 
			browser.match(/iPad/i) || 
			browser.match(/iPhone/i) ||
			browser.match(/iPod/i) || 
			browser.match(/webOS/i) || 
			browser.match(/Windows Phone/i) {
			userAgentOnMobile = true;
		}
	} else {
		// user is on a standard resolution device (not "mobile")
		userAgentOnMobile = false;
	}
	return AgentOnMobile;
}