"use strict";
const burger = document.querySelector(".burger");
const menuList = document.querySelector(".menuList");
const mobile = window.matchMedia("(max-width: 1099px)");
const desktop = window.matchMedia("(min-width: 1100px)");
let inDesktopPage = false;
let inMobilePage = false;

///////CHECK THE SIZE AND REFRESH TO BREAKPOINT IF RESIZED
window.addEventListener('resize', refresh)
function refresh() {
    if (mobile.matches && inDesktopPage || desktop.matches && inMobilePage) {
        window.location.href="/";
    }
}
if(desktop.matches){
    inDesktopPage = true;
}
if(mobile.matches){
    inMobilePage = true;
}
/////////////////////////////////BURGER MENU////////////////
if (document.body.contains(burger) && mobile.matches) {
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
        window.location = 'apie';
    });
    const kontaktai = document.querySelector(".kontaktai").addEventListener('click', function () {
        window.location = 'kontaktai';
    });
    const dirbameSu = document.querySelector(".dirbameSu").addEventListener('click', function () {
        window.location = 'dirbame-su';
    });
}
////////////NAVIGATION TO OTHER SITES IN DIRBAME SU WHEN CLICKED COMPANY LOGOS///////////////
let dirbameSuContent = document.querySelector(".dirbameSuContent")
if(document.body.contains(dirbameSuContent)){
    const danfoss = document.querySelector(".Danfoss").addEventListener('click', function () {
        window.open('files/Danfoss kainynas_2018.pdf');
    })
    const isover = document.querySelector(".Isover").addEventListener('click', function () {
        window.open('files/TI_kainynas_2018kovas.pdf');
    })
    const oventrop = document.querySelector(".Oventrop").addEventListener('click', function () {
        window.open('https://www.oventrop.com/lt-LT');
    })
    const ibp = document.querySelector(".IBP").addEventListener('click', function () {
        window.open('http://www.ibpgroup.com/');
    })
    const reflex = document.querySelector(".Reflex").addEventListener('click', function () {
        window.open('http://www.reflex.de/en/');
    })
    const CG = document.querySelector(".CG").addEventListener('click', function () {
        window.open('http://www.cgcavaletto.com/');
    })
}
////////////ANIMATIONS FOR ROOF MOVEMENT AND PAGE SWITCH IN DESKTOP///////////////
const desktopNav = document.querySelectorAll("#desktopNav a");
const roofIcon = document.querySelector("#navRoof");
const contentApie = document.querySelector(".contentApie");
const contentKontaktai = document.querySelector(".contentKontaktai");
const contentDirbameSu = document.querySelector(".dirbameSuContent");
let mq1 = window.matchMedia("(max-width: 1411px)");
desktopNav.forEach(function (elem) {
    elem.addEventListener('click', function () {
        if (elem == desktopNav[0]) {
            /*desktopNav[0].style.color = "#D98C1A";*/
            contentDirbameSu.classList.add("dontDisplay");
            contentApie.classList.remove("dontDisplay");
            contentKontaktai.classList.add("dontDisplay");
            roofIcon.classList.add("animationToApieMus");
            roofIcon.addEventListener('animationend', function () {
                roofIcon.classList.remove("animationToApieMus");
                roofIcon.style.left = "100px";
                if (mq1.matches) {
                    roofIcon.style.left = "66px";
                }
            })
        }
        if (elem == desktopNav[1]) {
            contentDirbameSu.classList.add("dontDisplay");
            contentKontaktai.classList.remove("dontDisplay");
            contentApie.classList.add("dontDisplay");
            roofIcon.classList.add("animationToKontaktai");
            roofIcon.addEventListener('animationend', function () {
                roofIcon.classList.remove("animationToKontaktai");
                roofIcon.style.left = "435px";
                if (mq1.matches) {
                    roofIcon.style.left = "299px";
                }
            })
        }

        if (elem == desktopNav[2]) {
            contentDirbameSu.classList.remove("dontDisplay");
            contentKontaktai.classList.add("dontDisplay");
            contentApie.classList.add("dontDisplay");
            roofIcon.classList.add("animationToDirbameSu");
            roofIcon.addEventListener('animationend', function () {
                roofIcon.classList.remove("animationToDirbameSu");
                roofIcon.style.left = "768px";
                if (mq1.matches) {
                    roofIcon.style.left = "533px";
                }
            })
        }
    })
})
