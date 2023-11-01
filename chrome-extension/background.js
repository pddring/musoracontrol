const extensions = 'https://developer.chrome.com/docs/extensions'
/*

chrome.runtime.onInstalled.addListener(async () => {
    var status = "Not connected";

    if ("serial" in navigator) {
        status = "Detected";
        const port = await navigator.serial.requestPort();
    }
    chrome.action.setBadgeText({
      text: status,
    });
  });

*/

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");

    chrome.tabs.query({active: true}, function(tabs) {
      tabs.forEach((tab) => {
        console.log("Sending", tab.id, request);
        chrome.tabs.sendMessage(tab.id, request);
      });  
    });
  }
); 