// responsive navbar  //
const navbar = document.querySelector('.custum-navbar');
window.addEventListener('scroll', () => {
    if (pageYOffset >= 50) {
        navbar.classList.add('changecolor');
    } else {
        navbar.classList.remove('changecolor');

    }
})

// humbergur navbar
const bars = document.querySelector('.hbar');
const navhum = document.querySelector('.navul');

bars.addEventListener('click', () => {
    navhum.classList.toggle('active');
    let firstele = bars.firstElementChild;
    if (navhum.classList.contains('active')) {
        firstele.classList.replace('fa-bars', 'fa-xmark');
    } else {
        firstele.classList.replace('fa-xmark', 'fa-bars');

    }
})



// ==================typewriter============//
const typetext = document.querySelector('.auto-txt');
let textContent = ['WEB DEVELOPER !', 'MERN STACK WEB DEVELOPER !', 'LEARNER !'];
let textIndex = 0;
let chrtIndex = 0;
const text = () => {
    let currentText = textContent[textIndex];
    typetext.innerText = currentText.slice(0, chrtIndex++);
    if (chrtIndex <= currentText.length) {
        setTimeout(text, 100)
    } else {
        chrtIndex = 0;
        textIndex = (textIndex + 1) % textContent.length;
        setTimeout(text, 1000);

    }
}
text();


// make tab content in about section  \\
let tabcontents = document.querySelectorAll('.tab-contents');
let tablinks = document.querySelectorAll('.tab-links');
function opentab(id) {
    for (let i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove('active-tab');
    }
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active-links');
    }

    event.currentTarget.classList.add('active-links');
    document.getElementById(id).classList.add('active-tab');
}


// load protofolio //
let ldbtn = document.getElementById('ldbtn');
let work = document.querySelectorAll('.work');
window.onload = () => {
    Loader();
}
let count = 2;
function Loader() {
    for (let i = 0; i < work.length; i++) {
        if (i < count) {
            work[i].style.display = "block";

        } else {
            work[i].style.display = "none";

        }
    }
}

//click on loader button
ldbtn.addEventListener('click', () => {
    let load = count;
    setTimeout(() => {
        ldbtn.innerText = "Loading.."
    }, 0);
    setTimeout(() => {
        ldbtn.innerText = "See More"
    }, 1000);

    for (let i = load; i < work.length; i++) {
        setTimeout(() => {
            // ldbtn.innerText = "Loading.."
            work[i].style.display = "block";

        }, 1000)
        if (i === load + 1) {

            break;
        }


    }

    count = count + 2;
    if (work.length == count) {
        setTimeout(() => {
            ldbtn.style.display = "none";

        }, 1000)
    }




});

// hire button //
let hirebtn = document.querySelector('.btnhire');
hirebtn.addEventListener('click', () => {
    hirebtn.classList.add('border');
})
window.addEventListener('mouseup', (e) => {
    hirebtn.classList.remove('border');

})



// preloder


let parentloader = document.getElementById('preloader');
let loaderautoText = document.querySelector('.preloader-autotext');
let preloadetTextIndex = ['welcome to vikash protofolio'];
let loaderchrtIndex = 0;
let loadertextIndex = 0;
let preLoader = () => {
    let currentLoadetext = preloadetTextIndex[loadertextIndex];
    loaderautoText.innerHTML = currentLoadetext.slice(0, loaderchrtIndex++);
    if (loaderchrtIndex <= currentLoadetext.length) {
        setTimeout(preLoader, 80);
    }
}
preLoader();

window.addEventListener("load", () => {
    parentloader.style.display = "none"
})
