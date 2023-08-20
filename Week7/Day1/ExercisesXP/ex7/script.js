let allBooks = [
    {
        title: "Extremely Loud & Incredibly Close",
        author: "Jonathan Safran Foer",
        image: "https://www.adlit.org/sites/default/files/styles/book_cover_desktop_large_1x/public/2021-06/extremely-loud-and-incredibly-close.jpg?itok=CvtDRd0t",
        alreadyRead: true,
    },
    {
        title: "Les Thanatonautes",
        author: "Bernard Werber",
        image: "https://www.livredepoche.com/sites/default/files/styles/manual_crop_269_435/public/images/livres/couv/9782253139225-001-T.jpeg?itok=bEQG2-l8",
        alreadyRead: false,
    },
];

for (book of allBooks) {
    // adding div
    bookDiv = document.createElement("div");
    bookSection = document.querySelector(".listBooks");
    bookSection.appendChild(bookDiv);

    // filling the div
    bookHeader = document.createElement("h3");
    bookHeader.innerText = `${book['title']} written by ${book['author']}`
    bookDiv.appendChild(bookHeader);

    bookImage = document.createElement("img");
    bookImage.src = book['image'];
    bookImage.width = "100";
    bookDiv.appendChild(bookImage);

    if (book['alreadyRead']) {
        bookDiv.style.backgroundColor = "red";
    }
}