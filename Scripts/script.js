const count = 13;
const student = true;
let show = 5;
if (window.innerWidth < 800)
    show = 2;
const book_list_list = document.querySelectorAll(".books");
console.log(window.innerWidth);
// let itemWidth = 0.8 / show * window.innerWidth;

window.addEventListener("resize", function () {
    show = 5;
    if (window.innerWidth < 800)
        show = 2;
    // itemWidth = 0.8 / show * window.innerWidth;
    // this.document.querySelectorAll(".book_item").forEach(item => {
    //     item.querySelector("img").width = itemWidth;
    // });
});

if (student) {
    document.querySelector(".login").innerHTML = "Profile";
}

book_list_list.forEach(books => {
    books.innerWidth = Math.ceil(window.innerWidth) * 0.8;
    books.innerHTML = `
    <div class="book_container">
        <div class="book_list"></div>
        <button class="prev">&lt;</button>
        <button class="next">&gt;</button>
    </div>`;

    const book_list = books.querySelector(".book_list");
    //add test items
    for (let i = 1; i <= count; i++) {
        let a = document.createElement('a');
        a.load("book_card.html");
        while (a.children.length > 0) {
            book_list.appendChild(a.children[0]);
        }
    };

    const items = book_list.querySelectorAll(".book_item");
    const prev = books.querySelector(".prev");
    const next = books.querySelector(".next");

    let index = 0;
    next.addEventListener("click", function (e) {
        e.preventDefault();
        index = index + show;
        if (index == items.length - show) return;
        if (index > items.length - show) index = items.length - show;
        book_list.style.transform = "translateX(" + index * -(document.querySelector(".book_card").offsetWidth) + "px)";
        // prev_btn.classList.add("show");
        // if (track.offsetWidth - index * width < index * width) {
        //     next_btn.classList.add("hide");
        // }
    });
    prev.addEventListener("click", function () {
        index = index - show;
        if (index == 0) return;
        if (index < 0) index = 0;
        book_list.style.transform = "translateX(" + index * -(document.querySelector(".book_card").offsetWidth) + "px)";
        // next_btn.classList.remove("hide");
        // if (index === 0) {
        //     prev_btn.classList.remove("show");
        // }
    });
});

function itemOver(item) {
    if (window.innerWidth < 800) return;
    item.querySelector(".reserve").style.display = "block";
    item.querySelector(".details").style.display = "block";
    item.querySelector("img").style.opacity = 0.5;

    // item.style.boxShadow = "5px 5px";
}

function itemOut(item) {
    if (window.innerWidth < 800) return;
    item.querySelector(".reserve").style.display = "none";
    item.querySelector(".details").style.display = "none";
    item.querySelector("img").style.opacity = 1;

    // item.style.boxShadow = "none";
}

document.querySelector(".sidebar").addEventListener("click", function () {
    document.querySelector("#navbar").style.display = "flex";
    document.querySelector(".login").style.display = "flex";
    document.querySelector(".sidebar_cover").style.display = "block";
})

document.querySelector(".sidebar_cover").addEventListener("click", function () {
    document.querySelector("#navbar").style.display = "none";
    document.querySelector(".login").style.display = "none";
    document.querySelector(".sidebar_cover").style.display = "none";
})