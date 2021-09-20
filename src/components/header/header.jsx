import { useEffect } from 'react';
import './header.css';

const Header = props => {
    const { viewedShortDesc } = props;
    useEffect(() => {
        document.getElementsByClassName('header-content')[0].innerHTML =
            viewedShortDesc;
    }, [viewedShortDesc]);
    return (
        <div className="header-container">
            <div className="header-content"></div>
        </div>
    );
};

export default Header;
