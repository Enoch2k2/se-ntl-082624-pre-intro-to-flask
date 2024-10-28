from config import app, db
from models import *

if __name__ == "__main__":
  with app.app_context():
    print("Deleteing Data")
    Book.query.delete()

    print("Seeding Data")
    the_hobbit = Book(title="The Hobbit")
    secret_life_of_trees = Book(title="The Secret Life Of Trees")
    art_of_war = Book(title="Art of War")
    redwall = Book(title="Redwall")
    fourty_eight_laws = Book(title="48 Laws 😈")

    db.session.add_all([the_hobbit, secret_life_of_trees, art_of_war, redwall, fourty_eight_laws])
    db.session.commit()

    print("Done Seeding")
