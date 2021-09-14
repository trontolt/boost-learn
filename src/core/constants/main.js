export const VIEW_TITLE = 'VIEW_TITLE';


let arr = []
for(let i = 0; i < 40; i++) {
    arr.push({title: ' what is JS, definition and etc', shortDesc: 'JS is programming language', description: 'Js is a programming language which allow us to make web pages and other applications dinamic'})
}
for (let i = 0; i <20; i++ ) {
    arr.push({title: ' what is Python, bla bla bla', shortDesc: 'Python is hard to understand', description: 'asdkasdmla dkals dn lasndlasnd asndnsa dnsakdk nasd sanldn lasnd nalnd asnkdn landnas '})
}

export const initialState = {
    viewedTitleIndex: 0,
    tasksArray: arr
}