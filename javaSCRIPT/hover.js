const hoveritems = document.querySelector('.hoveritems');

hoveritems.addEventListener('mouseenter', function(){
    hoveritems.classList.add('hover');
});
hoveritems.addEventListener('mouseleave', function(){
    hoveritems.classList.remove('hover');
})