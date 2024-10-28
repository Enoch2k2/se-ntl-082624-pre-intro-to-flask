import { useEffect, useState } from 'react'

function App() {
  const [books, setBooks] = useState([])
  const [title, setTitle] = useState("")

  useEffect(() => {
    fetch('http://localhost:5555/api/books')
      .then(resp => resp.json())
      .then(data => setBooks(data))
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()

    const bookData = { title }
    const options = {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bookData)
    }

    const resp = await fetch('http://localhost:5555/api/books', options)
    const bookJson = await resp.json()
    setBooks([...books, bookJson])
  }

  const bookLis = books.map(book => <li key={book.id}>{ book.title }</li>)

  return (
    <div>
      <h1>Booktopia</h1>
      <h3>Create Book</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label><br />
          <input type="text" name="title" id="title" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <br />
        <input type="submit" value="Create Book" />
      </form>

      <h3>List Books</h3>
      <ul>
        {bookLis}
      </ul>
    </div>
  )
}

export default App
