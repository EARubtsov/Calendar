
var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });


//jquery.названиеформы.serialize -вытаскиваем данные из формы


//ловим то что прислала форма регистрации
router.post('/user/add', function (req, res, next) {
  console.log(req.body.text1);

  var mysql = require('mysql');
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'metallica123',
    database: 'first_db'
  });
  connection.connect();
  connection.query('use first_db');

  var data = { lastname: req.body.text1, name: req.body.text2 };
  var nameText = 'Evgenii';
  var lastnameText = 'Rubtsov';

  function addUser() {
    return new Promise(function(resolve, reject){
            connection.query('INSERT INTO user SET ?', data, function(error, result, fields) {
    	    if(error) reject(error);
            resolve(result);
            });
    });
    
};

    if (req.body.text1 == nameText && req.body.text2 == lastnameText || req.body.group == 'vkontakte')
    {res.redirect('/index1.html');
    connection.end(); } 
    else if(req.body.text1 == nameText && req.body.text2 == lastnameText || req.body.group == 'mail')
    {res.redirect('index2.html');
    connection.end();}
    else if(req.body.text1 == nameText && req.body.text2 == lastnameText || req.body.group == 'facebook')
    {res.redirect('index3.html');
    connection.end();}
    else {
        addUser(connection).then(function(result) {
            console.log(result);
        }).catch(function(err) {
            throw err;
        });
        res.send('Вы зарегестрировались!');
        connection.end();
        
    }


    


// Д.З. На календарь событий вывести следующий объект. 

// function Prepod (name, dtStart, dtEnd, nameBlock) { 
// this.name = name;
// this.dtStart = dtStart;
// this.dtEnd = dtEnd;
// this.nameBlock = nameBlock;
// }
// var obj = new Prepod ('Peter' , 15.02.2017, 25.02.2017, "JavaScript")
// На календаре событий в дни по которым идут занятия к примеру вт, чт, 
// сб должна выводиться информация по названию блока и имени преподавателя в диапазоне 
// заданного периода dtStart-dtEnd. Должна быть предусмотрена возможность очистки дня от 
// информации по нажатию на крестик. Для этого нужно реализовать метод(функцию) у календаря,
//  который принимает объект типа Prepod и отображает его график занятий согласно времени в 
//  ячейках календаря.



  
  
//   res.send('Вы зарегестрированы!<p><br><a href="">Вернуться на главную страницу</a></p>');
//   connection.end();
});

module.exports = router;
