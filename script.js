"use strict";
const burger = document.querySelector(".burger");
const menuList = document.querySelector(".menuList");

/////////////////////////////////BURGER MENU////////////////
burger.addEventListener('click', function () {
    burger.classList.toggle("change");
    menuList.classList.toggle("dontDisplay");
});
////////////LOGO SENDS TO HOMEPAGE///////////////
const smallLogo = document.querySelector("#smallLogo").addEventListener('click', function () {
    window.location = '/';
});
////////////NAVIGATION IN BURGER MENU///////////////
const apieMus = document.querySelector(".apie").addEventListener('click', function () {
    window.location = '/apie.html';
});
const kontaktai = document.querySelector(".kontaktai").addEventListener('click', function () {
    window.location = '/kontaktai.html';
});
const dirbameSu = document.querySelector(".dirbameSu").addEventListener('click', function () {
    window.location = '/dirbame-su.html';
});
////////////NAVIGATION IN DIRBAME SU WHEN CLICKED COMPANY LOGOS///////////////
const danfoss = document.querySelector("#Danfoss").addEventListener('click', function () {
    window.open('http://www.danfoss.lt/home/#/');
})
const isover = document.querySelector("#Isover").addEventListener('click', function () {
    window.open('https://www.isover.lt/');
})
const oventrop = document.querySelector("#Oventrop").addEventListener('click', function () {
    window.open('https://www.oventrop.com/lt-LT');
})
const ibp = document.querySelector("#IBP").addEventListener('click', function () {
    window.open('http://www.ibpgroup.com/');
})
const reflex = document.querySelector("#Reflex").addEventListener('click', function () {
    window.open('http://www.reflex.de/en/');
})
