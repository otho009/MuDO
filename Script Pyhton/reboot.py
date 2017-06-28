#!/usr/bin/env python
# -*- coding: utf-8 -*-

import RPi.GPIO as GPIO
import time as time
import os

LED = 07
Button = 11

GPIO.setmode(GPIO.BOARD)
GPIO.setup(LED, GPIO.OUT)
GPIO.setup(Button,GPIO.IN,pull_up_down=GPIO.PUD_UP)

def fShutdown(channel):
    start_time = time.time()
    sec = 0
    maxWait1 = 1
	maxWait2 = 3
	while (GPIO.input(channel) == GPIO.LOW):
		sec = time.time() - start_time
		time.sleep(0.1)
	if sec >= maxWait2:
		GPIO.output(LED, True)
		time.sleep(0.5)
		GPIO.output(LED, False)
		time.sleep(0.5)
		GPIO.output(LED, True)
		time.sleep(0.5)
		GPIO.output(LED, False)
		time.sleep(0.5)
		GPIO.output(LED, True)
		time.sleep(0.5)
		GPIO.output(LED, False)
		time.sleep(0.5)
		GPIO.cleanup()	
		os.system('halt')
	elif sec >= maxWait1 :
		GPIO.output(LED, True)
		time.sleep(0.5)
		GPIO.output(LED, False)
		time.sleep(0.5)
		GPIO.output(LED, True)
		time.sleep(0.5)
		GPIO.output(LED, False)
		time.sleep(0.5)	
		GPIO.cleanup()
		os.system('reboot')

GPIO.add_event_detect(Button, GPIO.FALLING, callback=fShutdown)

while True:
	time.sleep(0.2)

GPIO.cleanup()

