export const titlesReactWithDescrition =[
    {
        title: "Подключение",
        shortDesc: "// <b>Примечание: при деплое на продакшен замените «development.js» на «production.min.js». </b> <br><br> <code><span class='code-example'>&lt;script src='https://unpkg.com/react@17/umd/react.development.js' crossorigin>&lt;/script><br>&lt;script src='https://unpkg.com/react-dom@17/umd/react-dom.development.js' crossorigin>&lt;/script><br><br>// <b> Загрузим наш React-компонент. </b><br>&lt;script src='like_button.js'>&lt;/script> <hr> <b>В HTML создаем контейнер для реакта</b> <br>&lt;div id='like_button_container'>&lt;/div> <br><br><b>Подключаем react к html</b> <br>const domContainer = document.querySelector('#like_button_container'); <br>ReactDOM.render(e(LikeButton), domContainer);</span></code>",
        description: "Чтобы добавить jsx <br> <code><span class='code-example'>&lt;script src='https://unpkg.com/babel-standalone@6/babel.min.js'>&lt;/script> </span></code> <br>Теперь синтаксис JSX доступен внутри каждого &lt;script>-тега, у которого есть атрибут type='text/babel'<br><br> Создать проект в с реактом и jsx мгновенно (если есть create-react-app) - <code><span class='code-example'>npx create-react-app my-app<br>cd my-app<br>npm start</span></code>"
    },
    {
        title: "Компоненты/пропсы",
        shortDesc: "Компоненты: <ul><li>Функциональные: <br><code><span class='code-example'>function Welcome(props) { <br> return &lt;h1>Привет, {props.name}</h1>; <br>}</span></code< </li><li> Классовые: <code><span class='code-example'>class Welcome extends React.Component { <br>constructor(props) {<br> super(props); <br> this.state = { hasError: false }; <br> this.handleClick = this.handleClick.bind(this); <br> this.listRef = React.createRef(); <br> }<br>  render() { <br> return &lt;div ref={this.listRef}>{this.props.name}</div> <br> } } </span></code></ul>",
        desctiption: ""
    },
    {
        title: "Жизненный цикл",
        shortDesc: "<ol><li>constructor - начальная инициализация компонента</li><li>static getDerivedStateFromProps(props, state) - вызывается перед рендерингом компонента</li><li>render - рендеринг компонента</li><li>componentDidMount() - сразу после рендеринга</li><li>componentWillUnmount() - перед удалением компонента из DOM</li></ol><br><br> Еслит в компоненте происходят обновления после первоначального рендеринга, то вызываются такие этапы жизненного цикла компонента: <ol><li>static getDerivedStateFromProps(props, state)</li><li>shouldComponentUpdate(nextProps, nextState) - вызывается каждый раз при обновлении props или state, В качестве параметра передаются новый объект props и state. По умолчанию возвращает true, если вернуть false то компонент больше не будеот обновляться</li><li>render() -  рендеринг компонента (если shouldComponentUpdate возвращает true)</li><li>getSnapshotBeforeUpdate(prevProps, prevState) - перед непосредственным обновлением компонента, позволяет получить информацию из DOM перед возможным обновлением. Можно вернуть значение, которое будет передано в componentDidUpdate</li><li>componentDidUpdate(prevProps, prevState, snapshot) - вызывается сразу после обновления компонента (если shouldComponentUpdate возвращает true). В качестве параметров передаются старые значения объектов props и state. Третий параметр - значение, которое возвращает метод getSnapshotBeforeUpdate</li></ol><br>Изменение состояния компонента: <code><span class='code-example'><br>this.setState({ <br>counter: this.state.counter + this.props.increment,<br> }); <br><br>this.setState((state, props) => ({   // функция гарантированно получает предыдущее состояние первым аргументом <br> counter: state.counter + props.increment<br> })); </span></code>",
        description: ""
    },
     {
         title: "Обработка событий",
         shortDesc: "<table><thead><tr><td>В html</td><td>В react</td></tr></thead><tbody><tr><<td><code><span class='code-example'>&lt;button onclick='activateLasers()'><br>Активировать лазеры <br>&lt;/button></span></code></td><td><code><span class='code-example'><code><span class='code-example'>&lt;button onClick={activateLasers}><br>Активировать лазеры <br>&lt;/button></span></code></td><td>Навешивание события</td></tr><tr><td><code><span class='code-example'>&lt;form onsubmit='console.log('Отправлена форма.'); return false'></span></code></td><td><code><span class='code-example'>function handleSubmit(e) { <br> e.preventDefault(); <br>console.log('Отправлена форма.');<br> }</span></code></td><td>Отмена события</td></tr></tbody></table> <br> Привязывание метода: <ul><li><code><span class='code-example'>handleClick() { <br> this.setState(prevState => ({ <br> isToggleOn: !prevState.isToggleOn <br>})); } <br><br><b>В конструкторе - this.handleClick = this.handleClick.bind(this);</b></span></code></li><li><code><span class='code-example'>handleClick = () => { <br> console.log('значение this:', this);  //<b> таким методом привязывается this, экспериментальный метод</b><br> }</span></code></li><li><code><span class='code-example'> &lt;button onClick={<b>() =></b> this.handleClick()}> //<b>Такой метод тоже гарантирует привязку, но если он передается пропом в дочерний компонент - будет много перерендеров</b></span></code></li></ul>",
         description: ""
     }, 
     {
         title: "Условный рендеринг", 
         shortDesc: "<code><span class='code-example'><ol><li>function Greeting(props) { <br> const isLoggedIn = props.isLoggedIn; <br> if (isLoggedIn) { <br> return &lt;UserGreeting />; <br>} <br> return &lt;GuestGreeting />; <br> } <br><br><b>&lt;Greeting isLoggedIn={false} /></b></li><li>class LoginControl extends React.Component { <br> ...<br><br>render() { <br> const isLoggedIn = this.state.isLoggedIn; <br> let button; <br> if (isLoggedIn) { <br>button = <LogoutButton onClick={this.handleLogoutClick} />; <br> } else { <br> button = <LoginButton onClick={this.handleLoginClick} />; <br> }}<br>return (<br> <b>&lt;div>{button}&lt;/div></b><br>)</li><li>function Mailbox(props) { <br> const unreadMessages = props.unreadMessages; <br>return (<br>&lt;div><br>&lt;h1>Здравствуйте!&lt;/h1><br><b>{unreadMessages.length > 0 &&</b> <br> &lt;h2> У вас {unreadMessages.length} непрочитанных сообщений. &lt;/h2> <br> <b>}</b> <br> &lt;/div> <br>);}</li><li>render() {<br> const isLoggedIn = this.state.isLoggedIn; <br> return (<br>&lt;div> <br> Пользователь <b>{isLoggedIn ? 'сейчас' : 'не'}</b> на сайте. <br> &lt;/div> <br> );}</li></ol></span></code>",
         description: ""
     },
     {
         title: "Формы",
         shortDesc: "В реакте &lt;input>, &lt;textarea> и &lt;select> при изменении сами должны менять свой state. Тоесть при изменении вызывают setState и меняют свой value, такие компоненты называются '<b>управляемые</b>' <br><code><span class='code-example'>class NameForm extends React.Component { <br> constructor(props) {super(props);<br>this.state = {value: ''};<br><br>this.handleChange = this.handleChange.bind(this);<br>this.handleSubmit = this.handleSubmit.bind(this);<br>}<br><br>handleChange(event) {<br>this.setState({value: event.target.value});<br>}<br><br>handleSubmit(event) {<br>alert('Отправленное имя: ' + this.state.value);<br>event.preventDefault();<br>}<br><br>render() {<br>return (<br>&lt;form onSubmit={this.handleSubmit}><br>&lt;label><br>Имя:<br><br>&lt;input type='text' <b>value={this.state.value} onChange={this.handleChange}</b> /><br> или &lt;textarea <b>value={this.state.value} onChange={this.handleChange}/> </b> <br> или &lt;select <b>value={this.state.value} onChange={this.handleChange}></b> <br>&nbsp;&lt;option value='grapefruit'>Грейпфрут</option>... <br><br>&lt;/label><br>&lt;input type='submit' value='Отправить' /><br>&lt;/form><br>);}}</span></code> <hr> Редко используются неуправляемые компоненты, тоесть те кторые хранят свои состояния в DOM <br> <code><span class='code-example'>class NameForm extends React.Component { constructor(props) {<br>super(props);<br>this.handleSubmit = this.handleSubmit.bind(this);<br>this.input = <b>React.createRef()</b>;<br>}<br><br>handleSubmit(event) {<br> alert('Отправленное имя: ' + <b>this.input.current.value</b>);<br>event.preventDefault();<br>}<br><br>render() {<br>return (<br>&lt;form onSubmit={this.handleSubmit}><br>&lt;label><br>Имя:<br>&lt;input type='text' <b>ref={this.input}</b> /><br>&lt;/label><br>&lt;input type='submit' value='Отправить' /><br></form><br>);<br>}}</span></code> <hr> &lt;input type='file'> всегда является не управляемым компонентом, тоесть работает через DOM, доступ  к файлу осуществляется через <b>$&#123;this.fileInput.current.files[0]</b>.name}",
         description: ""
    },
    {
        title: "Композиция компонентов",
        shortDesc: "Это разделение функциональности на мелкие компоненты и соединение их воедино с помощью общего компонента контейнера. Желательно перенести все состояния компонентов во внешний statefull компонент, а их сделать stateless, также использовать { props.children } для рендеринга вставленного компонента <br><br><code><span class='code-example'>function Dialog(props) { return (<br><FancyBorder color='blue'><br>&lt;h1 className='Dialog-title'><br>{props.title}<br>&lt;/h1><br>&lt;p className='Dialog-message'><br>{props.message}<br></p><br>{props.children}<br></FancyBorder><br>);} <hr>And use this component inside the parent component<br><br>  &lt;Dialog <br>&nbsp; title='Программа исследования Марса' <br>&nbsp;message='Как к вам обращаться?'> <br>&nbsp;&lt;input value={this.state.login} <br>&nbsp; onChange={this.handleChange} <br>/> <br> &nbsp;&nbsp;&lt;button onClick={this.handleSignUp}> <br>&nbsp;&nbsp;Запишите меня! <br>&nbsp;&nbsp;&lt;/button><br>&lt;/Dialog></span></code>",
        description: ""
    },
    {
        title: "HOC/Suspense",
        shortDesc: "HOC (higher order component) - Компонент высшего порядка, тоесть обычные компоненты возвращают UI, составленный из пропсов, а HOC возвращают преобразованный компонент, который был в него помещен. <br><br>Например Suspense HOC получает используется для отображения полосы загрузки, пока загружается помещенный в него ленивый компонент <br> <code><span class='code-example'>import React, { Suspense } from 'react'; <br><br> const OtherComponent = React.lazy(() => import('./OtherComponent'));<br><br>function MyComponent() {<br>return (<br>&lt;div><br><b>&lt;Suspense</b> fallback={&lt;div>Загрузка...&lt;/div>}><br>&lt;OtherComponent /><br><b>&lt;/Suspense></b><br>&lt;/div><br>);<br>} </span></code>",
        description: ""
    },
    {
        title: "Context",
        shortDesc: `Позволяет передать пропсы в компонент, не пробрасывая их вниз по цепочке от родителя <br><br> <ol><li>Создаем контекст: <br><code><span class='code-example'>export const ThemeContext = <b>React.createContext</b>({ <br>theme: themes.dark, //Данные по умолчанию <br> toggleTheme: () => {}, <br>}); </span></code></li><li> Пробрасываем контекст через провайдер в компоненты (передавая значение): <br><br><code><span class='code-example'> import {ThemeContext, themes} from './theme-context';import ThemeTogglerButton from './theme-toggler-button'; <br><br>class App extends React.Component {<br>constructor(props) {<br>super(props);<br><br>        this.toggleTheme = () => {<br>this.setState(state => ({ theme: state.theme === themes.dark ? themes.light : themes.dark, }));<br>};<br><br>
this.state = {          // Состояние хранит функцию для обновления контекста,<br>theme: themes.light,          // которая будет также передана в Provider-компонент.<br>toggleTheme: this.toggleTheme,<br>};<br>}<br><br>render() {<br>return (<br>&lt;ThemeContext.<b>Provider</b> value={this.state}>        <b>// Всё состояние передаётся в качестве значения контекста<br></b>&lt;Content /><br><&lt;ThemeContext.Provider><br>);<Br>}}</span></code></li><li>Теперь в компоненте подписываемся на контекст: <br><br> <code><span class='code-example'>import {ThemeContext} from './theme-context'; <br><br>function ThemeTogglerButton() { <br> return ( <br> &lt;ThemeContext.<b>Consumer</b>>  <br></span></code><ol><li>В функциональном компоненте на контекст подписываются с помощью Consumer</li><li>Если б был классовый компонент то после render() можно ThemeTogglerButton.contextType = ThemeContext || или перед render() static contextType = MyContext</li><li> Доступ тогда будет через this.context</li><li>С помощью хука в функц.компоненте: const {theme, toggleTheme } = useContext(ThemeContext)</li></ol><code><span class='code-example'>  {({theme, toggleTheme}) => ( <br>&lt;button <br>onClick={toggleTheme}    // ThemeTogglerButton получает из контекста не только значение UI-темы, но и функцию toggleTheme. <br>style={{backgroundColor: theme.background}}> <br> Toggle Theme<br>&lt;/button>)} <br> &lt;/ThemeContext.Consumer>);} <br><br> export default ThemeTogglerButton;</span></code></li></ol> </span></code><hr> Подписка на контекст навсегда заставляет компонент перерендериваться при изменении значений контекста`,
    descrition: ""
    },
    {
        title: "ref/DOM",
        shortDesc: `<code><span class='code-example'>class CustomTextInput extends React.Component {<br>constructor(props) {<br>super(props);<br><b>this.textInput = React.createRef();</b> // создадим реф в поле 'textInput' для хранения DOM-элемента <br>this.focusTextInput = this.focusTextInput.bind(this); <br>}<br><br>focusTextInput() {<br>this.textInput.current.focus(); // Установим фокус на текстовое поле с помощью чистого DOM API // Примечание: обращаемся к "current", чтобы получить DOM-узел <br>}<br><br>render() {<br>return (<br><div><br><input<br>type="text"<br><b>ref={this.textInput} </b>/><br><input<br>type="button"<br>value="Фокус на текстовом поле"<br>onClick={this.focusTextInput}<br>/><br></div><br>);}}</span></code><hr> ref - должен ссылаться или на DOM элемент или на классовый компонент, если будет сслыаться на функциональный компонент не сработает (можно использовать только внутри функционального компонента) <br><code><span class='code-example'>const textInput = <b>useRef</b>(null); <br><br>return ( <br> &lt;div> <br> &lt;input <br> type="text" <br><b>ref={textInput}</b> /> ....</span></code><br><br> Для функционального компонента можно использовать перенаправление рефов: <br><code><span class='code-example'>const FancyButton = React.<b>forwardRef</b>((props, ref) => ( &lt;button <b>ref={ref}</b> className="FancyButton"> <br> {props.children} <br>&lt;/button>));<br> // Теперь реф будет указывать непосредственно на DOM-узел button:<br>const ref = React.<b>createRef()</b>;<br>&lt;FancyButton <b>ref={ref}</b>>Click me!&lt;/FancyButton>;</span></code><hr>CallBack реф это использование функции вместо объекта реф (нюанс: функция будет вызвана дважды при рендере 1 раз с null, второй с объектом DOM)<br><br>
        <code><span class='code-example'>class CustomTextInput extends React.Component {constructor(props) {<br>super(props);<br>this.<b>textInput = null;</b><br><br>
        this.<b>setTextInputRef</b> = element => {<br>this.textInput = element;<br>};<br><br>this.focusTextInput = () => {<br>if (this.textInput) this.textInput.focus();     // Устанавливаем фокус на текстовом поле ввода с помощью чистого DOM API <br>};<br>}<br><br>componentDidMount() {<br>this.focusTextInput();        // устанавливаем фокус на input при монтировании <br>}<br><br>render() {<br>return (<br>&lt;div>&lt;input<br>type="text"<br><b>ref={this.setTextInputRef}</b>      // Используем колбэк в 'ref', чтобы сохранить ссылку на DOM-элемент/><br>&lt;input<br>type="button"<br>value="Focus the text input"<br>onClick={this.focusTextInput}<br>/><br>&lt;/div><br>);}} <hr> Еще вариант колбэк рефа: <br>function CustomTextInput(props) { return (&lt;div>&lt;input ref={props.<b>inputRef</b>} />&lt;/div>);<br>}<br><br>class Parent extends React.Component {<br>render() {<br>return (<br><CustomTextInput<br><b>inputRef={el => this.inputElement = el}</b><br>/><br>);}} </span></code>`,
        description: ""
    },
    {
        title: "HOOK's",
        shortDesc: `Хуки — это функции, с помощью которых вы можете «подцепиться» к состоянию и методам жизненного цикла React из функциональных компонентов. <ol><li><code><span class='code-example'>const [<b>count, setCount</b>] = <b>useState</b>(0); </span></code>- Хук состояния </li> <br><code><span class='code-example'>return ( &lt;div><br>&lt;p>Вы нажали {<b>count</b>} раз&lt;/p><br>&lt;button onClick={() => <b>setCount</b>(0)}>Сбросить&lt;/button><br><br> Если необходимо получить точное предыдущее значение то: <br> &lt;button onClick={() => setCount(<b>prevCount</b> => prevCount + 1)}>Нажми</button> - получаем из аргумента функции предыдущее значение <br>&lt;/div>);</span></code></li>
        <li><code><span class='code-example'><b>useEffect</b>(() => { document.title = 'you clicked $&#123;count} times'; }, <b>[name]</b>); </span></code> - useEffect принимает саму функцию с сайд-эффетком и массив зависимостей<ul><li>Если массив зависимостей не передан то функция будет выполнена после каждого рендера</li><li>Если массив пуст - выполнится один раз после первого рендера (didMount) </li><li>Если массив передан, то запускает функцию только при изменении этих зависимостей (didUpdate)</li><li>Если useEffect возвращает функцию, то она будет использована для очистки сайдэффекта (после изменений или после размонтирования вызывает ее) <br><code><span class='code-example'>useEffect(() => { // Side-effect... <br> <b>return function cleanup()</b> { // Side-effect cleanup...}; <br> }, dependencies);</span></code></li></ul></li>
        <li><code><span class='code-example'> function <b>useMyCustomHook</b>(friendID) { </span></code> - Пользовательский хук это функция, которая вызывает хуки и начинается с 'use...'<br><code><span class='code-example'> const [isOnline, setIsOnline] = useState(null);<br><br> useEffect(() => { <br> function handleStatusChange(status) { <br> setIsOnline(status.isOnline);<br>} <br><br> ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange); <br> return () => { <br> ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange); <br> };}); <br> return isOnline; }</span></code><br> Пользовательский хук при каждом вызове имеет свое внутренне изолированное состояние</li>
        <li><code><span class='code-example'>const ThemeContext = React.createContext(themes.light);<br><br>function App() { <br>return (<br>&lt;ThemeContext.Provider value={themes.dark}><br>&lt;ThemedButton /><br></ThemeContext.Provider>);}<br><br>function ThemedButton() {<br>const theme = <b>useContext</b>(ThemeContext); </span></code> <br>Принимает объект контекста (значение, возвращённое из React.createContext) и возвращает текущее его значение взятое из &lt;MyContext.Provider><code><span class='code-example'> <br>  return (&lt;button style={{ background: theme.background, color: theme.foreground }}><br>Я стилизован темой из контекста!</button>);}</span></code></li>
        <li><code><span class='code-example'>const initialState = {count: 0}; <br><br> function <b>reducer</b>(state, action) { <br> switch (action.type) { <br> case 'increment': <br>return {count: state.count + 1}; <br> case 'decrement': <br>return {count: state.count - 1}; <br> default: <br> throw new Error(); }} <br><br> function Counter() { <br> const [state, dispatch] = <b>useReducer</b>(reducer, initialState); <br>return (<br> &lt;> Count: {state.count} <br> &lt;button onClick={() => dispatch({type: 'decrement'})}>-&lt;/button> <br> &lt;button onClick={() => dispatch({type: 'increment'})}>+</button> </> );}</span></code><br> Хук useReducer обычно предпочтительнее useState, когда у вас сложная логика состояния,<br> которая включает в себя несколько значений. Оптимизурет производительность компонентов с глубоким обновлением </li>
        <li><code><span class='code-example'>const memoizedCallback = <b>useCallback</b>( () => { doSomething(a, b); }, [a, b]);</span></code><br>Передайте встроенный колбэк и массив зависимостей. Хук useCallback вернёт мемоизированную версию колбэка,<br> который изменяется только, если изменяются значения одной из зависимостей.</li>
        <li><code><span class='code-example'>const memoizedValue = <b>useMemo</b>(() => computeExpensiveValue(a, b), [a, b]); </span></code>- Позволяет мемоизировать функцию с тяжелыми вычисленями, и запускает ее только при рендере и изменении зависимостей [a,b]</li>
        <li><code><span class='code-example'>function TextInputWithFocusButton() { <br>
            const inputEl = <b>useRef</b>(null);
            const onButtonClick = () => { inputEl.current.focus(); };</span></code> //Указывает на смонтированный input
            <code><span class='code-example'>return ( <> <br> <input <b>ref={inputEl}</b> type="text" /> <br> <button onClick={onButtonClick}>Установить фокус на поле ввода</button><br></>);} </span></code> - Позволяет получить доступ к DOM из реакта</li></ol>`
    }
]