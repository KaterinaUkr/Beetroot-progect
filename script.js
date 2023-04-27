

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






