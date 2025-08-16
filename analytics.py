from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/leave-trends', methods=['GET'])
def leave_trends():
    return jsonify({ 'message': 'Leave Trends' })

if __name__ == '__main__':
    app.run(port=5002)
