#!/usr/bin/env python
# -*- coding: utf-8 -*-

import RPi.GPIO as GPIO
import time as time
import os

LED = 07

GPIO.setmode(GPIO.BOARD)
GPIO.setup(LED, GPIO.OUT)

start_time = time.time()
sec = 0

while (sec < 5):
		GPIO.output(LED, True)
		sec = time.time() - start_time
		time.sleep(0.1)

GPIO.output(LED, False)

GPIO.cleanup()
