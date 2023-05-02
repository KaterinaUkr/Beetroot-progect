// const grandparent = document.querySelector('.grandparent');
// const parent = document.querySelector('.parent');
// const child = document.querySelector('.child');

// console.table([grandparent, parent, child]);

// child.addEventListener('click', (event) => {
//      event.stopPropagation()
//     console.log('child');
// });
// parent.addEventListener('click', (event) => {
//     event.stopPropagation();
//     console.log('parent');
// });
// grandparent.addEventListener('click', (event) => {
//      event.stopPropagation();
//     console.log('grandparent');
// });



// child.addEventListener('click', (event) => {
//     console.log('child capture');
// }, {capture: true});
// parent.addEventListener('click', (event) => {
//     console.log('parent capture');
// }, {capture: true} );
// grandparent.addEventListener('click', (event) => {
//     console.log('grandparent capture');
// } , {capture: true});
// document.body.addEventListener('click', (event) => {
//     console.log('body capture');
// } , {capture: true});



    // щоб спрацював один раз
// child.addEventListener('click', (event) => {
//      event.stopPropagation()
//     console.log('child');
// }, { once: true });


// function some (event) {
//     event.stopPropagation()
//     console.log('child');
//     child.removeEventListener('click', some);
// }
// child.addEventListener('click', some);

const divs = document.body.querySelectorAll('div');

// divs.forEach(elem => {
//     elem.addEventListener('click', (event) => {
//         event.stopPropagation();
//         if (event.target.matches('div')) {
//             console.log('click');
//         }
        
//     });
// })

// const newDiv = document.createElement('div');
// newDiv.classList.add('child');
// document.body.append(newDiv)

// grandparent.addEventListener('dbclick', (event) => {
//         event.stopPropagation();
//         console.log(event);
        
// });
    
// grandparent.addEventListener('contextmenu', (event) => {
//         event.stopPropagation();
//         console.log(event);
// });

// if (grandparent) {
//     grandparent.addEventListener('mouseup', (event) => {
//     event.stopPropagation();
//         console.log(event)
// });
// }

// document.addEventListener("mouseover", (event) => {
//     event.stopPropagation();
//         console.log(event)
// });


// document.addEventListener("keypress", (event) => {
//     event.stopPropagation();
//         console.log(event)
// });

// document.forms[0][0].addEventListener("keypress", (event) => {
//     event.stopPropagation();
//     console.log(event);
// });


// const input = document.querySelector('input');

// document.forms[0][0].addEventListener("input", (event) => {
//     // event.stopPropagation();
//     console.log(event.target.value);
// });

// document.forms[0].addEventListener("submit", (event) => {
//         event.stopPropagation();
//         event.preventDefault();
//     console.log(event.target.value);
// });


// window.addEventListener("load", (event) => {
//         event.stopPropagation();
//         event.preventDefault();
//     console.log(event);
// });

// window.addEventListener("scroll", (event) => {
//         event.stopPropagation();
//     console.log(event);
// });

// window.addEventListener("resize", (event) => {
//         event.stopPropagation();
//     console.log(event);
// });


// const customEvent = new Event('myEventName');

// document.addEventListener("myEventName", (event) => {
//         event.stopPropagation();
//     console.log(event);
// });
// const onClick = () => {
//     grandparent.dispatchEvent(customEvent)
// }




const grandparent = document.querySelector('.grandparent');
const drop = document.querySelector(".drop");
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');


const customEvent = new Event('myEventName');

const move = (event) => {
    grandparent.style.left = event.pageX - grandparent.offsetWidth / 2  + 'px';
    grandparent.style.top = event.pageY - grandparent.offsetHeight / 2 + 'px';
    
    grandparent.style.display = 'none';
    const elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    // console.log(document.elementFromPoint(event.clientX, event.clientY))
    grandparent.style.display = 'inline-block';

    if (elemBelow === drop) {
        drop.style.backgroundColor = 'green';
    } else {
        drop.style.backgroundColor = 'aquamarine';
    }
}

grandparent.addEventListener("mousedown", (event) => {
    event.stopPropagation();   
           
    document.addEventListener('mousemove', move);
    
    grandparent.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', move);
    })
});
// console.log(event);


