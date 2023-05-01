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
}
    
function editEnd() {
    div.innerHTML = area.value;
    area.replaceWith(div);
}