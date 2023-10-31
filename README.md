# musoracontrol
Musora control chrome plugin

I want to be able to press a physical button (e.g. on an arduino connected via USB) which can play / pause and move to the next or previous activity on Musora

Useful js code:
```$("button.playbutton").dispatchEvent(new Event("mousedown"));
Array.from(document.querySelectorAll('span')).find(el => el.textContent==="Next").parentElement.dispatchEvent(new Event("click"))
Array.from(document.querySelectorAll('span')).find(el => el.textContent==="Previous").parentElement.dispatchEvent(new Event("click"))```
