let slideIndex = 0;
const slidesEl = document.querySelectorAll('.slide');
const prevEl = document.querySelector('.controls .prev');
const nextEl = document.querySelector('.controls .next');
const slideActEl = document.querySelectorAll(".controls .slideRet");
let articles = [
    {
        'id': 1,
        'title': 'IA: O quê é?',
        'image': 'assets/imgs/iaArtigo.png'
    },
    {
        'id': 2,
        'title': 'Rede de computadores',
        'image': 'assets/imgs/rede.webp'
    },
    {
        'id': 3,
        'title': 'O que é o HTML?',
        'image': 'assets/imgs/htmlArtigo.png'
    },
    {
        'id': 4,
        'title': 'CSS na Prática',
        'image': 'assets/imgs/cssArtigo.jpeg'
    },
    {
        'id': 5,
        'title': 'JavaScript na WEB',
        'image': 'assets/imgs/javascript.png'
    },
    {
        'id': 6,
        'title': 'React',
        'image': 'assets/imgs/react.png'
    },
    {
        'id': 7,
        'title': 'Django melhor Back-end',
        'image': 'assets/imgs/django.webp'
    }
];
let oldPosts = [
    {
        id: 1,
        title: 'PHP na WEB',
        image: 'assets/imgs/phpArticle.png'
    },
    {
        id: 2,
        title: 'Vue.js Tutorial',
        image: 'assets/imgs/vueArticle.png'
    },
    {
        id: 3,
        title: 'Angular Framework',
        image: 'assets/imgs/angularArticle.png'
    },
    {
        id: 4,
        title: 'Python e Pandas',
        image: 'assets/imgs/pandasArticle.jpeg'
    }
];

function showSlide(index) {
    slidesEl.forEach((slide, i) => {
        slide.classList.remove('active');
        slideActEl[i].classList.remove('active');
        if (index === i) {
            slide.classList.add('active');
            slideActEl[index].classList.add('active');
        }
    })
}

setInterval(() => {
    slideIndex = (slideIndex + 1) % slidesEl.length;
    showSlide(slideIndex);
}, 5000)

document.getElementById("modeColor").addEventListener('click', () => {
    const root = document.documentElement;
    const mode = document.querySelector('#modeColor .bola');
    const imgMode = document.querySelector('#modeColor .bola img');
    const iconProjectEl = document.querySelectorAll('.posts .article main img');

    mode.classList.toggle('modeOn');

    if (root.style.getPropertyValue('--bg-primary') === 'black') {
        mode.style.background = '#E6F0FF';
        iconProjectEl.forEach((el) => {
            el.setAttribute('src', 'assets/imgs/abrir.png');
        })
        imgMode.setAttribute('src', 'assets/imgs/sun.png');
        root.style.setProperty('--bg-primary', '#E6F0FF');
        root.style.setProperty('--bg-secondary', '#D1E3FF');
        root.style.setProperty('--border-color', '#A3C4FF');
        root.style.setProperty('--text-primary', '#2E3A4E');
        root.style.setProperty('--hover', '#1E90FF');
        root.style.setProperty('--accent', '#4A90E2');
        root.style.setProperty('--box-shadow', '0 4px 12px rgba(163, 196, 255, 0.3)');
        root.style.setProperty('--box-shadow-hover', '0 8px 24px rgba(163, 196, 255, 0.5)');
    } else {
        mode.style.background = 'black';
        iconProjectEl.forEach((el) => {
            el.setAttribute('src', 'assets/imgs/abrirBlack.png');
        })
        imgMode.setAttribute('src', 'assets/imgs/night.png');
        root.style.setProperty('--bg-primary', 'black');
        root.style.setProperty('--bg-secondary', '#1A1A1A');
        root.style.setProperty('--border-color', '#333333');
        root.style.setProperty('--text-primary', '#FFFFFF');
        root.style.setProperty('--hover', '#0055A4');
        root.style.setProperty('--accent', '#FFA500');
        root.style.setProperty('--box-shadow', '0 4px 12px rgba(255, 165, 0, 0.3)');
        root.style.setProperty('--box-shadow-hover', '0 8px 24px rgba(255, 165, 0, 0.5)');
    }
})

slideActEl.forEach((slide, i) => {
    slide.addEventListener('click', () => {
        slideIndex = i;
        showSlide(i);
    })
})

function showArticles(article) {
    const postsEl = document.querySelector('.posts');
    const divEl = document.createElement('div');
    divEl.classList.add('article');

    const headerEl = document.createElement('header');
    const headerImgEl = document.createElement('img');
    headerImgEl.setAttribute('src', article.image);
    headerEl.appendChild(headerImgEl);

    const mainEl = document.createElement('main');
    const h2MainEl = document.createElement('h2');
    h2MainEl.innerHTML = article.title;
    const imgMainEl = document.createElement('img');
    imgMainEl.setAttribute('src', 'assets/imgs/abrir.png');

    mainEl.appendChild(h2MainEl);
    mainEl.appendChild(imgMainEl);

    divEl.appendChild(headerEl);
    divEl.appendChild(mainEl);

    postsEl.appendChild(divEl);
}

function showOldArticles(article){
    const postsEl = document.querySelector('.oldPosts');
    const divEl = document.createElement('div');
    divEl.classList.add('post');

    const headerEl = document.createElement('header');
    const headerImgEl = document.createElement('img');
    headerImgEl.setAttribute('src', article.image);
    headerEl.appendChild(headerImgEl);

    const mainEl = document.createElement('main');
    const h2MainEl = document.createElement('h2');
    h2MainEl.innerHTML = article.title;
    const imgMainEl = document.createElement('img');
    imgMainEl.setAttribute('src', 'assets/imgs/abrir.png');

    mainEl.appendChild(h2MainEl);
    mainEl.appendChild(imgMainEl);

    divEl.appendChild(headerEl);
    divEl.appendChild(mainEl);

    postsEl.appendChild(divEl);
}


articles.forEach(showArticles);
oldPosts.forEach(showOldArticles);