console.log('main');

const logoutbtn = document.getElementById('logout');

if(logoutbtn){
    logoutbtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.cookie = "usertoken=; Max-Age=0; path=/";
        window.location.href = "/login";
    })
}