function pasteSelection() {
    //Select current tab to send message
    console.log("paster");
    chrome.tabs.query({
        "active": true,
        "currentWindow": true,
        "status": "complete",
        "windowType": "normal"
    }, function (tabs) {
        //It returns array so looping over tabs result
        for (tab in tabs) {

            //Send Message to a tab
            chrome.tabs.sendMessage(tabs[tab].id, {
                method: "getSelection"
            });
        }
    });
}
//Adding a handler when message is recieved from content scripts
chrome.extension.onMessage.addListener(function (response, sender) {
    //Set text to text area
    console.log('x');
    var text = document.getElementById('text');
    text.value = response.data;
});

chrome.runtime.onMessage.addListener(function (response, sender) {
    //Set text to text area
    console.log('xx');
    var text = document.getElementById('text');
    text.value = response.data;
});


// Bind On click event to pasteSelection() function
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("paste").onclick = pasteSelection;
});