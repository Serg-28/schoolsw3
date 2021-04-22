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

/* Создаем функции для обработки видео из index.html  */

// Сперва создадим переменную, которая с помощью document.getElementById найдет нам элмент с нужным айди
// который мы будем обрабатывать ("video1")
let myVideo = document.getElementById("video1");

/* Функция, которая проверяет DOM свойство - paused, и в зависимости от результата воспроизводит через
метод play() или приостанавливает через метод  pause() */
function playPause() { 
    if (myVideo.paused) 
        myVideo.play(); 
    else 
        myVideo.pause(); 
}

// Затем создадим функцию, которая будет увеличивать размер элемента video
function makeBig(){
  myVideo.width = 720;
  myVideo.height = 480;
}

// Затем создадим функцию, которая будет уменьшать размер элемента video
function makeSmall(){
    myVideo.width = 240;
    myVideo.height = 128;
  }
//Создадим функцию, которая вернет нормальные размеры экрана 
  function makeNormal(){
    myVideo.width = 420;
    myVideo.height = 240;
  }
  
// И на последок  две функци, которые будут менять уровень громкости. Первая включает половину, вторая делает громкость на полную 

function makeQuieter () {
    myVideo.volume = 0.5;
}
function makeLouder () {
    myVideo.volume = 1;
}