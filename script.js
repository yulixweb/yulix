window.addEventListener('scroll', onScroll);
setInterval(Update, 1);

let home = document.getElementById('home');
let nav = document.getElementById('nav');
let menuBtn = document.querySelector('.menu');
let menu = document.querySelector('.menuZone');

let menuBool = false;

menuBtn.addEventListener('click', function(){
    menuBool = !menuBool;
    if (menuBool) {
        menu.style.left = "0";
        menu.style.opacity = "1";
    }

    else {
        menu.style.left = "calc(-100% - 1px)";
        menu.style.opacity = "0";
    }
   
})

function onScroll() {
    var scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    var scrollPosition = scrollPercentage * 100;
    
    
    if (window.scrollY > 0) {

        nav.style.background = "black";
        
    }

    else {

        nav.style.background = "none";

    }

   
 
}

function Update() {
    var scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    var scrollPosition = scrollPercentage * 100;

    if(scrollPosition > 20 && scrollPosition < 50){
        document.querySelector('.bg').style.backgroundImage =  "url(https://fiverr-res.cloudinary.com/npm-assets/layout-server/fiverr-og-logo.5fd6463.png)";
        document.querySelector('.bg').style.backgroundSize = "500px";
        document.querySelector('.bg').style.backgroundPosition ="-150px";
        console.log(scrollPosition);
    }

    else if (scrollPosition > 50 && scrollPosition < 80)
    {
        document.querySelector('.bg').style.backgroundSize = "cover";
        document.querySelector('.bg').style.backgroundPosition ="0px";
        document.querySelector('.bg').style.backgroundImage = "url(https://png.pngtree.com/background/20211217/original/pngtree-cloud-computing-technology-background-picture-image_1567952.jpg)";
    }

    else {
        document.querySelector('.bg').style.backgroundSize = "cover";
        document.querySelector('.bg').style.backgroundPosition ="0px";
        document.querySelector('.bg').style.backgroundImage = "url(https://static.vecteezy.com/system/resources/previews/003/462/493/original/abstract-futuristic-face-concept-artificial-intelligence-background-free-vector.jpg)";
    }

}


    const $form = document.querySelector('#form')
    const $buttonMailto = document.querySelector('#trucazo')

    $form.addEventListener('submit', handleSubmit)

    function handleSubmit(event) {
      event.preventDefault()
      const form = new FormData(this)
      $buttonMailto.setAttribute('href', `mailto:francogrosso36@gmail.com?subject=name: ${form.get('name')}  email: ${form.get('email')}&body=${form.get('message')}`)
      $buttonMailto.click()
    }
 