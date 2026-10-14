/* -- Section -- */
function openSection(id, smooth = true) {
  const target = document.getElementById(id);
  if (!target) return;

  document.querySelectorAll('section')
    .forEach(section => {
      section.classList.remove('active');
    });
  target.classList.add('active');

  // Direct link to the section (site-address/#design)
  history.replaceState(null, '', '#' + id);
  target.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
}

// Opening the site with #design or #animation shows that section
const startSection = location.hash.slice(1);
if (startSection === 'design' || startSection === 'animation') {
  openSection(startSection, false);
}
/* -- --------- -- */

/* -- Page Animation -- */
// Hide the loader as soon as the page is ready, without waiting for every image
const fadeOut = () => {
    const loaderWraper =
    document.querySelector('.wrapper');
    loaderWraper.classList.add('fade');
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fadeOut);
} else {
    fadeOut();
}
/* -- ----------- -- */

/* -- Popups -- */
function openDialog(dialog) {
    dialog.showModal();

    setTimeout(() => {
        dialog.classList.add('show');
    }, 10);
}

function closeDialog(dialog) {
    dialog.classList.remove('show');
    dialog.classList.add('hide');

    setTimeout(() => {
        dialog.close();
        dialog.classList.remove('hide');
    }, 300);
}

function setupDialog(dialogId, openId, closeId) {
    const dialog = document.getElementById(dialogId);

    document.getElementById(openId).addEventListener('click', () => openDialog(dialog));
    document.getElementById(closeId).addEventListener('click', () => closeDialog(dialog));

    // Esc uses the same fade-out as the Close button
    dialog.addEventListener('cancel', (event) => {
        event.preventDefault();
        closeDialog(dialog);
    });

    // Clicking outside the white box closes the popup
    dialog.addEventListener('click', (event) => {
        if (event.target === dialog) closeDialog(dialog);
    });
}

setupDialog('aboutPage', 'btnOpenAbout', 'btnCloseAbout');
setupDialog('contactPage', 'btnOpenContact', 'btnCloseContact');
/* -- ------ -- */
