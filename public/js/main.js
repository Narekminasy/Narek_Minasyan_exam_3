console.log('main');

const logoutbtn = document.getElementById('logout');
const sendmessagebtn = document.getElementById('sendmessage');
const h1Onebtn = document.getElementById('h1One');
const filmsbtn = document.getElementById('fils');
const myFilmsbtn = document.getElementById('myFilms');


if (logoutbtn) {
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
            h1Onebtn.style.height = 'auto';
            h1Onebtn.style.minHeight = '200px';
            h1Onebtn.style.padding = '20px';
            h1Onebtn.style.boxSizing = 'border-box';

            h1Onebtn.style.display = 'flex';
            h1Onebtn.style.flexDirection = 'column';
            h1Onebtn.style.gap = '15px';

            h1Onebtn.textContent = "";

            const formRow = document.createElement('div');
            formRow.style.display = 'flex';
            formRow.style.width = '100%';
            formRow.style.gap = '10px';

            const newInput = document.createElement('input');
            newInput.type = 'text';
            newInput.placeholder = 'Write a messager';
            newInput.style.padding = '8px';
            newInput.style.flexGrow = '1';

            const newBtn = document.createElement('button');
            newBtn.textContent = 'Send';
            newBtn.style.padding = '8px 15px';

            formRow.appendChild(newInput);
            formRow.appendChild(newBtn);
            h1Onebtn.appendChild(formRow);

            const textList = document.createElement('div');
            textList.style.width = '100%';
            textList.style.display = 'flex';
            textList.style.flexDirection = 'column';
            textList.style.gap = '8px';
            h1Onebtn.appendChild(textList);

            newBtn.addEventListener('click', (event) => {
                event.preventDefault();

                if (newInput.value.trim() !== "") {
                    const messageText = document.createElement('p');
                    messageText.textContent = newInput.value;
                    messageText.style.color = 'white';
                    messageText.style.margin = '0';
                    messageText.style.fontSize = '16px';

                    textList.appendChild(messageText);
                    newInput.value = "";
                }
            });
        }
    });
}
//?
if (myFilmsbtn) {
    myFilmsbtn.addEventListener('click', (e) => {
        alert('not createdd');
    })
}
//?
if (filmsbtn) {
    filmsbtn.addEventListener('click', (e) => {
        alert('not created');
    })

}