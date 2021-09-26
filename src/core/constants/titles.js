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
        shortDesc: "JS динамически типизированный, так как в переменную можно поместить любой из 8 типов данных (String, Number, Boolean, Object, Undefined, Null, BigInt, Symbol) <br> <ul><li>number для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253-1).</li><li>bigint для целых чисел произвольной длины > ±(253-1) </li><li>string для строк. Строка может содержать ноль или больше символов, нет отдельного символьного типа.</li><li>boolean для true/false.</li><li>null для неизвестных значений – отдельный тип, имеющий одно значение null.</li><li>undefined для неприсвоенных значений – отдельный тип, имеющий одно значение undefined</li><li>object для более сложных структур данных.</li><li>symbol для уникальных идентификаторов.</li></ul>",
        description: "<hr>typeof x или typeof(x) - возвращает строковое значение типа данных, <br>например typeof 1 = 'number', <br>typeof null = 'object'(специальная ошибка языка). <hr> В JS 7 примитивных типов данных и объекты. Для того чтобы у примитивов были методы, типа string.toUpperCase() JS создает легковесный объект-обертку для каждого из них при обращении к методу."
    },
    {
        title: "Number",
        shortDesc: "Number - (3, 2.1, infinity, NaN) <br> *1<strong>e9</strong> = 1млрд (e9 - 9 нулей после 1);  1<strong>e-6</strong> = 0.000001 (e-6 нули слева) <br> * <strong>toString</strong>(base); alert( 123456..toString(36)) // 2n9c (строковое число) <br> * <strong>Math.floor</strong> (округление в меньшую сторону 3.1 -3) <br> * <strong>Math.ceil</strong> (в большую сторону 3.1 - 4) <br> * <strong>Math.round</strong> (до ближайшего целого 3.6 - 4) <br> * <strong>Math.trunc</strong> (удаляет дробную 3.3 - 3) <br> * <strong>toFixed(2)</strong> (округляет до 2 знаков после запятой 3.3424 - 3.34) <br> *<strong>isNaN</strong>('str') //true преобразует значение в число и проверяет является ли оно NaN: <br> * <strong>isFinite</strong>('123') //true проверяет является ли обычным числом <br> * <strong>Object.is</strong>(12,14) //false проверяет равны ли друг другу (в отличие от '==' Object.is(NaN, NaN) === true,  Object.is(0, -0) === false <br> * <strong>parseInt</strong>('12.3px')  // 12 приводит к целому числу <br> * <strong>parseFloat</strong>('12.3.4') // 12.3 возвращает число с одной точкой <br> * <strong>Math.random</strong>() // случайное число от 0 до 1 <br> * <strong>Math.max</strong>(a, b, c...) / Math.min(a, b, c...) вычисляет макс и мин <br> * <strong>Math.pow</strong> (2, n) // возвращает 2 возведенное в степень n",
        description: ""

    },
    {
        title: "String",
        shortDesc: "let str = 'hello' <ul><li> `$&#123;str} world` //hello world // Интерполяция или обратные кавычки// backticks </li><li> alert ('hello'.<strong>length</strong>) // 5 - длина строки</li><li> str[0]  // h // если символа нет вернет undefined</li><li> str.<strong>charAt</strong>(0) - h //если символа нет вернет пустую строку</li><li>alert( 'Interface'.<strong>toUpperCase()</strong>); //INTERFACE</li><li>alert( 'Interface'.<strong>toLowerCase()</strong>); // interface </li><li> alert( 'Interface'<strong>[0].toLowerCase()</strong>); // 'i'</li><li>str.<strong>indexOf</strong>('substr', start) // возвращает позицию совпадения или -1</li><li>str.<strong>lastIndexOf</strong>('substr', start) // совпадение с конца</li><li>if (str.<strong>indexOf</strong>('Widget') != -1) { alert('Совпадение есть');</li><li>alert( 'Widget with id'.<strong>includes</strong>('Widget') ); // true</li><li>alert( 'Widget'.<strong>startsWith</strong>('Wid') ); // true</li><li>alert( 'Widget'.<strong>endsWith</strong>('get') ); // true,</li><li>'hello'.<strong>slice</strong>(1,3) // el - с второго по третий не включительно</li><li>'stringify'.<strong>substring</strong>(2,6) - ring - возвращает часть строки с 2 по 6</li><li>'stringify'.<strong>substr</strong>(2,2) - ri - возвращает 2 символа начиная с 2</li><li>alert( 'a' <strong>></strong> 'Z' ); // true // Сравнение строк по Unicode</li><li>str.<strong>codePointAt</strong>(pos) - возвращает код символа на позиции pos</li><li>alert( String.<strong>fromCodePoint</strong>(90) ); // Z  - возвращает символ по коду</li><li>str.<strong>localeCompare</strong>(str2) - сравнивает строки с учетом правил языка</li><li>str.<strong>trim</strong>() — убирает пробелы в начале и конце строки.</li><li>str.<strong>repeat</strong>(n) - Повторяет строку n раз",
        description: ""
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
          shortDesc: "Функция это фрагмент кода, к которому можно обратится по имени из другого места в коде. <br> <ul><li>Function declaration <code><span class='code-example'>function имя(параметры, через, запятую) {  /* тело, код функции */}</span></code> <br> (создается на стадии инициализации, до выполнения кода, может быть вызвана в любой части кода) <br> (В строгом режиме, когда Function Declaration находится в блоке {...}, функция доступна везде внутри блока. Но не снаружи него.)</li><li>Function expression <code><span class='code-example'>let sayHi <strong>=</strong> function() {alert( 'Привет' );};</span></code> <br> (создается в момент когда до нее дошло выполнение кода, может быть вызвана только дальше по ходу выполнения кода)</li><li> Стрелочная функция <code><span class='code-example'>let arrF = (n) <strong>=></strong> n + 3</span></code> <br> <ul><li> У стрелочной нет this, она берет его снаружи, где была вызвана </li><li>Ее нельзя вызывать с new (будет ошибка)</li><li>У нее нет ...arguments</li><li>У нее нет super</li></ul></li><li><code><span class='code-example'>let sum = new Function('a', 'b', 'return a + b');</span></code> <br> (Хорошо подходит для создания функций, полученных из сервера строкой <br> Через new lexicalEnvironment - всегда global, тоесть данная функция имеет доступ только к глобальным переменным)</li></ul>",
          description:"<ul><li>У функций могут быть <strong>Локальные</strong> переменные (объявленные внутри. Доступ к ним есть только внутри функции) и <strong>Внешние</strong> (объявленные не в функции, а снаружи. Доступ к ним имеется и за пределами функции)</li><li>У функций есть свойство <strong>name, length</strong> (указывает количество принимаемых аргументов)</li><li>Мы можем использовать функцию как объект, хранить в ней свойства, но они никак не влияют на её выполнение. Переменные – это не свойства функции и наоборот.</li><li><strong>NFE</strong> -  Named Function Expression. <br><code><span class='code-example'>let sayHi = function <strong>func</strong>s(who) { <br> if (who) { alert(`Hello, $&#123;who}`); <br> } else {  func('Guest'); //вызывает себя же } };</span></code></li><li>У функций могут быть принимаемые параметры и параметры по умолчанию <code><span class='code-example'>function func(who, <strong>age = 19</strong>) { return age }</span></code></li></ul>"
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
        title:"Object",
        shortDesc: "<ul><li>let user = new Object (конструктор объекта)</li><li>let user = {} (литерал объекта, литеральная нотация)</li></ul> <br><code><span class='code-example'>const user = { <br> name: 'Dima', <br>}; </span></code><br><ol><li><code><span class='code-example'>user.name = 'Petya'</span></code> // сработает, т.к. const не позволяет только полностью заменить объект.</li><li><code><span class='code-example'>let user = {} <br> user['likes birds']; <br> alert (user['like birds'])</span></code> // сработает изза [];</li><li><code><span class='code-example'> let user = { <br> name: 'Dima', <br> age: 29 <br> } <br> let key = prompt('что узнать', 'name'); <br> alert (user[key]);</span></code> // Dima</li><li><code><span class='code-example'> let fruit = prompt ('Какой фрукт', 'apple'); <br> let bag = { <br> [fruit] : 5 </span></code>//взяли имя из переменной <br> <code><span class='code-example'>} <br> alert (bag[fruit])</span></code> // 5; </li></ol>", 
        description: "Методы объекта: <ul><li> Object.keys(obj) – возвращает массив ключей. </li><li>Object.values(obj) – возвращает массив значений.</li><li>Object.entries(obj) – возвращает массив пар [ключ, значение].</li><li>Object.fromEntries(array) - превращает массив в объект </li><li>Object.getOwnPropertySymbols, - массив только символьных ключей.</li><li>Reflect.ownKeys(obj), возвращает все ключи.</li></ul> <br> Проверка наличия свойства в объекте <br> <code><span class='code-example'>let user = { name: 'Olga'} <br> alert ('name' <strong>in</strong> user) //true <br><br> <strong>for</strong> (key <strong>in</strong> user) { <br> alert(user[key]) <br> `} "
    }, 
    {
        title: "Клонирование/объединение объектов",
        shortDesc: "<code><span class='code-example'>let user  = { <br> name: 'Dima', <br> age: 29, <br> }; <br> let clone = {}; <br><ol><li>for (let key in user) { <br> clone[key] = user[key]  <br>} </li><li>Object.assign(clone, [user])</li><li>cloneDeep(obj) - Lodash</li><li>function <strong>cloneDeep</strong> (targetObj, srcObj) { <br> for(let key in srcObj) { <br> if(typeof (srcObj[key] != 'object') <br> targetObj[key] = srcObj[key]; <br> } else { <br> targetObj[key] = {}; <br> cloneDeep(targetObj[key], srcObj[key]); <br> }};</li><li>let clone = {...user}</li></ol>",
        description: ""
    }, 
    {
        title: "Сборка мусора",
        shortDesc: "<strong>Сборщик мусора</strong> - помечает корневые объекты, от них идет поссылкам и помечает другие объекты и т.д.. <br> Объекты, на которые нет внешних ссылок до корневых считаются недостижимыми и удаляются из памяти. <br><br> <strong>Оптимизации сборщика мусора</strong> <ol><li>Generational - делит объекты на новые и старые, старые проверяет реже</li><li>Incremental - поэтапно собирает мусор, делая много мелких задержек вместо одной большой</li><li>Idle - работает во время простоя процессора</li></ol>",
        description: ""
    },
    {
        title: "This",
        shortDesc: "This - это ключевое слово, указывающее на объект, который его вызвал. <br> <code><span class='code-example'>let user = { <br> name: 'Dima' <br> hi() { alert(this.name)} <br> by() { alert ('Пока')} <br> }; </span></code> <br><br> Важный момент! <br> <ul><li> При доступе к методу через точку и квадратные скобки в процессе присваивания без вызова метода потеряет this, потому как доступ будет осуществляться через ссылку <code><span class='code-example'>let hi = user.hi; <br> hi() </span></code> - выведет ошибку </li><li>Тоже самое с логическими операторами, при вычислении утрачивает this. <code><span class='code-example'> user.name == 'Dima' ? user.hi : user.by() </span></code> - Ошибка, т.к во время вычисления сразу не вызван метод, а получена ссылка на объект, Через ссылку утерян this</li> </ul>",
        description: "При use strict, если вызвать this  не у объекта будет ошибка. Без use strict , будет указывать на window"
    },
    {
        title: "Конструктор объектов",
        shortDesc: "Функция конструктор <br> <code><span class='code-example'>function User (name) { <br> this.name = name; <br> this.isAdmin = false; <br> } <br><br> let user = new User ('Dima'); </span></code> <br> Создает пустой this и возвращает заполненный в конце выполнения",
        description: "Если нужно проверить вызвана ли функция с помощью new, то нужно использовать <strong>new.target</strong><br><code><span class='code-example'>function User () { <br> alert(new.target) <br> } <br> User() //undefined <br> new User ()</span></code> // function User().... <hr> <ul><li> Можно вызвать без () если нет аргументов <code><span class='code-example'>let user = new User;</span></code></li><li> Любая функция может быть вызвана через new</li><li> Функция, вызванная через new возвращает объект this даже если нет return. Если указать явно return {любой: объект} то будет возвращен этот объект. Если просто написать return, то также вернется this</li>"
    },
    {
        title:"?.",
        shortDesc: "Опциональная цепочка. Позволяет избежать ошибки, когда обращаемся к вложенным объектам <br> <code><span class='code-example'>alert (user?.address?.street)</span></code> // <strong>undefined</strong> вместо ошибки, если бы были просто точки <br><br> Единственное условие, чтобы был создан первый объект в цепочке <strong>user</strong>.school.class",
        description: ""
    },
    {
        title: "Symbol",
        shortDesc: "Это примитив, использующийся для создания уникальных идентификаторов. <br><br> Если объект используется во многих частях кода, и возникла необходимость в него что-то добавить (напр. логи), то мы используем Symbol, так как он не виден в методах и циклах, что не сломает существующую логику <br><br> Символы при простом <strong>локальном</strong> создании типа <code><span class='code-example'>let name = Symbol('Kanye West')</span></code>: <ul><li>Всегда уникальны, даже с одинаковым именем  <code><span class='code-example'>Symbol('Kanye West') === Symbol('Kanye West') // false </span></code></li><li>Не виден методам и циклам типа object.keys, for in  и т.д.</li></ul> <code><span class='code-example'>alert (name.description) // Kanye West // Если нужен доступ к значению символа</span></code> <br> Если необходимо создать Symbol с уникальным неповторимым именем, то мы создаем его через <strong>глобальный</strong> реестр символов: <ul><li><code><span class='code-example'> let id = Symbol.<strong>for</strong>('id') </span></code> // создает символ в реестр, если такого нет </li> <li> <code><span class='code-example'>let idAgain  = Symbol.for('id') </span></code> //Теперь только читает и записывает его в переменную, так как уже создан <br> <code><span class='code-example'> alert (id === idAgain) </span></code> //true /это один и тот же символ т.к глобальный </li><li><code><span class='code-example'>alert(Symbol.<strong>keyFor</strong>('idAgain'))</span></code> // возвращает имя глобального символа, записанного в переменную idAgain </li></ul> Запись в объект: <code><span class='code-example'>let user = { name: 'Вася' }; <br>let id = Symbol('id'); <br>user[id] = 1; //Запись через [] <br> alert( user[id] )</span></code> // доступ через []",
        description: "Существуют системные символы, они отвечают за поведение объектов, например: <ul><li>Symbol.hasInstance</li><li>Symbol.toPrimitive</li><li>Symbol.iterator (вызов for of сперва вызовет эту функцию) - <code><span class='code-example'>let range = { from: 1,   to: 5 }; <br>range[Symbol.iterator] = function() { <br> return {     //возвращает объект с методом next() <br> current: this.from, <br> last: this.to, <br> next() { <br> if (this.current <= this.last) { //done: false, value - результат итерации <br> return { done: false, value: this.current++ }; <br> } else { <br> return { done: true };   //done: true прекращает цикл <br> }}}; };</span></code></li><li>[Symbol.isConcatSpreadable] - у объекта указывает что объект добавляет числовые значения в массив методом concat</li><li>[Symbol.asyncIterator] (for await..of вызывает этот метод один раз в начале) - <code><span class='code-example'>let range = { <br> from: 1, <br> to: 5, <br> <strong>[Symbol.asyncIterator]</strong> () { <br> return { <br> current: this.from, <br>   last: this.to, <br> async next() { </span></code> / /next() вызывается на каждой итерации цикла for await..of <br><code><span class='code-example'>await new Promise(resolve => setTimeout(resolve, 1000));  <br> if (this.current <= this.last) { <br> return { done: false, value: this.current++ }; <br> } else {return { done: true };}}};} <br> } <hr> (async () => { <br>  for await (let value of range) { // (4)alert(value); // 1,2,3,4,5}  } <br> )()"
    }, 
    {
        title: "Объект в примитив",
        shortDesc: "Существует три типа преобразований объекта в примитив: <ol><li>String - когда объект передается в alert и другие строковые операции</li><li>Number - для математических операций и сравнений</li><li>Default - для некоторых операций, в которых нет точной уверенности</li></ol> Алгоритм преобразования таков: <ul><li>Сперва вызывается современный метод obj[Symbol.toPrimitive](hint)</li><li>если его нет то обращается к устаревшим методам toString() и valueOf()</li></ul>",
        description: "<code><span class='code-example'>let user = { <br> name: 'John', <br> money: 1000, <br> [Symbol.toPrimitive](hint) { </span></code> // если есть данный метод то вызывает его <br><code><span class='code-example'>return hint == 'string' ? `{name: '$&#123this.name}'}` : this.money; }  }; <hr> let user = { name: 'John', <br> money: 1000, </span></code>&emsp;&emsp; если нет метода [Symbol.toPrimitive](hint) то обращается к старым методам <code><span class='code-example'><br> toString() { </span> // для хинта равного 'string' <br> <span class='code-example'> return `{name: '$&#123this.name}'}`; <br> }, <br> valueOf() {  </span> // для хинта равного 'number' или 'default' <br> <span class='code-example'>return this.money; <br> }};"
    },
    {
        title: "Array",
        shortDesc: `<strong>Массивы</strong> - упорядоченная коллекция данных. Как и объекты по ссылке. <br> Хранятся в неприрывной области памяти, поэтому быстро работают. <br> <code><span class='code-example'><ul><li>let arr = new Array(3) - Создать пустой массив длиной 3 элемента;</li><li> let arr = new Array('a', 'b') - Создать массив ['a','b'];</li><li>let arr = [];</li></ul> let fruits = ['Яблоко', 'Апельсин', 'Слива']; <br> fruits[3] = 'Лимон';</span></code> // Записали Лимон четвертым в массив <br> <code><span class='code-example'>alert( fruits.length ); </span></code>// 4<hr> <ul><li>fruits.<strong>pop</strong>() // удаляет последний элемент массива и возвращает его</li><li>fruits.<strong>push</strong>('Груша'); // добавляет элемент в конец массива</li><li>fruits.<strong>shift</strong>() // удаляет первый элемент массива и возвращает его</li><li>fruits.<strong>unshift</strong>('Яблоко', Груша'); //добавляет элементы в начало массива</li></ul><hr>let arr = ['Я', 'изучаю', 'JavaScript', 'тут]; <ul><li>arr.<strong>splice</strong>(0, 3, 'Давай', 'танцевать'); // ['Давай', 'танцевать', 'тут'] //удалить 3 первых элемента и заменить их другими, возвращает массив удаленных элементов ([я, изучаю, JavaScript])</li><li>arr.<strong>splice</strong>(2, 0, 'сложный', 'язык'); // вставить элементы  без вырезания</li><li>arr.<strong>splice</strong>(1, 1) // начиная с позиции 1, удалить 1 элемент ;</li><li> arr.<strong>concat</strong>([2, 'hello']) // копирует массив arr и добавляет в него все элементы массивов из аргументов, или других типов данных. Не изменяя arr </li><li> let arr = ['t', 'e', 's', 't'];  alert( arr.<strong>slice</strong>(1, 3) ) // e, s // копирует с 1 до 3 // если slice без аргументов - скопирует весь массив </li><li>arr.<strong>indexOf</strong>(item, from) ищет item, начиная с индекса from, и возвращает индекс или -1 </li><li> arr.<strong>lastIndexOf</strong>(item, from) – то же самое, но ищет справа налево. </li>
        <li> arr.<strong>includes</strong>(item, from) – ищет item, начиная с индекса from, и возвращает true, если поиск успешен. </li><li>let arr = [1, 2, 3, 4, 5].<strong>reverse</strong>(); // 5,4,3,2,1 </li><li>let names = 'Вася, Петя, Маша'.<strong>split</strong>(', '); //['Вася', 'Петя', 'Маша'] </li><li>let arr = ['Вася', 'Петя', 'Маша'].<strong>join</strong>(';');  // Вася;Петя;Маша </li><li>Array.<strong>isArray</strong>([]); // true // проверяет на массив </li><li>arr.<strong>some</strong>(fn)/arr.<strong>every</strong>(fn) // возвращают true или false если в массиве есть совпадение <br>(fn - функция, например: const fun = (element) => element % 2 === 0; &emsp; &emsp; console.log(array.some(even)); //true ) </li><li> Array.<strong>from</strong>({ 0: "Hello",1: "World",   length: 2 }); // проверяет объект, является ли он псевдомассивом или итерируемым и делает массив. (итерируемый объект, это тот у которого есть [Symbol.iterator], а псевдомассив это объект у которого есть индексы и свойство length, при этом они могут и не быть друг другом например неитерируемый псевдомассив)</li><li>arr.<strong>reverse</strong>() - изменяет порядок элементов массива на обратный</li></ul>`,
        description: ""
    },
    {
        title: "Перебор массива",
        shortDesc: `Перебор массива: <ol><li><strong>for</strong> (let i = 0; i < arr.length; i++) {  alert( arr[i] );  } </li><li> <strong>for</strong> (let fruit <strong>of</strong> fruits) { alert( fruit ); } </li><li> <strong>for in</strong> - не рекомендуется, тк это метод ообъектов, работает медленно, выводит лишнее </li><li>arr.<strong>forEach</strong>(function(item, index, array) { // ... делать что-то с каждым item }); </li><li> let result = arr.<strong>find</strong>(function(item, index, array) { item.id == 1 }); //возвращает найденный элемент или undefined </li><li> let result = arr.<strong>findIndex</strong>(function(item, index, array) { item.id == 1 }); //возвращает индекс или -1 </li><li>let results = arr.<strong>filter</strong>(function(item, index, array) { item.id < 3 }); возвращает массив найденных элементов или undefined</li>
        <li>let result = arr.<strong>map</strong>(function(item, index, array) { // возвращает массив результатов выполнения функции к каждому элементу }); </li><li> <code><span class='code-example'>function compareNumeric(a, b) { if (a > b) return 1; if (a == b) return 0; if (a < b) return -1; }  <br>let arr = [ 1, 2, 15 ];  <br>arr.<strong>sort</strong>(compareNumeric)</span></code> </li><li><code><span class='code-example'>let arr = [1, 2, 3, 4, 5]; <br>let result = arr.<strong>reduce</strong>((sum, current) => sum + current, 0); </span></code> // 15 // Результат предыдущего вызова передается в следующий и аккумулирует его arr.<strong>reduceRight</strong> - тоже самое только справа налево`,
        description: ""
    }, 
    {
        title: "Map",
        shortDesc: `Map - коллекция ключ-значение, с ключом любого типа <ol><li> <strong>new Map</strong>() – создаёт коллекцию.</li><li> map.<strong>set</strong>(key, value) – записывает по ключу key значение</li><li>map.<strong>get</strong>(key) – возвращает значение по ключу </li><li>map.<strong>has</strong>(key) – проверка ключа, если есть true; </li><li> map.<strong>delete</strong>(key) – удаляет элемент по ключу key.</li><li>map.<strong>clear</strong>() – очищает коллекцию от всех элементов.</li><li>map.<strong>size</strong> – возвращает текущее количество элементов</li></ol>.
        Перебор map: <ul><li> map.<strong>keys</strong>() – возвращает итерируемый объект по ключам, </li><li> map.<strong>values</strong>() – возвращает итерируемый объект по значениям, </li><li> map.<strong>entries</strong>() – возвращает итерируемый объект по парам вида [ключ, значение] - (по умолчанию в for..of.) </li><li> <strong>for</strong> (let entry <strong>of</strong> recipeMap) { // } </li><li> recipeMap.<strong>forEach</strong>((value, key, map) => { // } </li></ul> При вставке сохраняется порядок сохранения ключей <br> let map = <strong>new Map</strong>(Object.entries(obj)); - создает map из массива ключей со значениями <br> let obj = Object.<strong>fromEntries</strong>(map.entries()) - создали object из массива ключ-значение map'а`,
        description: ""
    }, 
    {
        title: "Set",
        shortDesc: `Set - вид коллекции как массив, только с уникальными значениями <ol><li> <strong>new Set</strong>(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set. </li><li> set.<strong>add</strong>(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set. </li><li> set.<strong>delete</strong>(value) – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false. </li><li>set.<strong>has</strong>(value) – возвращает true, если значение присутствует в множестве, иначе false. </li><li> set.<strong>clear</strong>() – удаляет все имеющиеся значения. </li><li> set.<strong>size</strong> – возвращает количество элементов в множестве.</li></ol>
        Перебор <br> let set = new Set(["апельсин", "яблоко", "банан"]);
        <ul><li> <strong>for</strong> (let value <strong>of</strong> set) alert(value); </li><li> set.<strong>forEach</strong>((value, valueAgain, set) => {alert(value); });</li><li>set.<strong>values</strong>() – возвращает перебираемый объект для значений, </li><li> set.<strong>keys</strong>() – также как и values() возвращает перебираемый объект для значений, создан для совместимости с map </li><li> set.<strong>entries</strong>() – возвращает перебираемый объект для пар вида [значение, значение], присутствует для обратной совместимости с Map</li></ul>`,
        description: ""
    },
    {
        title: "WeakMap, WeakSet",
        shortDesc: "WeakMap - Коллекция пар ключ-значение, где в качестве ключей только объекты. <br> WeakSet тоже в качестве значений только объекты. <hr> Хранит ссылки на объекты в 'слабом режиме', тоесть если на объект больше нет ссылок с других источников, то WeakMap позволит Сборщику Мусора его удалить. <br> Также используется для кэширования данных, что позволяет функции не выполнятся многократно, а брать результат из кэша. <br> WeakMap <ol><li>В качестве ключей только объекты </li><li>Есть только методы: get, set, delete, has </li><li> Используется как дополнительное хранилище, так как при удалении объекта, который используется в качестве ключа, удаляется и из weakMap сборщиком мусора. </li><li> Часто используется для кэширования объекта и быстрого удаления </li></ol>",
        description: "",
    }, 
    {
        title: "Деструктуризация",
        shortDesc: "Деструктуризация - синтаксис, который позволяет упрощенно присваивать элементы массивов и объектов переменным. <ol><code><span class='code-example'><li> let [name1 = 'Default', ,name3=prompt('name?'), ...rest] = ['Julius', 'Caesar', ,'Dima', 'Consul'];</li><li> for (let [key, value] of Object.entries(user)) { alert(`$&#123;key}:$&#123;value}`);</li><li>let {title = 'default', width, height:newName = 'Ya'} = { title: 'Menu',   width: 100,   height: 200 };</li><li>let options = { title: 'My menu',   items: ['Item1', 'Item2'] }; <br> function showMenu({title = 'Untitled', width = 200, height = 100, items = []}) { <br> alert( `&#123;title} $&#123;width} $&#123;height}` ); <br> showMenu(options)} // My menu 200 100 </li></span></code></ol>",
        decription: ""
    }, 
    {
        title: "Date",
        shortDesc: "<ol><li> <strong>new Date</strong> (); - создает объект Дата с текущим временем </li><li> <strong>new Date(2011, 0, 1, 0, 0, 0, 0)</strong>; - создает дату с указанным временем (месяц 0 - январь) </li><li><strong>getFullYear(), getMonth(), getDate(), getHours(), getMinutes(), getSeconds(), getMilliseconds()</strong> - возвращают соответсвующее время. (<strong>getUTCFullYear(), getUTCMonth(), getUTCDay()</strong>) соотвественно в ЮТС </li><li> <strong>getDay</strong>() - возвращает день недели (0-воскресенье) </li><li> <strong>getTime</strong>() - для заданной даты возвращает таймстамп в мс (Быстро работает, так как нет преобразования дат) </li><li> <strong>getTimezoneOffset</strong>() - разница в местном времени и ЮТС </li><li> <strong>setFullYear(year, [month], [date]), setMonth(month, [date]), setDate(date) ,setHours(hour, [min], [sec], [ms]), setMinutes(min, [sec], [ms]), setSeconds(sec, [ms]), setMilliseconds(ms), setTime(milliseconds)</strong>  (также есть эти же методы с ЮТС вариантом, кроме setTime() </li><li> <strong>Date.now()</strong> - текущее количество миллисекунд с 1.01.1970 - используется чаще всего для просчетов </li><li> <strong>Date.parse</strong>('2012-01-26T13:51:50.417-07:00'); // 1327611110417 (таймстамп)",
        description: ""
    },
    {
        title: "JSON",
        shortDesc: "JSON (JavaScript Object Notation) – это общий формат для представления значений и объектов. <ul><li>JSON.<strong>stringify</strong>(obj) - преобразовывает объект в строку (называется JSON-форматированный или сериализованный) </li><ul><li>Обращается к методу toJSON объектов.</li><li> Поддерживает Объекты, Массивы, строки, числа, логические значения true/false, null.</li><li>Пропускает *Свойства-функции (методы). *Символьные свойства. *Свойства, содержащие undefined.</li><li>НЕ конвертирует циклические объекты, то-есть указывающие друг на друга</ul></li><li><code><span class='code-example'>функция реплейсер: <br>alert( JSON.stringify(myObject, function replacer(key, value) { <br> alert(`$&#123key}: $&#123value}`);<br> return (key == 'occupiedBy') ? undefined : value; })); </span></code> //Если ключ не occupiedBy то серилизуем ключ, иначе возвращаем undefined</li><li>JSON.<strong>parse</strong>(str, [reviver]) - декодирует JSON строку в объект <code><span class='code-example'><br>функция ревьюер:<br> let str = '{'title':'Conference','date':'2017-11-30T12:00:00.000Z'}'; <br>let meetup = JSON.parse(str, function(key, value) { <br> if (key == 'date') return new Date(value);</span></code> // Если ключ == 'date, при преобразовании из JSON создадим объект Date как значение <br><code><span class='code-example'>return value; });</span></code></li></ul>",
        description: ""
    },
    {
        title: "Рекурсия, стек",
        shortDesc: "Рекурсия и стек - прием программирования, в котором функция вызывает сама себя, передавая измененный параметр, до выполнения определенного условия. <ol><li> Контекст выполнения - структура данных, которая содержит информацию о месте в коде, локальных переменных функции, значение this и другую информацию о функции. </li><li> Глубина рекурсии - количество вложенных вызовов.</li></ol> <code><span class='code-example'> function pow(x, n) { <br> if (n == 1) { <br> return x;<br> } else { <br> return x * pow(x, n - 1);}} </span></code>",
        description: ""
    },
     {
         title: "Оператор расширен/Остаточные парам",
         shortDesc: `<ol>
                        <li>Остаточные параметры ...args 
                            <ul>    
                                <li>в конце списка аргументов функции</li>
                                <li> function showName(firstName, lastName, ...titles) { }</li>
                            </ul>
                        </li>
                        <li>старый метод arguments - псевдомассив, содержал все аргументы вместе с остаточными. хуже.</li>
                        <li>Оператор расширения ... в вызове функции или где-либо ещё - Наоборот раскрывает массив <br><code><span class='code-example'> let arr1 = [1, -2, 3, 4]; <br> let arr2 = [8, 3, -8, 1];<br> 
                                <ul>
                                    <li> alert( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25 </li>
                                    <li> let merged = [0, ...arr, 2, ...arr2]; // 0,3,5,1,2,8,9,15 </li>
                                    <li> let str = 'Привет';   alert( [...str] ); // П,р,и,в,е,т </li>
                                </ul>
                    </ol>`,
        description: ""
     },
     {
         title: "Замыкание",
         shortDesc: "Замыкание - это комбинация функции и лексического окружения, в котором эта функция была определена. Через ссылку environment функция получает доступ к переменным окружения где была создана. Создается каждый раз при создании функции. <br><br> У каждой функции, блока кода, скрипта есть связанный скрытый объект LexicalEnvironment, он состоит из двух частей: <ul><li> Environment Record - Объект в котором в свойствах - все локальные переменные и this </li><li> Ссылка на внешнее лексическое окружение - окружение снаружи текущих фигурных скобок </li></ul> Переменная – это свойство специального внутреннего объекта, связанного с текущим выполняющимся блоком/функцией/скриптом и мы на самом деле работаем с ним. <br> Новое лексическое окружение функции создаётся каждый раз, когда функция выполняется. Также для каждого блока кода типа if {} и для каждой итерации циклов",
         description: ""
     },
     {
         title: "var",
         shortDesc: "var - переменная <ul><li>не имеет блочной области видимости</li><li> ограничивается только функцией или скриптом.</li><li> Объявляется (инициализируется) всегда вначале исполнения функции или скрипта движком, но значение ей присваивается по мере дохождения кода.</li></ul>",
         description: ""
     },
     {
         title: "Глобальный объект",
         shortDesc: "Глобальный объект - в браузере <strong>window</strong>, в Node.js - <strong>global</strong><br><strong>globalThis</strong> - везде. В нем хранятся встроенные объекты, свойства окружения (innerHeight...)",
         description: ""
     },
     {
         title: "setTimeout/setInterval",
         shortDesc: "<code><span class='code-example'> function sayHi(phrase, who) { alert( phrase + ', ' + who ); } <br> let timerId = <strong>setTimeout</strong>(sayHi, 1000, 'Привет', 'Джон')</span></code> - вызывает функцию однократно <br> <code><span class='code-example'>clearTimeout(timerId);</span></code> - очищает таймер <br> <code><span class='code-example'> let timerId = <strong>setInterval</strong>(() => alert('tick'), 2000);</span></code> - вызывает функцию с интервалом <br><br>Рекурсивный setTimeout <br><code><span class='code-example'> let timerId = setTimeout(function tick() { <br> alert('tick'); <br> timerId = setTimeout(tick, 2000); <br> }, 2000);</span></code> <br> setImmediate - в Node.js",
         description: ""
     },
     {
         title: "Декоратор",
         shortDesc: `<strong>Декоратор</strong> - функция обертка, которая расширяет функционал переданной в нее функции.<br>
         <code><span class='code-example'>function slow(x) { <br> // ресурсоемкие вычисления <br> return x; } <hr> function <strong>cachingDecorator</strong>(func) { <br> let cache = new Map(); <br> return function(x) { <br> if (cache.has(x)) {       // если кеш содержит такой x, <br> return cache.get(x);     // читаем из него результат <br> } <br> let result = func(x);   // иначе, вызываем функцию <br> cache.set(x, result);    // и кешируем (запоминаем) результат <br> return result  <br> }; } <br><br> slow = cachingDecorator(slow); <br> alert( slow(1) ); // slow(1) кешируем  <br> alert( "Again: " + slow(1) ); // возвращаем из кеша </span></code>`,
         description: ""
     },
     {
         title: "call/apply/bind",
         shortDesc: "func(1, 2, 3);<hr> func.<strong>call</strong>(obj, 1, 2, 3) - вызывает функцию с явно установленным this и аргументами <br> func.<strong>apply</strong>(context, args); - вызывает функцию с явно установленным this,  принимает псевдомассив аргументов. <br> let funcUser = func.<strong>bind</strong>(user) - фиксирует this, даже, если он изменится, то останется зафиксированный. <br> Также можно передать аргументы, они привяжутся и будут всегда передаваться первыми (let double = mul.<strong>bind(null, 2)</strong>;) <br> если нужно зафиксировать контекс для всех методов - <strong>_.bindAll(obj) lodash</strong><br> роеализация bindAll <br><code><strong> for (let key in user) { <br> if (typeof user[key] == 'function') { <br> user[key] = user[key].bind(user); <br> }} </span></code>",
         description: ""
     }
        

]