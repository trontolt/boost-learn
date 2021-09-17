import { useEffect } from 'react';
import './header.css';

const Header = props => {
    const { viewedShortDesc } = props;
    useEffect(() => {
        document.getElementsByClassName('header-container')[0].innerHTML =
            viewedShortDesc;
    }, [viewedShortDesc]);
    return <div className="header-container"></div>;
};

export default Header;
