const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));// Методы classList
// console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if(btns[1].classList.contains('red')){
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // };
    // if (!btns[2].classList.contains('red')) {
    //     btns[2].classList.add('red');
    // } else {
    //     btns[2].classList.remove('red');
    // }

    btns[3].classList.toggle('red');
});

// console.log(btns[0].className);

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches('button.red')){
        console.log('Hi');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

btns.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        console.log('hy');
    });
});