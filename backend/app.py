from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/submit")
def submit():
    data = request.get_json(force=True)
    item_name = data.get("item_name")
    item_description = data.get("item_description")

    if not item_name or not item_description:
        return jsonify({"error": "item_name and item_description required"}), 400

    processed = {
        "received": data,
        "message": f"Thanks! '{item_name}' received.",
        "length_description": len(item_description),
    }
    return jsonify(processed), 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)
