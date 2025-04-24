class CentralDeLuzes{
    static instance;

    constructor(){
        if (CentralDeLuzes.instance){
            return CentralDeLuzes.instance;
        }
        CentralDeLuzes.instance = this;
    }

    ligar(comodo){
        document.getElementById(comodo).classList.add('active');
    }

    desligar(comodo){
        document.getElementById(comodo).classList.remove('active');
    }

    todas(comand){
        const comodos = ['garagem', 'banheiro', 'quartoP', 'cozinha', 'salaJ'];

        if (comand == 'ligar'){
            comodos.forEach((el) => {
                CentralDeLuzes.instance.ligar(el);
            })
        }else{
            comodos.forEach((el) => {
                CentralDeLuzes.instance.desligar(el);
            })
        }
    }
}

const controler = new CentralDeLuzes();

document.querySelectorAll('.btn').forEach((element) => {
    const nameLightOn = 'assets/images/lighton.png';
    const nameLightOff = 'assets/images/lightoff.png';

    element.addEventListener('click', () => {
        if (element.id != 'btnTodas'){
            if(!element.classList.contains('active')){
                element.classList.add('active');
                element.querySelector('img').src = nameLightOn;
                controler.ligar(element.dataset.comodo);
            }else{
                element.classList.remove('active');
                element.querySelector('img').src = nameLightOff;
                controler.desligar(element.dataset.comodo);
            }
        }else{
            if (!element.classList.contains('active')){
                element.classList.add('active');
                element.querySelector('img').src = nameLightOn;
                controler.todas('ligar');
            }else{
                element.classList.remove('active');
                element.querySelector('img').src = nameLightOff;
                controler.todas('desligar');
            }
        }
    })
})
