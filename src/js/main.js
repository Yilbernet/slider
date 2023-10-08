/*************************************************/
/*******         Slider vanilla        **********/
/***********************************************/

function main () {
    // se leen del dom los elementos a utilizar
    const imgs = document.querySelectorAll('.slider__under img');
    const over = document.querySelector('.slider__over');
    const under = document.querySelector('.slider__under');
    const dots = document.querySelector('.slider__dots');

    // se leen las rutas de las imagenes del slider
    const images = [];
    imgs.forEach(element=>{images.push(element.src)});

    // se le asigna la primera imagen al slider
    let count = 0;
    under.innerHTML = `<img src="${images[count]}" alt="slider image">`;

    // se crean los dots debajo del slider
    let html = '';
    for (const key in images) {
        html += `<li id="${key}" class="slider__dot"></li>`;
    }
    dots.innerHTML = html;

    // se le da la funcionalidad a los botones
    over.addEventListener('click', (event)=>{
        if (event.target.classList.contains('slider__prev')) {
            if (0<count) {
                count--;
            } else {
                count = images.length-1;
            }
            under.innerHTML = `<img src="${images[count]}" alt="slider image">`;
        }
        if (event.target.classList.contains('slider__next')) {
            if (count<images.length-1) {
                count++;
            } else {
                count = 0;
            }
            under.innerHTML = `<img src="${images[count]}" alt="slider image">`;
        }
        if (event.target.classList.contains('slider__dot')) {
            count = +event.target.id;
            under.innerHTML = `<img src="${images[count]}" alt="slider image">`;
        }
    });

    // se le asigna el cambio automatico de imagen al slider
    setInterval(()=>{
        if (count<images.length-1) {
            count++;
        } else {
            count = 0;
        }
        under.innerHTML = `<img src="${images[count]}" alt="slider image">`;
    },3000);
}
main();