from flask import Flask, request, jsonify, session, redirect
from flask_cors import CORS
import mysql.connector
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = "supersecretkey123"

# Allow frontend (VS Code Live Server)
CORS(app, origins=["http://127.0.0.1:5500"])

# =========================
# DATABASE CONNECTION
# =========================
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Kiphire@2019",
    database="portfolio"
)

cursor = db.cursor()

# =========================
# HOME
# =========================
@app.route("/")
def home():
    return "Server is running 🚀"

# =========================
# REGISTER USER
# =========================
@app.route("/register", methods=["POST"])
def register():
    data = request.get_json()

    username = data["username"]
    password = generate_password_hash(data["password"])

    try:
        cursor.execute(
            "INSERT INTO users (username, password) VALUES (%s, %s)",
            (username, password)
        )
        db.commit()
        return jsonify({"message": "User registered successfully 🚀"})
    except:
        return jsonify({"message": "User already exists ❌"})

# =========================
# LOGIN USER
# =========================
@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()

    username = data["username"]
    password = data["password"]

    cursor.execute(
        "SELECT password FROM users WHERE username=%s",
        (username,)
    )
    user = cursor.fetchone()

    if user and check_password_hash(user[0], password):
        session["user"] = username
        return jsonify({"message": "Login successful 🚀"})
    else:
        return jsonify({"message": "Invalid credentials ❌"})

# =========================
# DASHBOARD (PROTECTED)
# =========================
@app.route("/dashboard")
def dashboard():
    if "user" in session:
        return jsonify({
            "message": f"Welcome {session['user']} 🚀",
            "status": "logged_in"
        })
    return jsonify({"message": "Unauthorized ❌"}), 401

# =========================
# LOGOUT
# =========================
@app.route("/logout")
def logout():
    session.pop("user", None)
    return jsonify({"message": "Logged out successfully"})

# =========================
# CONTACT FORM API
# =========================
@app.route("/contact", methods=["POST"])
def contact():
    data = request.get_json()

    name = data["name"]
    email = data["email"]
    message = data["message"]

    print("📩 New Contact Message")
    print("Name:", name)
    print("Email:", email)
    print("Message:", message)

    return jsonify({"message": "Message received successfully ✅"})

# =========================
# RUN SERVER
# =========================
if __name__ == "__main__":
    app.run(debug=True)