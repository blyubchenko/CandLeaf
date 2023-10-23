const linkLogo = document.querySelector('.link-logo');
const burgerCheckbox = document.querySelector('.burger-checkbox');
const iconList = document.querySelector('.icon-list');
console.log(iconList);

burgerCheckbox.addEventListener('change', ()=>{
    if (burgerCheckbox.checked) {
        iconList.classList.add('active');
      } else {
        iconList.classList.remove('active'); 
      }
})