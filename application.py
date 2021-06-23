import os
import datetime
import json

from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session, jsonify
from flask_session import Session
from tempfile import mkdtemp
from werkzeug.exceptions import default_exceptions, HTTPException, InternalServerError
from werkzeug.security import check_password_hash, generate_password_hash

from helpers import apology, login_required, lookup, usd

# Configure application
app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True


# Ensure responses aren't cached
@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response


# Custom filter
app.jinja_env.filters["usd"] = usd

# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_FILE_DIR"] = mkdtemp()
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# Configure CS50 Library to use SQLite database
#db = SQL("sqlite:///darts_database.db")
db = SQL("postgres://rwprjxuswmxqsp:1f0c8376b3c156bf3be3bd551fb68872b4e1029932f0525c0dcfdb93e4f2c916@ec2-34-240-75-196.eu-west-1.compute.amazonaws.com:5432/d3k1ruoktr11a2")

@app.route("/", methods = ["GET", "POST"])
@login_required
def index():
    """Show portfolio of stocks"""
    """funds = db.execute("SELECT cash FROM users WHERE id = ?", session["user_id"])
    rows = db.execute("SELECT * FROM user_stocks WHERE id = ?", session["user_id"])
    cash = funds[0]['cash']
    current_value = {}
    stock_value = {}
    a = 0
    total = cash
    loops = len(rows)
    for row in rows:
        symbol = lookup(rows[a]['symbol'])
        current_value[a] = symbol['price']*rows[a]['quantity']
        stock_value[a] = symbol['price']
        total = total + current_value[a]
        a += 1
    return render_template('pie.html', rows=rows, cash=cash, current_value=current_value, stock_value=stock_value, loops=loops, total=total)"""

    if request.method == "POST":
        return apology("POST");
        score = request.form.get("score");

        db.execute("INSERT INTO user_stocks (id, quantity) VALUES (?,?)",
                    session["user_id"], score)
    return render_template("pie.html");

    """hit_location, hit_location_bed, dart_number, score_at_time_of_throwing, score_type, aim_location_bed, aim_location_score, darts_in_leg, darts_in_session, legs_in_session, legs_won_in_session, legs_lost_in_session, time_between_throwns, session_time, date, time) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                           session["user_id"], stock['name'], stock['symbol'], request.form.get("shares"), stock['price'], current_time, transaction)"""



@app.route("/login", methods=["GET", "POST"])
def login():
    """Log user in"""

    # Forget any user_id
    session.clear()

    # User reached route via POST (as by submitting a form via POST)
    if request.method == "POST":

        # Ensure username was submitted
        if not request.form.get("username"):
            return apology("Must provide username", 403)

        # Ensure password was submitted
        elif not request.form.get("password"):
            return apology("Must provide password", 403)

        # Query database for username
        rows = db.execute("SELECT * FROM users WHERE username = ?", request.form.get("username"))

        # Ensure username exists and password is correct
        if len(rows) != 1 or not check_password_hash(rows[0]["hash"], request.form.get("password")):
            return apology("Invalid username and/or password", 403)

        # Remember which user has logged in
        session["user_id"] = rows[0]["id"]

        # Redirect user to home page
        return redirect("/")

    # User reached route via GET (as by clicking a link or via redirect)
    else:
        return render_template("login.html")


@app.route("/logout")
def logout():
    """Log user out"""

    # Forget any user_id
    session.clear()

    # Redirect user to login form
    return redirect("/")



@app.route("/register", methods=["GET", "POST"])
def register():
    """Register user"""
    if request.method == "POST":
        # Ensure username was submitted
        if not request.form.get("username"):
            return apology("Must provide username")

        # Ensure password was submitted
        if not request.form.get("password"):
            return apology("Must provide password")

        # Ensure confirmation password was submitted
        elif not request.form.get("confirmation"):
            return apology("Must confirm password")

        rows = db.execute("SELECT * FROM users WHERE username = ?", request.form.get("username"))
        if len(rows) == 1:
            return apology("The username '" + request.form.get("username") + "' is already taken")
        if request.form.get("password") != request.form.get("confirmation"):
            return apology("Passwords do not match")

        db.execute("INSERT INTO users (username, hash) VALUES (?,?)", request.form.get(
            "username"), generate_password_hash(request.form.get("password")))
        new_id = db.execute("SELECT id FROM users WHERE username = ?", request.form.get("username"))
        db.execute("INSERT INTO settings (id, aim_preferred_target, colour_theme, dart_board_buttons) VALUES (?,?,?,?)",
                    int(new_id[0]["id"]), "T20", 0, 0)
        return render_template("registered.html")
    else:
        return render_template("register.html")


