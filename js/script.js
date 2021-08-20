let header = document.querySelector('header');
var header_height = header.clientHeight;
let js_container = document.querySelector('.js-container');
header.style.height = js_container.clientHeight + 150;
console.log(header_height);
window.addEventListener('resize', function () {

    header.style.height = js_container.clientHeight + 150;
    console.log(header.clientHeight);

});

let modal = document.querySelector('.modal-planos');
let button_modal = document.querySelector('.close-btn');
let open_modal = document.querySelectorAll('#myBtn');
console.log(open_modal);

button_modal.addEventListener('click', function () {
    modal.style.display = 'none';
})


open_modal.forEach(function (item) {
    item.addEventListener('click', function () {
        modal.style.display = 'flex';
    })
});

const linksMenu = document.querySelector('.menu-mobile');
const menuHamburguer = document.querySelector('.hamburguer');
menuHamburguer.addEventListener('click', function () {
    if (linksMenu.style.display == "none")
        linksMenu.style.display = "flex";
    else linksMenu.style.display = "none";
});