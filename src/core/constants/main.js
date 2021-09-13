export const VIEW_TITLE = 'VIEW_TITLE';


let arr = []
for(let i = 0; i < 40; i++) {
    arr.push({title: ' what is JS, definition and etc', shortDesc: 'JS is programming language', description: 'Js is a programming language which allow us to make web pages and other applications dinamic'})
}

export const initialState = {
    viewedTitleIndex: 0,
    tasksArray: arr
}