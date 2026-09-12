# 📚 Library

A simple book-tracking app built with vanilla JavaScript as part of **The Odin Project — Node Path JavaScript: Library**.

---

## 📖 About

**Library** is a small web app that lets you keep track of the books you own and whether you've read them. You can add books, remove them, and toggle their read status — all without a page refresh.

The project is intentionally built with **plain HTML, CSS, and JavaScript** to practice core concepts like object constructors, prototypes, array manipulation, DOM rendering, and event handling.

---

## ✨ Features

- ➕ **Add a book** — fill in title, author, number of pages, and read status.
- 🗑️ **Remove a book** — delete any book from your library.
- 🔄 **Toggle read status** — mark a book as read or unread at any time.
- 🆔 **Unique IDs** — every book gets a unique ID via `crypto.randomUUID()`.
- 🧩 **Clean data/UI separation** — the array is the source of truth; the DOM is always re-rendered from it.

---

## 🛠️ Built With

| Technology | Purpose |
|------------|---------|
| HTML5 | Structure |
| CSS3 | Styling |
| JavaScript (ES6+) | Logic, DOM manipulation, data handling |

No frameworks. No libraries. Just vanilla JS.

---

## 📂 Project Structure

```
library/
├── index.html      # Markup and container elements
├── style.css       # Layout and styling
└── script.js       # All app logic
```

---

## 🧠 How It Works

### 1. The Book Constructor

Each book is an object created from a `Book` constructor:

```javascript
function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
```

A prototype method flips the read status:

```javascript
Book.prototype.toggleRead = function () {
  this.read = !this.read;
};
```

### 2. The Library Array

All books live in a single array — the app's source of truth:

```javascript
let myLibrary = [];
```

Every change (add, remove, toggle) is made to this array **first**, then the UI is re-rendered.

### 3. Adding a Book

```javascript
function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}
```

### 4. Rendering the Library

The `displayBooks()` function:

1. Clears the container with `container.replaceChildren()`.
2. Loops through `myLibrary`.
3. Builds a card for each book and appends it to the DOM.

Each card contains:

- The book's title, author, and page count.
- A **Toggle Read** button (`data-id` = book's id).
- A **Remove** button (`data-id` = book's id).

### 5. The Form

- The **"New Book"** button opens a form.
- On submit:
  - `event.preventDefault()` stops the default behaviour.
  - A new book is created and added to the array.
  - The form resets and the library re-renders.

---

## 🚀 Getting Started

1. Clone or download the repository.
2. Open `index.html` in any modern browser.
3. Start adding books to your library.

No installation, no build step, no dependencies.

---

## 🎯 Concepts Practiced

- Object constructors and prototypes
- Storing objects in arrays and manipulating them
- Separating **state** (data) from **view** (DOM)
- Event delegation with `data-*` attributes
- Form handling with `preventDefault()`
- Re-rendering the UI from state on every change

---

## 📌 Notes

- This version covers the **main tasks only** — no `localStorage` or other persistence.
- Refreshing the page resets the library back to its initial state.

---

## 🙌 Acknowledgements

Project spec from **The Odin Project** — [Library lesson](https://www.theodinproject.com/lessons/node-path-javascript-library).