import json
import os
import random
import requests
import base64
from io import BytesIO
from model import Model
from flask import Flask, request, jsonify
from flask_cors import CORS

m = Model()

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def hello():
    return "<p>oli</p>"

@app.route('/generateImage', methods=['GET'])
def generate_image():
    search_word = request.args.get('key', '')
    url = "https://images-api.nasa.gov/search?q=" + search_word + "&media_type=image"

    res = requests.get(url)
    response = json.loads(res.text)

    art_url = "Art/" + str(random.randint(1, 26)) + ".jpg"

    if len(response["collection"]["items"]) == 0:
        search_word = "space"
        url = "https://images-api.nasa.gov/search?q=" + search_word + "&media_type=image"
        res = requests.get(url)
        response = json.loads(res.text)

    index = random.randint(0, len(response["collection"]["items"])) - 1
    imagen_url = str(response["collection"]["items"][index]["links"][0]["href"])

    image = m.generate_image(str(random.randint(0, 999)) + ".jpg",
                             imagen_url,
                             art_url)

    file_object = BytesIO()
    image.save(file_object, 'jpeg')
    file_object.seek(0)

    data = file_object.read()
    data = base64.b64encode(data).decode()

    return jsonify({"original_image": imagen_url,"image": data})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('WEBSITES_PORT', 8000)))