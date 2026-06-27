from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return '<h1>Hello from Flask Backend!</h1>'

@app.route('/api')
def api():
    return {'message': 'Flask API is running!'}

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
