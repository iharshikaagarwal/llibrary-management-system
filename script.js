document.addEventListener("DOMContentLoaded", function () {
    const bookList = document.getElementById("book-list");
    const bookForm = document.getElementById("book-form");

    bookForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const titleInput = document.getElementById("title");
        const authorInput = document.getElementById("author");

        const title = titleInput.value;
        const author = authorInput.value;

        if (title === "" || author === "") {
            alert("Please fill in both title and author.");
            return;
        }

        // Create a new list item for the book
        const listItem = document.createElement("li");
        listItem.textContent = `${title} by ${author}`;
        bookList.appendChild(listItem);

        // Clear the input fields
        titleInput.value = "";
        authorInput.value = "";
    });
});
