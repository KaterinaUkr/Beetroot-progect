    // 1.Створити сторінку, що показує нумерований список пісень:
let playList = [
{
 author: "LED ZEPPELIN",
 song:"STAIRWAY TO HEAVEN"
},
{
 author: "QUEEN",
 song:"BOHEMIAN RHAPSODY"
},
{
 author: "LYNYRD SKYNYRD",
 song:"FREE BIRD"
},
{
 author: "DEEP PURPLE",
 song:"SMOKE ON THE WATER"
},
{
 author: "JIMI HENDRIX",
 song:"ALL ALONG THE WATCHTOWER"
},
{
 author: "AC/DC",
 song:"BACK IN BLACK"
},
{
 author: "QUEEN",
 song:"WE WILL ROCK YOU"
},
{
 author: "METALLICA",
 song:"ENTER SANDMAN"
}
];

const list = document.querySelector('#list');

const createSongList = ({ author, song }) => {
    const li = document.createElement("li");
    const text = document.createElement("p");
    text.innerText = `author: ${author}; \r\n song: ${song};`;
    text.style.color = '#00004d';
    li.appendChild(text);
    li.style.listStyleType = 'decimal';
    li.style.paddingTop = '10px';
    text.style.fontStyle = 'italic';
    return li;   
};

playList.forEach((item) => {
    const element = createSongList(item);
    list.append(element);
});

console.log(createSongList(playList));


// 2.Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.

let modal = document.querySelector('#modal');
let open = document.querySelector('.btn-open');
let close = document.querySelector('.btn-close');

open.onclick = function () {
    modal.style.display = 'block';
}
close.onclick = function () {
    modal.style.display = 'none';
}
    //при натисканні за межами модального вікна, воно закривається
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};



// 3. Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.

