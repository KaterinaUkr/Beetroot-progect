
    //знаходить елементи
// const ul = document.getElementsByTagName('li')

// console.log(Array.from(ul))

// const ul = document.querySelectorAll('li')
// console.log(ul)


    //
// const ul = document.querySelectorAll('ul');
// const li = ul.querySelector('li')[3];
// li.style.backgroundColor = 'green';

// console.log(li);

// const manipulate = li.children; //
// manipulate.style.border = '3px solid red';
// console.log(manipulate);

// const div = document.querySelector('div');

// const span = document.createElement('span');
// span.append('span text');

// div.appendChild(span)


// const div = document.querySelector('div');

// const span = document.createElement('span');
// span.innerText = 'Some text';

// const link = div.querySelector('a');
// // link.setAttribute('href', 'https://google.com')
// // link.removeAttribute('href');
// // console.log(link);

// // console.log(link.dataset.home);

// // link.classList.add('warning')
// // link.classList.add('alert')
// // link.classList.remove('warning')
// // link.classList.toggle('warning')

// // link.className = 'some'

// // console.log(link.className)


// link.style.color = 'black'
// link.style.backgroundColor = 'yellow'
// link.style.textDecoration = 'none'
// link.style.display = 'block'



const list = document.querySelector("#list");
const data = [
    {
        text: "Some link 1 text",
        url: "some url....",
    },
    {
        text: "Some link 2 text",
        url: "some url....",
    },
    {
        text: "Some link 3 text",
        url: "some url....",
    },
];

const createlistItem = ({ text, url }) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.innerText = text;
    li.appendChild(a);
    return li;
}

data.forEach((item) =>
    const ele = createlistItem(item);
    list.appendChild(createlistItem)

)

console.log(createlistItem(data[0]))