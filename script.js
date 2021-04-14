/*создаем функцию, которая будет принимать элемент по id и будем менять в html файле параграф с соответств id <p id="demo"> при нажатие на кнопку 
мы будем навешивать элементу новые стили, которая создаст наша функция.*/ 
function myFunction() {
    document.getElementById("demo").style.fontSize = "25px"; 
    document.getElementById("demo").style.color = "red";
    document.getElementById("demo").style.backgroundColor = "orange";
    document.getElementById("demo").style.width = "250px"
    document.getElementById("demo").style.border = "5px solid black"        
}
/*
Создадим функцию, которая будет менять атрибут src у тега img при нажатии на одну из кнопок (будет загораться или тухнуть "лампа")
*/
function light(sw) {
    let pic;
/*Проверим состояние кнопки в данный момент и в зависимости от состояния устанавливаем значение переменной pic,  */    
    if (sw == 0) {
        pic = "./assets/pic_bulboff.gif"
    } else {
        pic = "./assets/pic_bulbon.gif"
    }
/*После проверки получаем элемент по id (img tag) и указываем какой должен быть путь к источнику фото(сохраненный в нашей переменной pic)  */      
    document.getElementById('myImage').src = pic;
}
