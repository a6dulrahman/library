// library

const myLibrary = []

const Book = function (title, author, description, pages, read)
{
    if (!new.target)
    {
        throw new Error('Can\'t create a new object without `new` keyword!')
    }

    this.id = crypto.randomUUID()
    this.title = title
    this.author = author
    this.description = description
    this.pages = pages
    this.read = read
}

Book.prototype.toggleRead = function ()
{
    this.read = !this.read
}

const addBook = function (title, author, description, pages)
{
    const newBook = new Book(title, author, description, pages, false)
    myLibrary.push(newBook)
    return newBook
}


const displayBooks = function (library)
{
    library.forEach(book =>
    {
        if (book.read === false)
        {
            const card = document.createElement('div')
            card.classList.add('book')

            const div = document.createElement('div')
            const title = document.createElement('h3')
            title.textContent = book.title
            const author = document.createElement('p')
            author.textContent = book.author
            const desc = document.createElement('p')
            desc.textContent = book.description
            const pages = document.createElement('p')
            pages.textContent = book.pages

            div.append(title, author, desc, pages)

            card.appendChild(div)

            const btns = document.createElement('div')
            btns.classList.add('btns')

            const readBtn = document.createElement('button')
            readBtn.textContent = 'read'
            readBtn.classList.add('status')
            readBtn.dataset.id = `${book.id}`


            btns.appendChild(readBtn)

            const delBtn = document.createElement('button')
            delBtn.textContent = 'delete'
            delBtn.classList.add('del')
            btns.appendChild(delBtn)

            card.appendChild(btns)

            main.appendChild(card)

        }
    }
    )
}


const dialog = document.querySelector('dialog')
const addBtn = document.querySelector('#addBtn')
const main = document.querySelector('main')
const cancel = document.querySelector('#cancel')
const form = document.querySelector('form')


main.addEventListener('click', event =>
{
    if (event.target.classList.contains('del'))
    {
        event.target.parentElement.remove()
    } else if (event.target.classList.contains('status'))
    {
        myLibrary.forEach(book =>
        {
            if (book.id === event.target.dataset.id)
            {
                book.toggleRead()
            }
        });

        main.replaceChildren()
        displayBooks(myLibrary)

    }
})


// dialog.addEventListener('click')
addBtn.addEventListener('click', () =>
{
    dialog.showModal()
})

cancel.addEventListener('click', () =>
{
    dialog.close()
})

form.addEventListener('submit', (event) =>
{
    event.preventDefault()
    const form = event.target.elements

    addBook(form.title.value, form.author.value, form.description.value, form.pages.value)

    dialog.close()
    main.replaceChildren()
    displayBooks(myLibrary)
})


