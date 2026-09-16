const id = 'bcc1d980-5e32-4c51-bed4-00b7e3504d22'

let lib = [
    {
        "id": "bcc1d980-5e32-4c51-bed4-00b7e3504d22",
        "title": "eljlkr",
        "author": "me",
        "description": "j",
        "pages": "200",
        "read": false
    },
    {
        "id": "eed981c6-ba42-4686-bb4f-6b49ac94523e",
        "title": "er",
        "author": "mkhe",
        "description": "jff",
        "pages": "200",
        "read": false
    },
    {
        "id": "6dad6f7f-e11c-486f-8c0c-d77eaa204fdc",
        "title": "erwfw",
        "author": "meffwef",
        "description": "jffw",
        "pages": "22",
        "read": false
    }
]

lib = lib.filter(book =>
{
     book.id !== id
}
)

console.log(lib)