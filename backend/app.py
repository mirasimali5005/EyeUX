import os
from flask import Flask, jsonify, request, render_template
import uuid
from flask_cors import CORS


FRONTEND_ORIGINS = os.getenv("FRONTEND_ORIGINS", "http://localhost:3000, http://localhost").split(",")

all_IDS = {}
BACKEND_PORT = os.getenv("BACKEND_PORT",5001)
app = Flask(__name__)
CORS(app, origins=FRONTEND_ORIGINS, supports_credentials=True)

@app.route('/')
def index():
    return "Mir Asim Ali"

@app.route("/show-login", methods=["GET"])
def show_login():
    return render_template("login.html")

@app.route("/login", methods=["POST"])
def login():
    username= request.form.get("username", "no username")
    password= request.form.get("password", "no password")
    email= request.form.get("email", "no email")
    a = ''
    if username != "no username" :
        a += f"username: {username}"
    if password != "no password":
        a+= f" password: {password}"
    if email != "no email":
        a+= f" email: {email}"
    return a



@app.route("/open-session", methods=["POST"])
def open_session():
    session_id = str(uuid.uuid4())
    all_IDS[session_id] = []
    return jsonify({"session_id": session_id})
    

@app.route("/close-session", methods=["POST"])
def close_session():
    extract_from = request.get_json()
    session_id= extract_from.get("session_id")
    return jsonify(all_IDS[session_id])

@app.route("/eye-track", methods=["POST"])
def eye_track():
    eye_data = request.get_json()
    session = eye_data.get("session_id")

  #TODO: Temp testing remove if you dont want to create session if it does not exist
    all_IDS[session] = all_IDS.get(session, [])


    if not session or session not in all_IDS:
        return jsonify({"status": "declined", "error": "Invalid session ID"})
    if not eye_data:
        return jsonify({"status": "declined", "error": "No data received"})
    cor_x = eye_data.get("x", None)
    cor_y = eye_data.get("y", None)
    timestamp = eye_data.get("timestamp", None)
    if cor_x == None or cor_y == None or timestamp== None:
        return jsonify({"status": "declined", "error": "not all values were given"})
    else:
        all_IDS[session].append(eye_data)
        return jsonify({"session":f"{session}", "status": f"accepted data input at time {timestamp}"})

@app.route("/get-eye-data/<session_id>", methods=["GET"])
def get_eye_data(session_id):
    # Why using request.get_json() here? that is for POST requests
    # You already have the session_id as a parameter in the req url itself simply
    # extract_from = request.get_json()
    # session_id = extract_from.get("session_id")

    #TODO: remove if you dont want to create session if it does not exist
    all_IDS[session_id] = all_IDS.get(session_id, [])

    if session_id not in all_IDS:
        return jsonify({"error": "Invalid session ID"})
    return jsonify(all_IDS[session_id])
    

if __name__ == "__main__":
    app.run(host='0.0.0.0',debug=True, port=BACKEND_PORT)
