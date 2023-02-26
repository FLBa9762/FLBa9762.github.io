let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active-search');
    loginForm.classList.remove("active-login");     //切换时关闭其他弹出窗口
    navbar.classList.remove("active-nav");
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active-login');
    searchForm.classList.remove("active-search");
    navbar.classList.remove("active-nav");
}

let navbar = document.querySelector('.nav-bar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active-nav');
    searchForm.classList.remove("active-search");
    loginForm.classList.remove("active-login");
}

window.onscroll = () =>{
    searchForm.classList.remove("active-search");
    loginForm.classList.remove("active-login");
    navbar.classList.remove("active-nav");
}

