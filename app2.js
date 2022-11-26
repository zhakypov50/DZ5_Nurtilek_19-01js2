const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabContent = document.querySelectorAll(".tabcontent");

console.log(tabsParent);

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none";
    });
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active");
    });
};


const showTabContent = (i = 3) => {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
};

hideTabContent();
showTabContent();

tabsParent.addEventListener("click", (event) => {
    const target = event.target;
    console.log(target);
    if (target.classList.contains("tabheader__item")) {
        tabs.forEach((item, i) => {
            if (target === item) {
                console.log(i);
                hideTabContent();
                showTabContent(i);
            }
        });
    }
});

const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".btn_white");
const closeModalBtn = document.querySelector(".modal__close");

onscroll = function () {
    onscroll = function(){
        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        if(window.scrollY >= scrollHeight - innerHeight) openModal();
    };
};

const openModal = () => {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
};

modalTrigger.addEventListener("click", openModal);

const closeModal = () => {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
};

closeModalBtn.addEventListener("click", closeModal);

// let slideIndex = 1;
// showSlides(slideIndex);
//
// let tabcontet = document.querySelectorAll(".tabcontent");
// let tabcontent__descr = document.querySelectorAll(".tabcontent__descr");
//
// tabcontet.addEventListener ("click", function () {
//     showSlides(slideIndex += 1);
// });
//
// tabcontent__descr.addEventListener ("click", function () {
//     showSlides(slideIndex -= 1);
// });
//
// setInterval(
//     function showSlides(n) {
//         let slides = document.querySelectorAll(".tabcontent");
//         if (n > slides.length) {
//             slideIndex = 1;
//         }
//         if (n < 1) {
//             slideIndex = slides.length;
//         }
//         for (let slide of slides) {
//             slide.style.display = "none";
//         }
//         slides[slideIndex - 1].style.display = "flex";
//     }, 4000);
//
// showTabContent()


//////////// task with MAMP
const forms = document.querySelectorAll("form");

const postData = (form) => {
    form.addEventListener("submit", (e) => {
        console.log("123")
        e.preventDefault()

        const req = new XMLHttpRequest()
        req.open("POST", "server.php")
        req.setRequestHeader("Content-type", "application/json")

        const formData = new FormData(form)
        const obj = {}

        formData.forEach((item, name) => {
            obj[name] = item
        })

        const json = JSON.stringify(obj);

        req.send(json)
    })
}
    forms.forEach((item) => {
        postData(item)
    })