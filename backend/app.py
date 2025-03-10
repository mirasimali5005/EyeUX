from flask import Flask, request, render_template


app = Flask(__name__)

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

app.route("/eye-track", methods=["POST"])
def eye_track():
    pass

if __name__ == "__main__":
    app.run(debug=True)
