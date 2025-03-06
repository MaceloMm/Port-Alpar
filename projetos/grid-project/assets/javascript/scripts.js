document.getElementById("menu").addEventListener('click', () => {
    const corpo = document.getElementById('corpo');

    if (corpo.classList.contains('hide')){
        corpo.classList.remove('hide')
    }else{
        corpo.classList.add('hide')
    }
})

