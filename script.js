"use strict";
const burger = document.querySelector(".burger");
const menuList = document.querySelector(".menuList");


/////////////////////////////////BURGER MENU////////////////
burger.addEventListener('click', function () {
    burger.classList.toggle("change");
    menuList.classList.toggle("dontDisplay");
})
////////////LOGO SENDS TO HOMEPAGE///////////////
const smallLogo = document.querySelector("#smallLogo").addEventListener('click', function(){
window.location = '/';
})
