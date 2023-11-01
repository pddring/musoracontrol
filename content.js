chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        success = false;
        try {
            switch(request) {
                case 'play':
                    document.querySelector(".playbutton").dispatchEvent(new Event("mousedown"));
                    break;
                
                case 'previous':
                    Array.from(document.querySelectorAll('span')).find(el => el.textContent==="Previous").parentElement.dispatchEvent(new Event("click"))
                    break;
    
                case 'next':
                    Array.from(document.querySelectorAll('span')).find(el => el.textContent==="Next").parentElement.dispatchEvent(new Event("click"))
                    break;

                case 'bpm-plus':
                    document.querySelector(".speedbut-plus").dispatchEvent(new Event("click"));
                    break;
                
                case 'bpm-minus':
                    document.querySelector(".speedbut-minus").dispatchEvent(new Event("click"));
                    break;
    
            }
        } catch(e) {
            success = false;
        }
        
        sendResponse({success: success});
    }
  );