@app.route("/password_change", methods=["GET", "POST"])
@login_required
def password_change():
    if request.method == "POST":
        if not request.form.get('old_password'):
            return apology("Type in your old password")
        if not request.form.get('password'):
            return apology("Type in a new password")
        if not request.form.get('confirmation'):
            return apology("Confirm your password")
        rows = db.execute("SELECT * FROM users WHERE id = ?", session["user_id"])
        if not check_password_hash(rows[0]["hash"], request.form.get("old_password")):
            return apology("Invalid password")
        if request.form.get("password") != request.form.get("confirmation"):
            return apology("New passwords do not match")
        db.execute("UPDATE users SET hash = ? WHERE id = ?", generate_password_hash(
            request.form.get("password")), session["user_id"])
        return redirect("/")
    else:
        return render_template("password_change.html")


# AJAX for single darts

@app.route('/hello', methods=['GET', 'POST'])
def hello():

    # POST request
    if request.method == 'POST':
        print('Incoming..')
        print(request.get_json())  # parse as JSON
        x = request.get_json()
        print(x['dart_database_1'])
        db.execute("INSERT INTO data (id, score, hit_location, hit_location_bed, dart_number, score_at_time_of_throwing, score_type, darts_in_leg, darts_in_session, date, time, aim_location_bed) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
                    session["user_id"], x['dart_database_1']['score'], x['dart_database_1']['hit_location'], x['dart_database_1']['hit_location_bed'], x['dart_database_1']['dart_number_in_throw'], x['dart_database_1']['score_at_time_of_throwing'], x['dart_database_1']['score_type'], x['dart_database_1']['darts_in_leg'], x['dart_database_1']['darts_in_session'], x['dart_database_1']['session_date'], x['dart_database_1']['session_time'],x['dart_database_1']['aim_location_bed'])

        db.execute("INSERT INTO data (id, score, hit_location, hit_location_bed, dart_number, score_at_time_of_throwing, score_type, darts_in_leg, darts_in_session, date, time, aim_location_bed) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
                    session["user_id"], x['dart_database_2']['score'], x['dart_database_2']['hit_location'], x['dart_database_2']['hit_location_bed'], x['dart_database_2']['dart_number_in_throw'], x['dart_database_2']['score_at_time_of_throwing'], x['dart_database_2']['score_type'], x['dart_database_2']['darts_in_leg'], x['dart_database_2']['darts_in_session'], x['dart_database_2']['session_date'], x['dart_database_2']['session_time'],x['dart_database_2']['aim_location_bed'])

        db.execute("INSERT INTO data (id, score, hit_location, hit_location_bed, dart_number, score_at_time_of_throwing, score_type, darts_in_leg, darts_in_session, date, time, aim_location_bed) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
                    session["user_id"], x['dart_database_3']['score'], x['dart_database_3']['hit_location'], x['dart_database_3']['hit_location_bed'], x['dart_database_3']['dart_number_in_throw'], x['dart_database_3']['score_at_time_of_throwing'], x['dart_database_3']['score_type'], x['dart_database_3']['darts_in_leg'], x['dart_database_3']['darts_in_session'], x['dart_database_3']['session_date'], x['dart_database_3']['session_time'],x['dart_database_3']['aim_location_bed'])
        print("THAT WORKED")
        return 'OK', 200

    # GET request
    else:
        data_to_send = db.execute("SELECT * FROM data WHERE id = ?", session["user_id"])


        return jsonify(data_to_send)  # serialize and use JSON headers


# AJAX for settings
@app.route('/settings', methods=['GET', 'POST'])
def settings():

    # POST request
    if request.method == 'POST':
        print('Incoming..')
        print(request.get_json())  # parse as JSON
        settings = request.get_json()
        db.execute("UPDATE settings SET aim_preferred_target = ? WHERE id = ?", settings["new_settings"]['aim_preferred_target'], session["user_id"])
        print("THAT WORKED")
        return 'OK', 200

    # GET request
    else:
        data_to_send = db.execute("SELECT * FROM settings WHERE id = ?", session["user_id"])
        return jsonify(data_to_send)  # serialize and use JSON headers


def errorhandler(e):
    """Handle error"""
    if not isinstance(e, HTTPException):
        e = InternalServerError()
    return apology(e.name, e.code)


# Listen for errors
for code in default_exceptions:
    app.errorhandler(code)(errorhandler)
