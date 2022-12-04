function check() {
    let fname = document.getElementById('Fname').value;
    let lname = document.getElementById('Lname').value;
    let mail = document.getElementById('Email').value;
    let message = document.getElementById('message').value;
    let modaltitle = document.getElementById('ModalLabel');
    let modalbody = document.querySelector('.modal-body');

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mail == "" || fname == "" || lname == "" || message == "") {
        modaltitle.innerText = 'Something is wrong';
        modaltitle.style.color = "red";
        modalbody.innerText = `you didn't fill all fields.`;
    } else if (!mail.match(validRegex)) {
        modaltitle.innerText = 'Something is wrong';
        modaltitle.style.color = "red";
        modalbody.innerText = `The email address you enterd is wrong.`;
    } else {
        modaltitle.innerText = 'Message sent succsfully! ';
        modaltitle.style.color = "green";
        modalbody.innerText = `We Got your Message, Thank You For Your Time.`;
    }

}