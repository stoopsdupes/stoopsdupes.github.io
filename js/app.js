function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

const form = document.querySelector("form"),
statusTxt = form.querySelector(".buttonholder span"),
contactbutton = form.querySelector(".button");

form.onsubmit = (e)=>{
    e.preventDefault();
    statusTxt.style.display = 'block';
    contactbutton.style.display = 'none';
}