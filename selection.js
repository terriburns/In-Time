chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
     if (request.method == "getSelection") {
      console.log('z');
      console.log(document.getSelection().toString());
       chrome.extension.sendMessage({
           data: document.getSelection().toString()
       });
     }
    else  {
      chrome.extension.sendMessage({}); 
      console.log('a');
    }
    return true;
 });
/*
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log('x');
       //if (request.method == "getSelection") {
         chrome.extension.sendMessage({
             data: document.getSelection().toString()
         });
     // }
   //  else  {
    //  chrome.extension.sendMessage({}); 
   /// }
});
*/