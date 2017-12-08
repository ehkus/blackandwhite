document.addEventListener("DOMContentLoaded", () => {
    var enableButton = document.getElementById("enable");
    enableButton.addEventListener("click", () => {
	chrome.tabs.insertCSS({file:"blackandwhite.css"});
    });
});
