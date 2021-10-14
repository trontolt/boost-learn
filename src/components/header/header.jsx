import { useEffect } from 'react';
import './header.css';

const Header = props => {
    const { shortDesc, description } = props.taskData;
    useEffect(() => {
        document.getElementsByClassName('header-content')[0].innerHTML =
            shortDesc +
            "<hr class='separate-line'>" +
            (description ? description : '');
    }, [shortDesc, description]);
    return (
        <div className="header-container">
            <div className="header-content"></div>
        </div>
    );
};

export default Header;
