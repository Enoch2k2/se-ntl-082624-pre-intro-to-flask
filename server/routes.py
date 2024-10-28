from flask import request
from config import api, db
from flask_restful import Resource
from models import Book

class BooksResource(Resource):
  def get(self):
    books = Book.query.all()
    return [book.to_dict() for book in books], 200
  
  def post(self):
    data = request.get_json()
    title = data.get('title')
    book = Book(title=title)
    db.session.add(book)
    db.session.commit()
    return book.to_dict(), 201



api.add_resource(BooksResource, "/api/books")

