document.getElementById('scrollleft').addEventListener('click',(e)=>{
e.stopPropagation();
document.querySelector('.web').scrollLeft-=250;

})
document.getElementById('scrollright').addEventListener('click',(e)=>{
    e.stopPropagation();
document.querySelector('.web').scrollLeft+=250;
})