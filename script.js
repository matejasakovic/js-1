let left = document.querySelector('#left');
let right = document.querySelector('#right');
let img = document.querySelectorAll('.slider-image img');

let i = 0;



left.addEventListener('click', () => {
    i--;
    hide();


    if (i === -1) {

        i = img.length - 1;
    }


    img[i].style.display = 'block';

});

right.addEventListener('click', () => {
    i++;
    hide();


    if (i === img.length) {

        i = 0;
    }


    img[i].style.display = 'block';
});



const hide = () => {
    img.forEach((img) => {
        img.style.display = 'none';
    })
}