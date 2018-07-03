"use strict";
const burger = document.querySelector(".burger");
const menuList = document.querySelector(".menuList");
const mq = window.matchMedia("(max-width: 1100px)");

///////CHECK THE SIZE AND REFRESH TO BREAKPOINT IF RESIZED
window.addEventListener('resize', checkSize)
function checkSize() {
    if (window.innerWidth > 1100) {
        window.removeEventListener('resize', checkSize)
        switchPages();
       console.log("resized")
    }
}
function switchPages(){
   if(window.location.href !== 'index.html'){
       window.location.href='index.html'
   }
}
/*function checkSize() {
    if (window.innerWidth > 1100) {
        window.removeEventListener('resize', checkSize)
        sendToDesktop();

    }
}
function sendToDesktop(){
    window.location.href="index.html"
}*/
/////////////////////////////////BURGER MENU////////////////
if (window.location.pathname !== '/index.html' && mq.matches) {
    burger.addEventListener('click', function () {
        burger.classList.toggle("change");
        menuList.classList.toggle("dontDisplay");
    });

    ////////////LOGO SENDS TO HOMEPAGE///////////////
    const smallLogo = document.querySelector("#smallLogo").addEventListener('click', function () {
        window.location = 'index.html';
    });
    ////////////NAVIGATION IN BURGER MENU///////////////
    const apieMus = document.querySelector(".apie").addEventListener('click', function () {
        window.location = 'apie.html';
    });
    const kontaktai = document.querySelector(".kontaktai").addEventListener('click', function () {
        window.location = 'kontaktai.html';
    });
    const dirbameSu = document.querySelector(".dirbameSu").addEventListener('click', function () {
        window.location = 'dirbame-su.html';
    });
}
////////////NAVIGATION TO OTHER SITES IN DIRBAME SU WHEN CLICKED COMPANY LOGOS///////////////
if (window.location.href.includes("dirbame-su")) {
    const danfoss = document.querySelector(".Danfoss").addEventListener('click', function () {
        window.open('http://www.danfoss.lt/home/#/');
    })
    const isover = document.querySelector(".Isover").addEventListener('click', function () {
        window.open('https://www.isover.lt/');
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
