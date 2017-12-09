chrome.commands.onCommand.addListener(function(command) {
    if(command === "black-and-white") {
	chrome.tabs.insertCSS({file:"blackandwhite.css"});
    }
    if(command === "remove-black-and-white") {
	var rel = "window.location.reload();";
	chrome.tabs.executeScript({code: rel});
    }
});
