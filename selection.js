chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
     console.log('x');
     if (request.method == "getSelection")
     chrome.extension.sendMessage({
         data: document.getSelection().toString()
     });
     else chrome.extension.sendMessage({}); 
 });

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
     console.log('y');
     if (request.method == "getSelection")
     chrome.extension.sendMessage({
         data: document.getSelection().toString()
     });
     else chrome.extension.sendMessage({}); 
});
