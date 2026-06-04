console.log('main');

const logoutbtn = document.getElementById('logout');
const sendmessagebtn = document.getElementById('sendmessage');
const h1Onebtn = document.getElementById('h1One');

if(logoutbtn){
    logoutbtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.cookie = "usertoken=; Max-Age=0; path=/";
        window.location.href = "/login";
        alert("Logged out");
    })
}

if (sendmessagebtn) {
    sendmessagebtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (h1Onebtn) {
            h1Onebtn.style.background = "black";
            h1Onebtn.style.width = '500px';
            h1Onebtn.style.height = '200px';
            h1Onebtn.style.padding = '20px';
            h1Onebtn.style.boxSizing = 'border-box';

            h1Onebtn.style.display = 'flex';
            h1Onebtn.style.gap = '10px';
            h1Onebtn.style.alignItems = 'center';

            h1Onebtn.textContent = "";

            const newInput = document.createElement('input');
            newInput.type = 'text';
            newInput.placeholder = 'send message';
            newInput.style.padding = '8px';
            newInput.style.flexGrow = '1';

            const newBtn = document.createElement('button');
            newBtn.textContent = 'Send';
            newBtn.style.padding = '8px 15px';
            newBtn.style.cursor = 'pointer';

            h1Onebtn.appendChild(newInput);
            h1Onebtn.appendChild(newBtn);
        }
    });
}

