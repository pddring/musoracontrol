async function initSerial() {
  const port = await navigator.serial.requestPort();
  connect(port);
}
var connectButton = 0;

async function connect(port) {
  await port.open({ baudRate: 115200});
  const decoder = new TextDecoderStream();
  port.readable.pipeTo(decoder.writable);
  const inputStream = decoder.readable;
  const reader = inputStream.getReader();
  var connectButton = document.querySelector("#connect-serial");
  if(connectButton) {
    connectButton.remove();
  }
  while(true) {
      const { value, done } = await reader.read();
      if (value) {
          console.log(value);
          (async () => {
            const response = await chrome.runtime.sendMessage(value);
            console.log(response);
          })();
        }
        if (done) {
          console.log('[readLoop] DONE', done);
          reader.releaseLock();
          break;
        }
  }
}

(async() => {
  const ports = await navigator.serial.getPorts();
  if(ports && ports[0]) {
    connect(ports[0]);
  } else {
    document.querySelector("nav").innerHTML += '<button id="connect-serial">Connect<button>';
    var connectButton = document.querySelector("#connect-serial");
    connectButton.addEventListener("click", (event) => {
      initSerial();
    });
  }
})();

