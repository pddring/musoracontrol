import badger2040
import jpegdec
import time
import machine

badger = badger2040.Badger2040()
jpeg = jpegdec.JPEG(badger.display)

badger.set_pen(15)
badger.clear()

# show images
jpeg.open_file("/images/previous.jpg")
jpeg.decode(40, 50)
jpeg.open_file("/images/play.jpg")
jpeg.decode(140, 50)
jpeg.open_file("/images/next.jpg")
jpeg.decode(230, 50)

# show text
badger.set_pen(0)
badger.set_font("bitmap8")
badger.text("Musora Controls", 70, 0)
badger.text("Previous", 20, 100)
badger.text("Play/Pause", 120, 100)
badger.text("Next", 230, 100)
badger.text("BPM", 260, 0)
badger.text("+", 290, 20)
badger.text("-", 290, 90)

button_a = machine.Pin(badger2040.BUTTON_A, machine.Pin.IN, machine.Pin.PULL_DOWN)
button_b = machine.Pin(badger2040.BUTTON_B, machine.Pin.IN, machine.Pin.PULL_DOWN)
button_c = machine.Pin(badger2040.BUTTON_C, machine.Pin.IN, machine.Pin.PULL_DOWN)
button_down = machine.Pin(badger2040.BUTTON_DOWN, machine.Pin.IN, machine.Pin.PULL_DOWN)
button_up = machine.Pin(badger2040.BUTTON_UP, machine.Pin.IN, machine.Pin.PULL_DOWN)


badger.update()
running = True
while running:
    if button_down.value():
        print("bpm-minus")
        while button_down.value():
            time.sleep(0.1)
        
    if button_up.value():
        print("bpm-plus")
        while button_up.value():
            time.sleep(0.1)
    
    if button_a.value():
        print("previous")
        while button_a.value():
            time.sleep(0.1)
    
    if button_b.value():
        print("play")
        while button_b.value():
            time.sleep(0.1)
        
    
    if button_c.value():
        print("next")
        while button_c.value():
            time.sleep(0.1)
        
    time.sleep(0.1)
