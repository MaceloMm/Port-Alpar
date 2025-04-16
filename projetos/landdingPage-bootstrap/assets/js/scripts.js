document.getElementById("sendButtdonContact").addEventListener('click', () => {
    const nameContact = document.querySelector("#contactForm #nameContant").value;
    const emailContact = document.querySelector("#contactForm #emailContact").value;
    const assuntoContact = document.querySelector("#contactForm #assuntoContact").value;
    const messagemContact = document.querySelector("#contactForm #messagemForm").value;
    const alertForm = document.getElementById("alertForm");

    if (nameContact == '' || emailContact == ''){
        alertForm.classList.remove('d-none')
        alertForm.classList.remove('alert-sucess');
        alertForm.classList.add('alert-danger');
        alertForm.innerHTML = `Favor preencher o nome e o email!`;
    }else{
        alertForm.classList.remove('d-none')
        alertForm.classList.remove('alert-danger');
        alertForm.classList.add('alert-success');
        alertForm.innerHTML = `Recebemos seu contato ${nameContact} em breve retornaremos!`;
    }

    setTimeout(() => {
        document.getElementById("contactForm").reset();
        alertForm.classList.add('d-none');
    }, 5000)
})

document.getElementById("resetButtonContact").addEventListener('click', () => {
    const alertForm = document.getElementById("alertForm");

    alertForm.classList.add('d-none');
})
