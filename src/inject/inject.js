/*chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

	}
	}, 10);
});
*/

function pasteSelection() {
	  chrome.tabs.getSelected(null, function(tab) {
	    chrome.tabs.sendRequest(tab.id, {method: "getSelection"}, function (response) {
	      var text = document.getElementById('text'); 
	      text.innerHTML = response.data;
	    });
	  });
}

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.method == "getSelection")
      sendResponse({data: window.getSelection().toString()});
    else
      sendResponse({}); // snub them.
});


document.getElementsByClassName("paste").addEventListener("click", pasteSelection);