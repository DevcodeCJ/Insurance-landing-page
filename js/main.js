const nodes = document.querySelectorAll('.link');
const buttons = document.querySelectorAll('.btn');
const menuButton = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.nav-mobile');

nodes.forEach(node => {
   let nodeValue = node.innerHTML;
   let caps = nodeValue.toUpperCase();
   node.innerHTML = caps;
});

buttons.forEach(button => {
   let nodeValue = button.innerHTML;
   let caps = nodeValue.toUpperCase();
   button.innerHTML = caps;
});

menuButton.addEventListener('click', function() {
   menuButton.classList.toggle('change');
   if(mobileNav.style.opacity === '1') {
      mobileNav.style.opacity = '0';
   } else {
      mobileNav.style.opacity = '1';
   }
});

