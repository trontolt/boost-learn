export const titlesWithDescription = [
    {
        title: "JS это",
        shortDesc: "JS - Мультипарадигменный язык программирования, который добавляет интерактивность и динамику вебсайтам и приложениям (EcmaScript)",
        description: "Может выполняться в браузере, на сервере и в любом устройстве где есть движок JS. <br> Возможности js сильно зависят от среды, в которой запущен, например в браузере может добавлять Html, вазимодействовать с пользователями, менять стили, отправлять запросы, но <strong>не может</strong> записывать/читать/ файлы на жестком диске, запускать программы и т.д. "
    },
    {
        title: "Движки JS",
        shortDesc: "Это программа для выполнения кода JS в браузере, на сервере или устройстве <p>(<strong>V8</strong> - chrome,opera; <strong>Spider Monkey</strong> - Firefox; <strong>Trident, Chakra</strong> - IE; <strong>Nitro, SquirrelFish</strong> - Safari</p>",
        description: "<ul><li>Сперва движок парсит (читает текст скрипта) </li><li>Затем он компилирует (преобразует) скрипт в машинный язык <li>Применяя оптимизации запускает и выполняет машинный код</li></li></ul>"
    },
    {
        title: "Ссылки",
        shortDesc: "<a target='_blank' href='http://caniuse.com'>http://caniuse.com</a> ",
        description: "<a target='_blank' href='http://caniuse.com'>http://caniuse.com</a> - таблицы с информацией по поддержке движками браузеров новых возможностей"
    },
    {
        title: "<script>",
        shortDesc: "Добавляет JS в HTML <p><code><span class='code-example'>&lt;script src='file.js'&gt;&lt;/script&gt;<br>&lt;script&gt;alert(1);&lt;/script&gt;</span></code>",
        description: "<ul><li>Лучше выделять JS в отдельный файл, т.к. они загружаются отдельно и хранятся в кэше, что позволит другим подключающим данный скрипт страницам брать его из кэша</li><li>СЮда остальное</li></ul>"
    }, 
    {
        title: "Комментарии",
        shortDesc: "// - однострочные <br> /* многострочные */ <br> в HTML - &lt;!-- любой текст --&gt;",
        description: ""
    }, 
    {
        title: "Переменные",
        shortDesc: "Именованное хранилище для данных <ul><li> var - объявляет глобальную переменную</li><li>let - объявляет блочную переменую</li> <li>const - объявляет неизменную константу (блочная)</li>",
        description: "В названии первый символ не должен быть цифрой и не содержать '-'. Нельзя использовать зарезервированные имена let, class, return, function и т.д."
    }, 
    {
        title: "Типы данных",
        shortDesc: "JS динамически типизированный, так как в переменную можно поместить любой из 8 типов данных (String, Number, Boolean, Object, Undefined, Null, BigInt, Symbol)",
        description: "<ul><li>number для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253-1).</li><li>bigint для целых чисел произвольной длины > ±(253-1) </li><li>string для строк. Строка может содержать ноль или больше символов, нет отдельного символьного типа.</li><li>boolean для true/false.</li><li>null для неизвестных значений – отдельный тип, имеющий одно значение null.</li><li>undefined для неприсвоенных значений – отдельный тип, имеющий одно значение undefined</li><li>object для более сложных структур данных.</li><li>symbol для уникальных идентификаторов.</li></ul><hr>typeof x или typeof(x) - возвращает строковое значение типа данных, <br>например typeof 1 = 'number', <br>typeof null = 'object'(специальная ошибка языка)"
    },
     {
         title: "alert, prompt,confirm",
         shortDesc: "<ul><li><span class='code-example'>let age = prompt('Сколько тебе лет?', 100);</span> - задает вопрос и присваивает ответ в переменную</li><li><span class='code-example'>alert('Hello');</span> - показывает сообщение</li><li><span class='code-example'>let isBoss = confirm('Ты здесь главный?');</span> - задает вопрос и присваивает переменной true или false</li></ul>",
         description: "Данные методы являются модальными, тоесть останавливают выполнение скрипта и не позволяют взаимодействовать со страницей. Расположение и внешний вид окна зависит от браузера."
     },
     { 
         title: "Приведение типов", 
         shortDesc: "<ul><li>Строковое String(value) - происходит когда нужно чтото вывести</li><li>Численное Number(value), +'1' - При математических операциях</li><li>Логическое Boolean(value) - При логических операциях</li></ul>",
         description: "<hr><ul><li>При строковом преобразовании: null - 'null', undefined - 'undefined' </li><li>При численном преобразовании: Undefined - NaN, <br>null - 0, true/false - 1/0,'string' - пробелы по краям обрезаются, если осталась пустая строка то 0, если число то считывается, иначе NaN </li><li> При логическом преобразовании: 0, null, undefined, NaN - false. Все остальное true, даже строка '&emsp;' или '0' тоже true</li>"
     },
    {
        title: "Базовые операторы", 
        shortDesc: "5 * 2 - (5) и (2) операнды или аргументы, (*) - бинарный операнд, так как применяется к двум операндам. +'1' - (+) унарный т.к. к одному операнду",
        description: "<ul><li>1 + 1 (2) сложение</li><li>1 - 1 (0) вычитание</li><li> 2 * 2 (4) умножение</li><li>4 / 2 (2) деление</li><li>5 % 2 (1) взятие остатка от деление</li><li>2 ** 3 (8) возведение в степень</li><li>a = 2 + 1 (3) присвоение</li><li><span class='code-example'>++counter</span> префиксный инкремент (-- декремент) увеличивает и возвращает увеличенное </li><li><span class='code-example'>counter++</span> постфиксный инкремент (-- декремент) возвращает значение затем увеличивает </li></ul> <hr> Бинарный плюс, если один из операндов строка - приводит к строке (2 + 2 + '1' = 41)"
    },
     {
         title: "Операторы сравнения",
         shortDesc:"<ul><li>5 > 2 // true</li><li>'я' > 'А' // true; 'а' > 'А' // true, лексикографическое сравнение по Unicode</li><li>'2' > 1 //true, строка приводится к числу. &emsp;('01' == 1) // true (строка 01 привелась в 1)</li><li>(0 === false) //false, разные типы</li><li>(0 == false) //true, без сравнения типов</li><li>(null == undefined) //true, равны друг другу ине равны ничему другому</li><li>(nul === undefined) //false, разные типы</li><li>!!'non-empty string' // true, '!' привело строку в булеан и вернуло противоположное, а второй '!'вернул его противоположное</li></ul>",
         description:"|| (или) - останавливается и возвращает первое истинное значение, или последнее если такое значение не найдено <br> && (и) - останавливается и возвращает первое ложное значение, или последнее еслит все истинные <hr> Объединение с null <strong>??</strong> - тоже что и  ||, только еще и видит '0' и '&emsp;' как true"
     }, 
     {
         title: "if, else, '?'",
         shortDesc: "<code><span class='code-example'>if (year < 2015) { <br> alert( 'Это слишком рано...' ); <br> } else if (year > 2015) { <br> alert( 'Это поздновато' ); <br> } else { <br>alert( 'Верно!' ); <br> }</span></code> <hr> <code><span class='code-example'>let accessAllowed = age > 18 ? true : false;</span></code>",
         description: "Тернарный оператор возвращает результат приведения к логическому типу <br><code><span class='code-example'> let message = (age < 3) ? 'Здравствуй, малыш!' : <br>(age < 18) ? 'Привет!' : <br> (age < 100) ? 'Здравствуйте!' : <br> 'Какой необычный возраст!';</span></code>"
     },
      {
          title: "Циклы",
          shortDesc: "<code><span class='code-example'>let i = 0;<br><strong>while</strong> (i < 3) { // выводит 0, затем 1, затем 2<br>alert( i );<br>i++;<br>}</span></code><hr><code><span class='code-example'>let i = 0;<br><strong>do</strong> {<br>alert( i );<br>i++;<br>} <strong>while</strong> (i < 3);</span></code><hr><code><span class='code-example'><strong>for</strong> (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2<br>alert(i);<br>}</span></code>",
          description:"<ul><li>В цикле for, можно пропускать части, например <code><span class='code-example'>for (; i < 3; i++) { // нет необходимости в 'начале'; alert( i ); // 0, 1, 2 }</span></code></li><li>Цикл можно прервать полностью- <code><span class='code-example'>while (true) { <br> let value = +prompt('Введите число', '');<br>if (!value) <strong>break</strong>; // (*)<br>sum += value;}</span></code></li><li>Прервать итерацию цикла и перейти к следующей - <code><span class='code-example'>for (let i = 0; i < 10; i++) {<br>if (i % 2 == 0) <strong>continue</strong>;<br>alert(i); // 1, затем 3, 5, 7, 9}</span></code></li><li>Метка для цикла - <code><span class='code-example'><strong>outer:</strong> for (let i = 0; i < 3; i++) { <br> for (let j = 0; j < 3; j++) { <br>let input = prompt(`Значение на координатах ($&#123;i},$&#123;j})`, ''); <br>// если пустая строка или Отмена, то выйти из обоих циклов <br>if (!input) break <strong>outer</strong>;}}</span></code></li></ul>Метка работает только снизу вверх"
      },
      {
          title: "Switch",
          shortDesc: "<code><span class='code-example'>let a = 2 + 2; <br> switch (a) { <br> case 4: <br> alert('Правильно!'); <br> break; <br>case 3: // (*) группируем оба case <br>case 5: <br> alert('Неправильно!'); <br> alert('Может вам посетить урок математики?'); <br> break; <br>default: <br> alert('Результат выглядит странновато. Честно.');}</span></code>",
          description: ""
      },
      {
          title: "Function",
          shortDesc: "Функция это фрагмент кода, к которому можно обратится по имени из другого места в коде. <br> <ul><li>Function declaration <code><span class='code-example'>function имя(параметры, через, запятую) {  /* тело, код функции */}</span></code> <br> (создается на стадии инициализации, до выполнения кода, может быть вызвана в любой части кода) <br> (В строгом режиме, когда Function Declaration находится в блоке {...}, функция доступна везде внутри блока. Но не снаружи него.)</li><li>Function expression <code><span class='code-example'>let sayHi <strong>=</strong> function() {alert( 'Привет' );};</span></code> <br> (создается в момент когда до нее дошло выполнение кода, может быть вызвана только дальше по ходу выполнения кода)</li><li> Стрелочная функция <code><span class='code-example'>let arrF = (n) <strong>=></strong> n + 3</span></code> <br> <ul><li> У стрелочной нет this, она берет его снаружи, где была вызвана </li><li>Ее нельзя вызывать с new (будет ошибка)</li><li>У нее нет ...arguments</li><li>У нее нет super</li></ul></li><li><code><span class='code-example'>let sum = new Function('a', 'b', 'return a + b');</span></code> <br> (Через new lexicalEnvironment - всегда global)</li></ul>",
          description:"<ul><li>У функций могут быть <strong>Локальные</strong> переменные (объявленные внутри. Доступ к ним есть только внутри функции) и <strong>Внешние</strong> (объявленные не в функции, а снаружи. Доступ к ним имеется и за пределами функции)</li><li>У функций есть свойство <strong>name, length</strong> (указывает количество принимаемых аргументов)</li><li>Мы можем использовать функцию как объект, хранить в ней свойства, но они никак не влияют на её выполнение. Переменные – это не свойства функции и наоборот.</li><li><strong>NFE</strong> -  Named Function Expression. <code><span class='code-example'><let sayHi = function func(who) { <br> if (who) { alert(`Hello, $&#123;who}`); <br> } else {  func('Guest'); //вызывает себя же } };</span></code></li><li>У функций могут быть принимаемые параметры и параметры по умолчанию <code><span class='code-example'>function func(who, <strong>age = 19</strong>) { return age }</span></code></li></ul>"
      },
    {
        title: "Тестирование", 
        shortDesc:"<strong>BDD</strong> behaviour driven development (тесты, документация, примеры использования) <br> <code><span class='code-example'>describe ('Заголовок', function () { <br>it ('Описание', function () { <br> assert.equal (pow(2,3), 8) <br> }}</span></code> <br> <strong>Mocha</strong> - функции тестирования (describe, it, функции запуска тестов) <br> <strong>Chai</strong> - функции проверки утверждений <br> <strong>Sinon</strong> - наблюдение за функциями, эмулирование встроенных функций",
        description :"describe ('Test', function () { <br> before ( () => alert('before tests')); <br> after ( ()=> alert('after tests')); <br> beforeEach ( ()=> alert ('before each test')) <br> afterEach ( ()=> alert ('after each test')); <br> it ('Возводит в степень n', function () { <br> assert.equal(pow(x,2), result); <br> });"
    }, 
    {
        title: "Полифилы, Babel",
        shortDesc: "Полифил - код, реализующий функциональность, которая не поддерживается в некоторых версиях веб-браузеров <br> Babel – это транспилер и полифил. Он переписывает современный JavaScript-код в предыдущий стандарт и реализовывает новые функции в старом стандарте.",
        description: ""
    }, 
    {
        title:"Объект",
        shortDesc: "<ul><li>let user = new Object (конструктор объекта)</li><li>let user = {} (литерал объекта, литеральная нотация)</li></ul> <br><code><span class='code-example'>const user = { <br> name: 'Dima', <br>}; </span></code><br><ol><li><code><span class='code-example'>user.name = 'Petya'</span></code> // сработает, т.к. const не позволяет только полностью заменить объект.</li><li><code><span class='code-example'>let user = {} <br> user['likes birds']; <br> alert (user['like birds'])</span></code> // сработает изза [];</li><li><code><span class='code-example'> let user = { <br> name: 'Dima', <br> age: 29 <br> } <br> let key = prompt('что узнать', 'name'); <br> alert (user[key]);</span></code> // Dima</li><li><code><span class='code-example'> let fruit = prompt ('Какой фрукт', 'apple'); <br> let bag = { <br> [fruit] : 5 </span></code>//взяли имя из переменной <br> <code><span class='code-example'>} <br> alert (bag[fruit])</span></code> // 5; </li></ol>", 
        description: "Методы объекта: <ul><li> Object.keys(obj) – возвращает массив ключей. </li><li>Object.values(obj) – возвращает массив значений.</li><li>Object.entries(obj) – возвращает массив пар [ключ, значение].</li><li>Object.getOwnPropertySymbols, - массив только символьных ключей.</li><li>Reflect.ownKeys(obj), возвращает все ключи.</li></ul> <br> Проверка наличия свойства в объекте <br> <code><span class='code-example'>let user = { name: 'Olga'} <br> alert ('name' <strong>in</strong> user) //true <br><br> <strong>for</strong> (key <strong>in</strong> user) { <br> alert(user[key]) <br> `} "
    }, 
    {
        title: "Клонирование/объединение объектов",
        shortDesc: "<code><span class='code-example'>let user  = { <br> name: 'Dima', <br> age: 29, <br> }; <br> let clone = {}; <br><ol><li>for (let key in user) { <br> clone[key] = user[key]  <br>} </li><li>Object.assign(clone, [user])</li><li>cloneDeep(obj) - Lodash</li><li>function <strong>cloneDeep</strong> (targetObj, srcObj) { <br> for(let key in srcObj) { <br> if(typeof (srcObj[key] != 'object') <br> targetObj[key] = srcObj[key]; <br> } else { <br> targetObj[key] = {}; <br> cloneDeep(targetObj[key], srcObj[key]); <br> }};</li><li>let clone = {...user}</li></ol>",
        description: ""
    }, 
    {
        title: "Сборка мусора",
        shortDesc: "<strong>Сборщик мусора</strong> - помечает корневые объекты, от них идет поссылкам и помечает другие объекты и т.д.. <br> Объекты, на которые нет внешних ссылок до корневых считаются недостижимыми и удаляются из памяти. <br><br> <strong>Оптимизации сборщика мусора</strong> <ol><li>Generational - делит объекты на новые и старые, старые проверяет реже</li><li>Incremental - поэтапно собирает мусор, делая много мелких задержек вместо одной большой</li><li>Idle - работает во время простоя процессора</li></ol>"
    }
        

]