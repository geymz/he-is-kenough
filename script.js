const btn = document.getElementById('btn');
const ken = document.querySelector('.ken');
const barbie = document.querySelector('.barbie');
const kiss = document.querySelector('.kiss');
const yap = document.querySelector('.yapanlar');

btn.addEventListener('click',function() {

    ken.classList.toggle("overlayKen");
    barbie.classList.toggle("overlayBarbie");
    yap.style.display = "inline-block";
});