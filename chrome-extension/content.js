function simulateMouseClick(targetNode) {
    if(!targetNode)return;
    function triggerMouseEvent(targetNode, eventType) {
        var clickEvent = new Event(eventType, {
            'view': window,
            'bubbles': true,
            'cancelable': true
        });
        targetNode.dispatchEvent(clickEvent);
    }
    ["mousedown", "mouseup", "click"].forEach(function(eventType) { 
        triggerMouseEvent(targetNode, eventType);
    });
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        //debugger;
        var success = true;
        if(window.location.href.match(/soundslice\.com/)) {

            switch(request.trim()) {
                case 'play':
                    var node = document.querySelector("button.playbutton");
                    simulateMouseClick(node);

                    break;
                case 'bpm-plus':
                    simulateMouseClick(document.querySelector(".speedbut-plus"));
                    break;
                
                case 'bpm-minus':
                    simulateMouseClick(document.querySelector(".speedbut-minus"));
                    break;
            }
        } else {
            switch(request.trim()) {
                case 'hide-connect':
                    var connectButton = document.querySelector("#connect-serial");
                    if(connectButton) {
                        connectButton.remove();
                    }
                    break;
                case 'previous':
                    Array.from(document.querySelectorAll('span')).find(el => el.textContent==="Previous").parentElement.dispatchEvent(new Event("click"))
                    break;
               case 'next':
                    Array.from(document.querySelectorAll('span')).find(el => el.textContent==="Next").parentElement.dispatchEvent(new Event("click"))
                    break;
            }
        }
    
        sendResponse({success: success});
    }
  );