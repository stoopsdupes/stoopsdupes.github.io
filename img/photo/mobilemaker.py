import os
import numpy as np
import cv2
from PIL import Image
import glob

images = glob.glob('large/*.jpg')
number = 29

for thanumber, fname in enumerate(images):
	img = cv2.imread(fname)

	if img.shape[1] > 1500 or img.shape[0] > 1500:
		dim = (1500, int(1500 * (img.shape[0] / img.shape[1])))
		imglarge = cv2.resize(img, dim, interpolation = cv2.INTER_AREA)
		if imglarge.shape[0] > 1800:
			dim = (1200, int(1200 * (img.shape[0] / img.shape[1])))
			imglarge = cv2.resize(img, dim, interpolation = cv2.INTER_AREA)
	else:
		imglarge = img

	scale = 50
	dim = (int(imglarge.shape[1] * scale / 100), int(imglarge.shape[0] * scale / 100))
	imglargemobile = cv2.resize(imglarge, dim, interpolation = cv2.INTER_AREA)

	scale = 70
	dim = (int(imglargemobile.shape[1] * scale / 100), int(imglargemobile.shape[0] * scale / 100))
	imgsmall = cv2.resize(imglargemobile, dim, interpolation = cv2.INTER_AREA)

	while imgsmall.shape[0] < 700 or imgsmall.shape[1] < 700:
		scale += 1
		dim = (int(imglargemobile.shape[1] * scale / 100), int(imglargemobile.shape[0] * scale / 100))
		imgsmall = cv2.resize(imglargemobile, dim, interpolation = cv2.INTER_AREA)

	imgsmall = cv2.cvtColor(imgsmall, cv2.COLOR_BGR2RGB)
	imgsmall = Image.fromarray(imgsmall)
	imglarge = cv2.cvtColor(imglarge, cv2.COLOR_BGR2RGB)
	imglarge = Image.fromarray(imglarge)
	imglargemobile = cv2.cvtColor(imglargemobile, cv2.COLOR_BGR2RGB)
	imglargemobile = Image.fromarray(imglargemobile)

	imgsmall.save(str(number) + '.webp', format="webp", quality=55)
	imglarge.save('large/' + str(number) + '.webp', format="webp", quality=55)
	imglargemobile.save('large/' + str(number) + 'mobile.webp', format="webp", quality=55)
	print(str(number))
	number += 1
