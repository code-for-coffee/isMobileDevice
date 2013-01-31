/* 

	isMobileDevice.js

	https://github.com/code-for-coffee
	Last Updated 1/25/13
	james [at] codeforcoffee [dot] org

	Released under GPL.
	http://www.gnu.org/licenses/gpl.html

	This script will detect if a user is on a mobile device.

*/

	var userAgentOnMobile = false;
	var browser = navigator.UserAgent;

	function isMobileDevice() {
	// test window widght/height first
	if(window.innerWidth <= 1024 && window.innerHeight <= 800) {
		// user is on a low resolution device
		// Check type of device
		if (browser.match(/Android/i) || 
			browser.match(/Bada/i) || 
			browser.match(/BlackBerry/i) || 
			browser.match(/Firefox OS/i) || 
			browser.match(/Kindle/i) || 
			browser.match(/iPad/i) || 
			browser.match(/iPhone/i) ||
			browser.match(/iPod/i) || 
			browser.match(/Maemo/i) || 
			browser.match(/Meego/i) || 
			browser.match(/Symbian/i) || 
			browser.match(/webOS/i) || 
			browser.match(/Windows CE/i) || 
			browser.match(/Windows Phone/i) ||
			browser.match(/Windows RT/i) 
		{
		return userAgentOnMobile = true;
		} else {
		// user is on a standard resolution device (not "mobile")
		return userAgentOnMobile = false;
		}
}
