/* -- Section -- */
function openSection(id) {
  document.querySelectorAll('section')
    .forEach(section => {
      section.classList.remove('active');
    });
  document.getElementById(id)
    .classList.add('active');
}
/* -- --------- -- */

/* -- Animations -- */
const fadeOut = () => {
    const loaderWraper =
    document.querySelector('.wrapper');
    loaderWraper.classList.add('fade');
}
window.addEventListener('load', fadeOut);
/* -- ----------- -- */

/* -- About Page Popup -- */
const popup = document.getElementById('aboutPage');
const btnOpen = document.getElementById('btnOpenAbout');
const btnClose = document.getElementById('btnCloseAbout');

btnOpen.addEventListener('click', () => {
    popup.showModal();

    setTimeout(() => {
        popup.classList.add('show');
    }, 10);
});

btnClose.addEventListener('click', () => {
    popup.classList.remove('show');
    popup.classList.add('hide');

    setTimeout(() => {
        popup.close();
        popup.classList.remove('hide');
    }, 300);
});
/* -- --------------- -- */

/* -- Contact Page Popup -- */
const popupC = document.getElementById('contactPage');
const btnOpenContact = document.getElementById('btnOpenContact');
const btnCloseContact = document.getElementById('btnCloseContact');

btnOpenContact.addEventListener('click', () => {
    popupC.showModal();

    setTimeout(() => {
        popupC.classList.add('show');
    }, 10);
});

btnCloseContact.addEventListener('click', () => {
    popupC.classList.remove('show');
    popupC.classList.add('hide');

    setTimeout(() => {
        popupC.close();
        popupC.classList.remove('hide');
    }, 300);
});
/* -- --------------- -- */