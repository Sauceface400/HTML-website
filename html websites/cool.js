const togglebtn = document.getElementsByClassName('toggleBtn')[0];
const navbarlink = document.getElementsByClassName('nav-link')[0];

togglebtn.addEventListener('click', () => {
    navbarlink.classList.toggle('active')
});