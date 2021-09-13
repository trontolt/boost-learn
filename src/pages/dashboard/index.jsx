// import {React} from 'react';
import TaskList from '../../components/dashboard/taskList/taskList'
import './index.css';
let arr = []
for(let i = 0; i < 40; i++) {
    arr.push({title: ' what is JS, definition and etc', shortDesc: 'JS is programming language', description: 'Js is a programming language which allow us to make web pages and other applications dinamic'})
}
const Dashboard = () => {
    return (
        <div className="dashboard-page">
            <TaskList tasksArray={[...[{title: ' what is JS, definition and etc', shortDesc: 'JS is programming language', description: 'Js is a programming language which allow us to make web pages and other applications dinamic'}, {title: 'Python',  shortDesc: 'Python is programming language', decription: 'Only God knows what is really Python'}], ...arr]} />
        </div>
    )
}

export default Dashboard;