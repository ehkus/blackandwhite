document.addEventListener("DOMContentLoaded", () => {
    var enableButton = document.getElementById("enable");
    enableButton.addEventListener("click", () => {
	chrome.tabs.insertCSS({file:"blackandwhite.css"});
    });
    var disableButton = document.getElementById("disable");
    disableButton.addEventListener("click", () => {
	var rel = "window.location.reload();";
	chrome.tabs.executeScript({code: rel});
	window.close();
    });
});
