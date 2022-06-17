const books_html = `
<div class="book_view">
    <div class="book_list"></div>
</div>
<button class="prev">&lt;</button>
<button class="next">&gt;</button>`;
const book_card_html = `
<div class="book_card">
    <a href="#" class="book_item">
        <div class="cover">
            <img src="../Resources/Placeholder.png">
            <button class="reserve">RESERVE</button>
            <button class="details">DETAILS</button>
        </div>
        <div class="info">
            Title: Title<br>
            Author: Author<br>
        </div>
    </a>
</div>`;

const count = 13;
const student = true;
let show = 5;
if (window.innerWidth < 800)
    show = 2;
const all_books = document.querySelectorAll(".books");

window.addEventListener("resize", function () {
    show = 5;
    if (window.innerWidth < 800)
        show = 2;
});

all_books.forEach(books => {
    // books.innerWidth = Math.ceil(window.innerWidth) * 0.8;
    books.innerHTML = books_html;
    const book_list = books.querySelector(".book_list");
    //add test items
    for (let i = 1; i <= count; i++) {
        let card = document.createElement('a');
        card.innerHTML = book_card_html;
        while (card.children.length > 0) {
            book_list.appendChild(card.children[0]);
        }
    };

    const prev = books.querySelector(".prev");
    const next = books.querySelector(".next");
    let index = 0;
    next.addEventListener("click", function (e) {
        e.preventDefault();
        index = index + show;
        if (index == count - show) return;
        if (index > count - show) index = count - show;
        book_list.style.transform = "translateX(" + index * -(window.innerWidth * 0.8 / show) + "px)";
        // prev_btn.classList.add("show");
        // if (track.offsetWidth - index * width < index * width) {
        //     next_btn.classList.add("hide");
        // }
    });
    prev.addEventListener("click", function () {
        index = index - show;
        if (index == 0) return;
        if (index < 0) index = 0;
        book_list.style.transform = "translateX(" + index * -(window.innerWidth * 0.8 / show) + "px)";
        // next_btn.classList.remove("hide");
        // if (index === 0) {
        //     prev_btn.classList.remove("show");
        // }
    });
});