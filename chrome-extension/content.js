var playVerb = "play";
var speed = 1;
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        var player = document.getElementById("ssEmbed").contentWindow;
        success = false;
        try {
            switch(request.trim()) {
                case 'hide-connect':
                    var connectButton = document.querySelector("#connect-serial");
                    if(connectButton) {
                        connectButton.remove();
                    }
                    break;
                case 'play':
                    player.postMessage('{"method": "' + playVerb + '"}', "https://www.soundslice.com");
                    //document.querySelector("div.mouseland", new Event("mousedown"));
                    //document.querySelector("button.playbutton").dispatchEvent(new Event("mouseup"));
                    

                    break;
                
                case 'previous':
                    Array.from(document.querySelectorAll('span')).find(el => el.textContent==="Previous").parentElement.dispatchEvent(new Event("click"))
                    break;
                    plus
                case 'next':
                    Array.from(document.querySelectorAll('span')).find(el => el.textContent==="Next").parentElement.dispatchEvent(new Event("click"))
                    break;

                case 'bpm-plus':
                    speed += 0.05;
                    player.postMessage('{"method": "setSpeed", "arg":"' + speed + '"}', "https://www.soundslice.com");
                    break;
                
                case 'bpm-minus':
                    speed -= 0.05;
                    player.postMessage('{"method": "setSpeed", "arg":"' + speed + '"}', "https://www.soundslice.com");
                    break;
                    
            }
        } catch(e) {
            success = {error: e};
        }
        console.log("Handled", request, success);
        sendResponse({success: success});
    }
  );

  window.addEventListener('message', function(event) {
    console.log(event.data);
    var cmd = JSON.parse(event.data);
    switch (cmd.method) {
        case 'ssPlay':
            playVerb = "pause";
            break;
        case 'ssPause':
            playVerb = "play";
            break;
        case 'ssSpeed':
            console.log('Speed is ' + (cmd.arg * 100) + ' percent.');
            break;
    }
});