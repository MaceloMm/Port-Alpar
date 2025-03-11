document.getElementById('hamburger').addEventListener('click', () =>{
    const op = document.getElementById('options');

    if (op.classList.contains('hidden')){
        op.classList.remove('hidden');
    }else{
        op.classList.add('hidden');
    }
    
})