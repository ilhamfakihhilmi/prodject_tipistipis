/* ============ MENU SHOW =========== */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

// ============= REMOVE MENU MOBILE ============
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    //active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remove menu mobile
    const navMenu =  document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

let counter = 2;
const main_prod = document.querySelector('.main_prod');
const products = document.querySelectorAll('.product');
const imgWrapper = document.querySelector('.imgWrapper');

function moveImgs(){
  switch(counter){
    case 1:
      imgWrapper.style.top = "80%";
      break;
    case 2: 
      imgWrapper.style.top = "0";
      break;
    case 3:
      imgWrapper.style.top = "-80%";
      break;
  }
}

function nextProduct(){
  const index = counter-1;
  moveImgs();
  products[index-1].classList.remove('show');
  products[index-1].classList.add('hide');
  products[index].classList.remove('hide');
  products[index].classList.add('show');
}
function prevProduct(){
  const index = counter-1;
  moveImgs();
  products[index+1].classList.remove('show');
  products[index+1].classList.add('hide');
  products[index].classList.remove('hide');
  products[index].classList.add('show');
 
}


main_prod.addEventListener('click', function(e){
  if(e.target.className.indexOf("pre") > -1 && counter > 1){
    counter--;
    prevProduct();
    return;
  };
  if(e.target.className.indexOf("next") > -1 && counter < 3){
    counter++;
    nextProduct();
    return;
  };
  
})



Resources