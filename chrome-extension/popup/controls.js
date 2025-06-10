const extensions = 'https://developer.chrome.com/docs/extensions'
const webstore = 'https://developer.chrome.com/docs/webstore'

document.addEventListener("DOMContentLoaded", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        document.getElementById("btn-play").addEventListener("click", function() {
            chrome.tabs.sendMessage(tabs[0].id, "play");
        });
        document.getElementById("btn-previous").addEventListener("click", function() {
            chrome.tabs.sendMessage(tabs[0].id, "previous");
        });
        document.getElementById("btn-next").addEventListener("click", function() {
            chrome.tabs.sendMessage(tabs[0].id, "next");
        });
        
        document.getElementById("btn-hide-connect").addEventListener("click", function() {
            chrome.tabs.sendMessage(tabs[0].id, "hide-connect");
        });

        document.getElementById("btn-bpm-plus").addEventListener("click", function() {
            chrome.tabs.sendMessage(tabs[0].id, "bpm-plus");
        });

        document.getElementById("btn-bpm-minus").addEventListener("click", function() {
            chrome.tabs.sendMessage(tabs[0].id, "bpm-minus");
        });
        

    });
  });