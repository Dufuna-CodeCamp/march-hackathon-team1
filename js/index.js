const domElements = {
    navLink: document.querySelector('.mobile-links'),
    toggleButton: document.querySelector('.nav-link-toggle')
}

const displayNav = () => {
    domElements.navLink.classList.toggle('show');
    if(domElements.navLink.classList.contains('show')) {
        domElements.toggleButton.innerHTML = "X";
    }
    else {
        domElements.toggleButton.innerHTML = `
        <svg height="24" class="octicon octicon-three-bars" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path></svg>`;
    }
}

domElements.toggleButton.addEventListener('click', displayNav);