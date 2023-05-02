/* Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl+E,
замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з' являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш. */

let div = document.querySelector('#text');
let area = null;

document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyE' && (event.ctrlKey)) {
        if (event.preventDefault) event.preventDefault();                      
        editStart();       
    };
   
    if (event.code == 'KeyS' && (event.ctrlKey)) {
        if (event.preventDefault) event.preventDefault();        
        editEnd(); 
    };     
});
    
function editStart() {
    area = document.createElement('textarea');
    // area.className = 'edit';
    area.value = div.innerHTML;  
    area.style.width = 100 + '%';
    area.style.height = 150 + 'px';
    div.replaceWith(area);
    area.focus(); 
};
    
function editEnd() {
    div.innerHTML = area.value;
    area.replaceWith(div);
};




// Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.

grid.onclick = function(e) {
      if (e.target.tagName != 'TH') return;

      let th = e.target;
      // якщо клітинка TH, тоді сортувати
      // cellIndex -- це номер клітинки th:
      // 0 для першого стовпця
      // 1 для другого і т.д.
      sortGrid(th.cellIndex, th.dataset.type);
    
    };

    function sortGrid(colNum, type) {
      let tbody = grid.querySelector('tbody');
      let rowsArray = Array.from(tbody.rows);
      // compare(a, b) порівнює два рядки, необхідно для сортування
      let compare;

      switch (type) {
          case 'number':              
          compare = function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
          };
          break;
        case 'string':
        //   compare = function(rowA, rowB) {
        //     return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
        //   };
          break;
      }
      // сортування
      rowsArray.sort(compare);
      tbody.append(...rowsArray);
}
    

// Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і тягнути її далі.

let blok = document.querySelector('#blok');
// let width = blok.offsetWidth; //поточна ширина блоку
// let height = blok.offsetHeight;  //поточна висота блоку
let delta_w = 0; 
let delta_h = 0;
const rect = blok.getBoundingClientRect();
let width = rect.width;
let height = rect.height;


const move = (event) => {
    // let pos_x = event.pageX;
    // let pos_y = event.pageY;

    // delta_w = width - event.pageX; //різниця між шириною блоку та поточними координатами
    // delta_h = height - event.pageY;
    delta_w = rect.right - event.pageX;
    delta_h = rect.bottom - event.pageY;
    blok.style.width = delta_w + blok.offsetWidth + 'px';
    blok.style.height = delta_h + blok.offsetHeight + 'px';
};

blok.addEventListener("mousedown", (event) => {
    

    document.addEventListener('mousemove', move);
    
    blok.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', move);
    })
});

console.log(rect);
