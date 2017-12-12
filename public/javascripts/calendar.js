(function () {
    'use strict';

    var month = document.getElementById('intoDiv');
    month.classList.add('monthStyle');

    var little = document.getElementById('littleField');
    little.classList.add('little');

    function Day(date, conteiner) {
        this.date = date;
        this.conteiner = conteiner;
    }

    Day.prototype.generateDate = function (date, conteiner) {
        var day1 = document.createElement('div');
        day1.classList.add('day');
        var head = document.createElement('span');
        head.classList.add('head');
        var newText = document.createTextNode(date);
        // // newText.classList.add('newText');
        head.appendChild(newText);
        day1.appendChild(head);
        conteiner.appendChild(day1);

        day1.onclick = textNote; //имия ф-ции без скобок

        function textNote() {
            var years = prompt('Ваша заметка:', 'Например: день рождения');
            var note = document.createElement('p');
            var newText2 = document.createTextNode(years);
            note.classList.add('note');
            if (years == null) { note.classList.add('noteNothing'); }
            note.appendChild(newText2);
            day1.appendChild(note);
        }
    }

    // var week = document.createElement('div');
    // week.classList.add('week');
    // little.appendChild(week);

    var arrayWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    var array = [];
    var i = 0;
    var j = 0;
    // while (j < 7) { //дни недели(сверстать календарь с помощью таблицы)!!!!
    //     var dayOfWeek = document.createElement('div');
    //     dayOfWeek.appendChild(document.createTextNode(arrayWeek[j]));
    //     dayOfWeek.classList.add('dayOfWeek');
    //     little.appendChild(dayOfWeek);
    //     j++;
    // }

    while (i <= 30) {
        var obj = new Day(i, little);
        obj.generateDate(i + 1, little);
        array[i] = obj;
        i++;
    }

    //версия без параметров в прототипе!!!с сайта стэковеыфлоу

    // Day.prototype.generateDate = function () {  //прототип объекта 
    //   var day1 = document.createElement('div');
    //   day1.classList.add('day');
    //   this.conteiner.appendChild(day1); //попытка аппендинга)))
    // }

    // var array = []; //обекты в массив и вставка в див.
    // var i = 0;
    // while (i <= 29) {
    //   var obj = new Day(i, little); //создаём объект
    //   obj.generateDate()
    //   array[i] = obj;
    //   console.log(array[i]);
    //   i++;
    // }

    var span1 = document.createElement('span');
    span1.classList.add('fa');
    span1.classList.add('fa-angle-left');
    span1.classList.add('arrow-prev')
    span1.classList.add('span1');
    var span2 = document.createElement('span');
    span2.classList.add('fa');
    span2.classList.add('fa-angle-right');
    span2.classList.add('arrow-next');
    span2.classList.add('span2');
    month.appendChild(span1);
    month.appendChild(span2);

    span1.onclick = december;
    function december() {
        elemForDiv.classList.add('december'); 
    }  

    span2.onclick = march;
    function march() {
        elemForDiv.classList.add('march'); 
    }  

    var elemForDiv = document.getElementById('forJs');
    elemForDiv.classList.add('fieldStyle');
    elemForDiv.appendChild(month);
    elemForDiv.appendChild(little);

//спан меняет фон месяца
    

    //формочка

    // var users = require('./routes/users');
    // console.log(users);


    //часы
    
    var clock = document.createElement('div');
    clock.classList.add('clock');

// var h = 0;
// var timerId = setInterval(function() {
    
//     var hour = document.createTextNode(h);
//                 clock.appendChild(hour);  
//                 h++;
//                     if(h == 24){
//                         h = 0;
//                     }                  
// }, 1000);



    var hide = document.createElement('div');
    hide.classList.add('hide');

    var close = document.createElement('input');
    close.setAttribute('type', 'button');
    close.setAttribute('value', 'X');
    close.classList.add('close');
    var forma = document.getElementById('forma');
    forma.appendChild(close);
    hide.appendChild(forma);

    var elem = document.getElementById('elem');
    elem.appendChild(hide);
    elem.appendChild(clock);  

    close.onclick = closeWindow;
    function closeWindow() {
        hide.classList.add('hideWindow'); 
    }


} ())