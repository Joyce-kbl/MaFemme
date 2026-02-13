// CONFIGURATION DES MÉDIAS (20 Photos + 5 Vidéos)
const medias = [
    {type: 'img', url: 'img/img01.jpg'},
    {type: 'img', url: 'img/img02.jpg'},
    {type: 'img', url: 'img/img03.jpg'},
    {type: 'img', url: 'img/img1.jpg'}, 
     {type: 'video', url: 'img/vid1.mp4'},
    {type: 'img', url: 'img/img2.jpg'},
    {type: 'img', url: 'img/img3.jpg'},
    {type: 'img', url: 'img/img4.jpg'},
    {type: 'video', url: 'img/vid3.mp4'},
      {type: 'video', url: 'img/vid4.mp4'},
    {type: 'img', url: 'img/img6.jpg'},
     {type: 'img', url: 'img/img5.jpg'},
    {type: 'img', url: 'img/img8.jpg'},
    {type: 'img', url: 'img/img9.jpg'},
     {type: 'img', url: 'img/img10.jpg'},
      {type: 'img', url: 'img/img11.jpg'},
     {type: 'img', url: 'img/img12.jpg'},
     {type: 'img', url: 'img/img13.jpg'},
     {type: 'img', url: 'img/img14.jpg'},
     {type: 'video', url: 'img/vid5.mp4'},
    {type: 'img', url: 'img/img15.jpg'},
    {type: 'img', url: 'img/img16.jpg'},
     {type: 'video', url: 'img/vid7.mp4'},
    {type: 'img', url: 'img/img17.jpeg'},
    {type: 'video', url: 'img/img18.MP4'},
    {type: 'img', url: 'img/img19.jpeg'},
    {type: 'img', url: 'img/img20.jpeg'},
    {type: 'video', url: 'img/vid8.mp4'},
   
];

let currentIndex = 0;

// 1. VÉRIFICATION ACCÈS
function verifierAcces() {
    const reponse = document.getElementById('passwordInput').value.toLowerCase();
    if(reponse === "primla") {
        document.getElementById('login-overlay').style.display = 'none';
        document.getElementById('welcome-popup').style.display = 'flex';
    } else {
        alert("Oups... réfléchis encore avec ton cœur ❤️");
    }
}

// 2. FERMER L'ACCUEIL ET LANCER LE CADEAU
function fermerAccueil() {
    document.getElementById('welcome-popup').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    lancerDiaporama();
}

// 3. DIAPORAMA AUTOMATIQUE
function lancerDiaporama() {
    const container = document.getElementById('media-container');
    if (medias.length === 0) return;
    
    const item = medias[currentIndex];
    container.innerHTML = "";

    if(item.type === 'img') {
        const img = document.createElement('img');
        img.src = item.url;
        img.className = "fade-media";
        container.appendChild(img);
        setTimeout(prochainMedia, 4000); 
    } else {
        const vid = document.createElement('video');
        vid.src = item.url;
        vid.autoplay = true;
        vid.muted = true; // Obligatoire pour l'autoplay sur bcp de navigateurs
        vid.className = "fade-media";
        vid.onended = prochainMedia;
        container.appendChild(vid);
    }
}

function prochainMedia() {
    currentIndex = (currentIndex + 1) % medias.length;
    lancerDiaporama();
}

// 4. MENU
function openNav() { document.getElementById("mySidenav").style.width = "250px"; }
function closeNav() { document.getElementById("mySidenav").style.width = "0"; }

// 5. APPARITION DES PHRASES AU SCROLL
window.addEventListener('scroll', () => {
    const texts = document.querySelectorAll('.reveal-text');
    const triggerBottom = window.innerHeight / 5 * 4;

    texts.forEach(text => {
        const textTop = text.getBoundingClientRect().top;
        if(textTop < triggerBottom) {
            text.classList.add('visible');
        }
    });
});