let link=document.querySelector('#obra');

link.addEventListener('click',e => {
    e.preventDefault();
    aviso();
});
let aviso= ()=>{
    alert('Mueva el mouse en de izquierda a derecha y de arriba hacia abajo para modificar la obra');
    location.href="https://lulikunka.github.io/arte-generativo/";
}
