import os
import tensorflow as tf
import tensorflow_hub as hub
import numpy as np
from PIL import Image

os.environ['TFHUB_MODEL_LOAD_FORMAT'] = 'COMPRESSED'


class Model:
	def tensor_to_image(self, tensor):
		tensor = tensor * 255
		tensor = np.array(tensor, dtype=np.uint8)
		if np.ndim(tensor) > 3:
			assert tensor.shape[0] == 1
			tensor = tensor[0]
		return Image.fromarray(tensor.astype('uint8'))

	def load_img(self, path_to_img):
		max_dim = 512
		img = tf.io.read_file(path_to_img)
		img = tf.image.decode_image(img, channels=3)
		img = tf.image.convert_image_dtype(img, tf.float32)

		shape = tf.cast(tf.shape(img)[:-1], tf.float32)
		long_dim = max(shape)
		scale = max_dim / long_dim

		new_shape = tf.cast(shape * scale, tf.int32)

		img = tf.image.resize(img, new_shape)
		img = img[tf.newaxis, :]
		return img

	def generate_image(self, content_name, content_url, style_url):
		content_path = tf.keras.utils.get_file(content_name, content_url)
		content_image = self.load_img(content_path)

		style_image = self.load_img(style_url)

		hub_model = hub.load('https://tfhub.dev/google/magenta/arbitrary-image-stylization-v1-256/2')
		stylized_image = hub_model(tf.constant(content_image), tf.constant(style_image))[0]
		img = self.tensor_to_image(stylized_image)

		return img
