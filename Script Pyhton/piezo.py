#!/usr/bin/env python
# -*- coding: utf-8 -*-

import RPi.GPIO as GPIO
import time as time
import subprocess as sp
import os

LED = 07
piezo = 13

GPIO.setmode(GPIO.BOARD)
GPIO.setup(LED, GPIO.OUT)
GPIO.setup(piezo,GPIO.IN,pull_up_down=GPIO.PUD_UP)

def fPiezo(channel):
	start_time = time.time()
	sec = 0 
	maxWait = 1
	while (GPIO.input(channel) == GPIO.LOW):
		sec = time.time() - start_time
		GPIO.output(LED, True)
		time.sleep(0.2)
	if sec >= maxWait:
		GPIO.cleanup()	
		res = sp.Popen('hostname -I'.split(), stdout = sp.PIPE)
		res1, res1sec = res.communicate()
		os.system('linphonec -V -s sip:100@'+res1) 

GPIO.add_event_detect(piezo, GPIO.FALLING, callback=fPiezo)

while True:
	time.sleep(0.2)

GPIO.cleanup()

